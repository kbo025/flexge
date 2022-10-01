import { all } from 'redux-saga/effects'
import companySaga from './companySaga'
import countrySaga from './countrySaga'
import productSaga from './productSaga'

export default function* rootSaga() {
    yield all([
        companySaga(),
        countrySaga(),
        productSaga(),
    ]);
}