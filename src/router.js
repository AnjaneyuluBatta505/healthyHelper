import { createStackNavigator, createAppContainer } from 'react-navigation';

import AltMedicine from './modules/overview/AltMedicine';
import Tests from './modules/Tests';
import BloodForm from './modules/Tests/BloodForm';
import Drug from './modules/overview/Drugs/ListOfDrugs/Drug';
import Drugs from './modules/overview/Drugs';
import GeneralBloodTest from './modules/Tests/GeneralBloodTest';
import HormonesForm from './modules/Tests/HormonesForm';
import Interaction from './modules/overview/Interaction';
import Overview from './modules/overview';
import ListOfDrugs from './modules/overview/Drugs/ListOfDrugs';
import WeeForm from './modules/Tests/WeeForm';

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
    Overview,
    AltMedicine,
    BloodForm,
    Drug,
    Drugs,
    GeneralBloodTest,
    HormonesForm,
    Interaction,
    ListOfDrugs,
    Home: Tests,
    WeeForm,
  },
  headerStyles,
);

export default createAppContainer(HomeStack);
