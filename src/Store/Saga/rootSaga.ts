import { takeLatest, call, put, SagaReturnType, all } from 'redux-saga/effects'
import { deleteEmployee, fetchEmployees, registerEmployee, updateEmployee } from '../../Api';
import { setEmployees, setError, setLoading, setSuccess } from '../Actions';
import { ActionTypes, ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEE } from '../Actions/types';

function* handleFetchEmployees() {
    yield put(setError(false))
    try {
        const response: SagaReturnType<typeof fetchEmployees> = yield call(fetchEmployees)
        const { data } = response.data
        yield put(setEmployees(data))
    } catch {
        yield put(setSuccess(false))
    }
}

function* handleRegisterEmployee(action: ActionTypes) {
    yield put(setError(false))
    yield put(setSuccess(false))
    yield put(setLoading(true))
    try {
        yield call(registerEmployee, action)
        yield put(setSuccess(true))
    } catch {
        yield put(setError(true))
    }
    finally {
        yield put(setLoading(false))
    }
}

function* handleDeleteEmployee(action: ActionTypes) {
    yield put(setError(false))
    yield put(setSuccess(false))
    yield put(setLoading(true))
    try {
        yield call(deleteEmployee, action)
        yield put(setSuccess(true))
    } catch {
        yield put(setError(true))
    }
    finally {
        setLoading(false)
    }
}

function* handleUpdateEmployee(action: ActionTypes) {
    yield put(setError(false))
    yield put(setSuccess(false))
    yield put(setLoading(true))
    try {
        yield call(updateEmployee, action)
        yield put(setSuccess(true))
    } catch {
        yield put(setError(true))
    }
    finally {
        setLoading(false)
    }
}

function* employeeSaga() {
    yield takeLatest(GET_EMPLOYEES, handleFetchEmployees)
    yield takeLatest(ADD_EMPLOYEE, handleRegisterEmployee)
    yield takeLatest(DELETE_EMPLOYEE, handleDeleteEmployee)
    yield takeLatest(UPDATE_EMPLOYEE, handleUpdateEmployee)
}

export function* watcherSaga() {
    yield all([employeeSaga()])
}