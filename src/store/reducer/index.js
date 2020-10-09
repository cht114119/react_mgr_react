
import auth from './auth'
import { combineReducers } from 'redux'




const appReducers = combineReducers({
    user: auth,

});
const rootReducers = (state, action) => {
    return appReducers(state, action);
}
export default rootReducers;