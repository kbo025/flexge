import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "axios";

const URL = `${process.env.API_URL}/country`;

const getApi = async (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const { data } = await axios.get(URL, config);
    return data.data;
}

function* fetchCountries(action) {
   try {
      const countries = yield call(getApi, action.token);
      yield put({type: 'GET_COUNTRIES_SUCCESS', countries });
   } catch (e) {
      yield put({type: 'GET_COUNTRIES_FAILED', message: e.message});
   }
}

function* countrySaga() {
   yield takeEvery('GET_COUNTRIES_REQUESTED', fetchCountries);
}

export default countrySaga;