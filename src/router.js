import { createStackNavigator } from 'react-navigation';

import Overview from 'modules/overview';

export default createStackNavigator({
  Overview: {
    screen: Overview,
  },
});
