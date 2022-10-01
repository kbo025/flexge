
import * as type from '../types';

export function getProducts(token) {
    return { 
        type: type.GET_PRODUCTS_REQUESTED,
        token
    }
}