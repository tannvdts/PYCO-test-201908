module.exports = {
    HOTEL_RESERVATION: {
        ERRORS: {
            ARRIVALS_DEPARTURES_MUST_BE_ARRAY: 'arrivals and departures params must be array',
            ARRIVALS_DEPARTURES_MUST_NOT_EMPTY: 'arrivals and departures params must not empty',
            ARRIVALS_DEPARTURES_MUST_SAME_SIZE: 'arrivals and departures params must same size',
            K_MUST_BE_POSITIVE_INTEGER: 'k must be integer > 0',
            DEPARTURE_MUST_GREATER_THAN_ARRIVAL: 'departure must > arrival in a booking'
        }
    },
    ROTATE_PICTURE: {
        ERRORS: {
            PARAMS_IS_REQUIRED: 'params is required',
            GRID_MUST_BE_ARRAY: 'grid must be array',
            GRID_MUST_BE_NN_MATRIX: 'grid must be n*n matrix',
            K_MUST_BE_WHOLE_NUMBER: 'k must be integer >= 0'
        }
    }
}