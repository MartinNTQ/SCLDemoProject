/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Dimensions, Image, Text, TouchableOpacity} from 'react-native';
import IconHome from 'react-native-vector-icons/AntDesign';
import * as NavRef from '../NavRef/NavRef';
import PropTypes from 'prop-types';
const width = Dimensions.get('window').width;
const rem = width / 380;
class HeaderDO extends Component {
  render() {
    return (
      <View
        style={{
          height: 80 * rem,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={require('../image/Logonew.png')}
            style={{
              marginLeft: 10 * rem,
              marginTop: 10 * rem,
              width: 40 * rem,
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
              color: 'gray',
            }}>
            PQE
          </Text>
          <Text style={{fontSize: 15 * rem, color: 'gray'}}>
            {this.props.title}
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
            }}
            onPress={() => {
              NavRef.navigate('DailyOutputPage');
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
            />
            <Text
              style={{
                fontSize: 11 * rem,
                alignSelf: 'center',
                color: 'gray',
                marginRight: 10 * rem,
              }}>
              {this.props.home}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
HeaderDO.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
};
HeaderDO.defaultProps = {
  title: 'Tilte',
  home: 'Home',
};
export default HeaderDO;
