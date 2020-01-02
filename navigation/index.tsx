import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import Browse from '../screens/Browse';
// import Explore from '../screens/Explore';
// import Forgot from '../screens/Forgot';
// import Login from '../screens/Login';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';
// import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';


const screens = createStackNavigator({
  Welcome,
  // Login,
  // SignUp,
  // Forgot,
  // Explore,
  // Browse,
  // Product,
  // Settings
}, {
  defaultNavigationOptions: {
    headerStyle: {},
    headerBackTitle: null,
    headerLeftContainerStyle: {},
    headerRightContainerStyle: {}
  }
});

export default createAppContainer(screens);
