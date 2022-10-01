import { combineReducers } from 'redux';
import companies from './companies';
import countries from './countries';
import products from './products';

const rootReducer = combineReducers({
    companies,
    countries,
    products,
});

export default rootReducer;