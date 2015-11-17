import React, { Component, View, Text, TextInput, StyleSheet, PropTypes } from 'react-native'
import AutoComplete from '../components/AutoComplete'
import * as propTypes from '../utils/propTypes'

class SearchFlightInput extends Component {

  handleFocusDateInput() {
    this.refs.dateInput.blur()
    const {target, searchData} = this.props
    this.props.onShowCalendar(target.toLowerCase(), searchData.date)
  }

  render() {
    return <View style={styles.searchBox}>
      <Text style={[styles.searchBoxTitle, {textAlign: 'right'}, styles.searchBoxTitleFst]}>
        {this.props.target}.
      </Text>
      <AutoComplete
        styles={{
          foo: 'bar',
          textInput: styles.searchBoxInput,
          container: styles.searchBoxTitleAirport
        }}
        dataSource={this.props.searchData.airport.dataSource}
        text={this.props.searchData.airport.text}
        />
      <TextInput
        style={[styles.searchBoxTitleDate, styles.searchBoxInput]}
        ref='dateInput'
        onFocus={this.handleFocusDateInput.bind(this)}
        value={this.props.searchData.date}
        />
      <Text style={styles.searchBoxRightPad} />
    </View>
  }

}

SearchFlightInput.propTypes = {
  searchData: PropTypes.shape({
    airport: PropTypes.shape({
      text: PropTypes.string,
      dataSource: PropTypes.array
    }),
    date: propTypes.date
  }),
  target: PropTypes.oneOf('From', 'To'),
  onShowCalendar: PropTypes.func.isRequired,
  airport: PropTypes.string,
  date: propTypes.date
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
  },
  searchBoxInput: {
    backgroundColor: '#efefef',
    margin: 3,
    marginLeft: 10,
    marginRight: 5,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 12
  }
})


export default SearchFlightInput
