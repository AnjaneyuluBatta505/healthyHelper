import { createStackNavigator, createAppContainer } from 'react-navigation';

import AltMedicine from './modules/overview/AltMedicine';
import Tests from './modules/Tests';
import BloodForm from './modules/Tests/BloodForm';
import Drug from './modules/overview/Drugs/ListOfDrugs/Drug';
import Drugs from './modules/overview/Drugs';
import BioBloodTest from './modules/Tests/BioBloodTest';
import Interaction from './modules/overview/Interaction';
import Overview from './modules/overview';
import ListOfDrugs from './modules/overview/Drugs/ListOfDrugs';
import UrineForm from './modules/Tests/UrineForm';

const headerStyles = {
  initialRouteName: 'Home',
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
    AltMedicine,
    BioBloodTest,
    BloodForm,
    Drug,
    Drugs,
    Home: Overview,
    Interaction,
    ListOfDrugs,
    Tests,
    UrineForm,
  },
  headerStyles,
);

export default createAppContainer(HomeStack);
