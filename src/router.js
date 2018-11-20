import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Overview from './modules/overview';
import Tests from './modules/Tests';
import WeeForm from './modules/Tests/WeeForm';
import BloodForm from './modules/Tests/BloodForm';
import Drugs from './modules/overview/Drugs';
import ListOfDrugs from './modules/overview/Drugs/ListOfDrugs';
import Drug from './modules/overview/Drugs/ListOfDrugs/Drug';
import ModalScreen from './modules/Tests/Modal';

const headerStyles = {
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
};

const HomeStack = createStackNavigator(
  {
    Home: Overview,
    Drugs,
    ListOfDrugs,
    Drug,
  },
  headerStyles,
);

const TestsStack = createStackNavigator(
  {
    Tests,
    WeeForm,
    BloodForm,
  },
  // {
  //   mode: 'modal',
  //   headerMode: 'none',
  // },
  // {
  //   Main: {
  //     screen: Tests,
  //   },
  //   Wee: {
  //     screen: WeeForm,
  //   },
  //   Blood: {
  //     screen: BloodForm,
  //   },
  // },
  // MyModal: {
  //   screen: ModalScreen,
  // },
  // {
  //   mode: 'modal',
  //   headerMode: 'none',
  // },
  headerStyles,
  // },
);

// const BloodStack = createStackNavigator(
//   {
//     Main: {
//       screen: Tests,
//     },
//     MyModal: {
//       screen: ModalScreen,
//     },
//   },
// );

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Tests: {
      screen: TestsStack,
    },
    // MyModal: {
    //   screen: ModalScreen,
    // },
  },
  // {
  //   mode: 'modal',
  //   headerMode: 'none',
  // },
  {
    initialRouteName: 'Tests',
    tabBarOptions: {
      labelStyle: {
        fontSize: 18,
      },
    },
  },
);
