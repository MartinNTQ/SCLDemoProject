/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Dimensions, Image, Text, TouchableOpacity} from 'react-native';
import * as NavRef from '../NavRef/NavRef';
import IconLogOut from 'react-native-vector-icons/AntDesign';
import IconSetting from 'react-native-vector-icons/SimpleLineIcons';
import IconHome from 'react-native-vector-icons/AntDesign';
import IconACC from 'react-native-vector-icons/FontAwesome5';
import IconQC from 'react-native-vector-icons/Octicons';
import IconHR from 'react-native-vector-icons/Ionicons';
import IconPQE from 'react-native-vector-icons/MaterialCommunityIcons';
import Loader from './Loader';
import Androw from 'react-native-androw';
import AsyncStorage from '@react-native-community/async-storage';
const entireScreenWidth = Dimensions.get('window').width;
var rem = entireScreenWidth / 380;
const lgen = {Setting: 'Setting', Home: 'Home', Logout: 'Logout'};
const lgcn = {Setting: '設置', Home: '首頁', Logout: '登出'};
const lgvn = {Setting: 'Cài đặt', Home: 'Trang chủ', Logout: 'Đăng xuất'};
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  _removecurusr = async () => {
    try {
      await AsyncStorage.removeItem('curusr');
    } catch (error) {}
  };
  render() {
    const {lang} = this.props;
    //Alert.alert(this.props.lang);
    const curlang = lang === 'EN' ? lgen : lang === 'CN' ? lgcn : lgvn;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          flex: 1,
        }}>
        <Loader loading={this.state.loading} />
        <View
          style={{
            flex: 2,
            backgroundColor: 'white',
            flexDirection: 'column',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                marginLeft: 10 * rem,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.props.Logout('', '', false);
                  this._removecurusr();
                  NavRef.navigate('LoginPage');
                }}>
                <IconLogOut
                  style={{
                    marginTop: 10 * rem,
                    marginLeft: 10 * rem,
                    transform: [{rotate: '180deg'}],
                  }}
                  size={36 * rem}
                  name="logout"
                />
                <Text
                  style={{
                    fontSize: 15 * rem,
                    textAlign: 'center',
                    marginLeft: 10 * rem,
                  }}>
                  {curlang.Logout}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  marginRight: 10 * rem,
                  alignItems: 'center',
                  flexDirection: 'column',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => NavRef.navigate('SettingPage')}>
                  <IconSetting
                    reverse
                    style={{
                      marginTop: 10 * rem,
                      marginHorizontal: 10 * rem,
                      alignSelf: 'center',
                    }}
                    size={36 * rem}
                    name="settings"
                  />
                  <Text
                    style={{
                      fontSize: 15 * rem,
                      textAlign: 'center',
                    }}>
                    {curlang.Setting}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginRight: 10 * rem,
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => NavRef.navigate('LoginPage')}>
                  <IconHome
                    style={{
                      marginTop: 10 * rem,
                      marginRight: 10 * rem,
                    }}
                    size={36 * rem}
                    name="home"
                    onPress={() => {
                      this.props.Logout(this.props.usr, this.props.pwd, false);
                      NavRef.navigate('LoginPage');
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 15 * rem,
                      textAlign: 'center',
                      marginRight: 10 * rem,
                    }}>
                    {curlang.Home}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../image/Logo.png')}
              style={{
                width: '15%',
                height: undefined,
                aspectRatio: 100 / 83,
                alignSelf: 'center',
              }}
            />
            <Image
              source={require('../image/SCL.png')}
              style={{
                width: '70%',
                height: undefined,
                aspectRatio: 200 / 32,
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 5,
            backgroundColor: 'tomato',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Androw
              style={{
                shadowColor: '#00000060',
                shadowOffset: {
                  width: 1.5 * rem,
                  height: 1.5 * rem,
                },
                shadowOpacity: 1,
                shadowRadius: 2 * rem,
              }}>
              <TouchableOpacity
                style={{
                  marginLeft: 25 * rem,
                  marginTop: 65 * rem,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 0.24 * entireScreenWidth,
                  height: undefined,
                  borderRadius: 0.12 * entireScreenWidth,
                  aspectRatio: 100 / 100,
                  backgroundColor: 'white',
                }}
                onPress={() => {
                  this.setState({loading: true});
                  setTimeout(() => {
                    NavRef.navigate('PQEPage');
                    this.setState({loading: false});
                  }, 800);
                }}>
                <IconPQE size={40 * rem} name="factory" color="tomato" />
                <Text
                  style={{
                    color: 'tomato',
                    fontSize: 15 * rem,
                    fontWeight: 'bold',
                  }}>
                  PQE
                </Text>
              </TouchableOpacity>
            </Androw>
            <Androw
              style={{
                shadowColor: '#00000060',
                shadowOffset: {
                  width: 1.5 * rem,
                  height: 1.5 * rem,
                },
                shadowOpacity: 1,
                shadowRadius: 2 * rem,
              }}>
              <TouchableOpacity
                style={{
                  marginLeft: 25 * rem,
                  marginBottom: 65 * rem,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 0.24 * entireScreenWidth,
                  height: undefined,
                  borderRadius: 0.12 * entireScreenWidth,
                  aspectRatio: 100 / 100,
                  backgroundColor: 'white',
                }}>
                <IconACC
                  size={40 * rem}
                  name="coins"
                  color="tomato"
                  //onPress={() => NavRef.navigate('Home')}
                />
                <Text
                  style={{
                    color: 'tomato',
                    fontSize: 15 * rem,
                    fontWeight: 'bold',
                  }}>
                  ACC
                </Text>
              </TouchableOpacity>
            </Androw>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Androw
              style={{
                shadowColor: '#00000060',
                shadowOffset: {
                  width: 1.5 * rem,
                  height: 1.5 * rem,
                },
                shadowOpacity: 1,
                shadowRadius: 2 * rem,
              }}>
              <TouchableOpacity
                style={{
                  marginRight: 25 * rem,
                  marginTop: 65 * rem,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 0.24 * entireScreenWidth,
                  height: undefined,
                  borderRadius: 0.12 * entireScreenWidth,
                  aspectRatio: 100 / 100,
                  backgroundColor: 'white',
                }}>
                <IconQC
                  size={40 * rem}
                  name="checklist"
                  color="tomato"
                  //onPress={() => NavRef.navigate('Home')}
                />
                <Text
                  style={{
                    color: 'tomato',
                    fontSize: 15 * rem,
                    fontWeight: 'bold',
                  }}>
                  QC
                </Text>
              </TouchableOpacity>
            </Androw>
            <Androw
              style={{
                shadowColor: '#00000060',
                shadowOffset: {
                  width: 1.5 * rem,
                  height: 1.5 * rem,
                },
                shadowOpacity: 1,
                shadowRadius: 2 * rem,
              }}>
              <TouchableOpacity
                style={{
                  marginRight: 25 * rem,
                  marginBottom: 65 * rem,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 0.24 * entireScreenWidth,
                  height: undefined,
                  borderRadius: 0.12 * entireScreenWidth,
                  aspectRatio: 100 / 100,
                  backgroundColor: 'white',
                }}>
                <IconHR
                  size={40 * rem}
                  name="ios-people"
                  color="tomato"
                  //onPress={() => NavRef.navigate('Home')}
                />
                <Text
                  style={{
                    color: 'tomato',
                    fontSize: 15 * rem,
                    fontWeight: 'bold',
                  }}>
                  HR
                </Text>
              </TouchableOpacity>
            </Androw>
          </View>
        </View>
      </View>
    );
  }
}
export default connect(
  state => {
    return {lang: state.lan, usr: state.usr, pwd: state.pwd};
  },
  dispatch => {
    return {
      Logout: (usr, pwd, reload) =>
        dispatch({type: 'Login_or_Logout', usr, pwd, reload}),
    };
  },
)(MainPage);
