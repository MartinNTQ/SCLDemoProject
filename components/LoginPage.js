/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/no-string-refs */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Alert,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from 'react-native';
import {Icon} from 'native-base';
import * as NavRef from '../NavRef/NavRef';
import {Checklogin, Updateerrtime, Reseterrtime} from '../function/Function';
import Loader from './Loader';
import Androw from 'react-native-androw';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from 'react-native-check-box';
const entireScreenWidth = Dimensions.get('window').width;
var rem = entireScreenWidth / 380;
const lgen = {
  user_nameplh: 'username',
  pswordplh: 'password',
  btname: 'LOGIN',
  forgot_pswlb: 'Forgot Password?',
  legal_termslb: 'Legal Terms',
  emptyusername: 'Please input username',
  blockedusername: 'Your username is blocked',
  invalidpwd: 'Invalid password',
  invaliduser: 'Invalid username',
  fail_connect: 'Fail Connection',
  rememberpwd: 'Remember Password',
};
const lgcn = {
  user_nameplh: '用戶名',
  pswordplh: '密碼',
  btname: '登錄',
  forgot_pswlb: '忘記密碼?',
  legal_termslb: '法律條款',
  emptyusername: '請輸入用戶名',
  blockedusername: '您的賬號被阻止',
  invalidpwd: '無效的密碼',
  invaliduser: '無效的用戶名',
  fail_connect: '連接失敗',
  rememberpwd: '記得密碼',
};
const lgvn = {
  user_nameplh: 'Tên',
  pswordplh: 'Mật Khẩu',
  btname: 'ĐĂNG NHẬP',
  forgot_pswlb: 'Quên Mật Khẩu?',
  legal_termslb: 'Điều Khoản',
  emptyusername: 'Vui lòng nhập tên',
  blockedusername: 'Tài khoản của bạn đã bị khoá',
  invalidpwd: 'Mật khẩu không hợp lệ',
  invaliduser: 'Tài khoản không hợp lệ',
  fail_connect: 'Kết nối lỗi',
  rememberpwd: 'Nhớ Mật Khẩu',
};
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputusr: false,
      loading: false,
      showpwd: true,
      rememberpwd: false,
      user_name: '',
      password: '',
    };
  }
  _retrieveLangData = async () => {
    try {
      const value = await AsyncStorage.getItem('LANG');
      if (value && value.trim().length) {
        this.props.SetLange(value);
      }
    } catch (error) {}
  };
  _retrievePwd = async usr => {
    try {
      const value = await AsyncStorage.getItem(`${usr}`);
      if (value && value.trim().length) {
        return value;
      } else {
        return '';
      }
    } catch (error) {
      return '';
    }
  };
  _retrievecurrent_remember_usr = async () => {
    try {
      const value = await AsyncStorage.getItem('curusr');
      console.log('curusr: ' + value);
      if (value && value.trim().length) {
        this.props.Login(value, '', false);
      }
    } catch (error) {}
  };
  _storeLangData = async lan => {
    try {
      await AsyncStorage.setItem('LANG', lan);
    } catch (error) {}
  };
  _storePwd = async (usr, pwd) => {
    try {
      await AsyncStorage.setItem(usr, pwd);
    } catch (error) {}
  };
  _storecurrent_remember_usr = async usr => {
    try {
      await AsyncStorage.setItem('curusr', usr);
    } catch (error) {}
  };
  _removePwd = async usr => {
    try {
      await AsyncStorage.removeItem(usr);
    } catch (error) {}
  };
  _removecurusr = async () => {
    try {
      await AsyncStorage.removeItem('curusr');
    } catch (error) {}
  };
  componentDidMount() {
    this._retrieveLangData();
    this._retrievecurrent_remember_usr();
    //this._removecurusr();
    if (!this.state.inputusr) {
      this.setState({
        user_name: this.props.usr,
        password: this.props.pwd,
      });
      this._retrievePwd(this.props.usr).then(result => {
        this.setState({
          password: result,
          rememberpwd:
            result && result.trim().length ? true : this.state.rememberpwd,
        });
      });
    }
  }
  _reload() {
    if (!this.state.inputusr && !this.props.reload) {
      setTimeout(() => {
        this._retrievePwd(this.props.usr).then(result => {
          this.setState({
            user_name: this.props.usr,
            password: !this.state.inputusr
              ? this.props.pwd
              : result && result.trim().length
              ? result
              : this.state.password,
            rememberpwd:
              result && result.trim().length ? true : this.state.rememberpwd,
          });
          this.props.Login(this.state.user_name, this.state.password, true);
          console.log('pwd:' + this.state.password);
          console.log('rememberpwd:' + this.state.rememberpwd);
        });
      }, 0);
    }
  }
  render() {
    const {lang} = this.props;
    this._reload();
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
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'rgb(118, 188, 33)', fontSize: 30 * rem}}>
            CHARMING
          </Text>
        </View>
        <View
          style={{
            flex: 0.6,
            backgroundColor: 'rgb(118, 188, 33)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '60%',
              height: 40 * rem,
              borderRadius: 20 * rem,
              flexDirection: 'row',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Icon
              style={{marginLeft: 15 * rem, color: 'darkgray'}}
              name="person"
            />
            <TextInput
              ref="usrref"
              style={{
                textAlign: 'center',
                fontSize: 15 * rem,
                width: '60%',
              }}
              placeholder={curlang.user_nameplh}
              autoCapitalize="none"
              onChangeText={user_name => {
                this.setState({user_name, inputusr: true});
                this.props.Login(user_name, this.state.password, false);
                this._retrievePwd(user_name).then(result => {
                  this.setState({
                    password: result,
                    rememberpwd:
                      result && result.trim().length
                        ? true
                        : this.state.rememberpwd,
                  });
                });
              }}
              onBlur={() => {
                if (!this.state.inputusr) {
                  this.props.Login(
                    this.state.user_name,
                    this.state.password,
                    false,
                  );
                  this._retrievePwd(this.state.user_name).then(result => {
                    this.setState({
                      password: result,
                      rememberpwd:
                        result && result.trim().length
                          ? true
                          : this.state.rememberpwd,
                    });
                  });
                }
              }}
              value={this.state.user_name}
            />
            <Icon style={{marginRight: 15 * rem}} />
          </View>
        </View>
        <View
          style={{
            flex: 0.6,
            backgroundColor: 'rgb(118, 188, 33)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '60%',
              height: 40 * rem,
              borderRadius: 20 * rem,
              flexDirection: 'row',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Icon
              style={{marginLeft: 15 * rem, color: 'darkgray'}}
              name="lock"
            />
            <TextInput
              ref="pwdref"
              style={{
                width: '60%',
                marginLeft: 20 * rem,
                textAlign: 'center',
                fontSize: 15 * rem,
              }}
              secureTextEntry={
                this.state.password && this.state.password.trim().length
                  ? this.state.showpwd
                  : !this.state.showpwd
              }
              onChangeText={password => {
                this.setState({
                  password,
                });
              }}
              value={this.state.password}
              placeholder={curlang.pswordplh}
            />
            <Icon
              style={{color: 'darkgray', marginRight: 10 * rem}}
              name={this.state.showpwd ? 'eye' : 'eye-off'}
              onPress={() => {
                this.setState({showpwd: !this.state.showpwd});
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgb(118, 188, 33)',
            alignItems: 'center',
            justifyContent: 'center',
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
                width: 0.3 * entireScreenWidth,
                height: 40 * rem,
                backgroundColor: 'white',
                borderRadius: 25 * rem,
                justifyContent: 'center',
                elevation: 1,
              }}
              onPress={() => {
                this.setState({
                  loading: true,
                });
                this.props.Login(
                  this.state.user_name,
                  this.state.password,
                  false,
                );
                Checklogin(
                  this.state.user_name.trim(),
                  this.state.password,
                  3,
                ).then(result => {
                  setTimeout(() => {
                    if (
                      (this.state.inputusr &&
                        this.state.user_name.trim() !== '') ||
                      (!this.state.inputusr && this.props.usr !== '')
                    ) {
                      switch (result) {
                        case 'invalid_usr':
                          Alert.alert(curlang.invaliduser);
                          this.refs.usrref.focus();
                          break;
                        case 'reset_errtime':
                          if (this.state.rememberpwd) {
                            this._storePwd(
                              this.state.user_name.trim(),
                              this.state.password,
                            );
                          } else {
                            this._removePwd(this.state.user_name.trim());
                          }
                          this._storecurrent_remember_usr(
                            this.state.user_name.trim(),
                          );
                          Reseterrtime(this.state.user_name.trim()).then(
                            res1 => {},
                          );
                          this.setState({
                            loading: false,
                            inputusr: false,
                            reload: false,
                          });
                          NavRef.navigate('MainPage');
                          break;
                        case 'noreset_errtime':
                          if (this.state.rememberpwd) {
                            this._storePwd(
                              this.state.user_name.trim(),
                              this.state.password,
                            );
                          } else {
                            this._removePwd(this.state.user_name.trim());
                          }
                          this._storecurrent_remember_usr(
                            this.state.user_name.trim(),
                          );
                          this.setState({
                            loading: false,
                            inputusr: false,
                            reload: false,
                          });
                          NavRef.navigate('MainPage');
                          break;
                        case 'blocked':
                          Alert.alert(curlang.blockedusername);
                          this.setState({
                            loading: false,
                          });
                          break;
                        case 'invalid_pwd':
                          Updateerrtime(this.state.user_name.trim()).then(
                            res2 => {},
                          );
                          Alert.alert(curlang.invalidpwd);
                          this.setState({
                            loading: false,
                          });
                          this.refs.pwdref.focus();
                          break;
                        default:
                          Alert.alert(curlang.fail_connect);
                          this.setState({
                            loading: false,
                          });
                          break;
                      }
                    } else {
                      Alert.alert(curlang.emptyusername);
                      this.refs.usrref.focus();
                      this.setState({
                        loading: false,
                      });
                    }
                  }, 800);
                });
              }}>
              <Text style={{textAlign: 'center', color: 'black'}}>
                {curlang.btname}
              </Text>
            </TouchableOpacity>
          </Androw>
          <Text
            style={{
              marginTop: '2%',
              textDecorationLine: 'underline',
              textAlign: 'center',
              color: 'white',
            }}
            onPress={() => {
              NavRef.navigate('ForgotPwd');
            }}>
            {curlang.forgot_pswlb}
          </Text>
          <View
            style={{
              flex: 0.8,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CheckBox
              ref="rememberpwd"
              checkBoxColor="white"
              onClick={() => {
                this.setState({
                  rememberpwd: !this.state.rememberpwd,
                  inputusr: true,
                });
              }}
              isChecked={this.state.rememberpwd}
            />
            <Text style={{color: 'white', fontSize: 13 * rem}}>
              {curlang.rememberpwd}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.8,
            backgroundColor: 'rgb(118, 188, 33)',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  position: 'absolute',
                  bottom: 26 * rem,
                  fontSize: 13 * rem,
                }}>
                Ver. 001
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 6 * rem,
              }}>
              <Text
                style={{
                  paddingBottom: 6 * rem,
                  fontSize: 10.5 * rem,
                  color: 'white',
                }}>
                中文
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.SetLange('CN');
                  this._storeLangData('CN');
                }}>
                <Image
                  source={require('../image/CN.png')}
                  style={{width: 50 * rem, height: 35 * rem}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                padding: 6 * rem,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  paddingBottom: 6 * rem,
                  fontSize: 10.5 * rem,
                  color: 'white',
                }}>
                English
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.SetLange('EN');
                  this._storeLangData('EN');
                }}>
                <Image
                  source={require('../image/UK.png')}
                  style={{width: 50 * rem, height: 35 * rem}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                padding: 6 * rem,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  paddingBottom: 6 * rem,
                  fontSize: 10.5 * rem,
                  color: 'white',
                }}>
                Tiếng Việt
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.SetLange('VN');
                  this._storeLangData('VN');
                }}>
                <Image
                  source={require('../image/VN.png')}
                  style={{width: 50 * rem, height: 35 * rem}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  textDecorationLine: 'underline',
                  position: 'absolute',
                  bottom: 26 * rem,
                  fontSize: 13 * rem,
                }}
                onPress={() =>
                  NavRef.navigate('Legal_Terms', {
                    lt_header: curlang.legal_termslb,
                  })
                }>
                {curlang.legal_termslb}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default connect(
  state => {
    return {
      lang: state.lan,
      usr: state.usr,
      pwd: state.pwd,
      reload: state.reload,
    };
  },
  dispatch => {
    return {
      SetLange: lan => dispatch({type: 'SetLang', lan}),
      Login: (usr, pwd, reload) =>
        dispatch({type: 'Login_or_Logout', usr, pwd, reload}),
    };
  },
)(LoginPage);
