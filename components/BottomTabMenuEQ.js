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
//import * as NavRef from '../NavRef/NavRef';
import Search1Icon from 'react-native-vector-icons/AntDesign';
import PrevIcon from 'react-native-vector-icons/AntDesign';
import NextIcon from 'react-native-vector-icons/AntDesign';
import LinechartIcon from 'react-native-vector-icons/AntDesign';
import ProfileIcon from 'react-native-vector-icons/AntDesign';
import CoinsIcon from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('window').width;
const rem = width / 380;
const lgen = {
  eqchart: 'EQ Chart',
  dot: 'Daily Output (Team)',
  staffinfo: 'Staff Information',
  wage: 'Wage',
};
const lgcn = {
  eqchart: '效率與質量圖表',
  dot: '日產量（組）',
  staffinfo: '員工資料',
  wage: '工資',
};
const lgvn = {
  eqchart: 'Biểu đồ hiệu suất và chất lượng',
  dot: 'Sản lượng hàng ngày (Tổ)',
  staffinfo: 'Thông tin nhân viên',
  wage: 'Lương',
};
class BottomTabMenuEQ extends Component {
  constructor(props) {
    super(props);
    this.state = {coleq: 1, scrollstatus: false, load: false};
  }
  componentDidMount() {
    const {coleq} = this.props;
    setTimeout(() => {
      this.scrollview_ref.scrollTo({
        y: 0,
        x: coleq > 1 ? 0.25 * (coleq - 1) * width : 0,
        animated: false,
      });
    }, 0);
    if (!this.state.scrollstatus) {
      this.setState({coleq: coleq});
    }
  }
  ReloadPosScrollView = () => {
    if (!this.props.bttabloadeq) {
      if (this.props.coleq !== this.state.coleq) {
        setTimeout(() => {
          this.scrollview_ref.scrollTo({
            y: 0,
            x: this.props.coleq > 1 ? 0.25 * this.props.coleq * width : 0,
            animated: false,
          });
          this.props.TabLoadChange(true);
        }, 0);
      }
    }
  };
  render() {
    const {lang, tabclickeq, coleq} = this.props;
    const curlang = lang === 'EN' ? lgen : lang === 'CN' ? lgcn : lgvn;
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
            disabled={coleq <= 1 ? true : false}
            onPress={() => {
              this.scrollview_ref.scrollTo({
                x: 0.25 * width * (coleq - 2),
                animated: true,
              });
            }}>
            <PrevIcon
              name="doubleleft"
              size={36 * rem}
              style={{
                alignSelf: 'center',
                color: coleq <= 1 ? '#aaaab7' : 'white',
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
                coleq: newcol,
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
                      x:
                        this.props.coleq > 1
                          ? 0.25 * this.props.coleq * width
                          : 0,
                      animated: false,
                    });
                    this.props.TabLoadChange(false);
                    this.props.TabClick('1');
                    //NavRef.navigate('Staff', {screen: 'StaffInfo'});
                  }, 0);
                }}>
                <View
                  style={{
                    flex: 1.8,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <LinechartIcon
                    reverse
                    style={{
                      color: tabclickeq === '1' ? 'blue' : 'white',
                    }}
                    size={32 * rem}
                    name="linechart"
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
                      color: tabclickeq === '1' ? 'blue' : 'white',
                      flexWrap: 'wrap',
                    }}>
                    {curlang.eqchart}
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
                      x:
                        this.props.coleq > 1
                          ? 0.25 * this.props.coleq * width
                          : 0,
                      animated: false,
                    });
                    this.props.TabLoadChange(false);
                    this.props.TabClick('2');
                    //NavRef.navigate('Staff', {screen: 'OutputIndividual'});
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
                      color: tabclickeq === '2' ? 'blue' : 'white',
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
                      color: tabclickeq === '2' ? 'blue' : 'white',
                      flexWrap: 'wrap',
                    }}>
                    {curlang.dot}{' '}
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
                      x:
                        this.props.coleq > 1
                          ? 0.25 * this.props.coleq * width
                          : 0,
                      animated: false,
                    });
                    this.props.TabLoadChange(false);
                    this.props.TabClick('3');
                    //NavRef.navigate('Staff', {screen: 'Wage'});
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
                      color: tabclickeq === '3' ? 'blue' : 'white',
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
                      color: tabclickeq === '3' ? 'blue' : 'white',
                      flexWrap: 'wrap',
                    }}>
                    {curlang.staffinfo}{' '}
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
                      x:
                        this.props.coleq > 1
                          ? 0.25 * this.props.coleq * width
                          : 0,
                      animated: false,
                    });
                    this.props.TabLoadChange(false);
                    this.props.TabClick('4');
                    //NavRef.navigate('Staff', {screen: 'Remark'});
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
                      color: tabclickeq === '4' ? 'blue' : 'white',
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
                      color: tabclickeq === '4' ? 'blue' : 'white',
                      flexWrap: 'wrap',
                    }}>
                    {curlang.wage}
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
            disabled={coleq >= 2 ? true : false}
            onPress={() => {
              this.scrollview_ref.scrollTo({
                x: 0.25 * width * coleq,
                animated: true,
              });
            }}>
            <NextIcon
              name="doubleright"
              size={36 * rem}
              style={{
                alignSelf: 'center',
                color: coleq >= 2 ? '#aaaab7' : 'white',
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
      coleq: state.coleq,
      bttabloadeq: state.bttabloadeq,
      tabclickeq: state.tabclickeq,
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
      UpdateCol: coleq =>
        dispatch({
          type: 'updatecoleq',
          coleq,
        }),
      TabLoadChange: bttabloadeq =>
        dispatch({
          type: 'bttabloadchangeeq',
          bttabloadeq,
        }),
      TabClick: tabclickeq =>
        dispatch({
          type: 'tabclickeq',
          tabclickeq,
        }),
    };
  },
)(BottomTabMenuEQ);
