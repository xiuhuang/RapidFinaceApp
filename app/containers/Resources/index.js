import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import ListItem from './item'
import { NavigationActions } from '../../utils'

@connect()
class Resources extends Component {

  static navigationOptions = {
    title: '行业资源',
  }

  state = {
    selectedIndex: 0
  }

  // gotoDetail = () => {
  //   this.props.dispatch(NavigationActions.navigate({ routeName: 'ResourceDetail' }))
  // }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <View>
      <ListItem
        title={item.name}
        tag={item.tag}
        subtitle={item.subtitle}
        leftAvatar={item.avatar_url}
      />
    </View>
  )


  render() {
    const { selectedIndex } = this.state;
    const list = [
      {
        name: '吴培荣',
        tag: '黑铁投手',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '投资经理',
      },
      {
        name: '吴培荣',
        tag: '黑铁投手',
        avatar_url: 'http://b-ssl.duitang.com/uploads/item/201602/26/20160226231719_VKyJr.thumb.700_0.jpeg',
        subtitle: '投资经理',
      },
    ]

    const headDom = ['项目方', '投资方', '中介方'].map((title, index) => {
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
          width: 70,
          marginLeft: index === 1 ? 40 : 0,
          marginRight: index === 1 ? 40 : 0,
        }}
        titleStyle={{
          color: isCurrent ? 'rgba(0, 160, 233, 1)' : 'rgba(102, 102, 102, 1)',
          fontSize: 16
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
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
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
    paddingHorizontal: 10,
    marginBottom:10,

  }
})

export default Resources
