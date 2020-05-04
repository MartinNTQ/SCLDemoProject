/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Dimensions,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import IconHome from 'react-native-vector-icons/AntDesign';
import * as NavRef from '../NavRef/NavRef';
import {ConvertDate} from '../function/Function';
import LinearGradient from 'react-native-linear-gradient';
import LinechartIcon from 'react-native-vector-icons/AntDesign';
import ProfileIcon from 'react-native-vector-icons/AntDesign';
import Search1Icon from 'react-native-vector-icons/AntDesign';
import CoinsIcon from 'react-native-vector-icons/FontAwesome5';
import {encode} from 'base-64';
import Loader from './Loader';
//import FastImage from 'react-native-fast-image';
const width = Dimensions.get('window').width;
const rem = width / 380;
const lgen = {
  home: 'Home',
  welc: 'Welcome!',
  sno: 'Staff no.',
  joind: 'Join date',
  eqchart: 'EQ Chart',
  dot: 'Daily Output (Team)',
  staffinfo: 'Staff Information',
  wage: 'Wage',
};
const lgcn = {
  home: '首頁',
  welc: '歡迎!',
  sno: '員工編號',
  joind: '入職日期',
  eqchart: '效率與質量圖表',
  dot: '日產量（組）',
  staffinfo: '員工資料',
  wage: '工資',
};
const lgvn = {
  home: 'Trang Chủ',
  welc: 'Chào Mừng!',
  sno: 'Mã nhân viên',
  joind: 'Ngày vào công ty',
  eqchart: 'Biểu đồ hiệu suất và chất lượng',
  dot: 'Sản lượng hàng ngày (Tổ)',
  staffinfo: 'Thông tin nhân viên',
  wage: 'Lương',
};
class PQEPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      clickPQE: false,
      clickEQ: false,
      loadImg: false,
      userinfo: {},
    };
  }
  componentDidMount() {
    var username = this.props.usr;
    fetch(`http://116.97.244.58:8080/userinfo/${username}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + encode('admin:P@ssw0rd1'),
      },
    })
      .then(response => response.json())
      .then(result => {
        this.setState({userinfo: result[0]});
      })
      .catch(error => {});
  }
  render() {
    const {lang} = this.props;
    const curlang = lang === 'EN' ? lgen : lang === 'CN' ? lgcn : lgvn;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Loader loading={this.state.loading} />
        <View
          style={{
            flex: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <Image
              source={require('../image/Logonew.png')}
              style={{
                marginLeft: 10 * rem,
                marginTop: 10 * rem,
                width: 60 * rem,
                height: undefined,
                aspectRatio: 100 / 83,
              }}
            />
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              colors={['tomato', 'orange', 'yellow']}
              style={{
                width: 0.4 * width + 4 * rem,
                height: 0.4 * width + 4 * rem,
                borderRadius: 0.2 * width + 2 * rem,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ImageBackground
                style={{
                  width: 0.4 * width,
                  height: 0.4 * width,
                  alignSelf: 'center',
                  borderRadius: 0.2 * width,
                }}
                imageStyle={{borderRadius: 0.2 * width}}
                source={require('../image/noavatar.jpg')}>
                <Image
                  style={{
                    width: 0.4 * width,
                    height: 0.4 * width,
                    alignSelf: 'center',
                    borderRadius: 0.2 * width,
                  }}
                  source={{
                    uri:
                      `http://116.97.244.58:8080/photos/${
                        this.state.userinfo.sno
                      }` + '.jpg',
                    headers: {
                      Authorization: 'Basic ' + encode('admin:P@ssw0rd1'),
                    },
                  }}
                />
              </ImageBackground>
            </LinearGradient>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => NavRef.navigate('MainPage')}>
              <IconHome
                name="home"
                size={50 * rem}
                style={{
                  color: 'gray',
                  marginRight: 10 * rem,
                  marginTop: 10 * rem,
                }}
              />
              <View
                style={{
                  width: 50 * rem,
                  marginRight: 10 * rem,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'gray',
                    fontSize: 15 * rem,
                  }}>
                  {curlang.home}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 26 * rem,
                fontWeight: 'bold',
                color: 'gray',
                textAlign: 'center',
              }}>
              {curlang.welc}
            </Text>
            <Text
              style={{
                marginTop: 10 * rem,
                fontSize: 18 * rem,
                color: 'gray',
                textAlign: 'center',
              }}>
              {this.state.userinfo.enm}
            </Text>
            <Text
              style={{fontSize: 18 * rem, color: 'gray', textAlign: 'center'}}>
              {this.state.userinfo.pos}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flex: 5,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 15 * rem,
                  color: 'gray',
                  textAlign: 'center',
                }}>
                {curlang.sno}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <Text
                style={{
                  fontSize: 15 * rem,
                  color: 'gray',
                  textAlign: 'center',
                }}>
                :
              </Text>
            </View>
            <View
              style={{
                flex: 5,
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: 15 * rem,
                  color: 'gray',
                  textAlign: 'center',
                }}>
                {this.state.userinfo.sno}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flex: 5,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 15 * rem,
                  color: 'gray',
                  textAlign: 'center',
                }}>
                {curlang.joind}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <Text
                style={{
                  fontSize: 15 * rem,
                  color: 'gray',
                  textAlign: 'center',
                }}>
                :
              </Text>
            </View>
            <View
              style={{
                flex: 5,
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: 15 * rem,
                  color: 'gray',
                  textAlign: 'center',
                }}>
                {ConvertDate(`${this.state.userinfo.djn}`)}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 2.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Rating
            imageSize={30 * rem}
            type="custom"
            ratingCount={5}
            readonly
            startingValue={this.state.userinfo.sco}
            ratingColor="orange"
            ratingBackgroundColor="gray"
          />
        </View>
        <View
          style={{
            flex: 5,
            backgroundColor: 'tomato',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              marginLeft: 30 * rem,
              marginRight: 10 * rem,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                this.setState({
                  clickEQ: true,
                  loading: true,
                });
                setTimeout(() => {
                  NavRef.navigate('EQChart');
                  this.setState({
                    loading: false,
                    clickEQ: false,
                  });
                }, 800);
              }}>
              <LinechartIcon
                reverse
                style={{
                  marginTop: 0 * rem,
                  marginHorizontal: 0 * rem,
                  alignSelf: 'center',
                  color: this.state.clickEQ ? 'rgb(0,0,255)' : 'white',
                }}
                size={36 * rem}
                name="linechart"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: 10 * rem,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                this.setState({
                  clickPQE: true,
                  loading: true,
                });
                setTimeout(() => {
                  NavRef.navigate('DailyOutputPage');
                  this.setState({
                    loading: false,
                    clickPQE: false,
                  });
                }, 800);
              }}>
              <ProfileIcon
                reverse
                style={{
                  marginTop: 0 * rem,
                  marginHorizontal: 0 * rem,
                  alignSelf: 'center',
                  color: this.state.clickPQE ? 'rgb(0,0,255)' : 'white',
                }}
                size={36 * rem}
                name="profile"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: 10 * rem,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              //onPress={() => NavRef.navigate('SettingPage')}
            >
              <Search1Icon
                reverse
                style={{
                  alignSelf: 'center',
                  color: 'white',
                }}
                size={36 * rem}
                name="search1"
                //onPress={() => NavRef.navigate('SettingPage')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 10 * rem,
              marginRight: 30 * rem,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              //onPress={() => NavRef.navigate('SettingPage')}
            >
              <CoinsIcon
                reverse
                style={{
                  marginTop: 0 * rem,
                  marginHorizontal: 0 * rem,
                  alignSelf: 'center',
                  color: 'white',
                }}
                size={36 * rem}
                name="coins"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 5,
            backgroundColor: 'tomato',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              marginTop: 5 * rem,
              marginLeft: 30 * rem,
              marginRight: 10 * rem,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                textAlign: 'center',
                color: this.state.clickEQ ? 'rgb(0,0,255)' : 'white',
                flexWrap: 'wrap',
              }}>
              {curlang.eqchart}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 5 * rem,
              marginHorizontal: 10 * rem,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                textAlign: 'center',
                color: this.state.clickPQE ? 'rgb(0,0,255)' : 'white',
                flexWrap: 'wrap',
              }}>
              {curlang.dot}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 5 * rem,
              marginHorizontal: 10 * rem,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                textAlign: 'center',
                color: 'white',
                flexWrap: 'wrap',
              }}>
              {curlang.staffinfo}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 5 * rem,
              marginLeft: 10 * rem,
              marginRight: 30 * rem,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                textAlign: 'center',
                color: 'white',
                flexWrap: 'wrap',
              }}>
              {curlang.wage}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default connect(state => {
  return {lang: state.lan, usr: state.usr, pwd: state.pwd};
})(PQEPage);
