import React, { Component } from 'react'
import { StyleSheet, View, FlatList, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import ListItem from './item'
import { NavigationActions } from '../../utils'

const list1 = [
  {
    name: '巨鼎金服',
    avatar_url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2002822151,2316433846&fm=26&gp=0.jpg',
    subtitle: ['机构评级  A级', '项目成交量 300'],
    describe: ['匹配度77%', '最新成交 xxxx项目'],
    location: '杭州',
  },
  {
    name: '君泰金服',
    avatar_url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1533157402,255727562&fm=26&gp=0.jpg',
    subtitle: ['机构评级  B级', '项目成交量 300'],
    describe: ['匹配度98%', '最新成交 xxxx项目'],
    location: '上海',
  },
  {
    name: '邻里金服',
    avatar_url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2770245283,2990608780&fm=26&gp=0.jpg',
    subtitle: ['机构评级  A级', '项目成交量 400'],
    describe: ['匹配度89%', '最新成交 xxxx项目'],
    location: '杭州',
  },
  {
    name: '海云金服',
    avatar_url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2322021834,2935275117&fm=26&gp=0.jpg',
    subtitle: ['机构评级 C级', '项目成交量 200'],
    describe: ['匹配度59%', '最新成交 xxxx项目'],
    location: '杭州',
  },
]
@connect()
class FinanceService extends Component {

  static navigationOptions = {
    title: '金融服务',
  }

  state = {
    selectedIndex: 0,
    data: list1,
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'FinanceDetail' }))

  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={item.avatar_url}
        time={item.time}
        location={item.location}
        describe={item.describe}
        onPress={this.gotoDetail}
      />
    </View>
  )

  handleChange = (index) => {
    if(index === 0) {
      this.setState({
        data: list1
      })
    } else if(index === 1) {
      const data = list1.concat([]).reverse()
      this.setState({
        data
      })
    } else if(index === 2) {
      const data = list1.concat([]).splice(2,2).concat(list1[0])
      this.setState({
        data
      })
    } else if(index === 3) {
      const data = list1
      this.setState({
        data
      })
    } else if(index === 4) {
      const data = list1.concat([]).reverse().splice(2,2).concat(list1[0])
      this.setState({
        data
      })
    } else if(index === 5) {
      const data = list1.concat([]).reverse()
      this.setState({
        data
      })
    } else if(index === 6) {
      const data = list1.concat([]).splice(2,2).concat(list1[0])
      this.setState({
        data
      })
    }
    this.setState({
      selectedIndex: index
    })
  }
  render() {
    const { selectedIndex, data } = this.state;
    const headDom = ['金融中介', '法务服务', '财务审计', '股权设计','税务筹划', '行业数据', '上市辅导'].map((title, index) => {
      const isCurrent = selectedIndex === index;
      return <Button
        key={index.toString()}
        title={title}
        type="clear"
        buttonStyle={{
          borderRadius: 0,
          borderBottomColor: isCurrent ? 'rgba(0, 160, 233, 1)' : 'transparent',
          borderBottomWidth: isCurrent ? 2 : 0,
          paddingHorizontal: 0,
          width: 70
        }}
        titleStyle={{
          color: isCurrent ? 'rgba(0, 160, 233, 1)' : 'rgba(102, 102, 102, 1)',
          fontSize: 16
        }}
        onPress={() => this.handleChange(index)}
        containerStyle={{
          width: 100,
        }}
      />
    });

    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <ScrollView horizontal={true}>
            {headDom}
          </ScrollView>
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={data}
          renderItem={this.renderItem}
        />
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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  }
})

export default FinanceService
