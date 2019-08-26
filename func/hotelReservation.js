/**
 * Time Complexity: O(n)
 * Auxiliary Space: O(n)
 */
module.exports = (arrivals, departures, k) => {
    if (!Array.isArray(arrivals) || !Array.isArray(departures)) 
        throw new TypeError('arrivals and departures params must be array');
    if (!arrivals.length || !departures.length)
        throw new TypeError('arrivals and departures params must not empty');
    if (arrivals.length !== departures.length) 
        throw new TypeError('arrivals and departures params must same size');
    if (!Number.isInteger(k) || (Number.isInteger(k) && k < 1)) 
        throw new TypeError('k must be integer >= 0');
    for (let i = 0; i < arrivals.length; i++) {
        if (arrivals[i] >= departures[i])
            throw new TypeError('departure must > arrival in a booking');
    }
    const lastestArrival = Math.max(...arrivals);
    const numberOfDepartureBeforeLastestArrival = departures.filter((value) => value < lastestArrival).length;
    const numberOfRoomsNeeded = arrivals.length - numberOfDepartureBeforeLastestArrival;
    return numberOfRoomsNeeded <= k;
}