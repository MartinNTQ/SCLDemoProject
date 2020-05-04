/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
import {ConvertDate} from '../function/Function';
import HeaderPQE from './HeaderPQE';
import {LineChart, YAxis, Grid, XAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import * as svg from 'react-native-svg';
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
  eqchart: 'Efficiency & Quality Chart',
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
  eqchart: '效率與質量圖表',
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
  eqchart: 'Biểu Đồ Hiệu Suất Và Chất Lượng',
};

class StaffInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EEinfo: [],
      POlist: [],
      BandList: [],
    };
  }
  componentDidMount() {
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
    var BandList = POBandapiorg.map(item => {
      return item.band;
    });
    var POlist = POBandapiorg.filter(item => {
      return item.band === BandList[0];
    });
    this.setState({
      BandList,
      POlist,
    });
  }
  render() {
    const {lang} = this.props;
    const band = this.state.POlist.map(item => {
      return item.band;
    })[0];
    const leader = this.state.POlist.map(item => {
      return item.led;
    })[0];
    const po = this.state.POlist.map(item => {
      return item.po;
    })[0];
    const sup = this.state.POlist.map(item => {
      return item.sup;
    })[0];
    const pmg = this.state.POlist.map(item => {
      return item.pmg;
    })[0];
    const style = this.state.POlist.map(item => {
      return item.style;
    })[0];
    const sewingstartdate = ConvertDate(
      `${
        this.state.POlist.map(item => {
          return item.sewingstartdate;
        })[0]
      }`,
    );
    const sewingfinishdate = ConvertDate(
      `${
        this.state.POlist.map(item => {
          return item.sewingfinishdate;
        })[0]
      }`,
    );
    const curlang = lang === 'EN' ? lgen : lang === 'CN' ? lgcn : lgvn;
    const data1 = [
      null,
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ];
    const data2 = [
      null,
      null,
      null,
      null,
      null,
      null,
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ];
    const data0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const data100 = [
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
    ];
    const data = [
      {
        data: data1,
        svg: {stroke: 'orange'},
      },
      {
        data: data2,
        svg: {stroke: 'purple'},
      },
      {
        data: data0,
        svg: {stroke: 'white'},
      },
      {
        data: data100,
        svg: {stroke: 'gray'},
      },
    ];
    const xlabel = [
      '',
      'Dec 2019',
      'Feb 2020',
      'Apr 2020',
      'Jun 2020',
      'Aug 2020',
      'Oct 2020',
    ];
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
        }}>
        <HeaderPQE title={curlang.eqchart} home={curlang.home} />
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
        <View
          style={{
            flex: 20,
            flexDirection: 'column',
          }}>
          <View
            style={{
              height: 300 * rem,
              flexDirection: 'row',
              backgroundColor: '#29323F',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}
            />
            <View
              style={{
                flex: 1.8,
                flexDirection: 'row',
                marginRight: 2 * rem,
              }}>
              <YAxis
                data={[0, 20, 40, 60, 80, 100]}
                contentInset={{top: 20 * rem, bottom: 20 * rem}}
                svg={{
                  fill: 'white',
                  fontSize: 10 * rem,
                }}
                numberOfTicks={6}
                formatLabel={value => `${value}`}
              />
            </View>
            <View
              style={{
                width: 0.88 * width,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                }}>
                <LineChart
                  style={{flex: 1}}
                  data={data}
                  contentInset={{top: 20 * rem, bottom: 20 * rem}}
                  curve={shape.curveMonotoneX}>
                  <Grid
                    svg={{
                      stroke: 'gray',
                    }}
                  />
                </LineChart>
                <svg.Svg position="absolute" height="100%" width="100%">
                  <svg.Line
                    x1={0}
                    y1={10 * rem}
                    x2={0}
                    y2={280 * rem}
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 2) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 2) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 3) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 3) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 3) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 3) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 4) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 4) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 5) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 5) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 6) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 6) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 7) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 7) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 8) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 8) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 9) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 9) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 10) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 10) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 11) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 11) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 12) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 12) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                  <svg.Line
                    x1={(0.88 * width * 13) / 13}
                    y1={20 * rem}
                    x2={(0.88 * width * 13) / 13}
                    y2={280 * rem}
                    stroke="gray"
                    strokeDasharray="5, 5"
                    strokeWidth="1.5"
                  />
                </svg.Svg>
              </View>
            </View>
            <View
              style={{
                flex: 1.8,
                flexDirection: 'row',
              }}
            />
          </View>
          <View
            style={{
              height: 20 * rem,
              flexDirection: 'row',
              backgroundColor: '#29323F',
            }}>
            <View
              style={{
                flex: 2,
                flexDirection: 'column',
              }}
            />
            <View
              style={{
                flex: 20,
                flexDirection: 'column',
              }}>
              <XAxis
                data={[0, 1, 2, 3, 4, 5, 6]}
                numberOfTicks={7}
                formatLabel={index => `${xlabel[index]}`}
                contentInset={{right: 28 * rem}}
                svg={{
                  fontSize: 10,
                  fill: 'white',
                  fontWeight: 'bold',
                  rotation: 0,
                  verticalAnchor: 'middle',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
              }}
            />
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
        dispatch({
          type: 'update',
          EElistapi,
          EElist,
        }),
      UpdateCol: col => dispatch({type: 'updatecol', col}),
    };
  },
)(StaffInfoPage);
