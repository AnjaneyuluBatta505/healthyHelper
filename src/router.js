import { createStackNavigator } from 'react-navigation';

import Overview from './modules/overview';
import Drugs from './modules/overview/Drugs';
import ListOfDrugs from './modules/overview/Drugs/ListOfDrugs';
import Drug from './modules/overview/Drugs/ListOfDrugs/Drug';

export default createStackNavigator(
  {
    Home: Overview,
    Drugs,
    ListOfDrugs,
    Drug,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6b52ae',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
    },
  },
);
