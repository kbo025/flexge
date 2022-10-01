
import * as type from '../types';

export function getCountries(token) {
    return { 
        type: type.GET_COUNTRIES_REQUESTED,
        token
    }
}