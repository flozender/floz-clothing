import { takeLatest, all, call, put } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onUserSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onUserSignOutSuccess)]);
}
