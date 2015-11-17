import React, { Component, NavigatorIOS, View, StyleSheet } from 'react-native'
import SearchFormContainer from '../containers/SearchFormContainer'

class Layout extends Component {
  render() {
    return <View style={styles.content}>
      <SearchFormContainer />
    </View>
  }
}

class MainContainer extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Find Flights',
          component: Layout
        }}
        itemWrapperStyle={styles.itemWrapper}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: '#eaeaea',
  },
  content: {
    paddingTop: 65
  }
})

export default MainContainer
