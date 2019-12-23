import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { createAction, NavigationActions } from '../../utils'

import { Button } from '../../components';

@connect(({ app }) => ({ ...app }))
class GatheringFace extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: '人脸采集',
  }

  submit = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'CompanyInfo' }))
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.verifiBox}>
          <View style={styles.imgBox}>

          </View>
          <Text style={styles.title}>进行人脸采集，以验核真实身份 </Text>
          <Text style={styles.sp1}>请将正脸对准框内，露出无官，保证光线充足</Text>
          <LinearGradient colors={['#00FFC2', '#03AAF3']} style={styles.btnBox}>
            <Button 
              style={styles.loginBtn} 
              textStyle={styles.btnText}
              onPress={this.submit}
            >开始采集</Button>
          </LinearGradient>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff'
  },
  btnBox: {
    width: 335,
    height: 48,
    marginTop: 40,
    borderRadius: 24,
  },
  loginBtn: {
    height: 48,
    lineHeight: 48,
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 18,
  },
  verifiBox: {
    alignItems: 'center',
    width: '100%',
    marginTop: 35,
  },
  title: {
    fontSize: 18,
    lineHeight: 25,
    color: '#383838',
    marginTop: 35,
  },
  sp1: {
    marginTop: 15,
    color: '#999999',
    fontSize: 14,
  },
  imgBox: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#DCDCDC',
  }
})

export default GatheringFace;
