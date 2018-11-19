import { createStackNavigator,createAppContainer} from 'react-navigation'
import LoginFrom from './LoginForm'
import ShoppingItemsList from './ShoppingItemsList';
import ItemDetails from './ItemDetails'
const navigator = createStackNavigator({
    Login:{
        screen:LoginFrom
    },
    ShoppingList:{
        screen:ShoppingItemsList
    },
    ItemDetails:{
        screen:ItemDetails
    }
},
{
initialRouteName:"Login"
})

export default createAppContainer(navigator)