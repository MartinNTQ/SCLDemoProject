/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as NavRef from '../NavRef/NavRef';
import Search1Icon from 'react-native-vector-icons/AntDesign';
import PrevIcon from 'react-native-vector-icons/AntDesign';
import NextIcon from 'react-native-vector-icons/AntDesign';
import ProfileIcon from 'react-native-vector-icons/AntDesign';
import CoinsIcon from 'react-native-vector-icons/FontAwesome5';
import RemarkIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const width = Dimensions.get('window').width;
const rem = width / 380;
const lgen = {
  do: 'Daily Output',
  staffinfo: 'Staff Information',
  wage: 'Wage',
  remark: 'Remark',
};
const lgcn = {
  do: '日產量',
  staffinfo: '員工資料',
  wage: '工資',
  remark: '備註',
};
const lgvn = {
  do: 'Sản lượng hàng ngày',
  staffinfo: 'Thông tin nhân viên',
  wage: 'Lương',
  remark: 'Ghi chú',
};
class BottomTabMenu extends Component {
  constructor(props) {
    super(props);
    //const {col} = this.props;
    this.state = {col: 1, scrollstatus: false, load: false};
  }
  componentDidMount() {
    const {col} = this.props;
    // console.log('scrollstatusrender:' + this.state.scrollstatus);
    // console.log('staterender:' + this.state.col);
    // console.log('reduxrender:' + this.props.col);
    setTimeout(() => {
      this.scrollview_ref.scrollTo({
        y: 0,
        x: col > 1 ? 0.25 * (col - 1) * width : 0,
        animated: false,
      });
    }, 0);
    if (!this.state.scrollstatus) {
      this.setState({col: col});
    }
  }
  ReloadPosScrollView = () => {
    if (!this.props.bttabload) {
      if (this.props.col !== this.state.col) {
        setTimeout(() => {
          this.scrollview_ref.scrollTo({
            y: 0,
            x: this.props.col > 1 ? 0.25 * this.props.col * width : 0,
            animated: false,
          });
          this.props.TabLoadChange(true);
        }, 0);
      }
    }
  };
  render() {
    const {lang, tabclick, col} = this.props;
    const curlang = lang === 'EN' ? lgen : lang === 'CN' ? lgcn : lgvn;
    // const col =
    //   this.state.col !== this.props.col ? this.props.col : this.state.col;
    this.ReloadPosScrollView();
    return (
      <View
        style={{
          height: 80 * rem,
          flexDirection: 'row',
          backgroundColor: 'tomato',
          alignItems: 'center',
        }}>
        <View style={{width: 0.125 * width, flexDirection: 'column'}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            disabled={col <= 1 ? true : false}
            onPress={() => {
              this.scrollview_ref.scrollTo({
                x: 0.25 * width * (col - 2),
                animated: true,
              });
            }}>
            <PrevIcon
              name="doubleleft"
              size={36 * rem}
              style={{
                alignSelf: 'center',
                color: col <= 1 ? '#aaaab7' : 'white',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: 0.75 * width, flexDirection: 'column'}}>
          <ScrollView
            horizontal={true}
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={0}
            onScroll={event => {
              var newcoltmp = (
                (event.nativeEvent.contentOffset.x / width).toFixed(2) / 0.25 +
                1
              ).toFixed(2);
              var newcol =
                newcoltmp > parseInt(newcoltmp, 10)
                  ? parseInt(newcoltmp, 10) + 1
                  : parseInt(newcoltmp, 10);
              this.setState({
                col: newcol,
                scrollstatus: true,
              });
              this.props.UpdateCol(newcol);
            }}
            ref={ref => {
              this.scrollview_ref = ref;
            }}>
            <View
              style={{
                flex: 1,
                width: 0.25 * width,
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setTimeout(() => {
                    this.scrollview_ref.scrollTo({
                      y: 0,
                      x: this.props.col > 1 ? 0.25 * this.props.col * width : 0,
                      animated: false,
                    });
                    this.props.TabLoadChange(false);
                    this.props.TabClick('1');
                    NavRef.navigate('Staff', {screen: 'StaffInfo'});
                  }, 0);
                }}>
                <View
                  style={{
                    flex: 1.8,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <Search1Icon
                    reverse
                    style={{
                      color: tabclick === '1' ? 'blue' : 'white',
                    }}
                    size={32 * rem}
                    name="search1"
                  />
                </View>
                <View
                  style={{
                    flex: 1.2,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 11 * rem,
                      textAlign: 'center',
                      color: tabclick === '1' ? 'blue' : 'white',
                      flexWrap: 'wrap',
                    }}>
                    {curlang.staffinfo}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                width: 0.25 * width,
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setTimeout(() => {
                    this.scrollview_ref.scrollTo({
                      y: 0,
                      x: this.props.col > 1 ? 0.25 * this.props.col * width : 0,
                      animated: false,
                    });
                    this.props.TabLoadChange(false);
                    this.props.TabClick('2');
                    NavRef.navigate('Staff', {screen: 'OutputIndividual'});
                  }, 0);
                }}>
                <View
                  style={{
                    flex: 1.8,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <ProfileIcon
                    reverse
                    style={{
                      color: tabclick === '2' ? 'blue' : 'white',
                    }}
                    size={32 * rem}
                    name="profile"
                  />
                </View>
                <View
                  style={{
                    flex: 1.2,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 11 * rem,
                      textAlign: 'center',
                      color: tabclick === '2' ? 'blue' : 'white',
                      flexWrap: 'wrap',
                    }}>
                    {curlang.do}{' '}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                width: 0.25 * width,
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setTimeout(() => {
                    this.scrollview_ref.scrollTo({
                      y: 0,
                      x: this.props.col > 1 ? 0.25 * this.props.col * width : 0,
                      animated: false,
                    });
                    this.props.TabLoadChange(false);
                    this.props.TabClick('3');
                    NavRef.navigate('Staff', {screen: 'Wage'});
                  }, 0);
                }}>
                <View
                  style={{
                    flex: 1.8,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <CoinsIcon
                    reverse
                    style={{
                      color: tabclick === '3' ? 'blue' : 'white',
                    }}
                    size={32 * rem}
                    name="coins"
                  />
                </View>
                <View
                  style={{
                    flex: 1.2,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 11 * rem,
                      textAlign: 'center',
                      color: tabclick === '3' ? 'blue' : 'white',
                      flexWrap: 'wrap',
                    }}>
                    {curlang.wage}{' '}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                width: 0.25 * width,
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setTimeout(() => {
                    this.scrollview_ref.scrollTo({
                      y: 0,
                      x: this.props.col > 1 ? 0.25 * this.props.col * width : 0,
                      animated: false,
                    });
                    this.props.TabLoadChange(false);
                    this.props.TabClick('4');
                    NavRef.navigate('Staff', {screen: 'Remark'});
                  }, 0);
                }}>
                <View
                  style={{
                    flex: 1.8,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <RemarkIcon
                    reverse
                    style={{
                      color: tabclick === '4' ? 'blue' : 'white',
                    }}
                    size={32 * rem}
                    name="file-document-edit-outline"
                  />
                </View>
                <View
                  style={{
                    flex: 1.2,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 11 * rem,
                      textAlign: 'center',
                      color: tabclick === '4' ? 'blue' : 'white',
                      flexWrap: 'wrap',
                    }}>
                    {curlang.remark}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={{width: 0.125 * width, flexDirection: 'column'}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            disabled={col >= 2 ? true : false}
            onPress={() => {
              this.scrollview_ref.scrollTo({
                x: 0.25 * width * col,
                animated: true,
              });
            }}>
            <NextIcon
              name="doubleright"
              size={36 * rem}
              style={{
                alignSelf: 'center',
                color: col >= 2 ? '#aaaab7' : 'white',
              }}
            />
          </TouchableOpacity>
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
      col: state.col,
      bttabload: state.bttabload,
      eesnoclick: state.eesnoclick,
      tabclick: state.tabclick,
      sorttype: state.sorttype,
      EElistapi: state.EElistapi,
      EElist: state.EElist,
    };
  },
  dispatch => {
    return {
      Update: (EElistapi, EElist) =>
        dispatch({
          type: 'update',
          EElistapi,
          EElist,
        }),
      UpdateCol: col =>
        dispatch({
          type: 'updatecol',
          col,
        }),
      TabLoadChange: bttabload =>
        dispatch({
          type: 'bttabloadchange',
          bttabload,
        }),
      TabClick: tabclick =>
        dispatch({
          type: 'tabclick',
          tabclick,
        }),
    };
  },
)(BottomTabMenu);
