import React, { Component, View, Modal, StyleSheet, PropTypes } from 'react-native'
import * as propTypes from '../utils/propTypes'
import CalendarPicker from 'react-native-calendar-picker'
import Button from 'react-native-button'

class ModalCalendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedDate: this.props.date
    }
  }

  handleDateChange(date) {
    this.setState({selectedDate: date.Ymd()})
  }

  handlePressSelectButton() {
    this.props.onSelectDate(this.state.selectedDate)
  }

  handlePressCancelButton() {
    this.props.onHideCalendar()
  }

  render() {
    var modalBackgroundStyle = {backgroundColor: 'rgba(0, 0, 0, 0.5)'}
    var innerContainerTransparentStyle = {backgroundColor: '#fff', padding: 20}

    return <Modal transparent={true}>
      <View style={[styles.container, modalBackgroundStyle]}>
        <View style={[styles.inner, innerContainerTransparentStyle]}>
          <CalendarPicker
            selectedDate={new Date(this.props.date)}
            onDateChange={this.handleDateChange.bind(this)}
            />
          <View style={{flexDirection:'row'}}>
          <Button
            onPress={this.handlePressSelectButton.bind(this)}>
            select
          </Button>
          <Button
            onPress={this.handlePressCancelButton.bind(this)}>
            cancel
          </Button>
          </View>
        </View>
      </View>
    </Modal>
  }
}

ModalCalendar.propTypes = {
  date: propTypes.date,
  onSelectDate: PropTypes.func.isRequired,
  onHideCalendar: PropTypes.func.isRequired
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  inner: {
    borderRadius: 5,
    alignItems: 'center',
  }
})

export default ModalCalendar
