import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './item'
import { NavigationActions } from '../../utils'
import listData from '../../data/senseData.json'

@connect()
class CommonSense extends Component {

  static navigationOptions = {
    title: '融资常识',
  }

  state = {
    selectedIndex: 0
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'SenseDetail' }))

  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={item.pic}
        time={item.time}
        location={item.location}
        onPress={this.gotoDetail}
      />
    </View>
  )


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={listData.data}
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
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})

export default CommonSense
