import * as types from '../constants/ActionTypes'
import db from '../api/aircleServer'

const receiveAircle = aircles => ({
    type: types.RECEIVE_AIRCLE,
    aircles
})

const receiveAircleByYear = (year = 2017) => ({
    type: types.RECEIVE_AIRCLE_BYTEAR,
    year: year
})

const receiveTabList = aircles => ({
    type: types.RECEIVE_SELECT,
    tabList: aircles
})
const showProgress = () => ({
    type: types.SHOW_PROGRESS,
    progressCtrl: 'OPEN'
})
const hideProgress = () => ({
    type: types.HIDE_PROGRESS,
    progressCtrl: 'CLOSE'
})

export function getAircle(){
    return dispatch => {
        dispatch(showProgress())
        db.getAircle(aircles => {
            dispatch(receiveAircle(aircles))
            dispatch(receiveTabList(aircles))
            dispatch(hideProgress())
        });
    }
}
