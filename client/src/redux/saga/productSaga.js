import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "axios";

const URL = `${process.env.API_URL}/product`;

const getApi = async (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const { data } = await axios.get(URL, config);
    return data.data;
}

function* fetchProducts(action) {
   try {
      const products = yield call(getApi, action.token);
      yield put({type: 'GET_PRODUCTS_SUCCESS', products });
   } catch (e) {
      yield put({type: 'GET_PRODUCTS_FAILED', message: e.message});
   }
}

function* productSaga() {
   yield takeEvery('GET_PRODUCTS_REQUESTED', fetchProducts);
}

export default productSaga;