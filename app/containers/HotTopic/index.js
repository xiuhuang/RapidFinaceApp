import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import IcoMoonIcon from '../../assets/icomoon'
import { Button } from 'react-native-elements';
import ListItem from './Item'
import HtItem from './HtItem'
import hotList from '../../data/hotTop.json'

import { NavigationActions } from '../../utils'

@connect()
class Home extends Component {
  static navigationOptions = {
    title: '热门话题'
  }

  state = {
    selectedIndex: 0
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'HotTopicArticle' }))
  }

  gotoHtDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'HotTopicDetail' }))
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      <ListItem
        messagePic={item.messagePic}
        title={item.title}
        zan={item.zan}
        chat={item.chat}
        onPress={this.gotoDetail}
      />
    </View>
  )

  renderHtItem = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      <HtItem
        title={item.title}
        hotNum={item.hotNum}
        img={item.img}
        onPress={this.gotoHtDetail}
      />
    </View>
  )


  render() {
    const { selectedIndex } = this.state;
    const list = [
      {
        name: '吴培荣',
        avatar_url: 'http://b-ssl.duitang.com/uploads/item/201602/26/20160226231719_VKyJr.thumb.700_0.jpeg',
        messagePic: 'https://image.welian.com/woyw1574052736681_900_500_101.jpg',
        subtitle: '投资经理   英诺天使基金',
        time: '3个小时前',
        describe: ['匹配度79%', '黑金投手'],
        title: '个人投资找项目过程中需要注意什么？',
        zan: 90997,
        chat: 798,

      },
      {
        name: '吴培荣',
        avatar_url: 'http://b-ssl.duitang.com/uploads/item/201602/26/20160226231719_VKyJr.thumb.700_0.jpeg',
        messagePic: 'https://image.welian.com/taef1574052779971_900_500_122.jpg',
        subtitle: '投资经理   英诺天使基金',
        time: '3个小时前',
        describe: ['匹配度86%', '黑铁投手'],
        title: '适合投资的食品加工项目有哪些？',
        zan: 870,
        chat: 558,
      },
      {
        name: '吴培荣',
        avatar_url: 'http://b-ssl.duitang.com/uploads/item/201602/26/20160226231719_VKyJr.thumb.700_0.jpeg',
        messagePic: 'https://image.welian.com/dxnt1574169611146_900_500_44.jpg',
        subtitle: '投资经理   英诺天使基金',
        time: '3个小时前',
        describe: ['匹配度96%', '青铜投手'],
        title: '企业在融资过程中有什么技巧？',
        zan: 990,
        chat: 228,
      },
      {
        name: '吴培荣',
        avatar_url: 'http://b-ssl.duitang.com/uploads/item/201602/26/20160226231719_VKyJr.thumb.700_0.jpeg',
        messagePic: 'https://image.welian.com/zsvc1574169743390_900_500_89.jpg',
        subtitle: '投资经理   英诺天使基金',
        time: '3个小时前',
        describe: ['匹配度66%', '白银投手'],
        title: '天使投资人选择项目时有哪些标准？',
        zan: 670,
        chat: 98,
      },
    ]

    const headDom = ['资讯', '话题'].map((title, index) => {
      const isCurrent = selectedIndex === index;
      return <Button
        key={index.toString()}
        title={title}
        type="clear"
        buttonStyle={{
          borderRadius: 0,
          padding: 0,
          width: 140
        }}
        titleStyle={{
          color: isCurrent ? 'rgba(0, 160, 233, 1)' : 'rgba(102, 102, 102, 1)',
          fontSize: 16,
          height: 40,
          lineHeight: 34,
          borderBottomColor: isCurrent ? 'rgba(0, 160, 233, 1)' : 'transparent',
          borderBottomWidth: isCurrent ? 2 : 0,
        }}
        onPress={() => this.setState({
          selectedIndex: index
        })}
      />
    });

    return (
      <View style={styles.container}>
        <View style={styles.head}>
          {headDom}
        </View>
        {
          selectedIndex === 0 && <FlatList
            keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
          />
        }
        {
          selectedIndex === 1 && <FlatList
            keyExtractor={this.keyExtractor}
            data={hotList.data}
            renderItem={this.renderHtItem}
          />
        }

      </View>
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
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 40,
  }
})

export default Home
