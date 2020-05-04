/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Dimensions, Image} from 'react-native';
import * as NavRef from '../NavRef/NavRef';
import Icon from 'react-native-vector-icons/EvilIcons';
const entireScreenWidth = Dimensions.get('window').width;
var rem = entireScreenWidth / 380;
class ForgotPwd extends Component {
  render() {
    const {lang} = this.props;
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            backgroundColor: 'tomato',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18 * rem,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {lang === 'EN'
              ? 'Forgot Password?'
              : lang === 'CN'
              ? '忘記密碼?'
              : 'Quên Mật Khẩu?'}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'gainsboro',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Image
            source={require('../image/UK.png')}
            style={{
              width: 40 * rem,
              height: 25 * rem,
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 10 * rem,
            }}
          />
          <Text
            style={{
              marginVertical: 10 * rem,
              fontSize: 16 * rem,
              fontWeight: 'bold',
            }}>
            Please Contact
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 5 * rem,
              fontSize: 15 * rem,
            }}>
            Santa Clara Co.,Ltd.
          </Text>
          <Text
            style={{
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 5 * rem,
              fontSize: 15 * rem,
            }}>
            E-mail : itsupport@santaclara.com.vn
          </Text>
          <Text
            style={{
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 5 * rem,
              fontSize: 15 * rem,
            }}>
            {'Tel       : 0228 626 2202'}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'gainsboro',
            flexDirection: 'row',
            alignItems: 'flex-end',
            //justifyContent: 'space-between',
          }}>
          <Image
            source={require('../image/CN.png')}
            style={{
              width: 40 * rem,
              height: 25 * rem,
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 10 * rem,
            }}
          />
          <Text
            style={{
              marginVertical: 10 * rem,
              fontSize: 16 * rem,
              fontWeight: 'bold',
            }}>
            請聯絡
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 5 * rem,
              fontSize: 15 * rem,
            }}>
            Santa Clara Co.,Ltd.
          </Text>
          <Text
            style={{
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 5 * rem,
              fontSize: 15 * rem,
            }}>
            電郵 : itsupport@santaclara.com.vn
          </Text>
          <Text
            style={{
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 5 * rem,
              fontSize: 15 * rem,
            }}>
            電話 : 0228 626 2202
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'gainsboro',
            flexDirection: 'row',
            alignItems: 'flex-end',
            //justifyContent: 'space-between',
          }}>
          <Image
            source={require('../image/VN.png')}
            style={{
              width: 40 * rem,
              height: 25 * rem,
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 10 * rem,
            }}
          />
          <Text
            style={{
              marginVertical: 10 * rem,
              fontSize: 16 * rem,
              fontWeight: 'bold',
            }}>
            Vui lòng liên hệ
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 5 * rem,
              fontSize: 15 * rem,
            }}>
            Santa Clara Co.,Ltd.
          </Text>
          <Text
            style={{
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 5 * rem,
              fontSize: 15 * rem,
            }}>
            {'E-mail        : itsupport@santaclara.com.vn'}
          </Text>
          <Text
            style={{
              marginRight: 15 * rem,
              marginLeft: 40 * rem,
              marginVertical: 5 * rem,
              fontSize: 15 * rem,
            }}>
            {'Điện thoại : 0228 626 2202'}
          </Text>
        </View>
        <View style={{flex: 0.5, backgroundColor: 'gainsboro'}} />
        <View
          style={{
            flex: 1,
            backgroundColor: 'gainsboro',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            size={36 * rem}
            name="check"
            onPress={() => NavRef.navigate('LoginPage')}
          />
        </View>
      </View>
    );
  }
}
export default connect(state => {
  return {lang: state.lan};
})(ForgotPwd);
