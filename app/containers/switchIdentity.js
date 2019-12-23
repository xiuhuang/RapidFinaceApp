import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { createAction, NavigationActions } from '../utils'
import { Button } from '../components';
import { isTemplateElement } from '@babel/types';

@connect(({ app }) => ({ ...app }))
class ChooseIdentity extends Component {
  constructor(props) {
    super(props)
    this.state={
      loginInfo: {}
    }
    this.getLoginInfo = this.getLoginInfo.bind(this)
  }

  static navigationOptions = {
    title: '身份切换'
  }

  componentDidMount() {
    this.getLoginInfo()
  }

  async getLoginInfo(){
    const value = await AsyncStorage.getItem('LoginInfo');
    if (value !== null) {
      this.setState({
        loginInfo: JSON.parse(value)
      })
    }
  }

  back = () => {
    this.props.dispatch(NavigationActions.back())
  }

  async submit(loginType) {
    await AsyncStorage.setItem('LoginInfo',JSON.stringify({ login:true, loginType, }));
    this.props.dispatch(NavigationActions.navigate({ routeName: 'HomeNavigator' }))
  }

  render() {
    const { loginInfo } = this.state
    const typeList = ['投资方','项目方', '中介方'].filter(i => i !== (loginInfo && loginInfo.loginType))
    return (
      <View style={styles.container}>
        <View style={styles.idBox}>
          <Text style={styles.idText}>您当前的身份是“{loginInfo && loginInfo.loginType}”</Text>
        </View>
        <View style={styles.verifiBox}> 
          {
            typeList.map(i => (
              <LinearGradient colors={['#00FFC2', '#03AAF3']} style={styles.btnBox} key={i}>
                <Button
                  style={styles.loginBtn}
                  textStyle={styles.btnText}
                  onPress={() => this.submit(i)}
                >选择“{i}”登陆</Button>
              </LinearGradient>
            ))
          }
          <View colors={['#00FFC2', '#03AAF3']} style={styles.btnBox}>
            <Button
              style={styles.backBtn}
              textStyle={styles.backBtnText}
              onPress={this.back}
            >返回</Button>
          </View>
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
  backBtn: {
    height: 48,
    borderRadius: 24,
    borderColor: '#999999'
  },
  backBtnText: {
    fontSize: 18,
    color: '#333333',
  }
})

export default ChooseIdentity;
