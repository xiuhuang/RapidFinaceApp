import React, { Component } from 'react'
import { StyleSheet, View, FlatList, AsyncStorage, DeviceEventEmitter } from 'react-native'
import { connect } from 'react-redux'
import IcoMoonIcon from '../assets/icomoon'
import { Button } from 'react-native-elements';
import ListItem from './Home/HomeItem'
import ListFinanceItem from './Home/FinanceItem'
import { NavigationActions } from '../utils'
import financeList from '../data/financeData.json'
import investList from '../data/investData.json'
import autoRecom from '../data/investData02.json'
import chooseData from '../data/financeData02.json'

@connect()
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '快资',
    tabBarIcon: ({ focused, tintColor }) => (
      <IcoMoonIcon name="flash-" size={22} color={focused ? tintColor : 'gray'} />
    ),
  }

  state = {
    selectedIndex: 0,
    isOpen: false
  }

  gotoDetail = (routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName }))
  }

  keyExtractor = (item, index) => index.toString()


  renderItem = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      <ListItem
        title={item.userName}
        subtitle={item.subtitle}
        leftAvatar={item.headUrl}
        content={item.content}
        time={item.publishTime}
        describe={item.describe}
        userLabel={item.userLabel}
        institution={item.institution}
        onPress={() => this.gotoDetail('InvestDetail')}
      />
    </View>
  )

  renderFinanceItem = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      <ListFinanceItem
        title={item.projectName}
        info={item.info}
        time={item.publishTime}
        subtitle={item.subtitle}
        leftAvatar={item.projectLogo}
        content={item.content}
        match={item.matchRate}
        address={item.address}
        onPress={() => this.gotoDetail('ProjectDetail')}
      />
    </View>
  )


  render() {
    const { selectedIndex } = this.state;
    const headDom = ['智能推荐', '快速投资', '快速融资', '匹配设置'].map((title, index) => {
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
        onPress={() => {
          if (index === 3) {
            this.setState({
              selectedIndex: 0
            })
            this.props.dispatch(NavigationActions.navigate({ routeName: 'ChoosePage' }))
          } else {
            this.setState({
              selectedIndex: index
            })
          }
        }
        }
      />
    });

    let formList;
    if (selectedIndex === 0) {
      formList = (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={autoRecom.data}
          renderItem={this.renderItem}
        />
      )
    } else if (selectedIndex === 1) {
      formList = (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={investList.data}
          renderItem={this.renderItem}
        />
      )
    } else if (selectedIndex === 2) {
      formList = (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={financeList.data}
          renderItem={this.renderFinanceItem}
        />
      )
    }
    else if (selectedIndex === 3) {
      formList = (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={chooseData.data}
          renderItem={this.renderFinanceItem}
        />
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.head}>
          {headDom}
        </View>
        {formList}
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
    paddingHorizontal: 10
  }
})

export default Home
