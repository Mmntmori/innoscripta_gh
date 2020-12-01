import { all, call } from "redux-saga/effects";
import { controlPanelWatcher } from "../components/ControlPanel/redux/controlPanelSaga";

export default function* rootSaga() {
  yield all([
    call(controlPanelWatcher),
  ]);
}
