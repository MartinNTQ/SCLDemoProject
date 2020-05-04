/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Dimensions,
  Text,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
//import * as NavRef from '../NavRef/NavRef';
import {
  ConvertDay,
  ConvertDate,
  currencyFormat,
  monthName,
  last_number_Month,
} from '../function/Function';
import LinearGradient from 'react-native-linear-gradient';
import {encode} from 'base-64';
//import FastImage from 'react-native-fast-image';
import HeaderDO from './HeaderDO';
import BottomTabMenu from './BottomTabMenu';
const width = Dimensions.get('window').width;
const rem = width / 380;
const lgen = {
  home: 'Home',
  sno: 'Staff No.',
  joindat: 'Join Date',
  curmonth: 'Current Month',
  do: 'Daily Output',
  wages: 'Wages',
  l7dw: 'Last 7 days wages',
  date: 'Date',
  rbelow: 'Red=Below 157,000',
  l3mwage: 'Last 3 month wages',
};
const lgcn = {
  home: '首頁',
  sno: '員工編號',
  joindat: '入職日期',
  curmonth: '當月',
  do: '日產量',
  wages: '工資',
  l7dw: '最近7天的工資',
  date: '日期',
  rbelow: '紅色=低于157，000',
  l3mwage: '最近3個月的工資',
};
const lgvn = {
  home: 'Trang Chủ',
  sno: 'Mã Nhân Viên',
  joindat: 'Ngày Vào Công Ty',
  curmonth: 'Tháng Hiện Tại',
  mWage: 'Lương Tháng',
  do: 'Sản Lượng Hàng Ngày',
  wages: 'Lương',
  l7dw: 'Lương 7 Ngày Vừa Qua',
  date: 'Ngày',
  rbelow: 'Đỏ = Dưới 157,000',
  l3mwage: 'Lương 3 Tháng Vừa Qua',
};

class Wage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EEinfo: [],
    };
  }
  componentDidMount() {
    var EEsapiorg = [
      {
        sno: '180001',
        enm: 'DAO THI HA',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180002',
        enm: 'VU THI LY',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '999993',
        enm: 'TRAN THANH TUNG',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180004',
        enm: 'HOANG THI HAI YEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180005',
        enm: 'BUI THI THOM',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180006',
        enm: 'LE THI HOA',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180007',
        enm: 'NGUYEN THI HUYEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180008',
        enm: 'TA THI QUE',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '999999',
        enm: 'LAM THI THU TRANG',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180010',
        enm: 'PHAM THI LY',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180111',
        enm: 'BUI THI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180011',
        enm: 'DIEN THI LE',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180012',
        enm: 'LA THI CAM',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180013',
        enm: 'TA THI NGOC ANH',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180014',
        enm: 'DINH THI BINH',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '170620',
        enm: 'LE VAN CUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180016',
        enm: 'VU THI DUYEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180017',
        enm: 'DINH XUAN DINH',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180018',
        enm: 'NGUYEN THI GAM',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180019',
        enm: 'TA TUAN HA',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180020',
        enm: 'PHAM VAN HAI',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180021',
        enm: 'TA QUOC HUNG',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180022',
        enm: 'BUI HOA MAI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180122',
        enm: 'NGUYEN THI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180023',
        enm: 'DAO THI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180024',
        enm: 'TRAN VAN KHU',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180025',
        enm: 'LE THI PHUONG LAN',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180026',
        enm: 'DAO THI THUY LINH',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180027',
        enm: 'DO QUOC SON',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180028',
        enm: 'NGUYEN THANH QUYET',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180029',
        enm: 'PHAM THI NHE',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
      },
      {
        sno: '180030',
        enm: 'PHAM CONG VIEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        wages: [
          {
            date: '20200923',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200924',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200925',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200926',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200927',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200928',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
          {
            date: '20200929',
            wage: Math.floor(Math.random() * (500000 + 100000)) + 0,
          },
        ],
        wagel3: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel2: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        wagel1: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
        curwage: Math.floor(Math.random() * (14000000 + 1000000)) + 3000000,
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
    const {eesnoclick} = this.props;
    const {lang} = this.props;
    const enm = this.state.EEinfo.map(item => {
      return item.enm;
    });
    const pos = this.state.EEinfo.map(item => {
      return item.pos;
    });
    const wages = this.state.EEinfo.map(item => {
      return item.wages;
    })[0];
    console.log(wages);
    const wagel3 = this.state.EEinfo.map(item => {
      return item.wagel3;
    });
    const wagel2 = this.state.EEinfo.map(item => {
      return item.wagel2;
    });
    const wagel1 = this.state.EEinfo.map(item => {
      return item.wagel1;
    });
    const curwage = this.state.EEinfo.map(item => {
      return item.curwage;
    });
    //console.log(wages);
    //const lastmonth1=
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
        <HeaderDO title={curlang.wages} home={curlang.home} />
        <View
          style={{
            flex: 9,
            flexDirection: 'row',
            backgroundColor: 'rgb(230,230,230)',
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
            flex: 9,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: 'rgb(230,230,230)',
            }}>
            <Text
              style={{
                fontSize: 16 * rem,
                color: 'black',
                fontWeight: 'bold',
                alignSelf: 'center',
                marginBottom: 5 * rem,
              }}>
              {curlang.l7dw}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 13 * rem,
                    color: 'black',
                  }}>
                  {curlang.date}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 13 * rem,
                    color: 'black',
                  }}>
                  {curlang.wages}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 7.5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FlatList
                data={wages}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor:
                        index % 2 === 0 ? 'rgb(230,230,230)' : 'white',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 13 * rem,
                          color: 'black',
                        }}>
                        {ConvertDay(item.date)}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 13 * rem,
                          color: item.wage > 157000 ? 'black' : 'rgb(200,0,0)',
                        }}>
                        {currencyFormat(item.wage)}
                      </Text>
                    </View>
                  </View>
                )}
                keyExtractor={item => item.date}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  fontSize: 13 * rem,
                  color: 'rgb(200,0,0)',
                }}>
                {curlang.rbelow}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16 * rem,
              color: 'black',
              fontWeight: 'bold',
              alignSelf: 'flex-end',
              marginBottom: 5 * rem,
            }}>
            {curlang.l3mwage}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                color: 'black',
              }}>
              {monthName(last_number_Month(3), lang)}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                color: 'black',
              }}>
              {monthName(last_number_Month(2), lang)}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                color: 'black',
              }}>
              {monthName(last_number_Month(1), lang)}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                color: 'black',
              }}>
              {curlang.curmonth}
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
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                color: 'black',
              }}>
              {currencyFormat(parseInt(wagel3, 10))}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                color: 'black',
              }}>
              {currencyFormat(parseInt(wagel2, 10))}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                color: 'black',
              }}>
              {currencyFormat(parseInt(wagel1, 10))}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13 * rem,
                color: 'black',
              }}>
              {currencyFormat(parseInt(curwage, 10))}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}
        />
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
)(Wage);
