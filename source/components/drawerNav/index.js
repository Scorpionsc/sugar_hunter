import {Dimensions} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import SideMenu from '../sideMenu'
import stackNav from '../stackNav';

const DrawerNav = createDrawerNavigator({
    Item1: {
        screen: stackNav,
    }
}, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
});

export default DrawerNav;

