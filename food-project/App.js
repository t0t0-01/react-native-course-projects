import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from './src/screens/ResultsShowScreen'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);
/*
The App.js is something special. Whenever we export in React, we need 
to export a component. However, here, we do not have an actual component.
So we use the createAppContainer and pass in the navigator 
object we created.
*/