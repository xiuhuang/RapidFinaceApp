import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  PixelRatio,
} from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Input } from 'react-native-elements'
import PickerSelect from '../../components/PickerSelect';
import IcoMoonIcon from '../../assets/icomoon'
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../../components';
import { createAction, NavigationActions } from '../../utils'

const RowSelect = ({ item, onValueChange, ...rest }) => (
  <PickerSelect
    style={{
      viewContainer: {
        height: '100%',
      },
      inputIOS: {
        fontSize: 15,
        height: '100%',
        color: '#333',
        textAlign: 'right'
      },
      inputAndroid: {
        fontSize: 15,
        height: '100%',
        color: '#333',
        textAlign: 'right'
      }
    }}
    placeholder={{
      label: item && item.placeholder ? item.placeholder : "请选择" + item.title,
      value: null,
      color: '#9EA0A4',
    }}
    onValueChange={onValueChange}
    items={item.options || []}
    doneText="确认"
    Icon={() => null}
    {...rest}
  />
)

@connect(({ app }) => ({ ...app }))
class CompanyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  static navigationOptions = {
    title: '填写企业信息',
  }


  section = [{
    title: '公司名称',
    name: '上海XXXXX有限责任公司',
  }, {
    title: '企业性质',
    name: '民营企业',
    type: 'Select',
    options: [
      { label: '民营企业', value: 'minying' },
      { label: '国营企业', value: 'guoying' },
      { label: '外资企业', value: 'waizi' },
    ]
  }, {
    title: '职务',
    name: '投资经理',
    type: 'Select',
    options: [
      { label: '投资经理', value: 'jingli' },
      { label: '投资总监', value: 'zongjian' },
      { label: '合伙人', value: 'hehuoren' },
      { label: '分析师', value: 'fenxishi' },
    ]
  }, {
    title: '行业',
    name: '金融投行',
    type: 'Select',
    options: [
      { label: '金融投行', value: 'jinrong' },
      { label: '互联网', value: 'internet' },
      { label: '文化娱乐', value: 'yule' },
      { label: '政府民生', value: 'zhengfu' },
      { label: '科技', value: 'keji' },
      { label: '制造业', value: 'zhizao' },
    ]
  }, {
    title: '地区',
    name: '上海',
    type: 'Select',
    options: [
      { label: '上海', value: 'shanghai' },
      { label: '北京', value: 'beijing' },
      { label: '浙江', value: 'zhejiang' },
      { label: '重庆', value: 'chongqing' },
      { label: '四川', value: 'sichuan' },
      { label: '南京', value: 'nanjing' },
    ]
  }];
  
  submit = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'ChooseIdentity' }))
  }

  renderItem = ({ item }) => {
    let titleDom;
    if (item.type === 'Select') {
      titleDom = <RowSelect item={item} onValueChange={() => { console.log(12312) }} />;
    } else {
      const inputProps = {
        containerStyle: {
          paddingHorizontal: 0
        },
        inputStyle: {
          fontSize: 15,
          textAlign: 'right'
        },
        inputContainerStyle: {
          borderBottomWidth: 0
        }
      }
      titleDom = <Input {...inputProps} placeholder={item.placeholder ? item.placeholder : "请输入" + item.title} defaultValue={item.name} />;
    }
    return (
      <ListItem
        title={titleDom}
        style={{ marginTop: 1 / PixelRatio.get() }}
        leftAvatar={<Text style={{ fontSize: 15, color: '#686868', width: 68 }}>{item.title}</Text>}
        containerStyle={styles.itemStyle}
        chevron={item.type === 'Select' ? <IcoMoonIcon name="Rectangle" size={15} color='#D1D1D6' /> : false}
      />
    )
  }

  render() {
    return (
      <View>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={({ section: { title } }) => (
            title !== undefined ? <Text style={{ fontSize: 13, color: 'rgba(153, 153, 153, 1)', height: 34, lineHeight: 34, marginLeft: 16 }}>{title}</Text> : null
          )}
          sections={[
            { title: "企业信息", data: this.section },
          ]}
          keyExtractor={(item, index) => item + index}
        />
        <View style={styles.verifiBox}>
        <LinearGradient colors={['#00FFC2', '#03AAF3']} style={styles.btnBox}>
          <Button
            style={styles.loginBtn}
            textStyle={styles.btnText}
            onPress={this.submit}
          >下一步</Button>
        </LinearGradient>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(239, 243, 246, 1)'
  },
  headTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    color: '#383838',
    fontSize: 16,
  },
  desc: {
    color: '#00A0E9',
    fontSize: 14,
    marginLeft: 10,
    backgroundColor: 'rgba(0, 160, 233, 0.1)',
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  itemStyle: {
    height: 50,
    ...Platform.select({
      ios: {
        paddingVertical: 0,
        paddingHorizontal: 14,
      },
      default: {
        paddingVertical: 0,
        paddingHorizontal: 16
      },
    }),
  },
  verifiBox: {
    alignItems: 'center',
    width: '100%',
    marginTop: 35,
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
})

export default CompanyInfo;