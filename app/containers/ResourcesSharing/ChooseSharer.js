import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements';
import IcoMoonIcon from '../../assets/icomoon'
import FlatList from './FlatList'
import list from '../../data/investData.json'

class ChooseSharer extends Component {
  static navigationOptions = {
    title: '选择共享人',
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          {
            ['共享给全部好友', '共享给平台好友'].map(item => (
              <ListItem
                title={item}
                titleStyle={{color: '#666666', fontSize: 14}}
                containerStyle={{borderColor: '#DCDCDC', borderBottomWidth: 1}}
              />
            ))
          }
        </View>
        <View style={styles.divider}>
          <Text style={styles.textFont}>选择指定好友</Text>
        </View>
        <View>
          <FlatList
            data={list.data}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgba(239, 243, 246, 1)'
  },
  divider: {
    height: 37,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  textFont: {
    fontSize: 14,
    color: '#666666',
  }
})

export default ChooseSharer