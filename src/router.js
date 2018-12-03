import { createStackNavigator, createAppContainer } from 'react-navigation';

import Overview from './modules/overview';
import Tests from './modules/Tests';
import WeeForm from './modules/Tests/WeeForm';
import BloodForm from './modules/Tests/BloodForm';
import HormonesForm from './modules/Tests/HormonesForm';
import Drugs from './modules/overview/Drugs';
import AltMedicine from './modules/overview/AltMedicine';
import ListOfDrugs from './modules/overview/Drugs/ListOfDrugs';
import Drug from './modules/overview/Drugs/ListOfDrugs/Drug';

const headerStyles = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#6200ee',
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
    AltMedicine,
    Tests,
    WeeForm,
    BloodForm,
    HormonesForm,
  },
  headerStyles,
);

export default createAppContainer(HomeStack);
