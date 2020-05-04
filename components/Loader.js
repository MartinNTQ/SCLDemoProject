/* eslint-disable no-unused-vars */
import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
const Loader = props => {
  const {loading, ...attributes} = props;
  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <View style={styles.modalBackground1} />
      <View style={styles.modalBackground2}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size="large"
            color="rgb(118, 188, 33)"
            animating={loading}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground1: {
    flex: 75,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  modalBackground2: {
    flex: 25,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#00000040',
    height: 80,
    width: 80,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default connect(state => {
  return {lang: state.lan, usr: state.usr, pwd: state.pwd};
})(Loader);
