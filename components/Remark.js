/* eslint-disable react/no-did-mount-set-state */
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
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
//import * as NavRef from '../NavRef/NavRef';
import {ConvertDate} from '../function/Function';
import BottomTabMenu from './BottomTabMenu';
import HeaderDO from './HeaderDO';
import {encode} from 'base-64';
import IconAdd from 'react-native-vector-icons/Ionicons';
import CancelIcon from 'react-native-vector-icons/EvilIcons';
import OkIcon from 'react-native-vector-icons/EvilIcons';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import Androw from 'react-native-androw';
const width = Dimensions.get('window').width;
const rem = width / 380;
const lgen = {
  home: 'Home',
  band: 'Band',
  leader: 'Leader',
  po: 'P.O.',
  linesup: 'Line Suppervisor',
  style: 'Style',
  prodmanager: 'Production Manager',
  sewstdat: 'Sewing Start Date',
  sewfndat: 'Sewing Finish Date',
  OK: 'OK',
  Cancel: 'Cancel',
  remark: 'Remark',
  date: 'Date',
  time: 'Time',
  delete: 'Delete',
  addremark: 'Add Remark',
  words: 'words',
};
const lgcn = {
  home: '首頁',
  band: '組別',
  leader: '組長',
  po: '製單',
  linesup: '層長',
  style: '款號',
  prodmanager: '生產經理',
  sewstdat: '車縫開始期',
  sewfndat: '車縫完成期',
  OK: '確認',
  Cancel: '取消',
  remark: '備註',
  date: '日期',
  time: '時間',
  delete: '刪除',
  addremark: '新增備註',
  words: '字',
};
const lgvn = {
  home: 'Trang Chủ',
  band: 'Tổ',
  leader: 'Tổ Trưởng',
  po: 'P.O.',
  linesup: 'Giám Sát',
  style: 'Mã Kiểu',
  prodmanager: 'Giám Đốc Sản Xuất',
  sewstdat: 'Ngày Bắt Đầu May',
  sewfndat: 'Ngày Hoàn Thành May',
  OK: 'OK',
  Cancel: 'Hủy',
  remark: 'Ghi chú',
  date: 'Ngày',
  time: 'Thời gian',
  delete: 'Xóa',
  addremark: 'Thêm ghi chú',
  words: 'từ',
};
class Remark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      POBandapi: [],
      POStepapi: [],
      userinfo: [],
      remarkList: [],
      addremark: false,
      addremarkclick: false,
      notnullremarklength: 0,
      remark: '',
      index: 0,
      newremark: '',
      po: '',
      POlist: [],
      Steplist: [],
      POinfo: [],
      currentDate: '',
      currentTime: '',
    };
  }
  getcurrentTime() {
    let Year = new Date().getFullYear();
    let Month = new Date().getMonth() + 1;
    let Dates = new Date().getDate();
    let Hours = new Date().getHours();
    let Minutes = new Date().getMinutes();
    //let Seconds = new Date().getSeconds();
    let year = Year.toString();
    let month = Month > 9 ? Month.toString() : '0' + Month.toString();
    let date = Dates > 9 ? Dates.toString() : '0' + Dates.toString();
    let hour = Hours > 9 ? Hours.toString() : '0' + Hours.toString();
    let min = Minutes > 9 ? Minutes.toString() : '0' + Minutes.toString();
    //let sec = Seconds > 9 ? Seconds.toString() : '0' + Seconds.toString();
    this.setState({
      currentTime: hour + ':' + min,
      currentDate: year + '/' + month + '/' + date,
    });
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
    const remarkList = [
      {
        date: '2020/04/05',
        time: '08:05',
        remark: 'Cần cố gắng hơn nữa! Hiệu quả công việc không cao',
      },
      {date: '2020/04/08', time: '09:50', remark: 'XYZASD'},
      {date: '2020/04/09', time: '11:06', remark: 'JKLCVB'},
    ];
    const orglength = remarkList.length;
    for (let index = 0; index < 10 - orglength; index++) {
      remarkList.push({date: '', time: '', remark: ''});
    }
    if (!this.state.selectPO) {
      this.setState({
        POBandapi: POBandapi,
        POStepapi: POStepapi,
        userinfo: userinfo,
        remarkList,
        notnullremarklength: orglength,
        index: 0,
        po: POlist[0],
        POlist: POlist,
        Steplist: Steplist,
        POinfo: POinfo,
      });
    }
  }
  // UNSAFE_componentWillMount() {
  //   this.getcurrentTime();
  // }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  UpdatePOlist = (POlist, po) => {
    return POlist.filter(item => {
      return item.po === po;
    });
  };
  render() {
    const {lang} = this.props;
    const band = this.state.userinfo.map(item => {
      return item.band;
    })[0];
    const sco = this.state.userinfo.map(item => {
      return item.sco;
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
    const sno = this.props.eesnoclick;
    const curlang = lang === 'EN' ? lgen : lang === 'CN' ? lgcn : lgvn;
    const rm = this.state.remark;
    const wordcount = rm.length.toString() + '/150 ' + curlang.words;
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
        <Modal
          transparent={true}
          animationType={'none'}
          visible={this.state.addremark}>
          <View style={styles.modalBackground}>
            <Androw style={styles.shadow}>
              <View style={styles.modalwindowoutside1}>
                <View style={styles.modalwindowoutside2}>
                  <View style={styles.modalwindow}>
                    <View style={styles.modalheader}>
                      <View
                        style={{
                          flex: 1.6,
                          alignSelf: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          alignContent: 'center',
                        }}>
                        <Text style={styles.modalheaderText}>
                          {curlang.remark}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 3.6,
                          alignSelf: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          alignContent: 'center',
                        }}>
                        <Text style={styles.modalheaderText}>
                          {curlang.date + ': ' + this.state.currentDate}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 3,
                          alignSelf: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          alignContent: 'center',
                        }}>
                        <Text style={styles.modalheaderText}>
                          {curlang.time + ': ' + this.state.currentTime}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.modalwindowinside}>
                      <View
                        style={{
                          height: 100 * rem,
                          width: 0.9 * width - 30 * rem,
                        }}>
                        <TextInput
                          textAlignVertical={'top'}
                          multiline
                          maxLength={150}
                          placeholderTextColor="black"
                          style={{
                            height: 100 * rem,
                            width: 0.9 * width - 30 * rem,
                            alignItems: 'flex-start',
                            fontSize: 14 * rem,
                            flexWrap: 'wrap',
                            backgroundColor: 'rgb(242,242,242)',
                            borderRadius: 5 * rem,
                          }}
                          placeholder={curlang.addremark + '............'}
                          onChangeText={newremark => {
                            this.setState({newremark});
                          }}
                          value={
                            this.state.newremark === ''
                              ? this.state.remark
                              : this.state.newremark
                          }
                        />
                        <Text
                          style={{
                            color: 'black',
                            top: 80 * rem,
                            left:
                              0.9 * width -
                              30 * rem -
                              wordcount.length * 6 * rem,
                            position: 'absolute',
                            fontSize: 11 * rem,
                          }}>
                          {wordcount}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          alignContent: 'center',
                          height: 40 * rem,
                          width: 0.9 * width - 30 * rem,
                        }}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignContent: 'center',
                            alignItems: 'flex-end',
                          }}>
                          <TouchableOpacity
                            style={{
                              alignContent: 'center',
                              alignItems: 'center',
                            }}
                            onPress={() => {
                              this.setState({
                                remark: '',
                                newremark: '',
                                addremark: false,
                                addremarkclick: false,
                              });
                              clearInterval(this.timer);
                            }}>
                            <CancelIcon
                              name="close-o"
                              size={31 * rem}
                              style={{color: 'red'}}
                            />
                            <Text style={styles.iconText}>
                              {curlang.Cancel}
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                          }}>
                          <TouchableOpacity
                            style={{
                              alignContent: 'center',
                              alignItems: 'center',
                            }}
                            onPress={() => {
                              if (!this.state.addremarkclick) {
                                let tempremarkList = this.state.remarkList;
                                tempremarkList.splice(this.state.index, 1);
                                tempremarkList.splice(
                                  tempremarkList.length,
                                  0,
                                  {date: '', time: '', remark: ''},
                                );
                                this.setState({
                                  notnullremarklength:
                                    this.state.notnullremarklength - 1,
                                  remarkList: tempremarkList,
                                  addremark: false,
                                });
                              } else {
                                this.setState({
                                  newremark: '',
                                });
                              }
                            }}>
                            <DeleteIcon
                              name="delete"
                              size={24 * rem}
                              style={{color: 'gray'}}
                            />
                            <Text style={styles.iconText}>
                              {curlang.delete}
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            flex: 4,
                            flexDirection: 'column',
                          }}
                        />
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                          }}>
                          <TouchableOpacity
                            style={{
                              alignContent: 'center',
                              alignItems: 'center',
                            }}
                            onPress={() => {
                              if (!this.state.addremarkclick) {
                                if (
                                  this.state.newremark !== this.state.remark &&
                                  this.state.newremark !== ''
                                ) {
                                  let tempremarkList = this.state.remarkList;
                                  tempremarkList[
                                    this.state.index
                                  ].remark = this.state.newremark; //update new remark
                                  this.setState({
                                    addremark: false,
                                    addremarkclick: false,
                                    remarkList: tempremarkList,
                                  });
                                } else {
                                  // exit modal
                                  this.setState({
                                    addremark: false,
                                    addremarkclick: false,
                                  });
                                }
                              } else {
                                //add remark
                                if (this.state.newremark !== '') {
                                  let tempremarkList = this.state.remarkList;
                                  tempremarkList.splice(
                                    this.state.notnullremarklength,
                                    1,
                                  );
                                  this.getcurrentTime();
                                  tempremarkList.splice(
                                    this.state.notnullremarklength,
                                    0,
                                    {
                                      date: this.state.currentDate,
                                      time: this.state.currentTime,
                                      remark: this.state.newremark,
                                    },
                                  );
                                  this.setState({
                                    remarkList: tempremarkList,
                                    newremark: '',
                                    notnullremarklength:
                                      this.state.notnullremarklength + 1,
                                    addremark: false,
                                    addremarkclick: false,
                                  });
                                } else {
                                  // exit modal
                                  this.setState({
                                    addremark: false,
                                    addremarkclick: false,
                                  });
                                }
                              }
                            }}>
                            <OkIcon
                              name="check"
                              size={31 * rem}
                              style={{color: 'green'}}
                            />
                            <Text style={styles.iconText}>{curlang.OK}</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Androw>
          </View>
        </Modal>
        <HeaderDO title={curlang.remark} home={curlang.home} />
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
                <Text style={styles.headertextStyle}>: {po}</Text>
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
        <View style={styles.remarkinfoStyle}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <View
              style={{
                flex: 1.5,
                flexDirection: 'column',
                marginLeft: 15 * rem,
              }}>
              <Text style={styles.textremark}>{curlang.date}</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text style={styles.textremark}>{curlang.time}</Text>
            </View>
            <View
              style={{
                flex: 3,
                flexDirection: 'column',
              }}>
              <Text style={styles.textremark}>{curlang.remark}</Text>
            </View>
          </View>
          <View
            style={{
              height: 320 * rem,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FlatList
              data={this.state.remarkList}
              renderItem={({item, index}) => (
                <View
                  style={{
                    height: 32 * rem,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: index % 2 === 0 ? null : 'white',
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                    }}
                    onPress={() => {
                      if (item.date.trim() !== '') {
                        this.setState({
                          remark: item.remark,
                          addremark: true,
                          addremarkclick: false,
                          newremark: '',
                          index,
                          currentDate: item.date,
                          currentTime: item.time,
                        });
                      }
                    }}>
                    <View
                      style={{
                        flex: 1.5,
                        flexDirection: 'column',
                        marginLeft: 15 * rem,
                      }}>
                      <Text style={styles.textremark}>{item.date}</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                      }}>
                      <Text style={styles.textremark}>{item.time}</Text>
                    </View>
                    <View
                      style={{
                        flex: 3,
                        flexDirection: 'column',
                      }}>
                      <Text style={styles.textremark}>
                        {item.remark !== ''
                          ? item.remark.substring(0, 20) + '...'
                          : ''}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                this.getcurrentTime();
                this.setState({
                  addremark: true,
                  addremarkclick: true,
                  remark: '',
                });
                this.timer = setInterval(() => {
                  this.getcurrentTime();
                }, 1000);
              }}>
              <IconAdd
                name="ios-add-circle-outline"
                size={30}
                style={{
                  marginRight: 2.5 * rem,
                }}
              />
              <Text style={{marginLeft: 2.5 * rem, fontSize: 16 * rem}}>
                {curlang.addremark}
              </Text>
            </TouchableOpacity>
          </View>
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
  textremark: {
    color: 'black',
    fontSize: 15 * rem,
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
  remarkinfoStyle: {
    flex: 26,
    flexDirection: 'column',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  },
  modalwindowoutside1: {
    backgroundColor: 'rgb(149,149,149)',
    height: 200 * rem,
    width: 0.9 * width,
    borderRadius: 10 * rem,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalwindowoutside2: {
    backgroundColor: 'rgb(192,192,192)',
    height: 200 * rem - 3 * rem,
    width: 0.9 * width - 3 * rem,
    borderRadius: 10 * rem,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalwindow: {
    backgroundColor: 'rgb(149,149,149)',
    height: 195 * rem,
    width: 0.9 * width - 5 * rem,
    borderRadius: 10 * rem,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  modalheader: {
    height: 30 * rem,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalwindowinside: {
    backgroundColor: 'white',
    height: 156 * rem,
    width: 0.9 * width - 14 * rem,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#00000060',
    shadowOffset: {
      width: 5 * rem,
      height: 5 * rem,
    },
    shadowOpacity: 1,
    shadowRadius: 2 * rem,
  },
  shadowitem: {
    shadowColor: '#00000000',
    shadowOffset: {
      width: 1.5 * rem,
      height: 1.5 * rem,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0.75 * rem,
  },
  modalheaderText: {
    color: 'white',
    fontSize: 13 * rem,
    marginLeft: 15 * rem,
    fontWeight: 'bold',
  },
  iconText: {
    color: 'gray',
    fontSize: 10 * rem,
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
)(Remark);
