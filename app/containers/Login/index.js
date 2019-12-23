import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Image, ActivityIndicator, Text, TextInput, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { Touchable, Button } from '../../components'
import IcoMoonIcon from '../../assets/icomoon'

import { createAction, NavigationActions } from '../../utils'
import { checkPhone } from '../../utils/validator';

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }
  constructor(props) {
    super(props);
    this.state = {
      tips: '',
      value: '13032813423',
    }
  }

  next = () => {
    const { value } = this.state;
    if (checkPhone(value)) {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'VerificationCode' }))
    }
    this.setState({
      tips: checkPhone(value)? '': '请输入正确的手机号'
    })
  }

  changeValue = (value) => {
    this.setState({
      value,
    })
  }

  onLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  goChatLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  goAccountLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  renderLogin = () => {
    const { value, tips } = this.state;

    return (
      <View style={styles.loginBox}>
        <Text style={styles.title}>欢迎使用快资</Text>
        <Text style={styles.sp1}>验证手机号直接登陆或注册</Text>
        <View style={styles.loginFrom}>
          <View style={styles.sp2Box}>
            <Text style={styles.sp2}>+86</Text>
          </View>
          <TextInput 
            style={styles.loginInput}
            placeholder="请输入手机号码"
            keyboardType="phone-pad"
            value={value}
            onChangeText={(text) => this.changeValue(text)}
            maxLength={11}
          ></TextInput>
        </View>
        <Text style={styles.tips}>{tips}</Text>
        <LinearGradient colors={['#00FFC2', '#03AAF3']} style={styles.btnBox}>
          <Button 
            style={styles.loginBtn} 
            textStyle={styles.btnText}
            onPress={this.next}
          >下一步</Button>
        </LinearGradient>
        <Text style={styles.agrentTip}>登陆即同意“用户协议”</Text>
      </View>
    )
  }

  render() {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : this.renderLogin()}
        {!fetching && (
          <Touchable style={styles.close} onPress={this.onClose}>
            <Image
              style={styles.icon}
              source={require('../../images/close.png')}
            />
          </Touchable>
        )}
        {!fetching && (
          <Touchable style={styles.wxChat} onPress={this.goChatLogin}>
            <IcoMoonIcon name="xiaoxi" size={14} color="#999999" />
            <Text style={styles.chatText}>账号登陆</Text>
          </Touchable>
        )}
        {!fetching && (
          <Touchable style={styles.account} onPress={this.goAccountLogin}>
            <IcoMoonIcon name="suo" size={14} color="#999999" />
            <Text style={styles.chatText}>账号登陆</Text>
          </Touchable>
        )}
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
  close: {
    position: 'absolute',
    left: 20,
    top: 55,
    width: 14,
    height: 14,
  },
  wxChat: {
    position: 'absolute',
    left: 20,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  account: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  chatText: {
    color: '#383838',
    paddingLeft: 5,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
  loginBox: {
    alignItems: 'center',
    width: '100%',
    marginTop: 140,
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
  loginFrom: {
    marginTop: 85,
    width: 250,
    height: 30,
    lineHeight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  sp2Box: {
    height: 20,
    borderRightWidth: 1,
    borderRightColor: '#DCDCDC',
    marginTop: 5,
  },
  sp2: {
    lineHeight: 20,
    color: '#03B2EF',
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 8,
    display: 'flex',
  },
  loginInput: {
    flex: 1,
    padding:0,
    paddingLeft: 8,
    height: 30,
    paddingVertical: 0,
  },
  tips: {
    width: 250,
    textAlign: 'left',
    height: 30,
    lineHeight: 30,
    fontSize: 12,
    color: 'red',
    paddingLeft: 5,
  },
  btnBox: {
    width: 335,
    height: 48,
    marginTop: 0,
    borderRadius: 24,
    // display: 'flex',
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
  agrentTip: {
    fontSize: 14,
    color: '#383838',
    marginTop: 25,
  }
})

export default Login
