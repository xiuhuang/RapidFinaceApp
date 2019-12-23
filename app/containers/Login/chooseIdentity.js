import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { createAction, NavigationActions } from '../../utils'
import { Button } from '../../components';

@connect(({ app }) => ({ ...app }))
class ChooseIdentity extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  static navigationOptions = {
    title: '选择身份'
  }

  async submit(loginType) {
    await AsyncStorage.setItem('LoginInfo',JSON.stringify({ login:true, loginType, }));
    this.props.dispatch(NavigationActions.navigate({ routeName: 'HomeNavigator' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.idBox}>
          <Text style={styles.idText}>选择当前登陆身份</Text>
        </View>
        <View style={styles.verifiBox}>
          <LinearGradient colors={['#00FFC2', '#03AAF3']} style={styles.btnBox}>
            <Button
              style={styles.loginBtn}
              textStyle={styles.btnText}
              onPress={() => this.submit('投资方')}
            >选择“投资方”登陆</Button>
          </LinearGradient>
          <LinearGradient colors={['#00FFC2', '#03AAF3']} style={styles.btnBox}>
            <Button
              style={styles.loginBtn}
              textStyle={styles.btnText}
              onPress={() => this.submit('项目方')}
            >选择“项目方”登陆</Button>
          </LinearGradient>
          <LinearGradient colors={['#00FFC2', '#03AAF3']} style={styles.btnBox}>
            <Button
              style={styles.loginBtn}
              textStyle={styles.btnText}
              onPress={() => this.submit('中介方')}
            >选择“中介方”登陆</Button>
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
  idBox: {
    width: '100%',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idText: {
    color: '#666666',
    fontSize: 18,
  },
  verifiBox: {
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
    flex: 3,
    justifyContent: 'flex-start',
  },
  btnBox: {
    width: 335,
    height: 48,
    marginTop: 10,
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

})

export default ChooseIdentity;
