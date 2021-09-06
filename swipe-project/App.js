import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import DeckScreen from "./src/screens/DeckScreen";
import BallScreen from "./src/screens/BallScreen";
const navigator = createStackNavigator(
  {
    Deck: DeckScreen,
    Ball: BallScreen,
  },
  {
    defaultNavigationOptions: {
      title: "Deck",
    },
  }
);

export default createAppContainer(navigator);
