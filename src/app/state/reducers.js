import { combineReducers } from "redux";

import reduxActions from "../../reduxActions";

export default combineReducers({
  [reduxActions.constants.NAME]: reduxActions.reducer
});
