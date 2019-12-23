import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem, View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { NavigationActions } from '../../utils'
import IcoMoonIcon from '../../assets/icomoon'
import TableDisplay from './TableDisplay'

@connect()
class VipService extends Component {
  static navigationOptions = {
    title: 'VIP服务',
  }
  render() {
    const columns = [
      {
        title: '特区列表',
        dataIndex: 'rightType',
      },
      {
        title: '会员',
        dataIndex: 'common',
        render: (text) => (
          <Text>{text? <IcoMoonIcon name="duigou" size={13} color='#F99259'/>: null}</Text>
        )
      },
      {
        title: 'VIP会员',
        dataIndex: 'VIP',
        render: (text) => (
          <Text>{text? <IcoMoonIcon name="duigou" size={13} color='#F99259'/>: null}</Text>
        )
      },
    ]
    const data = [
      {
        id: 1,
        rightType: '项目投递',
        common: true,
        VIP: true
      },
      {
        id: 2,
        rightType: '投资创建',
        common: true,
        VIP: true
      },
      {
        id: 3,
        rightType: '在线沟通',
        common: true,
        VIP: true
      },
      {
        id: 4,
        rightType: '征信大数据',
        common: true,
        VIP: true
      },
      {
        id: 5,
        rightType: '商业计划书指导',
        common: false,
        VIP: true
      },
      {
        id: 6,
        rightType: '职业投资指导',
        common: false,
        VIP: true
      },
      {
        id: 7,
        rightType: '投资广告服务',
        common: false,
        VIP: true
      },
      {
        id: 8,
        rightType: '项目广告服务',
        common: false,
        VIP: true
      },
      {
        id: 9,
        rightType: '对接高级投资方',
        common: false,
        VIP: true
      },
      {
        id: 10,
        rightType: '精品项目推荐',
        common: false,
        VIP: true
      },
      {
        id: 11,
        rightType: '优质信息推送',
        common: false,
        VIP: true
      },
    ]
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Image style={{width: 140, height: 105, marginRight: 10}} source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574341370499&di=d0b9e577b9e53a021e3a814b589d72fc&imgtype=0&src=http%3A%2F%2Fimg.ljia.com%2FUploads%2Fxinxiang%2F2014-10%2F1014%2F2014102915135499347.jpg'}} />
            <View>
              <Text style={styles.headerWord}>会员礼遇，享受更优质资讯服务，</Text>
              <Text style={styles.headerWord}>对接高级投资人，浏览精品项目。</Text>
            </View>
          </View>
          <View>
            <TableDisplay columns={columns} data={data} />
          </View>
          <View style={styles.footer}>
            <Button
              title="前往会员中心开通"
              buttonStyle={{
                borderRadius: 37,
                width: 160,
                height: 32,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#03AAF3'
              }}
              titleStyle={{
                fontSize: 14,
                color: '#ffffff',
              }}
              onPress={() => this.props.dispatch(NavigationActions.navigate({ routeName: 'MemberCenter' }))}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(239, 243, 246, 1)'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 11,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
    backgroundColor: '#fff'
  },
  headerWord: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  footer: {
    paddingTop: 42,
    paddingBottom: 64,
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

export default VipService