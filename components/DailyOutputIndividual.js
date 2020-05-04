/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/no-string-refs */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Rating} from 'react-native-ratings';
import {
  View,
  Dimensions,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
} from 'react-native';
//import * as NavRef from '../NavRef/NavRef';
import {ConvertDate} from '../function/Function';
import ModalDropdown from 'react-native-modal-dropdown';
import BottomTabMenu from './BottomTabMenu';
import HeaderDO from './HeaderDO';
import {encode} from 'base-64';
import * as svg from 'react-native-svg';
const width = Dimensions.get('window').width;
const rem = width / 380;
const lgen = {
  dot: 'Daily Output (Team)',
  home: 'Home',
  band: 'Band',
  leader: 'Leader',
  po: 'P.O.',
  linesup: 'Line Suppervisor',
  style: 'Style',
  prodmanager: 'Production Manager',
  sewstdat: 'Sewing Start Date',
  sewfndat: 'Sewing Finish Date',
  exit: 'Exit',
  search: 'Search',
  sort: 'Sort',
  WorkingProcess: 'Working Process',
  OK: 'OK',
  Sortby: 'Sort by',
  StaffName: 'Staff Name',
  Cancel: 'Cancel',
};
const lgcn = {
  dot: '日產量（組）',
  home: '首頁',
  band: '組別',
  leader: '組長',
  po: '製單',
  linesup: '層長',
  style: '款號',
  prodmanager: '生產經理',
  sewstdat: '車縫開始期',
  sewfndat: '車縫完成期',
  exit: '退出',
  search: '搜索',
  sort: '排序',
  WorkingProcess: '生產進度',
  OK: '確認',
  Sortby: '排列方式',
  StaffName: '員工姓名',
  Cancel: '取消',
};
const lgvn = {
  dot: 'Sản Lượng Hàng Ngày (Tổ)',
  home: 'Trang Chủ',
  band: 'Tổ',
  leader: 'Tổ Trưởng',
  po: 'P.O.',
  linesup: 'Giám Sát',
  style: 'Mã Kiểu',
  prodmanager: 'Giám Đốc Sản Xuất',
  sewstdat: 'Ngày Bắt Đầu May',
  sewfndat: 'Ngày Hoàn Thành May',
  exit: 'Thoát',
  search: 'Tìm Kiếm',
  sort: 'Lọc',
  WorkingProcess: 'Tiến Độ Công Việc',
  OK: 'OK',
  Sortby: 'Lọc Bởi',
  StaffName: 'Tên Nhân Viên',
  Cancel: 'Hủy',
};
class DailyOutputIndividual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      POBandapi: [],
      POStepapi: [],
      userinfo: [],
      selectPO: false,
      po: '',
      POlist: [],
      Steplist: [],
      POinfo: [],
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
        sno: '180022',
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
    var POBandapiorg = [
      {
        po: '0v0001',
        band: '01',
        style: 'QAZXC',
        sewingstartdate: '20191231',
        sewingfinishdate: '20200308',
        led: 'Nguyen Van A',
        sup: 'Tran Van A',
        pmg: 'Lam',
      },
      {
        po: '0v0001',
        band: '02',
        style: 'QAZXC',
        sewingstartdate: '20191231',
        sewingfinishdate: '20200308',
        led: 'Nguyen Van B',
        sup: 'Tran Van A',
        pmg: 'Lam',
      },
      {
        po: '0v0002',
        band: '02',
        style: 'QAZXD',
        sewingstartdate: '20200131',
        sewingfinishdate: '20200505',
        led: 'Nguyen Van B',
        sup: 'Tran Van A',
        pmg: 'Lam',
      },
      {
        po: '0v0002',
        band: '01',
        style: 'QAZXD',
        sewingstartdate: '20200131',
        sewingfinishdate: '20200505',
        led: 'Nguyen Van B',
        sup: 'Tran Van A',
        pmg: 'Lam',
      },
      {
        po: '0v0002',
        band: '03',
        style: 'QAZXD',
        sewingstartdate: '20200131',
        sewingfinishdate: '20200505',
        led: 'Nguyen Van C',
        sup: 'Tran Van A',
        pmg: 'Lam',
      },
      {
        po: '0v0003',
        band: '03',
        style: 'QAZXE',
        sewingstartdate: '20200315',
        sewingfinishdate: '20200808',
        led: 'Nguyen Van C',
        sup: 'Tran Van A',
        pmg: 'Lam',
      },
    ];
    var POStepapiorg = [
      {
        sno: '180001',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180002',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '999993',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180004',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180005',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180006',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180007',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180008',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '999999',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '999999',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180010',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180111',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180011',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180012',
        po: '0v0001',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180013',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180014',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '170620',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180016',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180017',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180018',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180019',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180020',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180021',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180022',
        po: '0v0002',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180022',
        po: '0v0003',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180023',
        po: '0v0003',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180024',
        po: '0v0003',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180025',
        po: '0v0003',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180026',
        po: '0v0003',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180027',
        po: '0v0003',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180028',
        po: '0v0003',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180029',
        po: '0v0003',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
      {
        sno: '180030',
        po: '0v0003',
        stepinfo: [
          {
            step: '001',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '002',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '003',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '004',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '005',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '006',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '007',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '008',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '009',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
          {
            step: '010',
            step_per: (Math.floor(Math.random() * (99 + 1)) + 0) / 100,
          },
        ],
      },
    ];
    const {eesnoclick} = this.props;
    var userinfo = EEsapiorg.filter(item => {
      return item.sno === eesnoclick;
    }).map(item => {
      var o = Object.assign({}, item);
      o.djn = ConvertDate(item.djn);
      return o;
    });
    var POStepapi = POStepapiorg.filter(item => {
      return item.sno === eesnoclick;
    });
    var POlist = POStepapi.map(item => {
      return item.po;
    });
    var Steplist = this.UpdateSteplist(POStepapi, POlist[0]);
    var band = userinfo.map(item => {
      return item.band;
    })[0];
    var POBandapi = POBandapiorg.filter(item => {
      return item.band === band;
    });
    //console.log(POBandapi);
    var POinfo = this.UpdatePOlist(POBandapi, POlist[0]);
    if (!this.state.selectPO) {
      this.setState({
        POBandapi: POBandapi,
        POStepapi: POStepapi,
        userinfo: userinfo,
        po: POlist[0],
        POlist: POlist,
        Steplist: Steplist,
        POinfo: POinfo,
      });
    }
  }
  UpdatePOlist = (POlist, po) => {
    return POlist.filter(item => {
      return item.po === po;
    });
  };
  UpdateSteplist = (Steplist, po) => {
    return Steplist.filter(item => {
      return item.po === po;
    }).map(item => {
      return item.stepinfo;
    })[0];
  };
  render() {
    const {lang} = this.props;
    const band = this.state.userinfo.map(item => {
      return item.band;
    })[0];
    const leader = this.state.POinfo.map(item => {
      return item.led;
    })[0];
    const po = this.state.po;
    const sup = this.state.POinfo.map(item => {
      return item.sup;
    })[0];
    const pmg = this.state.POinfo.map(item => {
      return item.pmg;
    })[0];
    const style = this.state.POinfo.map(item => {
      return item.style;
    })[0];
    const sewingstartdate = ConvertDate(
      `${
        this.state.POinfo.map(item => {
          return item.sewingstartdate;
        })[0]
      }`,
    );
    const sewingfinishdate = ConvertDate(
      `${
        this.state.POinfo.map(item => {
          return item.sewingfinishdate;
        })[0]
      }`,
    );
    const enm = this.state.userinfo.map(item => {
      return item.enm;
    })[0];
    const pos = this.state.userinfo.map(item => {
      return item.pos;
    })[0];
    const sco = this.state.userinfo.map(item => {
      return item.sco;
    })[0];
    const sno = this.props.eesnoclick;
    //console.log(this.state.Steplist);
    //const sorttype = this.state.sorttype;
    const curlang = lang === 'EN' ? lgen : lang === 'CN' ? lgcn : lgvn;
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          alignItem: 'center',
          justifyContent: 'center',
        }}>
        <HeaderDO title={'Daily Ouput Individual'} home={'Home'} />
        <View
          style={{
            flex: 3.6,
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <View style={styles.headerStyle}>
            <View style={styles.col1Style}>
              <Text style={styles.headertextStyle}>{curlang.band}</Text>
            </View>
            <View style={styles.col2Style}>
              <Text style={styles.headertextStyle}>: {band}</Text>
            </View>
            <View style={styles.col3Style}>
              <Text style={styles.headertextStyle}>{curlang.leader}</Text>
            </View>
            <View style={styles.col4Style}>
              <Text style={styles.headertextStyle}>: {leader}</Text>
            </View>
          </View>
          <View style={styles.headerStyle}>
            <View style={styles.col1Style}>
              <Text style={styles.headertextStyle}>{curlang.po}</Text>
            </View>
            <View style={styles.col2Style}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.headertextStyle}>: </Text>
                <ModalDropdown
                  ref="podropdown"
                  dropdownStyle={{
                    height:
                      this.state.POlist.length >= 10
                        ? 380 * rem
                        : this.state.POlist.length * 38 * rem,
                  }}
                  dropdownTextStyle={{
                    fontSize: 12 * rem,
                    color: 'gray',
                    width: 55 * rem,
                    height: 38 * rem,
                  }}
                  textStyle={{fontSize: 12 * rem, color: 'gray'}}
                  defaultValue={po}
                  options={this.state.POlist}
                  style={{backgroundColor: '#00000018', width: 55 * rem}}
                  onSelect={(index, value) => {
                    this.setState({
                      selectPO: true,
                      po: value,
                      Steplist: this.UpdateSteplist(
                        this.state.POStepapi,
                        value,
                      ),
                      POinfo: this.UpdatePOlist(this.state.POBandapi, value),
                    });
                  }}
                />
              </View>
            </View>
            <View style={styles.col3Style}>
              <Text style={styles.headertextStyle}>{curlang.linesup}</Text>
            </View>
            <View style={styles.col4Style}>
              <Text style={styles.headertextStyle}>: {sup}</Text>
            </View>
          </View>
          <View style={styles.headerStyle}>
            <View style={styles.col1Style}>
              <Text style={styles.headertextStyle}>{curlang.style}</Text>
            </View>
            <View style={styles.col2Style}>
              <Text style={styles.headertextStyle}>: {style}</Text>
            </View>
            <View style={styles.col3Style}>
              <Text style={styles.headertextStyle}>{curlang.prodmanager}</Text>
            </View>
            <View style={styles.col4Style}>
              <Text style={styles.headertextStyle}>: {pmg}</Text>
            </View>
          </View>
        </View>
        <View style={styles.sewingdateStyle}>
          <View style={styles.col1Style}>
            <Text style={styles.textStyledate}>
              {curlang.sewstdat} : {sewingstartdate}
            </Text>
          </View>
          <View style={{flex: 1.5, flexDirection: 'column'}}>
            <Text style={styles.textStyledate}>
              {curlang.sewfndat} : {sewingfinishdate}
            </Text>
          </View>
        </View>
        <View style={styles.eeinfoStyle}>
          <ImageBackground
            style={{
              width: 50 * rem,
              height: 50 * rem,
              marginLeft: 25 * rem,
              alignSelf: 'center',
              borderRadius: 25 * rem,
            }}
            imageStyle={{borderRadius: 25 * rem}}
            source={require('../image/noavatar.jpg')}>
            <Image
              style={{
                width: 50 * rem,
                height: 50 * rem,
                alignSelf: 'center',
                borderRadius: 25 * rem,
              }}
              source={{
                uri: `http://116.97.244.58:8080/photos/${sno}` + '.jpg',
                headers: {
                  Authorization: 'Basic ' + encode('admin:P@ssw0rd1'),
                },
              }}
            />
          </ImageBackground>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text style={styles.textStyle}>{enm}</Text>
            <Text style={styles.textStyle}>{pos}</Text>
            <Text style={styles.textStyle}>Staff No. : {sno}</Text>
          </View>
          <Rating
            imageSize={16 * rem}
            type="custom"
            ratingCount={5}
            readonly
            startingValue={sco}
            ratingColor="orange"
            ratingBackgroundColor="gray"
            style={{
              alignSelf: 'center',
              marginRight: 25 * rem,
            }}
          />
        </View>
        <View style={styles.seqinfoStyle}>
          <FlatList
            data={this.state.Steplist}
            renderItem={({item, index}) => (
              <View
                style={{
                  height: 60 * rem,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <svg.Svg height="100%" width="100%" viewBox="0 0 1000 100">
                  <svg.Defs>
                    <svg.RadialGradient
                      id="gradcolor"
                      cx="10%"
                      cy="60%"
                      rx="30%"
                      ry="90%"
                      fx="50%"
                      fy="50%"
                      gradientUnits="userSpaceOnUse">
                      <svg.Stop
                        offset="40%"
                        stopColor="rgb(0,169,24)"
                        stopOpacity="1"
                      />
                      <svg.Stop
                        offset="60%"
                        stopColor="rgb(0,169,54)"
                        stopOpacity="1"
                      />
                      <svg.Stop
                        offset="80%"
                        stopColor="rgb(0,169,84)"
                        stopOpacity="1"
                      />
                      <svg.Stop
                        offset="100%"
                        stopColor="rgb(0,169,114)"
                        stopOpacity="1"
                      />
                    </svg.RadialGradient>
                  </svg.Defs>
                  <svg.Text
                    x="100"
                    y="20"
                    fontSize="40"
                    stroke="black"
                    fill="black">
                    {item.step}
                  </svg.Text>
                  <svg.Circle cx="110" cy="90" r="40" fill="#c2d0d3" />
                  <svg.Rect
                    x="110"
                    y="50"
                    width="800"
                    height="80"
                    fill="#c2d0d3"
                  />
                  <svg.Circle cx="910" cy="90" r="40" fill="#c2d0d3" />
                  <svg.Circle cx="100" cy="80" r="40" fill="rgb(234,0,0)" />
                  <svg.Rect
                    x="100"
                    y="40"
                    width="800"
                    height="80"
                    fill="rgb(234,0,0)"
                  />
                  <svg.Circle cx="900" cy="80" r="40" fill="rgb(234,0,0)" />
                  <svg.Circle cx="100" cy="80" r="40" fill="url(#gradcolor)" />
                  <svg.Rect
                    x="100"
                    y="40"
                    width={(item.step_per * 800).toFixed(0)}
                    height="80"
                    fill="url(#gradcolor)"
                  />
                  <svg.Circle
                    cx={(100 + item.step_per * 800).toFixed(0)}
                    cy="80"
                    r="40"
                    fill="url(#gradcolor)"
                  />
                  <svg.Text
                    x={
                      item.step_per * 100 > 10
                        ? (50 + item.step_per * 800).toFixed(0)
                        : (70 + item.step_per * 800).toFixed(0)
                    }
                    y="90"
                    fontSize="40"
                    stroke="white"
                    fill="white">
                    {`${(item.step_per * 100).toFixed(0)}%`}
                  </svg.Text>
                  <svg.Text
                    x={(1 - item.step_per) * 100 > 10 ? 850 : 870}
                    y="90"
                    fontSize="40"
                    stroke="white"
                    fill="white">
                    {50 + item.step_per * 800 > 800
                      ? ''
                      : `${((1 - item.step_per) * 100).toFixed(0)}%`}
                  </svg.Text>
                </svg.Svg>
              </View>
            )}
            keyExtractor={item => item.step}
          />
        </View>
        <BottomTabMenu />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headertextStyle: {
    color: 'gray',
    fontSize: 12 * rem,
  },
  textStyle: {
    color: 'gray',
    fontSize: 11 * rem,
  },
  textStyledate: {
    color: 'gray',
    fontSize: 10.5 * rem,
  },
  textrateLStyle: {
    marginRight: 5 * rem,
    alignSelf: 'flex-end',
    color: 'rgb(187,212,255)',
    fontSize: 13 * rem,
  },
  textrateRStyle: {
    marginLeft: 5 * rem,
    alignSelf: 'flex-start',
    color: 'rgb(207,132,225)',
    fontSize: 13 * rem,
  },
  col1Style: {marginLeft: 10 * rem, flex: 1.5, flexDirection: 'column'},
  col2Style: {flex: 2.5, flexDirection: 'column'},
  col3Style: {flex: 3.5, flexDirection: 'column'},
  col4Style: {flex: 4, flexDirection: 'column'},
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gainsboro',
    alignItems: 'center',
  },
  sewingdateStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eeinfoStyle: {
    height: 60 * rem,
    backgroundColor: 'rgb(255,255,190)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  seqinfoStyle: {
    flex: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
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
        dispatch({type: 'update', EElistapi, EElist}),
      UpdateCol: col => dispatch({type: 'updatecol', col}),
    };
  },
)(DailyOutputIndividual);
