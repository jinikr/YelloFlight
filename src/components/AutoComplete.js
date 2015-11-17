import React, { Component, View, ListView, TouchableHighlight, Text, TextInput, StyleSheet, Dimensions, PropTypes } from 'react-native'

class AutoComplete extends Component {

  constructor(props) {
    super(props)

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        if (typeof r1.isLoading !== 'undefined') {
          return true;
        }
        return r1 !== r2;
      }
    })
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  renderRow(rowData = {}) {
    rowData.description = rowData.description || 'Unknown';
    return (
      <TouchableHighlight
        onPress={this.handlePress}
        underlayColor="#c8c7cc"
      >
        <View>
          <View style={[styles.row, this.props.styles.row]}>
            <Text
              style={[styles.description, this.props.styles.description]}
              numberOfLines={1}
            >{rowData.description}</Text>
          </View>
          <View style={[styles.separator, this.props.styles.separator]} />
        </View>
      </TouchableHighlight>
    );
  }

  renderListView() {
    return <ListView
      keyboardShouldPersistTaps={true}
      keyboardDismissMode='none'
      style={[styles.listView, this.props.styles.listView]}
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
      automaticallyAdjustContentInsets={false}
      />
  }

  render() {
    return <View
      style={[styles.container, this.props.styles.container]}
      >
      <View
        style={[styles.textInputContainer, this.props.styles.textInputContainer]}
        >
        <TextInput
          ref='textInput'
          style={[styles.textInput, this.props.styles.textInput]}
          onChangeText={this.handleChangeText}
          value={this.props.text}
          placeholder={this.props.placeholder}
          onFocus={this.handleFocus}
          clearButtonMode="while-editing"
          />
      </View>
      {this.renderListView()}
    </View>
  }
}

AutoComplete.propTypes = {
  text: PropTypes.string,
  dataSource: PropTypes.array,
  placeholder: PropTypes.string,
  styles: PropTypes.object
}

var styles = StyleSheet.create({
  container: {
  },
  textInputContainer: {
    backgroundColor: '#C9C9CE',
    height: 44,
    borderTopColor: '#7e7e7e',
    borderBottomColor: '#b5b5b5',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    height: 28,
    borderRadius: 5,
    paddingTop: 4.5,
    paddingBottom: 4.5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 7.5,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 15,
  },
  poweredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  powered: {
    marginTop: 15,
  },
  listView: {
    // height: Dimensions.get('window').height - 44,
  },
  row: {
    padding: 13,
    height: 44,
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    backgroundColor: '#c8c7cc',
  },
  description: {
  },
  loader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
  androidLoader: {
    marginRight: -15
  }
})

export default AutoComplete
