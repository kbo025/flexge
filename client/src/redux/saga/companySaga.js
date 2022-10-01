import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "axios";

const URL = `${process.env.API_URL}/company`;

const getApi = async (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const { data } = await axios.get(URL, config);
    return data.data;
}

function* fetchCompanies(action) {
    try {
       const companies = yield call(getApi, action.token);
       yield put({type: 'GET_COMPANIES_SUCCESS', companies });
    } catch (e) {
       yield put({type: 'GET_COMPANIES_FAILED', message: e.message});
    }
}

function* companySaga() {
    yield takeEvery('GET_COMPANIES_REQUESTED', fetchCompanies);
}

export default companySaga;