import * as types from '../constants/ActionTypes'

export function showCalendar(target, date) {
  return (dispatch) => {
    // dispatch(setDate(target, date))
    dispatch({
      type: types.SHOW_CALENDAR,
      target: target,
      date: date
    })
  }
}

export function hideCalendar() {
  return {
    type: types.HIDE_CALENDAR
  }
}

export function selectDate(target, date) {
  return (dispatch) => {
    dispatch(setDate(target,date))
    dispatch(hideCalendar())
  }
}

export function setDate(target, date) {
  return {
    type: types.SET_DATE,
    target: target,
    date: date
  }
}