import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { Button } from '../../components'
import Toast from 'react-native-root-toast'
import { checkID } from '../../utils/validator'
import { createAction, NavigationActions } from '../../utils'


@connect(({ app }) => ({ ...app }))
class VerificationName extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: '张三',
      IDcode: '330781198509077959'
    }
  }  

  static navigationOptions = {
    title: '实名认证',
  }

  submit = () => {
    const { name, IDcode } = this.state;
    if (!name) {
      Toast.show('请输入正确的名称', {
        position: Toast.positions.CENTER,
        shadow: false, 
      })
      return false;
    }
    if (!checkID(IDcode)) {
      Toast.show('请输入正确的身份证号', {
        position: Toast.positions.CENTER,
        shadow: false, 
      })
      return false;
    }
    this.props.dispatch(NavigationActions.navigate({ routeName: 'GatheringFace' }))
  }

  changeName = (text) => {
    this.setState({
      name: text,
    })
  }

  changeIDCode = (text) => {
    this.setState({
      IDcode: text,
    })
  }

  render() {
    const { name, IDcode } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.verifiBox}>
          <Text style={styles.title}>为共建安全投资平台， </Text>
          <Text style={styles.title}>在使用快资前，请完成实名认证</Text>
          <View style={styles.fromBox}>
            <View style={styles.fromTitle}>
              <Text style={styles.fromTitleText}>本信息仅用于实名认证，暂时只支持大陆2代身份证</Text>
            </View>
            <View style={styles.fromInputBox}>
              <TextInput 
                style={[styles.fromInput, styles.borderBottom]}
                placeholder="姓名"
                value={name}
                onChangeText={(text) => this.changeName(text)}
              ></TextInput>
              <TextInput 
                style={styles.fromInput}
                placeholder="身份证号"
                value={IDcode}
                onChangeText={(text) => this.changeIDCode(text)}
              ></TextInput>
            </View>
          </View>
          <LinearGradient colors={['#00FFC2', '#03AAF3']} style={styles.btnBox}>
            <Button 
              style={styles.loginBtn} 
              textStyle={styles.btnText}
              onPress={this.submit}
            >提交</Button>
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
    marginTop: 60,
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
    lineHeight: 25,
    color: '#383838',
  },
  fromBox: {
    marginTop: 26,
    width: 335,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 5,
    overflow: 'hidden',
  },
  fromTitle: {
    backgroundColor: '#F5F5F5',
    height: 30,
    paddingLeft: 15,
  },
  fromTitleText: {
    color: '#999999',
    fontSize: 12,
    lineHeight: 30,
  },
  fromInputBox: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  fromInput: {
    height: 48,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  }
})

export default VerificationName;
