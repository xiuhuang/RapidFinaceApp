import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Text, PixelRatio, TouchableHighlight, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import IcoMoonIcon from '../../assets/icomoon'
import { Button } from 'react-native-elements';
import ListItem from './DItem'
import { NavigationActions } from '../../utils'

@connect()
class Home extends Component {
  static navigationOptions = {
    title: '话题内容'
  }

  gotoDetail = () => {
    // this.props.dispatch(NavigationActions.navigate({ routeName: 'ProjectDetail' }))

  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={item.avatar_url}
        content={item.content}
        time={item.time}
        describe={item.describe}
      // onPress={this.gotoDetail}
      />
    </View>
  )


  render() {
    const list = [
      {
        name: 'QoQ',
        avatar_url: 'https://pic4.zhimg.com/50/v2-cad262f81cb8de35ad8e148d6dbafc38_xs.jpg',
        subtitle: '投资经理   英诺天使基金',
        time: '3个小时前',
        describe: ['黑铁投手'],
        content: 
        '融资租赁的主要特点是资产管理和运营,租赁公司决定向企业提供资金是基于企业资产信用,更加看重企业在融入租赁物件后所创造现金流是否能全额覆盖未来的租金支付,如果现金流大于当期租金的刚性支出,那么就可以向企业提供融资服务。'
      },
      {
        name: '李肇兴',
        avatar_url: 'https://pic3.zhimg.com/50/v2-4540d9841056d253adb1115d107227b0_xs.jpg',
        subtitle: '投资经理   英诺天使基金',
        time: '3个小时前',
        describe: ['白银投手'],
        content: '项目融资(ProjectFinance)或称项目融资，是另一种融资的观念，相关实务大约20年前引进，我那时恰好有机会参与学习，因此才认识项目融资是怎么一回事！'
      },
      {
        name: '吴培荣',
        avatar_url: 'http://b-ssl.duitang.com/uploads/item/201602/26/20160226231719_VKyJr.thumb.700_0.jpeg',
        subtitle: '投资经理   英诺天使基金',
        time: '3个小时前',
        describe: ['青铜投手'],
        content: '英诺天使投资总监，主要关注消费和文旅。英诺天使基金投资管理团队已投资超过200个创业项目、管理超过20亿人民币天使基金，以清华校友为起点，建立了立铁的创业服务,以清华校友为起点，建立了立铁的创业服务'
      },
      {
        name: 'Jrk',
        avatar_url: 'https://pic3.zhimg.com/50/v2-4540d9841056d253adb1115d107227b0_xs.jpg',
        subtitle: '投资经理   英诺天使基金',
        time: '3个小时前',
        describe: ['黑铁投手'],
        content: '英诺天使投资总监，主要关注消费和文旅。英诺天使基金投资管理团队已投资超过200个创业项目、管理超过20亿人民币天使基金，以清华校友为起点，建立了立铁的创业服务,以清华校友为起点，建立了立铁的创业服务'
      },
    ]

    return (
      <ScrollView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.t1}>创业一定要融资？什么是融资？</Text>
          <Text style={styles.t2}>
            融资（financing）即是一个企业的资金筹集的行为与过程，
也就是说公司根据自身的生产经营状况、资金拥有的状况，以及公司
未来经营发展的需要，通过科学的预测和决策，采用一定的方式，从
一定的渠道向公司的投资者和债权人去筹集资金，组织资金的供应，
以保证公司正常生产需要，经营管理活动需要的理财行为。</Text>
          <Text style={styles.t3}>154个回答</Text>
          <TouchableHighlight onPress={() => console.log(12323)}>
            <View style={styles.hBottom}>
              <IcoMoonIcon name="flash-" size={22} color='#48C7BB' />
              <Text style={{ color: '#48C7BB', fontSize: 16, marginLeft: 12 }}>写回答</Text>
            </View>
          </TouchableHighlight>
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(239, 243, 246, 1)'
  },
  head: {
    backgroundColor: 'white',
  },
  t1: {
    fontSize: 16,
    color: '#666',
    marginVertical: 12,
    paddingHorizontal: 10
  },
  t2: {
    fontSize: 14,
    color: '#999',
    marginBottom: 6,
    paddingHorizontal: 10
  },
  t3: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  hBottom: {
    borderTopColor: '#DCDCDC',
    borderTopWidth: 1 / PixelRatio.get(),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    flexDirection: 'row',
    backgroundColor: 'white',
  }
})

export default Home
