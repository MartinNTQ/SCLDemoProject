/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Alert,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import * as NavRef from '../NavRef/NavRef';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconEye from 'react-native-vector-icons/Feather';
import IconCheck from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Resetpassword} from '../function/Function';
import Androw from 'react-native-androw';
var width = Dimensions.get('window').width;
var rem = width / 380;
const lgen = {
  ChangePwd: 'Change Password',
  username: 'username',
  oldpwd: 'old password',
  newpwd: 'new password',
  renpwd: 're-enter password',
  alinput: 'Invalid new password',
  alrinput: "Re-new password didn't not match! Try again!",
  alconfirm: 'Confirm Change Password',
  alsucess: 'Change Password Unsucessfully!',
  CANCEL: 'CANCEL',
  SUBMIT: 'SUBMIT',
};
const lgcn = {
  ChangePwd: '更改密碼',
  username: '用戶名',
  oldpwd: '舊密碼',
  newpwd: '新密碼',
  renpwd: '重新輸入密碼',
  alinput: '無效的新密碼',
  alrinput: '重新輸入密碼不一致!',
  alconfirm: '確認更改密碼?',
  alsucess: '更改密碼失敗!',
  CANCEL: '取消',
  SUBMIT: '提交',
};
const lgvn = {
  ChangePwd: 'Đổi Mật Khẩu',
  username: 'Tên đăng nhập',
  oldpwd: 'Mật khẩu cũ',
  newpwd: 'Mật khẩu mới',
  renpwd: 'Nhập lại mật khẩu mới',
  alinput: 'Mật khẩu mới không hợp lệ',
  alrinput: 'Mật khẩu mới nhập lại không trùng khớp!',
  alconfirm: 'Xác Nhận Thay Đổi Mật Khẩu?',
  alsucess: 'Thay đổi mật khẩu thất bại!',
  CANCEL: 'HỦY BỎ',
  SUBMIT: 'GỬI ĐI',
};
class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      newpswd: '',
      rnewpwd: '',
      showpwd1: true,
      showpwd2: true,
      errnpwd: 'gray',
      errrnpwd: 'gray',
    };
  }
  render() {
    const {lang, usr, pwd} = this.props;
    const curlang = lang === 'EN' ? lgen : lang === 'CN' ? lgcn : lgvn;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'tomato',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {curlang.ChangePwd}
          </Text>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '60%',
              height: 40 * rem,
              borderRadius: 20 * rem,
              backgroundColor: 'white',
              borderWidth: 0.8 * rem,
              borderColor: 'gray',
              alignItems: 'center',
            }}>
            <Icon style={{marginLeft: 5 * rem}} name="user" size={36 * rem} />
            <TextInput
              style={{
                textAlign: 'center',
              }}
              placeholder={curlang.username}
              value={usr}
              editable={false}
            />
            <Icon style={{marginRight: 41 * rem}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '60%',
              height: 40 * rem,
              borderRadius: 20 * rem,
              backgroundColor: 'white',
              borderWidth: 0.8 * rem,
              borderColor: 'gray',
              alignItems: 'center',
            }}>
            <Icon style={{marginLeft: 5 * rem}} name="lock" size={36 * rem} />
            <TextInput
              style={{
                textAlign: 'center',
              }}
              placeholder={curlang.password}
              value={pwd}
              secureTextEntry={true}
              editable={false}
            />
            <Icon style={{marginRight: 41 * rem}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 20 * rem,
              backgroundColor: 'white',
              width: '60%',
              height: 40 * rem,
              borderWidth: 0.8 * rem,
              borderColor: this.state.errnpwd,
              alignItems: 'center',
            }}>
            <Icon style={{marginLeft: 5 * rem}} name="unlock" size={36 * rem} />
            <TextInput
              ref={ref => {
                this.npwd = ref;
              }}
              style={{
                width: '60%',
                textAlign: 'center',
              }}
              secureTextEntry={
                this.state.newpswd.length > 0
                  ? this.state.showpwd1
                  : !this.state.showpwd1
              }
              onChangeText={newpswd => this.setState({newpswd})}
              value={this.state.newpswd}
              placeholder={curlang.newpwd}
            />
            <IconEye
              style={{marginRight: 15 * rem}}
              name={this.state.showpwd1 ? 'eye' : 'eye-off'}
              onPress={() => {
                this.setState({showpwd1: !this.state.showpwd1});
              }}
              size={22 * rem}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 20 * rem,
              backgroundColor: 'white',
              width: '60%',
              height: 40 * rem,
              borderWidth: 0.8 * rem,
              borderColor: this.state.errrnpwd,
              alignItems: 'center',
            }}>
            <IconCheck
              style={{marginLeft: 14 * rem}}
              name="shield-check-outline"
              size={22 * rem}
            />
            <TextInput
              ref={ref => {
                this.rnpwd = ref;
              }}
              style={{
                width: '60%',
                textAlign: 'center',
              }}
              secureTextEntry={
                this.state.rnewpwd.length > 0
                  ? this.state.showpwd2
                  : !this.state.showpwd2
              }
              onChangeText={rnewpwd => this.setState({rnewpwd})}
              value={this.state.rnewpwd}
              placeholder={curlang.renpwd}
            />
            <IconEye
              style={{marginRight: 15 * rem}}
              name={this.state.showpwd2 ? 'eye' : 'eye-off'}
              onPress={() => {
                this.setState({showpwd2: !this.state.showpwd2});
              }}
              size={22 * rem}
            />
          </View>
        </View>
        <View
          style={{
            flex: 4,
            flexDirection: 'row',
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
            <LinearGradient
              start={{x: 1, y: 0.25}}
              end={{x: 1.05, y: 1.9}}
              colors={['white', 'green']}
              style={{
                width: 0.3 * width,
                height: 40 * rem,
                borderRadius: 20 * rem,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 40 * rem,
                  borderRadius: 20 * rem,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  if (this.state.newpswd === '') {
                    Alert.alert(curlang.alinput);
                    this.setState({errnpwd: 'red'});
                    this.npwd.focus();
                    return;
                  } else {
                    this.setState({errnpwd: 'gray'});
                  }
                  if (this.state.newpswd !== this.state.rnewpwd) {
                    Alert.alert(curlang.alrinput);
                    this.setState({errrnpwd: 'red'});
                    this.rnpwd.focus();
                    return;
                  }
                  if (this.state.newpswd === this.state.rnewpwd) {
                    this.setState({errnpwd: 'gray'});
                    Alert.alert(curlang.alconfirm, '', [
                      {
                        text: curlang.SUBMIT,
                        onPress: () => {
                          Resetpassword(usr, pwd, this.state.rnewpwd)
                            .then(_result => {
                              NavRef.navigate('LoginPage');
                              this.props.Logout(usr, '');
                            })
                            .catch(_err => {
                              Alert.alert(curlang.alsucess);
                            });
                        },
                      },
                      {text: curlang.CANCEL, onPress: () => {}},
                    ]);
                  }
                }}>
                <Text
                  style={{
                    color: 'green',
                    fontWeight: 'bold',
                    fontSize: 16 * rem,
                  }}>
                  {curlang.SUBMIT}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
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
            <LinearGradient
              start={{x: 1, y: 0.25}}
              end={{x: 1.05, y: 1.9}}
              colors={['white', 'pink']}
              style={{
                width: 0.3 * width,
                height: 40 * rem,
                borderRadius: 20 * rem,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 40 * rem,
                  borderRadius: 20 * rem,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  NavRef.navigate('MainPage');
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 16 * rem,
                  }}>
                  {curlang.CANCEL}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </Androw>
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
      Logout: (usr, pwd) => dispatch({type: 'Login_or_Logout', usr, pwd}),
    };
  },
)(SettingPage);
