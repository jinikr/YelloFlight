import React, { Component, Text, View } from 'react-native'
import { Provider } from 'react-redux/native'
import configureStore from '../store/configureStore'
import MainContainer from '../containers/MainContainer'

require('../utils/dataFormat')

const store = configureStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
       {() => <MainContainer />}
      </Provider>
    )
  }
}

export default App
