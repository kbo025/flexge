
import * as type from '../types';

export function getCompanies(token) {
    return { 
        type: type.GET_COMPANIES_REQUESTED,
        token
    }
}