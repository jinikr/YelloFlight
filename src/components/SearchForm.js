import React, { Component, View, Text, Modal, StyleSheet, PropTypes } from 'react-native'

import CalendarPicker from 'react-native-calendar-picker'
import Button from 'react-native-button'
import SearchFlightInput from '../components/SearchFlightInput'
import ModalCalendar from '../components/ModalCalendar'

import * as propTypes from '../utils/propTypes'

const flightTargets = ['From', 'To']

class SearchForm extends Component {

  handleShowCalendar(target, date) {
    this.props.onShowCalendar(target, date)
  }

  handleSelectDate(date) {
    this.props.onSelectDate(date)
  }

  handleHideCalendar() {
    this.props.onHideCalendar()
  }

  render() {
    return (
      <View>
        <View style={styles.searchBox}>
          <Text style={styles.searchBoxTitleFst} />
          <Text style={[styles.searchBoxTitle, styles.searchBoxTitleAirport]}>
            Airport
          </Text>
          <Text style={[styles.searchBoxTitle, styles.searchBoxTitleDate]}>
            Date
          </Text>
          <Text style={styles.searchBoxRightPad} />
        </View>
        {
          flightTargets.map(
            (flightTarget) => <SearchFlightInput
              searchData={this.props.searchData[flightTarget.toLowerCase()]}
              target={flightTarget}
              onShowCalendar={this.handleShowCalendar.bind(this)}
              />
          )
        }
        {
          this.props.calendar.visible &&
          <ModalCalendar
            date={this.props.calendar.date}
            onSelectDate={this.handleSelectDate.bind(this)}
            onHideCalendar={this.handleHideCalendar.bind(this)}
            />
        }
      </View>
    )
  }
}
// Link.defaultProps = { initialCount: 0 };
const flightSearchDataPropType = PropTypes.shape({
  airport: PropTypes.shape({
    text: PropTypes.string,
    dataSource: PropTypes.array
  }),
  date: propTypes.date
})

SearchForm.propTypes = {
  searchData: PropTypes.shape({
    from: flightSearchDataPropType,
    to: flightSearchDataPropType
  }),
  calendar: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
    target: PropTypes.oneOf('from', 'to'),
    date: propTypes.date
  }),
  onShowCalendar: PropTypes.func.isRequired,
  onHideCalendar: PropTypes.func.isRequired
}

var styles = StyleSheet.create({
  searchBox: {
    flexDirection:'row',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBoxTitle: {
    textAlign: 'center'
  },
  searchBoxTitleFst: {
    flex: .2
  },
  searchBoxTitleAirport: {
    flex: .35
  },
  searchBoxTitleDate: {
    flex: .35
  },
  searchBoxRightPad: {
    flex: .1
  }
})


export default SearchForm
