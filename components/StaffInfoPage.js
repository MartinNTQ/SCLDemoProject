/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Dimensions, Text, ImageBackground, Image} from 'react-native';
//import * as NavRef from '../NavRef/NavRef';
import {ConvertDate} from '../function/Function';
import LinearGradient from 'react-native-linear-gradient';
import {encode} from 'base-64';
//import FastImage from 'react-native-fast-image';
import HeaderDO from './HeaderDO';
import BottomTabMenu from './BottomTabMenu';
import * as svg from 'react-native-svg';
const width = Dimensions.get('window').width;
const rem = width / 380;
const lgen = {
  home: 'Home',
  staffinfo: 'Staff Information',
  sno: 'Staff No.',
  joindat: 'Join Date',
  datleft: 'days left',
  anleave: 'Annual Leave',
  tot: 'Total',
  curSal: 'Current Salary',
  mWage: 'Month Wage',
  day: 'Day',
  days: 'days',
  do: 'Daily Output',
  wage: 'Wage',
  remark: 'Remark',
};
const lgcn = {
  home: '首頁',
  staffinfo: '員工資料',
  sno: '員工編號',
  joindat: '入職日期',
  datleft: '天剩餘',
  anleave: '有薪年假',
  tot: '總共',
  curSal: '當月工資',
  mWage: '月工資',
  day: '天數',
  days: '天',
  do: '日產量',
  wage: '工資',
  remark: '備註',
};
const lgvn = {
  home: 'Trang Chủ',
  staffinfo: 'Thông Tin Nhân Viên',
  sno: 'Mã Nhân Viên',
  joindat: 'Ngày Vào Công Ty',
  datleft: 'ngày còn lại',
  anleave: 'Phép Năm',
  tot: 'Tổng Cộng',
  curSal: 'Lương Hiện Tại',
  mWage: 'Lương Tháng',
  day: 'Ngày',
  days: 'ngày',
  do: 'Sản Lượng Hàng Ngày',
  wage: 'Lương',
  remark: 'Ghi Chú',
};

class EQChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EEinfo: [],
    };
  }
  componentDidMount() {
    var EEsapiorg = [
      {
        band: '01',
        sno: '180001',
        enm: 'DAO THI HA',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 3.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '01',
        sno: '180002',
        enm: 'VU THI LY',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 2.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '01',
        sno: '999993',
        enm: 'TRAN THANH TUNG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 1.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '01',
        sno: '180004',
        enm: 'HOANG THI HAI YEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 0.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '01',
        sno: '180005',
        enm: 'BUI THI THOM',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 2,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '01',
        sno: '180006',
        enm: 'LE THI HOA',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 4,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '01',
        sno: '180007',
        enm: 'NGUYEN THI HUYEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 4.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '01',
        sno: '180008',
        enm: 'TA THI QUE',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 3.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '01',
        sno: '999999',
        enm: 'LAM THI THU TRANG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 3.0,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '01',
        sno: '180010',
        enm: 'PHAM THI LY',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 3.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '02',
        sno: '180111',
        enm: 'BUI THI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 3.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '02',
        sno: '180011',
        enm: 'DIEN THI LE',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 2.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '02',
        sno: '180012',
        enm: 'LA THI CAM',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 3.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '02',
        sno: '180013',
        enm: 'TA THI NGOC ANH',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 3.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '02',
        sno: '180014',
        enm: 'DINH THI BINH',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 3.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '02',
        sno: '170620',
        enm: 'LE VAN CUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 2.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '02',
        sno: '180016',
        enm: 'VU THI DUYEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 3.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '02',
        sno: '180017',
        enm: 'DINH XUAN DINH',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '02',
        sno: '180018',
        enm: 'NGUYEN THI GAM',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '02',
        sno: '180019',
        enm: 'TA TUAN HA',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '02',
        sno: '180020',
        enm: 'PHAM VAN HAI',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '03',
        sno: '180021',
        enm: 'TA QUOC HUNG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '03',
        sno: '180022',
        enm: 'BUI HOA MAI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '03',
        sno: '180122',
        enm: 'NGUYEN THI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '03',
        sno: '180023',
        enm: 'DAO THI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 4.5,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '03',
        sno: '180024',
        enm: 'TRAN VAN KHU',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 4.8,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '03',
        sno: '180025',
        enm: 'LE THI PHUONG LAN',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '03',
        sno: '180026',
        enm: 'DAO THI THUY LINH',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '03',
        sno: '180027',
        enm: 'DO QUOC SON',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '03',
        sno: '180028',
        enm: 'NGUYEN THANH QUYET',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '03',
        sno: '180029',
        enm: 'PHAM THI NHE',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
      {
        band: '03',
        sno: '180030',
        enm: 'PHAM CONG VIEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
        anltot: (Math.floor(Math.random() * (140 + 1)) + 0) / 10,
        usanl: (Math.floor(Math.random() * (160 + 1)) + 0) / 10,
        wage: (Math.floor(Math.random() * (1500 + 1)) + 10) / 100,
      },
    ];
    const {eesnoclick} = this.props;
    //console.log(eesnoclick + '');
    var useinfo = EEsapiorg.filter(item => {
      return item.sno === eesnoclick;
    }).map(item => {
      var o = Object.assign({}, item);
      o.djn = ConvertDate(item.djn);
      return o;
    });
    this.setState({
      EEinfo: useinfo,
    });
  }
  render() {
    const monthdays = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0,
    ).getDate();
    const {eesnoclick} = this.props;
    const todays = new Date().getDate();
    const {lang} = this.props;
    const enm = this.state.EEinfo.map(item => {
      return item.enm;
    });
    const pos = this.state.EEinfo.map(item => {
      return item.pos;
    });
    const usanl = this.state.EEinfo.map(item => {
      return item.usanl;
    });

    const anltot = this.state.EEinfo.map(item => {
      return item.anltot;
    });
    const wage = this.state.EEinfo.map(item => {
      return item.wage;
    });
    const curlang = lang === 'EN' ? lgen : lang === 'CN' ? lgcn : lgvn;
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          alignItem: 'center',
          justifyContent: 'center',
        }}>
        <HeaderDO title={curlang.staffinfo} home={curlang.home} />
        <View
          style={{
            flex: 6,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 2.5,
              marginLeft: 15 * rem,
              flexDirection: 'column',
              alignItem: 'center',
              justifyContent: 'center',
            }}>
            <LinearGradient
              start={{
                x: 0,
                y: 0.5,
              }}
              end={{
                x: 1,
                y: 0.5,
              }}
              colors={['tomato', 'orange', 'yellow']}
              style={{
                width: 152 * rem,
                height: 152 * rem,
                borderRadius: 76 * rem,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ImageBackground
                style={{
                  width: 150 * rem,
                  height: 150 * rem,
                  alignSelf: 'center',
                  alignItem: 'center',
                  justifyContent: 'center',
                  borderRadius: 75 * rem,
                }}
                imageStyle={{
                  borderRadius: 75 * rem,
                }}
                source={require('../image/noavatar.jpg')}>
                <Image
                  style={{
                    width: 150 * rem,
                    height: 150 * rem,
                    alignSelf: 'center',
                    borderRadius: 75 * rem,
                  }}
                  source={{
                    uri:
                      `http://116.97.244.58:8080/photos/${eesnoclick}` + '.jpg',
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
              flex: 3,
              marginLeft: 5 * rem,
              flexDirection: 'column',
              alignItem: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16 * rem,
                color: 'gray',
              }}>
              {enm}
            </Text>
            <Text
              style={{
                fontSize: 16 * rem,
                color: 'gray',
              }}>
              {pos}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20 * rem,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItem: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 13 * rem,
                    color: 'gray',
                  }}>
                  {curlang.sno}
                </Text>
                <Text
                  style={{
                    fontSize: 13 * rem,
                    color: 'gray',
                  }}>
                  {curlang.joindat}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItem: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 13 * rem,
                    color: 'gray',
                  }}>
                  : {eesnoclick}
                </Text>
                <Text
                  style={{
                    fontSize: 13 * rem,
                    color: 'gray',
                  }}>
                  :
                  {` ${this.state.EEinfo.map(item => {
                    return item.djn;
                  })}`}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 4,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItem: 'center',
                justifyContent: 'flex-start',
                marginLeft: 20 * rem,
              }}>
              <Text
                style={{
                  fontSize: 16 * rem,
                  color: 'gray',
                }}>
                {curlang.anleave}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItem: 'center',
                justifyContent: 'flex-end',
                marginRight: 20 * rem,
              }}>
              <Text
                style={{
                  fontSize: 16 * rem,
                  color: 'gray',
                }}>
                {` ${(anltot - usanl).toFixed(1)} `}
                {curlang.datleft}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 20 * rem,
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                color: 'gray',
              }}>
              {curlang.tot} :{` ${(anltot / 1).toFixed(1)} `}
              {curlang.days}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20 * rem,
              marginRight: 20 * rem,
            }}>
            <svg.Svg height="100%" width="100%" viewBox="0 0 1000 200">
              <svg.Circle cx="34" cy="84" r="24" fill="#c2d0d3" />
              <svg.Rect x="34" y="60" width="950" height="48" fill="#c2d0d3" />
              <svg.Circle cx="980" cy="84" r="24" fill="#c2d0d3" />
              <svg.Circle
                cx={
                  (usanl * 976) / anltot < 70
                    ? 70
                    : (usanl * 976) / anltot > 926
                    ? 926
                    : ((usanl * 976) / anltot).toFixed(0)
                }
                cy="84"
                r="70"
                fill="#c2d0d3"
              />
              <svg.Rect
                x="24"
                y="50"
                width={
                  (usanl * 976) / anltot < 70
                    ? 70
                    : (usanl * 976) / anltot > 931
                    ? 931
                    : ((usanl * 976) / anltot).toFixed(0)
                }
                height="48"
                fill="orange"
              />
              <svg.Circle cx="24" cy="74" r="24" fill="orange" />
              <svg.Rect
                x={
                  (usanl * 976) / anltot < 70
                    ? 70
                    : (usanl * 976) / anltot > 931
                    ? 931
                    : ((usanl * 976) / anltot).toFixed(0)
                }
                y="50"
                width={
                  (usanl * 976) / anltot < 70
                    ? 906
                    : (usanl * 976) / anltot > 931
                    ? 50
                    : (976 - (usanl * 976) / anltot).toFixed(0)
                }
                height="48"
                fill="#aaaab7"
              />
              <svg.Circle cx="976" cy="74" r="24" fill="#aaaab7" />
              <svg.Circle
                cx={
                  (usanl * 976) / anltot < 70
                    ? 70
                    : (usanl * 976) / anltot > 931
                    ? 931
                    : ((usanl * 976) / anltot).toFixed(0)
                }
                cy="74"
                r="70"
                fill="orange"
              />
              <svg.Circle
                cx={
                  (usanl * 976) / anltot < 70
                    ? 70
                    : (usanl * 976) / anltot > 931
                    ? 931
                    : ((usanl * 976) / anltot).toFixed(0)
                }
                cy="74"
                r="60"
                fill="white"
              />
              <svg.Text
                x={
                  usanl >= 10
                    ? (usanl * 976) / anltot - 35 < 70
                      ? 30
                      : (usanl * 976) / anltot - 35 > 906
                      ? 896
                      : ((usanl * 976) / anltot - 35).toFixed(0)
                    : (usanl * 976) / anltot - 25 < 70
                    ? 40
                    : (usanl * 976) / anltot - 25 > 906
                    ? 906
                    : ((usanl * 976) / anltot - 25).toFixed(0)
                }
                y="74"
                fontSize="40"
                stroke="gray"
                fill="gray">
                {(usanl / 1).toFixed(1)}
              </svg.Text>
              <svg.Text
                x={
                  lang === 'CN'
                    ? (usanl * 976) / anltot - 15 < 70
                      ? 50
                      : (usanl * 976) / anltot - 15 > 906
                      ? 916
                      : ((usanl * 976) / anltot - 15).toFixed(0)
                    : (usanl * 976) / anltot - 25 < 70
                    ? 40
                    : (usanl * 976) / anltot - 25 > 906
                    ? 906
                    : ((usanl * 976) / anltot - 25).toFixed(0)
                }
                y="104"
                fontSize="30"
                stroke="gray"
                fill="gray">
                {curlang.days}
              </svg.Text>
            </svg.Svg>
          </View>
        </View>
        <View
          style={{
            flex: 6,
            flexDirection: 'column',
            alignItem: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItem: 'center',
                justifyContent: 'flex-start',
                marginLeft: 20 * rem,
              }}>
              <Text
                style={{
                  fontSize: 16 * rem,
                  color: 'gray',
                }}>
                {curlang.curSal}:
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 20 * rem,
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                color: 'gray',
              }}>
              {curlang.mWage}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20 * rem,
              marginRight: 20 * rem,
            }}>
            <svg.Svg height="100%" width="100%" viewBox="0 0 1000 200">
              <svg.Rect x="34" y="60" width="950" height="48" fill="#c2d0d3" />
              <svg.Circle cx="34" cy="84" r="24" fill="#c2d0d3" />
              <svg.Circle cx="980" cy="84" r="24" fill="#c2d0d3" />
              <svg.Circle
                cx={
                  (todays / monthdays) * 1000 - 18 < 70
                    ? 70
                    : (todays / monthdays) * 1000 - 18 > 926
                    ? 926
                    : (todays / monthdays) * 1000 - 18
                }
                cy="84"
                r="70"
                fill="#c2d0d3"
              />
              <svg.Rect
                x="24"
                y="50"
                width={(todays / monthdays) * 1000 - 40}
                height="48"
                fill="#820f6a"
              />
              <svg.Circle cx="24" cy="74" r="24" fill="#820f6a" />
              <svg.Rect
                x={(todays / monthdays) * 1000 - 18}
                y="50"
                width={(1 - todays / monthdays) * 1000}
                height="48"
                fill="#aaaab7"
              />
              <svg.Circle cx="976" cy="74" r="24" fill="#aaaab7" />
              <svg.Circle
                cx={
                  (todays / monthdays) * 1000 - 18 < 70
                    ? 70
                    : (todays / monthdays) * 1000 - 18 > 926
                    ? 926
                    : (todays / monthdays) * 1000 - 18
                }
                cy="74"
                r="70"
                fill="#820f6a"
              />
              <svg.Circle
                cx={
                  (todays / monthdays) * 1000 - 18 < 70
                    ? 70
                    : (todays / monthdays) * 1000 - 18 > 926
                    ? 926
                    : (todays / monthdays) * 1000 - 18
                }
                cy="74"
                r="60"
                fill="white"
              />
              <svg.Text
                x={
                  (todays / monthdays) * 1000 - 30 < 70
                    ? 60
                    : (todays / monthdays) * 1000 - 30 > 926
                    ? 916
                    : (todays / monthdays) * 1000 - 30
                }
                y="84"
                fontSize="40"
                stroke="gray"
                fill="gray">
                đ
              </svg.Text>
              <svg.Text
                x={wage > 10 ? 780 : 800}
                y="0"
                fontSize="50"
                stroke="gray"
                fill="gray">
                đ {(wage / 1).toFixed(2)}M
              </svg.Text>
              <svg.Rect x="10" y="200" width="986" height="5" fill="black" />
              <svg.Circle cx="10" cy="202.5" r="10" fill="black" />
              <svg.Text x="0" y="170" fontSize="30" stroke="black" fill="black">
                {curlang.day}
              </svg.Text>
              <svg.Text x="0" y="250" fontSize="30" stroke="black" fill="black">
                1
              </svg.Text>
              <svg.Circle
                cx={(5 / monthdays) * 986 - 10}
                cy="202.5"
                r="10"
                fill="black"
              />
              <svg.Text
                x={(5 / monthdays) * 986 - 20}
                y="250"
                fontSize="30"
                stroke="black"
                fill="black">
                5
              </svg.Text>
              <svg.Circle
                cx={(10 / monthdays) * 986 - 10}
                cy="202.5"
                r="10"
                fill="black"
              />
              <svg.Text
                x={(10 / monthdays) * 986 - 30}
                y="250"
                fontSize="30"
                stroke="black"
                fill="black">
                10
              </svg.Text>
              <svg.Circle
                cx={(15 / monthdays) * 986 - 10}
                cy="202.5"
                r="10"
                fill="black"
              />
              <svg.Text
                x={(15 / monthdays) * 986 - 30}
                y="250"
                fontSize="30"
                stroke="black"
                fill="black">
                15
              </svg.Text>
              <svg.Circle
                cx={(20 / monthdays) * 986 - 10}
                cy="202.5"
                r="10"
                fill="black"
              />
              <svg.Text
                x={(20 / monthdays) * 986 - 30}
                y="250"
                fontSize="30"
                stroke="black"
                fill="black">
                20
              </svg.Text>
              <svg.Circle
                cx={(25 / monthdays) * 986 - 10}
                cy="202.5"
                r="10"
                fill="black"
              />
              <svg.Text
                x={(25 / monthdays) * 986 - 30}
                y="250"
                fontSize="30"
                stroke="black"
                fill="black">
                25
              </svg.Text>
              {monthdays <= 30 && (
                <svg.Circle cx={986} cy="202.5" r="10" fill="black" />
              )}
              {monthdays <= 30 && (
                <svg.Text
                  x={986 - 20}
                  y="250"
                  fontSize="30"
                  stroke="black"
                  fill="black">
                  {monthdays}
                </svg.Text>
              )}
              {monthdays > 30 && (
                <svg.Circle
                  cx={(30 / monthdays) * 986 - 10}
                  cy="202.5"
                  r="10"
                  fill="black"
                />
              )}
              {monthdays > 30 && (
                <svg.Circle cx={986} cy="202.5" r="10" fill="black" />
              )}
              {monthdays > 30 && (
                <svg.Text
                  x={(30 / monthdays) * 986 - 30}
                  y="250"
                  fontSize="30"
                  stroke="black"
                  fill="black">
                  30
                </svg.Text>
              )}
              {monthdays > 30 && (
                <svg.Text
                  x={986 - 20}
                  y="250"
                  fontSize="30"
                  stroke="black"
                  fill="black">
                  {monthdays}
                </svg.Text>
              )}
              <svg.Circle
                cx={
                  todays === 1
                    ? 10
                    : todays === monthdays
                    ? 986
                    : (todays / monthdays) * 986 - 10
                }
                cy="202.5"
                r="10"
                fill="purple"
              />
            </svg.Svg>
          </View>
        </View>
        <BottomTabMenu />
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
      eesnoclick: state.eesnoclick,
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
      UpdateCol: col => dispatch({type: 'updatecol', col}),
    };
  },
)(EQChart);
