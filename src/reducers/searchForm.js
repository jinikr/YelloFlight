import * as types from '../constants/ActionTypes'

const airport = {
  text: null,
  dataSource: [{
    description: 'sample'
  }]
}
const initialState = {
  from: {
    airport: airport,
    date: null
  },
  to: {
    airport: airport,
    date: null
  },
  calendar: {
    visible: false,
    target: null,
    date: null
  }
}

function calendar(state, action) {
  switch(action.type) {
  case types.SHOW_CALENDAR:
    return Object.assign({}, state, {
      visible: true,
      target: action.target,
      date: action.date
    })
  case types.HIDE_CALENDAR:
    return Object.assign({}, state, {
      visible: false
    })
  default:
    return state
  }
}

function flightTarget(state, action) {
  switch(action.type) {
  case types.SET_DATE:
    return Object.assign({}, state, {
      date: action.date
    })
  default:
    return state
  }
}

function searchForm(state = initialState, action) {
  switch(action.type) {
  case types.SHOW_CALENDAR:
  case types.SELECT_DATE:
  case types.HIDE_CALENDAR:
    return Object.assign({}, state, {
      calendar: calendar(state.calendar, action)
    })
  case types.SET_DATE:
    let flightTargetState = {}
    flightTargetState[action.target] = flightTarget(state[action.target], action)
    return Object.assign({}, state, flightTargetState)
  case types.SET_AIRPORT:
  default:
    return state
  }
}

export default searchForm
