const { HOTEL_RESERVATION } = require('./constants')
/**
 * The function tells whether it's possible to make a booking
 * Input :
 *  - arrivals: list for arrival time of booking
 *  - departures: second list for the departure time of booking
 *  - k: denotes the count of rooms
 * Output: boolean
 *  - true means there are enough rooms for N booking
 *  - false means there are not enough rooms for N booking
 * Time Complexity: O(n)
 * Memory Complexity: O(n)
 */
module.exports = (arrivals, departures, k) => {
    // check arrivals and departures must be array
    if (!Array.isArray(arrivals) || !Array.isArray(departures)) 
        throw new TypeError(HOTEL_RESERVATION.ERRORS.ARRIVALS_DEPARTURES_MUST_BE_ARRAY);

    // check arrivals and departures must not empty
    if (!arrivals.length || !departures.length)
        throw new TypeError(HOTEL_RESERVATION.ERRORS.ARRIVALS_DEPARTURES_MUST_NOT_EMPTY);
    
    // check arrivals and departures must same size
    if (arrivals.length !== departures.length) 
        throw new TypeError(HOTEL_RESERVATION.ERRORS.ARRIVALS_DEPARTURES_MUST_SAME_SIZE);

    // check k must be positive integer (>0)
    if (!Number.isInteger(k) || (Number.isInteger(k) && k < 1)) 
        throw new TypeError(HOTEL_RESERVATION.ERRORS.K_MUST_BE_POSITIVE_INTEGER);

    // check departure must > arrival in a booking
    for (let i = 0; i < arrivals.length; i++) {
        if (arrivals[i] >= departures[i])
            throw new TypeError(HOTEL_RESERVATION.ERRORS.DEPARTURE_MUST_GREATER_THAN_ARRIVAL);
    }

    // find lastest arrival value
    const lastestArrival = Math.max(...arrivals);

    // count number of departure before lastest arrival value
    const numberOfDepartureBeforeLastestArrival = departures.filter((value) => value < lastestArrival).length;
    
    // cal number of rooms needed
    const numberOfRoomsNeeded = arrivals.length - numberOfDepartureBeforeLastestArrival;
    
    return numberOfRoomsNeeded <= k;
}