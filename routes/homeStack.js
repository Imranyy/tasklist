import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import About from "../screens/About";

const screens={
    Home:{
        screen: Home,
        navigationOptions:{
            title:'My Todo'
        }
    },
    About:{
        screen:About,
        navigationOptions:{
            title:"About Us"
        }
    }
}
const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack);