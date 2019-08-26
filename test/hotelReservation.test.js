const hotelReservation = require('../func/hotelReservation');
const { HOTEL_RESERVATION } = require('../func/constants');
const chai = require('chai');
const expect = chai.expect;

describe('#PYCO Test 201908', () => {
    describe('#hotelReservation(arrivals, departures, k)', () => {
        it('arrivals, departures must be array', () => {
            expect(() => {
                hotelReservation(null, null, 1);
            }).to.throw(TypeError, HOTEL_RESERVATION.ERRORS.ARRIVALS_DEPARTURES_MUST_BE_ARRAY);
        });

        it('arrivals, departures must not empty', () => {
            expect(() => {
                hotelReservation([], [], 1);
            }).to.throw(TypeError, HOTEL_RESERVATION.ERRORS.ARRIVALS_DEPARTURES_MUST_NOT_EMPTY);
        });

        it('arrivals, departures must same size', () => {
            expect(() => {
                hotelReservation([1], [2, 3], 1);
            }).to.throw(TypeError, HOTEL_RESERVATION.ERRORS.ARRIVALS_DEPARTURES_MUST_SAME_SIZE);
        });

        it('departure must > arrival in a booking', () => {
            // arrival = 1 => cannot departure = 1
            expect(() => {
                hotelReservation([1, 3], [1, 4], 1);
            }).to.throw(TypeError, HOTEL_RESERVATION.ERRORS.DEPARTURE_MUST_GREATER_THAN_ARRIVAL);
        });

        it('k must be interger > 0', () => {
            expect(() => {
                hotelReservation([1], [2], 0);
            }).to.throw(TypeError, HOTEL_RESERVATION.ERRORS.K_MUST_BE_POSITIVE_INTEGER);
            expect(() => {
                hotelReservation([1], [2], 2.3);
            }).to.throw(TypeError);
        })

        it('should return result = false', () => {
            expect(
                hotelReservation([1, 3, 5], [2, 6, 10], 1)
            ).to.equal(false);
            expect(
                hotelReservation([1, 2, 3, 4, 5], [3, 4, 5, 6, 7], 2)
            ).to.equal(false);
        });
        it('should return result = true', () => {
            expect(
                hotelReservation([1, 3, 5], [2, 6, 10], 2)
            ).to.equal(true);
            expect(
                hotelReservation([1, 2, 3, 4, 5], [3, 4, 5, 6, 7], 3)
            ).to.equal(true);
        });
    })
})