import {all, call} from "redux-saga/effects";
import {shopPageWatcher} from "../components/ShopPage/redux/shopPageSaga";

export default function* rootSaga() {
  yield all([
    call(shopPageWatcher),
  ]);
}
