/* eslint-disable react/no-string-refs */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Dimensions,
  Image,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import IconHome from 'react-native-vector-icons/AntDesign';
import * as NavRef from '../NavRef/NavRef';
import {ConvertDate} from '../function/Function';
import LinearGradient from 'react-native-linear-gradient';
import ExitIcon from 'react-native-vector-icons/Ionicons';
import SortIcon from 'react-native-vector-icons/Octicons';
import CancelIcon from 'react-native-vector-icons/EvilIcons';
import OkIcon from 'react-native-vector-icons/EvilIcons';
import SortingIcon from 'react-native-vector-icons/FontAwesome5';
import {encode} from 'base-64';
import {SearchBar} from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import Loader from './Loader';
import Androw from 'react-native-androw';
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
const Color1 = rate => {
  return rate <= 0.25 * 5
    ? 'red'
    : rate > 0.25 * 5 && rate <= 0.5 * 5
    ? 'rgb(255,102,0)'
    : rate > 0.5 * 5 && rate <= 0.89 * 5
    ? 'rgb(255,255,100)'
    : 'rgb(0,126,0)';
};
const Color2 = rate => {
  return rate <= 0.25 * 5
    ? 'rgb(165,0,33)'
    : rate > 0.25 * 5 && rate <= 0.5 * 5
    ? 'rgb(255,109,25)'
    : rate > 0.5 * 5 && rate <= 0.89 * 5
    ? 'rgb(255,255,39)'
    : 'rgb(0,102,0)';
};

//userinfo.forEach(updateEachImg());
class DailyOutputPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searching: false,
      loading: false,
      sorting: false,
      sorttype: '',
      sortfirstclick: false,
      band: '',
      selectBand: false,
      selectPO: false,
      EElistbeforesearch: [],
      EElist: [],
      POlist: [],
      Bandlist: [],
      POinfo: [],
      EEsapi: [],
      POBandapi: [],
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
      },
      {
        band: '01',
        sno: '180002',
        enm: 'VU THI LY',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 2.5,
      },
      {
        band: '01',
        sno: '999993',
        enm: 'TRAN THANH TUNG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 1.5,
      },
      {
        band: '01',
        sno: '180004',
        enm: 'HOANG THI HAI YEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 0.5,
      },
      {
        band: '01',
        sno: '180005',
        enm: 'BUI THI THOM',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 2,
      },
      {
        band: '01',
        sno: '180006',
        enm: 'LE THI HOA',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 4,
      },
      {
        band: '01',
        sno: '180007',
        enm: 'NGUYEN THI HUYEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 4.5,
      },
      {
        band: '01',
        sno: '180008',
        enm: 'TA THI QUE',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 3.5,
      },
      {
        band: '01',
        sno: '999999',
        enm: 'LAM THI THU TRANG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 3.0,
      },
      {
        band: '01',
        sno: '180010',
        enm: 'PHAM THI LY',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 3.5,
      },
      {
        band: '02',
        sno: '180111',
        enm: 'BUI THI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 3.5,
      },
      {
        band: '02',
        sno: '180011',
        enm: 'DIEN THI LE',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 2.5,
      },
      {
        band: '02',
        sno: '180012',
        enm: 'LA THI CAM',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0001',
        sco: 3.5,
      },
      {
        band: '02',
        sno: '180013',
        enm: 'TA THI NGOC ANH',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 3.5,
      },
      {
        band: '02',
        sno: '180014',
        enm: 'DINH THI BINH',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 3.5,
      },
      {
        band: '02',
        sno: '170620',
        enm: 'LE VAN CUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 2.5,
      },
      {
        band: '02',
        sno: '180016',
        enm: 'VU THI DUYEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 3.5,
      },
      {
        band: '02',
        sno: '180017',
        enm: 'DINH XUAN DINH',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
      },
      {
        band: '02',
        sno: '180018',
        enm: 'NGUYEN THI GAM',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
      },
      {
        band: '02',
        sno: '180019',
        enm: 'TA TUAN HA',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
      },
      {
        band: '02',
        sno: '180020',
        enm: 'PHAM VAN HAI',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
      },
      {
        band: '03',
        sno: '180021',
        enm: 'TA QUOC HUNG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
      },
      {
        band: '03',
        sno: '180022',
        enm: 'BUI HOA MAI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0002',
        sco: 4,
      },
      {
        band: '03',
        sno: '180022',
        enm: 'NGUYEN THI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2,
      },
      {
        band: '03',
        sno: '180023',
        enm: 'DAO THI HUONG',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 4.5,
      },
      {
        band: '03',
        sno: '180024',
        enm: 'TRAN VAN KHU',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 4.8,
      },
      {
        band: '03',
        sno: '180025',
        enm: 'LE THI PHUONG LAN',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
      },
      {
        band: '03',
        sno: '180026',
        enm: 'DAO THI THUY LINH',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
      },
      {
        band: '03',
        sno: '180027',
        enm: 'DO QUOC SON',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
      },
      {
        band: '03',
        sno: '180028',
        enm: 'NGUYEN THANH QUYET',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
      },
      {
        band: '03',
        sno: '180029',
        enm: 'PHAM THI NHE',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
      },
      {
        band: '03',
        sno: '180030',
        enm: 'PHAM CONG VIEN',
        pos: 'Sewing Worker',
        djn: '20180101',
        po: '0v0003',
        sco: 2.8,
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
    if (!this.state.selectBand && !this.state.selectPO) {
      var {sorttype} = this.props;
      var bandlist = this.GetBandlist(POBandapiorg);
      var polist = this.GetPOlist(POBandapiorg, bandlist[0]);
      var poinfo = this.GetPOinfo(POBandapiorg, bandlist[0], polist[0]);
      var eelist = this.SortEEList(
        this.GetEElist(EEsapiorg, bandlist[0], polist[0]),
        sorttype,
      );
      this.setState({
        band: bandlist[0],
        sorttype: sorttype,
        POBandapi: POBandapiorg,
        EEsapi: EEsapiorg,
        Bandlist: bandlist,
        POlist: polist,
        POinfo: poinfo,
        EElist: eelist,
        EElistbeforesearch: eelist,
      });
      //this.props.Update(EEsapiorg, eelist);
    }
  }
  GetBandlist = POBand => {
    return POBand.map(item => {
      return item.band;
    })
      .sort((a, b) => {
        return a - b;
      })
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        [],
      );
  };
  GetPOlist = (POBand, band) => {
    return POBand.filter(item => {
      return item.band === band;
    })
      .map(item => {
        return item.po;
      })
      .sort((a, b) => {
        return a - b;
      })
      .reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
      }, []);
  };
  GetPOinfo = (POBand, band, po) => {
    return POBand.filter(item => {
      return item.band === band && item.po === po;
    });
  };
  GetEElist = (EEs, band, po) => {
    return EEs.filter(item => {
      return item.band === band && item.po === po;
    }).map(item => {
      var o = Object.assign({}, item);
      o.djn = ConvertDate(item.djn);
      return o;
    });
  };
  SearchEEList = (List, searchvalue) => {
    return List.filter(item => {
      return (
        item.enm.toUpperCase().includes(searchvalue.toUpperCase()) ||
        item.sno.includes(searchvalue)
      );
    });
  };
  SortEEList = (List, sorttype) => {
    return List.sort(function(a, b) {
      if (sorttype === 'az01') {
        if (a.enm !== b.enm) {
          return a.enm > b.enm ? 1 : -1;
        } else {
          return a.sco - b.sco;
        }
      }
      if (sorttype === 'za01') {
        if (a.enm !== b.enm) {
          return a.enm < b.enm ? 1 : -1;
        } else {
          return a.sco - b.sco;
        }
      }
      if (sorttype === 'az10') {
        if (a.enm !== b.enm) {
          return a.enm > b.enm ? 1 : -1;
        } else {
          return b.sco - a.sco;
        }
      }
      if (sorttype === 'za10') {
        if (a.enm !== b.enm) {
          return a.enm < b.enm ? 1 : -1;
        } else {
          return b.sco - a.sco;
        }
      }
      if (sorttype === '10az') {
        if (a.sco === b.sco) {
          return a.enm > b.enm ? 1 : -1;
        } else {
          return b.sco - a.sco;
        }
      }
      if (sorttype === '10za') {
        if (a.sco === b.sco) {
          return a.enm < b.enm ? 1 : -1;
        } else {
          return b.sco - a.sco;
        }
      }
      if (sorttype === '01az') {
        if (a.sco === b.sco) {
          return a.enm > b.enm ? 1 : -1;
        } else {
          return a.sco - b.sco;
        }
      }
      if (sorttype === '01za') {
        if (a.sco === b.sco) {
          return a.enm < b.enm ? 1 : -1;
        } else {
          return a.sco - b.sco;
        }
      }
    });
  };
  render() {
    const {lang, tabclick} = this.props;
    const sorttype = this.state.sorttype;
    const sortfirstclick = this.state.sortfirstclick;
    const curlang = lang === 'EN' ? lgen : lang === 'CN' ? lgcn : lgvn;
    return (
      <View style={{flex: 1, height: '100%', width: '100%'}}>
        <Loader loading={this.state.loading} />
        <Modal
          transparent={true}
          animationType={'none'}
          visible={this.state.sorting}>
          <View style={styles.modalBackground}>
            <Androw style={styles.shadow}>
              <View style={styles.modalwindow}>
                <View style={styles.modalheader}>
                  <Text style={styles.modalheaderText}>{curlang.Sortby}</Text>
                </View>
                <View style={styles.modalwindowinside}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: 11 * rem,
                        marginTop: 20 * rem,
                        marginRight: 30 * rem,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {curlang.StaffName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 11 * rem,
                        marginTop: 20 * rem,
                        marginLeft: 30 * rem,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {curlang.WorkingProcess}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={() => {
                          this.setState({
                            sorting: false,
                            sortfirstclick: false,
                          });
                        }}>
                        <CancelIcon
                          name="close-o"
                          size={36 * rem}
                          style={{
                            marginLeft: 5 * rem,
                            marginRight: 5 * rem,
                            color: 'red',
                          }}
                        />
                        <Text
                          style={{
                            fontSize: 11 * rem,
                          }}>
                          {curlang.Cancel}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                      }}>
                      <Text
                        style={{
                          fontSize: 11 * rem,
                          color:
                            sorttype.substr(0, 2) === 'az'
                              ? 'blue'
                              : sorttype.substr(2, 2) === 'az'
                              ? 'green'
                              : 'gray',
                        }}>
                        A
                      </Text>
                      <Text
                        style={{
                          fontSize: 11 * rem,
                          color:
                            sorttype.substr(0, 2) === 'az'
                              ? 'blue'
                              : sorttype.substr(2, 2) === 'az'
                              ? 'green'
                              : 'gray',
                        }}>
                        Z
                      </Text>
                    </View>
                    <SortingIcon
                      name="sort-amount-down"
                      size={26 * rem}
                      style={{
                        marginRight: 5 * rem,
                        marginLeft: 5 * rem,
                        color:
                          sorttype.substr(0, 2) === 'az'
                            ? 'blue'
                            : sorttype.substr(2, 2) === 'az'
                            ? 'green'
                            : 'gray',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        if (!sortfirstclick) {
                          if (sorttype.substr(0, 2) === 'za') {
                            this.setState({
                              sorttype: 'az' + sorttype.substr(2, 2),
                            });
                          }
                          if (
                            sorttype.substr(2, 2) === 'za' ||
                            sorttype.substr(2, 2) === 'az'
                          ) {
                            this.setState({
                              sorttype: 'az' + sorttype.substr(0, 2),
                            });
                          }
                        } else {
                          this.setState({
                            sorttype: sorttype.replace('za', 'az'),
                          });
                        }
                        this.setState({
                          sortfirstclick: true,
                        });
                      }}
                    />
                    <SortingIcon
                      name="sort-amount-down"
                      size={26 * rem}
                      style={{
                        marginRight: 5 * rem,
                        marginLeft: 5 * rem,
                        color:
                          sorttype.substr(0, 2) === 'za'
                            ? 'blue'
                            : sorttype.substr(2, 2) === 'za'
                            ? 'green'
                            : 'gray',
                        transform: [{rotate: '180deg'}],
                      }}
                      onPress={() => {
                        if (!sortfirstclick) {
                          if (sorttype.substr(0, 2) === 'az') {
                            this.setState({
                              sorttype: 'za' + sorttype.substr(2, 2),
                            });
                          }
                          if (
                            sorttype.substr(2, 2) === 'za' ||
                            sorttype.substr(2, 2) === 'az'
                          ) {
                            this.setState({
                              sorttype: 'za' + sorttype.substr(0, 2),
                            });
                          }
                        } else {
                          this.setState({
                            sorttype: sorttype.replace('az', 'za'),
                          });
                        }
                        this.setState({
                          sortfirstclick: true,
                        });
                      }}
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                        marginRight: 10 * rem,
                      }}>
                      <Text
                        style={{
                          fontSize: 11 * rem,
                          color:
                            sorttype.substr(0, 2) === 'za'
                              ? 'blue'
                              : sorttype.substr(2, 2) === 'za'
                              ? 'green'
                              : 'gray',
                        }}>
                        Z
                      </Text>
                      <Text
                        style={{
                          fontSize: 11 * rem,
                          color:
                            sorttype.substr(0, 2) === 'za'
                              ? 'blue'
                              : sorttype.substr(2, 2) === 'za'
                              ? 'green'
                              : 'gray',
                        }}>
                        A
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        marginLeft: 10 * rem,
                      }}>
                      <Text
                        style={{
                          fontSize: 11 * rem,
                          color:
                            sorttype.substr(0, 2) === '01'
                              ? 'blue'
                              : sorttype.substr(2, 2) === '01'
                              ? 'green'
                              : 'gray',
                        }}>
                        0%
                      </Text>
                      <Text
                        style={{
                          fontSize: 11 * rem,
                          color:
                            sorttype.substr(0, 2) === '01'
                              ? 'blue'
                              : sorttype.substr(2, 2) === '01'
                              ? 'green'
                              : 'gray',
                        }}>
                        100%
                      </Text>
                    </View>
                    <SortingIcon
                      name="sort-amount-down"
                      size={26 * rem}
                      style={{
                        marginRight: 5 * rem,
                        marginLeft: 5 * rem,
                        color:
                          sorttype.substr(0, 2) === '01'
                            ? 'blue'
                            : sorttype.substr(2, 2) === '01'
                            ? 'green'
                            : 'gray',
                      }}
                      onPress={() => {
                        if (!sortfirstclick) {
                          if (sorttype.substr(0, 2) === '10') {
                            this.setState({
                              sorttype: '01' + sorttype.substr(2, 2),
                            });
                          }
                          if (
                            sorttype.substr(2, 2) === '10' ||
                            sorttype.substr(2, 2) === '01'
                          ) {
                            this.setState({
                              sorttype: '01' + sorttype.substr(0, 2),
                            });
                          }
                        } else {
                          this.setState({
                            sorttype: sorttype.replace('10', '01'),
                          });
                        }
                        this.setState({
                          sortfirstclick: true,
                        });
                      }}
                    />
                    <SortingIcon
                      name="sort-amount-down"
                      size={26 * rem}
                      style={{
                        marginLeft: 5 * rem,
                        marginRight: 5 * rem,
                        transform: [{rotate: '180deg'}],
                        color:
                          sorttype.substr(0, 2) === '10'
                            ? 'blue'
                            : sorttype.substr(2, 2) === '10'
                            ? 'green'
                            : 'gray',
                      }}
                      onPress={() => {
                        if (!sortfirstclick) {
                          if (sorttype.substr(0, 2) === '01') {
                            this.setState({
                              sorttype: '10' + sorttype.substr(2, 2),
                            });
                          }
                          if (
                            sorttype.substr(2, 2) === '10' ||
                            sorttype.substr(2, 2) === '01'
                          ) {
                            this.setState({
                              sorttype: '10' + sorttype.substr(0, 2),
                            });
                          }
                        } else {
                          this.setState({
                            sorttype: sorttype.replace('01', '10'),
                          });
                        }
                        this.setState({
                          sortfirstclick: true,
                        });
                      }}
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                      }}>
                      <Text
                        style={{
                          fontSize: 11 * rem,
                          color:
                            sorttype.substr(0, 2) === '10'
                              ? 'blue'
                              : sorttype.substr(2, 2) === '10'
                              ? 'green'
                              : 'gray',
                        }}>
                        100%
                      </Text>
                      <Text
                        style={{
                          fontSize: 11 * rem,
                          color:
                            sorttype.substr(0, 2) === '10'
                              ? 'blue'
                              : sorttype.substr(2, 2) === '10'
                              ? 'green'
                              : 'gray',
                        }}>
                        0%
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={() => {
                          this.setState({
                            sorting: false,
                            sortfirstclick: false,
                            EElist: this.SortEEList(
                              this.state.EElist,
                              sorttype,
                            ),
                          });
                        }}>
                        <OkIcon
                          name="check"
                          size={36 * rem}
                          style={{
                            marginRight: 5 * rem,
                            color: 'green',
                          }}
                        />
                        <Text
                          style={{
                            fontSize: 11 * rem,
                          }}>
                          {curlang.OK}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}
                  />
                </View>
              </View>
            </Androw>
          </View>
        </Modal>
        <View style={styles.topheaderStyle}>
          <View
            style={{
              height: 80 * rem,
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
            <Image
              source={require('../image/Logonew.png')}
              style={{
                marginLeft: 10 * rem,
                marginTop: 10 * rem,
                width: 42 * rem,
                height: undefined,
                aspectRatio: 100 / 83,
              }}
            />
          </View>
          <View
            style={{
              flex: 3.5,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20 * rem,
                alignSelf: 'center',
                color: 'gray',
              }}>
              PQE
            </Text>
            <Text
              style={{fontSize: 15 * rem, color: 'gray', alignSelf: 'center'}}>
              {curlang.dot}
            </Text>
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
              }}>
              <IconHome
                name="home"
                size={36 * rem}
                style={{
                  marginRight: 10 * rem,
                  alignSelf: 'center',
                  color: 'gray',
                  marginTop: 10 * rem,
                }}
                onPress={() => {
                  NavRef.navigate('PQEPage');
                }}
              />
              <Text
                style={{
                  fontSize: 11 * rem,
                  alignSelf: 'center',
                  color: 'gray',
                  marginRight: 10 * rem,
                }}>
                {curlang.home}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerStyle}>
          <View style={styles.col1Style}>
            <Text style={styles.headertextStyle}>{curlang.band}</Text>
          </View>
          <View style={styles.col2Style}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.headertextStyle}>: </Text>
              <ModalDropdown
                dropdownStyle={{
                  height:
                    this.state.Bandlist.length >= 10
                      ? 380 * rem
                      : this.state.Bandlist.length * 38 * rem,
                }}
                dropdownTextStyle={{
                  fontSize: 12 * rem,
                  color: 'gray',
                  width: 55 * rem,
                  height: 38 * rem,
                }}
                textStyle={{fontSize: 12 * rem, color: 'gray'}}
                defaultValue={this.state.Bandlist[0]}
                options={this.state.Bandlist}
                style={{backgroundColor: '#00000018', width: 55 * rem}}
                onSelect={(index, value) => {
                  this.refs.podropdown.select(-1);
                  this.refs.SearchBar.clear();
                  this.setState({
                    selectBand: true,
                    band: value,
                    POlist: this.GetPOlist(this.state.POBandapi, value),
                    POinfo: this.GetPOinfo(
                      this.state.POBandapi,
                      value,
                      this.GetPOlist(this.state.POBandapi, value)[0],
                    ),
                    EElist: this.SortEEList(
                      this.GetEElist(
                        this.state.EEsapi,
                        value,
                        this.GetPOlist(this.state.POBandapi, value)[0],
                      ),
                      sorttype,
                    ),
                    EElistbeforesearch: this.GetEElist(
                      this.state.EEsapi,
                      value,
                      this.GetPOlist(this.state.POBandapi, value)[0],
                      sorttype,
                    ),
                  });
                }}
              />
            </View>
          </View>
          <View style={styles.col3Style}>
            <Text style={styles.headertextStyle}>{curlang.leader}</Text>
          </View>
          <View style={styles.col4Style}>
            <Text style={styles.headertextStyle}>
              :
              {` ${this.state.POinfo.map(item => {
                return item.led;
              })}`}
            </Text>
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
                defaultValue={this.state.POlist[0]}
                options={this.state.POlist}
                style={{backgroundColor: '#00000018', width: 55 * rem}}
                onSelect={(index, value) => {
                  this.refs.SearchBar.clear();
                  this.setState({
                    selectPO: true,
                    POinfo: this.GetPOinfo(
                      this.state.POBandapi,
                      this.state.band,
                      value,
                    ),
                    EElist: this.SortEEList(
                      this.GetEElist(this.state.EEsapi, this.state.band, value),
                      sorttype,
                    ),
                    EElistbeforesearch: this.GetEElist(
                      this.state.EEsapi,
                      this.state.band,
                      value,
                      sorttype,
                    ),
                  });
                }}
              />
            </View>
          </View>
          <View style={styles.col3Style}>
            <Text style={styles.headertextStyle}>{curlang.linesup}</Text>
          </View>
          <View style={styles.col4Style}>
            <Text style={styles.headertextStyle}>
              :
              {` ${this.state.POinfo.map(item => {
                return item.sup;
              })}`}
            </Text>
          </View>
        </View>
        <View style={styles.headerStyle}>
          <View style={styles.col1Style}>
            <Text style={styles.headertextStyle}>{curlang.style}</Text>
          </View>
          <View style={styles.col2Style}>
            <Text style={styles.headertextStyle}>
              :
              {` ${this.state.POinfo.map(item => {
                return item.style;
              })}`}
            </Text>
          </View>
          <View style={styles.col3Style}>
            <Text style={styles.headertextStyle}>{curlang.prodmanager}</Text>
          </View>
          <View style={styles.col4Style}>
            <Text style={styles.headertextStyle}>
              :
              {` ${this.state.POinfo.map(item => {
                return item.pmg;
              })}`}
            </Text>
          </View>
        </View>
        <View style={styles.sewingdateStyle}>
          <View style={styles.col1Style}>
            <Text style={styles.textStyledate}>
              {curlang.sewstdat} :{' '}
              {` ${this.state.POinfo.map(item => {
                return ConvertDate(item.sewingstartdate);
              })}`}
            </Text>
          </View>
          <View style={{flex: 1.5, flexDirection: 'column'}}>
            <Text style={styles.textStyledate}>
              {curlang.sewfndat} :{' '}
              {` ${this.state.POinfo.map(item => {
                return ConvertDate(item.sewingfinishdate);
              })}`}
            </Text>
          </View>
        </View>
        <View style={{flex: 21, flexDirection: 'row'}}>
          <FlatList
            data={this.state.EElist}
            renderItem={({item, index}) => (
              <View
                style={{
                  height: 70 * rem,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor:
                    index % 2 === 0 ? 'rgb(255,255,215)' : 'white',
                }}>
                <View
                  style={{
                    flex: 1.2,
                    flexDirection: 'row',
                    marginLeft: 15 * rem,
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 60 * rem,
                      height: 60 * rem,
                      alignSelf: 'center',
                      borderRadius: 30 * rem,
                    }}
                    onPress={() => {
                      this.props.EEClick(item.sno);
                      this.setState({loading: true});
                      setTimeout(() => {
                        switch (tabclick) {
                          case '1':
                            NavRef.navigate('Staff', {screen: 'StaffInfo'});
                            break;
                          case '2':
                            NavRef.navigate('Staff', {
                              screen: 'OutputIndividual',
                            });
                            break;
                          case '3':
                            NavRef.navigate('Staff', {screen: 'Wage'});
                            break;
                          case '4':
                            NavRef.navigate('Staff', {screen: 'Remark'});
                            break;
                        }
                        this.setState({loading: false});
                      }, 500);
                    }}>
                    <ImageBackground
                      style={{
                        width: 60 * rem,
                        height: 60 * rem,
                        alignSelf: 'center',
                        borderRadius: 30 * rem,
                      }}
                      imageStyle={{borderRadius: 30 * rem}}
                      source={require('../image/noavatar.jpg')}>
                      <Image
                        style={{
                          width: 60 * rem,
                          height: 60 * rem,
                          alignSelf: 'center',
                          borderRadius: 30 * rem,
                        }}
                        source={{
                          uri:
                            `http://116.97.244.58:8080/photos/${item.sno}` +
                            '.jpg',
                          headers: {
                            Authorization: 'Basic ' + encode('admin:P@ssw0rd1'),
                          },
                        }}
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 15 * rem,
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.textStyle}>{item.enm}</Text>
                    <Text style={styles.textStyle}>{item.pos}</Text>
                    <Text style={styles.textStyle}>Staff No. : {item.sno}</Text>
                    <Rating
                      imageSize={17 * rem}
                      type="custom"
                      ratingCount={5}
                      readonly
                      startingValue={item.sco}
                      ratingColor="orange"
                      ratingBackgroundColor="gray"
                      style={{
                        marginTop: 3 * rem,
                        alignSelf: 'flex-start',
                      }}
                    />
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  {item.sco < 5 && item.sco > 0 && (
                    <Androw style={styles.shadowitem}>
                      <LinearGradient
                        start={{x: 1, y: 1}}
                        end={{x: 1, y: 0.3}}
                        colors={[
                          Color1(item.sco),
                          Color2(item.sco),
                          Color1(item.sco),
                          Color2(item.sco),
                        ]}
                        style={{
                          width: (0.4 * width * item.sco) / 5,
                          height: 40 * rem,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderBottomLeftRadius: 8 * rem,
                          borderTopLeftRadius: 8 * rem,
                        }}>
                        {item.sco > 0.5 && (
                          <Text style={styles.textrateLStyle}>
                            {((item.sco * 100) / 5).toFixed(0)}%
                          </Text>
                        )}
                      </LinearGradient>
                    </Androw>
                  )}
                  {item.sco >= 5 && (
                    <Androw style={styles.shadowitem}>
                      <LinearGradient
                        start={{x: 1, y: 1}}
                        end={{x: 1, y: 0.3}}
                        colors={[
                          Color1(item.sco),
                          Color2(item.sco),
                          Color1(item.sco),
                          Color2(item.sco),
                        ]}
                        style={{
                          width: 0.4 * width,
                          height: 40 * rem,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 8 * rem,
                        }}>
                        <Text style={styles.textrateLStyle}>100 %</Text>
                      </LinearGradient>
                    </Androw>
                  )}
                  {item.sco !== 0 && (
                    <Androw style={styles.shadowitem}>
                      <LinearGradient
                        start={{x: 1, y: 0.35}}
                        end={{x: 1, y: 0}}
                        colors={['#00000040', 'gray']}
                        style={{
                          width: 0.4 * width * (1 - item.sco / 5),
                          height: 40 * rem,
                          borderTopRightRadius: 8 * rem,
                          borderBottomRightRadius: 8 * rem,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        {item.sco < 4.5 && (
                          <Text style={styles.textrateRStyle}>
                            {100 - ((item.sco * 100) / 5).toFixed(0)}%
                          </Text>
                        )}
                      </LinearGradient>
                    </Androw>
                  )}
                  {item.sco === 0 && (
                    <Androw style={styles.shadowitem}>
                      <LinearGradient
                        start={{x: 1, y: 0.35}}
                        end={{x: 1, y: 0}}
                        colors={['#00000040', 'gray']}
                        style={{
                          width: 0.4 * width * (1 - item.sco / 5),
                          height: 40 * rem,
                          borderRadius: 8 * rem,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={styles.textrateLStyle}>0 %</Text>
                      </LinearGradient>
                    </Androw>
                  )}
                </View>
              </View>
            )}
            keyExtractor={item => item.sno}
          />
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                NavRef.navigate('PQEPage');
              }}>
              <Text style={{fontSize: 13 * rem, marginLeft: 10 * rem}}>
                {curlang.exit}
              </Text>
              <ExitIcon
                name="md-exit"
                size={20 * rem}
                style={{marginHorizontal: 10 * rem}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              width: '60%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SearchBar
              ref="SearchBar"
              containerStyle={{
                backgroundColor: 'white',
                width: 230 * rem,
                height: 30 * rem,
                borderRadius: 8 * rem,
                borderWidth: 1 * rem,
                borderColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              inputContainerStyle={{
                backgroundColor: 'white',
                borderRadius: 8 * rem,
                borderWidth: 1 * rem,
                borderColor: 'gray',
                height: 30 * rem,
                width: 230 * rem,
                alignSelf: 'center',
              }}
              inputStyle={{fontSize: 13 * rem}}
              placeholder={curlang.search}
              onChangeText={search => {
                if (search.length > 0) {
                  var EElistorg = this.SortEEList(
                    this.state.EElistbeforesearch,
                    sorttype,
                  );
                  this.setState({
                    search: search,
                    EElist: this.SearchEEList(EElistorg, search),
                  });
                  // this.props.Update(
                  //   this.state.EEsapi,
                  //   this.SearchEEList(EElistorg, search),
                  // );
                } else {
                  var EElistorg = this.SortEEList(
                    this.state.EElistbeforesearch,
                    sorttype,
                  );
                  this.setState({search: '', EElist: EElistorg});
                  //this.props.Update(this.state.EEsapi, EElistorg);
                }
              }}
              value={this.state.search}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                this.setState({sorting: true});
                //NavRef.navigate('PQEPage');
              }}>
              <SortIcon
                name="settings"
                size={20 * rem}
                style={{marginHorizontal: 10 * rem}}
              />
              <Text style={{fontSize: 13 * rem, marginRight: 10 * rem}}>
                {curlang.sort}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  topheaderStyle: {height: 80 * rem, flexDirection: 'row'},
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gainsboro',
    alignItems: 'center',
  },
  sewingdateStyle: {
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  },
  modalwindow: {
    backgroundColor: 'gray',
    height: 150 * rem,
    width: 0.9 * width,
    borderRadius: 10 * rem,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  modalwindowinside: {
    backgroundColor: 'white',
    height: 120 * rem,
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
  modalheader: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalheaderText: {
    color: 'white',
    fontSize: 13 * rem,
    marginLeft: 15 * rem,
    fontWeight: 'bold',
  },
});
export default connect(
  state => {
    return {
      lang: state.lan,
      usr: state.usr,
      pwd: state.pwd,
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
        dispatch({type: 'update', EElistapi, EElist}),
      EEClick: eesnoclick => dispatch({type: 'eeclick', eesnoclick}),
    };
  },
)(DailyOutputPage);
