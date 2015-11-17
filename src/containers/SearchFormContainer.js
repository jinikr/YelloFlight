import React, { Component, PropTypes } from 'react-native'
import { connect } from 'react-redux/native'
import { showCalendar, selectDate, hideCalendar } from '../actions/searchForm'

import SearchForm from '../components/SearchForm'
import * as propTypes from '../utils/propTypes'

class SearchFormContainer extends Component {

  handleShowCalendar(target, date) {
    date = date || (new Date).Ymd()
    this.props.dispatch(showCalendar(target, date))
  }

  handleSelectDate(date) {
    this.props.dispatch(selectDate(this.props.calendar.target, date))
  }

  handleHideCalendar(date) {
    this.props.dispatch(hideCalendar(date))
  }

  render() {
    return (
      <SearchForm
        searchData={this.props.searchData}
        calendar={this.props.calendar}
        onShowCalendar={this.handleShowCalendar.bind(this)}
        onSelectDate={this.handleSelectDate.bind(this)}
        onHideCalendar={this.handleHideCalendar.bind(this)}
        />
    )
  }
}

const flightSearchDataPropType = PropTypes.shape({
  airport: PropTypes.shape({
    text: PropTypes.string,
    dataSource: PropTypes.array
  }),
  date: propTypes.date
})

SearchFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchData: PropTypes.shape({
    from: flightSearchDataPropType,
    to: flightSearchDataPropType
  }),
  calendar: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
    target: PropTypes.oneOf('from', 'to'),
    date: propTypes.date
  })
}

function mapStateToProps(state) {
  const { calendar } = state.searchForm
  let searchData = {
    from: state.searchForm.from,
    to: state.searchForm.to
  }

  return {
    calendar,
    searchData
  }
}

export default connect(mapStateToProps)(SearchFormContainer)
