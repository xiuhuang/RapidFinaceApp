import React, { Component } from 'react'
import { StyleSheet, View, FlatList, PixelRatio, Text } from 'react-native'
import { Button } from 'react-native-elements'
import ListItem from './item'
import { NavigationActions } from '../../utils'
import friendsList from '../../data/investData.json'
const colleague = [
  {
    "headUrl": "http://47.103.37.193:5001/static/images/invest/9.jpg",
    "userName": "王文嘉",
    "userLabel": "合伙人",
    "institution": "信天创投",
    "investProject": "35",
    "match": "99",
    "publishTime": "3天前",
    "deliverStatus": "0",
    "userId": 1,
    "id": 100883,
    "describe": [ "匹配度92%","黑铁投手"],
    "content": "英诺天使投资总监，主要关注消费和文旅。英诺天使基金投资管理团队已投资超过200个创业项目、管理超过20亿人民币天使基金，以清华校友为起点，建立了立铁的创业服务,以清华校友为起点，建立了立铁的创业服务"
  },
  {
    "headUrl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1349944129,1637349918&fm=15&gp=0.jpg",
    "userName": "杜昱欣",
    "userLabel": "投资经理",
    "institution": "青松基金",
    "investProject": "2",
    "match": "99",
    "publishTime": "半个月前",
    "deliverStatus": "0",
    "userId": 138,
    "id": 58297,
    "describe": [
      "匹配度90%",
      "黑铁投手"
    ],
    "content": "青松基金投资总监，主要关注消费和文旅。英诺天使基金投资管理团队已投资超过200个创业项目、以清华校友为起点，建立了立铁的创业服务,以清华校友为起点，建立了立铁的创业服务"
  },
  {
    "headUrl": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1312036598,3694255896&fm=11&gp=0.jpg",
    "userName": "呼双鹏",
    "userLabel": "投资经理",
    "institution": "青山资本",
    "investProject": "123",
    "match": "94",
    "publishTime": "半年前",
    "deliverStatus": "0",
    "userId": 5,
    "id": 106616,
    "describe": [ "匹配度88%","黑铁投手"],
    "content": "英诺天使投资总监，主要关注消费和文旅。英诺天使基金投资管理团队已投资超过200个创业项目、管理超过20亿人民币天使基金，以清华校友为起点，建立了立铁的创业服务,以清华校友为起点，建立了立铁的创业服务"
  },
  {
    "headUrl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2532734281,3941582788&fm=26&gp=0.jpg",
    "userName": "牟健",
    "userLabel": "合伙人",
    "institution": "青山资本",
    "investProject": "123",
    "match": "94",
    "publishTime": "2天",
    "deliverStatus": "0",
    "userId": 59,
    "id": 49852,
    "describe": [ "匹配度80%","黑铁投手"],
    "content": "英诺天使投资总监，主要关注消费和文旅。英诺天使基金投资管理团队已投资超过200个创业项目、管理超过20亿人民币天使基金，以清华校友为起点，建立了立铁的创业服务,以清华校友为起点，建立了立铁的创业服务"
  },
  {
    "headUrl": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3390868777,3800736113&fm=15&gp=0.jpg",
    "userName": "王彤",
    "userLabel": "投资经理",
    "institution": "英诺天使",
    "investProject": "222",
    "match": "98",
    "publishTime": "半年前",
    "deliverStatus": "0",
    "userId": 158,
    "id": 18822,
    "describe": [ "匹配度77%","黑铁投手"],
    "content": "英诺天使投资总监，主要关注消费和文旅。英诺天使基金投资管理团队已投资超过200个创业项目、管理超过20亿人民币天使基金，以清华校友为起点，建立了立铁的创业服务,以清华校友为起点，建立了立铁的创业服务"
  },
]
const friends = friendsList.data.concat([]).splice(0, 5)
const recommendFriends = friendsList.data.concat([]).splice(4, 6)
const LINE = 1 / PixelRatio.get()

class MyFriends extends Component {

  static navigationOptions = {
    title: '我的好友',
  }

  state = {
    selected: '直接好友',
    data: friends,
  }

  keyExtractor = (item, index) => index.toString()

  handleChange = (title) => {
    if(title === '直接好友') {
      this.setState({
        data: friends,
      })
    } else if(title === '好友推荐') {
      this.setState({
        data: recommendFriends,
      })
    }else if(title === '公司同事') {
      this.setState({
        data: colleague,
      })
    }
    this.setState({
      selected: title
    })
  }

  renderItem = ({ item }) => (
    <View>
      <ListItem
        title={item.userName}
        userLabel={item.userLabel}
        leftAvatar={item.headUrl}
        institution={item.institution}
        tag={item.describe[1]}
        id={item.id}
        location={item.location}
      />
    </View>
  )


  render() {
    const { selected, data } = this.state;
    const headDom = ['直接好友', '好友推荐', '公司同事'].map((title, index) => {
      const isCurrent = selected === title;
      return <Button
        key={index.toString()}
        title={title}
        type="clear"
        buttonStyle={{
          borderRadius: 0,
          borderBottomColor: isCurrent ? 'rgba(0, 160, 233, 1)' : 'transparent',
          borderBottomWidth: isCurrent ? 2 : 0,
          paddingHorizontal: 0,
          width: 70,
          marginLeft: index === 1 ? 40 : 0,
          marginRight: index === 1 ? 40 : 0,
        }}
        titleStyle={{
          color: isCurrent ? 'rgba(0, 160, 233, 1)' : 'rgba(102, 102, 102, 1)',
          fontSize: 16
        }}
        onPress={() => this.handleChange(title)}
      />
    });


    return (
      <View style={styles.container}>
        <View style={styles.head}>
          {headDom}
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={data}
          renderItem={this.renderItem}
          ListFooterComponent={
          <Text style={{ textAlign: 'center', color: '#666', fontSize: 14, lineHeight: 40 }}>共有{data.length}位{selected}</Text>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  head: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: LINE,
  }
})

export default MyFriends
