import { takeLatest, call, put, SagaReturnType, fork, all } from 'redux-saga/effects'
import { deleteEmployee, fetchEmployees, registerEmployee, updateEmployee } from '../../Api';
import { ActionTypes, ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEES, setEmployees, setError, setLoading, setSuccess, UPDATE_EMPLOYEE } from '../Actions';

function* handleFetchEmployees() {
    yield put(setError(false))
    try {
        const response: SagaReturnType<typeof fetchEmployees> = yield call(fetchEmployees)
        const { data } = response.data
        yield put(setEmployees(data))
    } catch {
        yield put(setError(true))
    }
}

function* sagaFetchEmployees() {
    yield takeLatest(GET_EMPLOYEES, handleFetchEmployees)
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

function* sagaRegisterEmployee() {
    yield takeLatest(ADD_EMPLOYEE, handleRegisterEmployee)
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

function* sagaRemoveEmployee() {
    yield takeLatest(DELETE_EMPLOYEE, handleDeleteEmployee)
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

function* sagaUpdateEmployee() {
    yield takeLatest(UPDATE_EMPLOYEE, handleUpdateEmployee)
}

export function* watcherSaga() {
    yield all([
        fork(sagaFetchEmployees),
        fork(sagaRegisterEmployee),
        fork(sagaRemoveEmployee),
        fork(sagaUpdateEmployee),
    ])
}