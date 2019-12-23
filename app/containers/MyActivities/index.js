import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import IcoMoonIcon from '../../assets/icomoon'
import { Button } from 'react-native-elements';
import ListItem from './Item'
import activityList from '../../data/activityData.json'

import { NavigationActions } from '../../utils'

@connect()
class Home extends Component {
  static navigationOptions = {
    title: '我的活动'
  }

  state = {
    selectedIndex: 0,
    data: activityList.data
  }

  gotoDetail = (item) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'FindActivitiesDetail', params: { id: item.id}}))
  }

  keyExtractor = (item, index) => index.toString()

  handleChange = (index) => {
    const { data } = this.state
    if(index === 0) {
      this.setState({
        data: activityList.data,
      })
    } else if(index === 1) {
      const newData = data.concat([])
      newData.reverse().pop()
      this.setState({
        data: newData
      })
    }
    this.setState({
      selectedIndex: index
    })
  }

  renderItem = ({ item }) => (
      <View style={{marginTop:10}}>
        <ListItem
          onPress={() => this.gotoDetail(item)}
          data={item}
        />
      </View>
  )

  render() {
    const { selectedIndex, data } = this.state;
    const headDom = ['未开始', '已结束'].map((title, index) => {
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
          width:70,
          height: 42,
        }}
        titleStyle={{
          color: isCurrent ? 'rgba(0, 160, 233, 1)' : 'rgba(102, 102, 102, 1)',
          fontSize: 16
        }}
        containerStyle={{
          height: 44
        }}
        onPress={() => this.handleChange(index)}
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
        /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(239, 243, 246, 1)',
    paddingBottom: 20,
  },
  head: {       
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent:'center',
    justifyContent: 'space-around',
  }
})

export default Home
