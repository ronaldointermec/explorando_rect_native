import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Counter from './estudos/counter';
import FieldInput from './estudos/input/textInput';
import List from './estudos/list/list';
import Flat_List from './estudos/list/flatList';
import Section_List from './estudos/list/sectionList';
import AlertDialog from './estudos/dialog/alertDialog';
import Image from './estudos/image/images';
import CustomComponentsProps from './estudos/custom/customComponentsProps';
import Navigation from './estudos/navigation/navigation';
import TabNavigator from './estudos/tabNavigation/tabNavigator';
import DrawerSideMenu from './estudos/drawerSideMenu/drawerSideMenu';
import PassingDataBetweenScreens from './estudos/passingDateBetweenScreens/passingDataBetweenScreens'
import GlobalStyleCustom from './estudos/globalStyle/GlobalStyleCustom';
import AsyncStorage from './estudos/asyncStorage/asyncStorage';
import SqliteDataBase from './estudos/sqlite/sqliteDataBase';
import ReduxStateManagement from './estudos/reduxStateManagement/reduxStateManagement';
import FetchApiData from './estudos/fetchAPIData/fetchAPIData';
import LocalScheduledPushNotification from './estudos/localScheduledPushNotification/localScheduledPushNotification'
//import Index from './estudos/contextApi/index'
//import Routes from './estudos/contextApi/routes'


import PushNotification from "react-native-push-notification";
PushNotification.configure({
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

      },
      requestPermissions: Platform.OS === 'ios'
}
);

AppRegistry.registerComponent(appName, () => LocalScheduledPushNotification);

