import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

// In app imports
import MainApp from '../MainApp'
import { PersistGate } from 'redux-persist/integration/react'

//third party imports
import {store, persistor} from '../redux/store'
import { Provider } from 'react-redux'


function NearbyMechScreen(props,{navigation}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}

export default NearbyMechScreen;






























// import React from 'react';
// import { View } from 'react-native-animatable';
// import MainScreen from './screens/MainScreen';
// function App(props) {
//   return (
//     <View>
//       <MainScreen/>
//     </View>
      
    
//   );
// }

// export default App;
