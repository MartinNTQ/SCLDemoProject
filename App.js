import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();
import React, {Component} from 'react';
import LoginPage from './components/LoginPage';
import Legal_Terms from './components/Legal_Terms';
import ForgotPwd from './components/ForgotPwd';
import MainPage from './components/MainPage';
import SettingPage from './components/SettingPage';
import PQEPage from './components/PQEPage';
import DailyOutputPage from './components/DailyOutputPage';
import StaffInfoPage from './components/StaffInfoPage';
import DailyOutputIndividual from './components/DailyOutputIndividual';
import EQChart from './components/EQChart';
import Wage from './components/Wage';
import Remark from './components/Remark';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavRef} from './NavRef/NavRef';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
const defaultvalue = {
  lan: 'EN',
  usr: '',
  pwd: '',
  sno: '',
  eesnoclick: '',
  tabclick: '1',
  col: 1,
  bttabload: false,
  sorttype: 'az01',
  EElistapi: [],
  EElist: [],
};
const reducer = (state = defaultvalue, action) => {
  if (action.type === 'VN') {
    return {...state, lan: 'VN'};
  }
  if (action.type === 'CN') {
    return {...state, lan: 'CN'};
  }
  if (action.type === 'EN') {
    return {...state, lan: 'EN'};
  }
  if (action.type === 'Login_or_Logout') {
    return {...state, usr: action.usr, pwd: action.pwd, sno: action.sno};
  }
  if (action.type === 'sort') {
    return {...state, sorttype: action.sorttype};
  }
  if (action.type === 'update') {
    return {...state, EElistapi: action.EElistapi, EElist: action.EElist};
  }
  if (action.type === 'eeclick') {
    return {...state, eesnoclick: action.eesnoclick};
  }
  if (action.type === 'nextcol') {
    if (state.col < 6) {
      return {...state, col: state.col + 1};
    } else {
      return {...state};
    }
  }
  if (action.type === 'prevcol') {
    if (state.col > 1) {
      return {...state, col: state.col - 1};
    } else {
      return {...state};
    }
  }
  if (action.type === 'updatecol') {
    return {...state, col: action.col};
  }
  if (action.type === 'bttabloadchange') {
    return {...state, bttabload: action.bttabload};
  }
  if (action.type === 'tabclick') {
    return {...state, tabclick: action.tabclick};
  }
  return state;
};
const store = createStore(reducer);
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Staff() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="StaffInfo"
        component={StaffInfoPage}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name="OutputIndividual"
        component={DailyOutputIndividual}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name="Wage"
        component={Wage}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name="Remark"
        component={Remark}
        options={{tabBarVisible: false}}
      />
    </Tab.Navigator>
  );
}
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer ref={NavRef}>
          {
            <RootStack.Navigator>
              <RootStack.Screen
                name="LoginPage"
                component={LoginPage}
                options={{headerShown: false}}
              />
              <RootStack.Screen
                name="Legal_Terms"
                component={Legal_Terms}
                options={{headerShown: false}}
              />
              <RootStack.Screen
                name="ForgotPwd"
                component={ForgotPwd}
                options={{headerShown: false}}
              />
              <RootStack.Screen
                name="MainPage"
                component={MainPage}
                options={{headerShown: false}}
              />
              <RootStack.Screen
                name="SettingPage"
                component={SettingPage}
                options={{headerShown: false}}
              />
              <RootStack.Screen
                name="PQEPage"
                component={PQEPage}
                options={{headerShown: false}}
              />
              <RootStack.Screen
                name="DailyOutputPage"
                component={DailyOutputPage}
                options={{headerShown: false}}
              />
              <RootStack.Screen
                name="EQChart"
                component={EQChart}
                options={{headerShown: false}}
              />
              <RootStack.Screen
                name="Staff"
                component={Staff}
                options={{headerShown: false}}
              />
            </RootStack.Navigator>
          }
        </NavigationContainer>
      </Provider>
    );
  }
}
