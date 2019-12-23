import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-root-toast'
import { connect } from 'react-redux'
import { Touchable, Button } from '../../components'
import { createAction, NavigationActions } from '../../utils'

@connect(({ app }) => ({ ...app }))
class VerificationCode extends Component {
  static navigationOptions = {
    title: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      code: '4533',
      countdown: 0,
    }
  }

  login = () => {
    const { code } = this.state;
    if (code.length !== 4) {
      Toast.show('请输入正确的验证码', {
        position: Toast.positions.CENTER,
        shadow: false, 
      });
      return false;
    }
    this.props.dispatch(NavigationActions.navigate({ routeName: 'VerificationName' }))
  }

  countDownSendCode = () => {
    let countdown = 60;
    this.setState({
      countdown,
    })
    clearInterval(this.timeId);
    this.timeId = setInterval(() => {
      countdown -= 1;
      this.setState({
        countdown,
      })
      if (countdown === 0) {
        clearInterval(this.timeId);
      }
    }, 1000)
  }

  changeCode = (text) => {
    this.setState({
      code: text.trim(),
    })
  }

  render () {
    const { code, countdown } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.verifiBox}>
          <Text style={styles.title}>请输入验证码</Text>
          <Text style={styles.sp1}>已发送验证码130****3423</Text>
          <View style={styles.fromBox}>
            <TextInput 
              style={[styles.codeInput, Platform.OS === 'ios'? styles.padLeftIos: styles.padLeftAndroid]} 
              maxLength={4}
              value={code}
              onChangeText={(text) => this.changeCode(text)}
            ></TextInput>
            <View style={styles.borderBox}>
              <View style={styles.borderItem}></View>
              <View style={styles.borderItem}></View>
              <View style={styles.borderItem}></View>
              <View style={styles.borderItem}></View>
            </View>
          </View>
          {countdown === 0 && (
            <TouchableOpacity onPress={this.countDownSendCode}>
              <Text style={styles.resCode}>重新获取验证码</Text>
            </TouchableOpacity>
          )}
          {countdown !== 0 && (
            <Text style={styles.resCodeGray}>{countdown}s后可重新发送</Text>
          )}
          <LinearGradient colors={['#00FFC2', '#03AAF3']} style={styles.btnBox}>
            <Button 
              style={styles.loginBtn} 
              textStyle={styles.btnText}
              onPress={this.login}
            >登录</Button>
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
  fromBox: {
    width: 315,
    marginTop: 45,
    height: 40,
  },
  codeInput: {
    width: 375,
    height: 40,
    letterSpacing: 76,
    color: '#383838',
    fontSize: 16,
  },
  padLeftIos: {
    paddingLeft: 25,
  },
  padLeftAndroid: {
    marginLeft:-20
  },
  borderBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
  },
  borderItem: {
    height: 1,
    backgroundColor: '#DCDCDC',
    width: 60,
  },
  resCode: {
    marginTop: 14,
    fontSize: 14,
    color: '#03B2EF',
    textAlign: 'left',
    width: 315,
  },
  resCodeGray: {
    marginTop: 14,
    fontSize: 14,
    color: '#999999',
    textAlign: 'left',
    width: 315,
  },
  btnBox: {
    width: 335,
    height: 48,
    marginTop: 30,
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
    marginTop: 80,
  },
  title: {
    fontSize: 18,
    color: '#383838',
  },
  sp1: {
    marginTop: 20,
    color: '#999999',
    fontSize: 14,
  },
})

export default VerificationCode;
