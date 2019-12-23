import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList as BasicFlatList } from 'react-native'
import { ListItem } from 'react-native-elements';

class FlatList extends Component {
  handleSelect = (selectedItem) => {
    const { onPress } = this.props
    if (onPress && typeof onPress === 'function') {
      onPress(selectedItem)
    }
  }
  render() {
    const { data, leftElement, selectedItem, selected } = this.props
    const renderItem = ({ item }) => {
      
      return (
        <View key={item.id}>
          <ListItem
            title={
              <View style={styles.titleContainer}>
                <View><Text style={{ fontSize: 16, color: '#383838' }}>{item.userName}</Text></View>
                <View style={styles.titleHighlight}><Text style={{ fontSize: 14, color: '#F99259' }}>{item.describe[1]}</Text></View>
              </View>
            }
            leftElement={leftElement ? leftElement(item) : null}
            subtitle={`${item.userLabel}  ${item.institution}`}
            subtitleStyle={{ fontSize: 14, color: '#999999' }}
            leftAvatar={{
              source: { uri: item.headUrl },
              size: 49,
            }}
            onPress={() => this.handleSelect(item)}
            containerStyle={{ height: 83, borderColor: '#DCDCDC', borderBottomWidth: 1 }}
          />
        </View>
      )
    }
    return (
      <View style={styles.listContainer}>
        <BasicFlatList
          data={data}
          renderItem={renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 44,
    backgroundColor: '#fff'
  },
  titleContainer: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
    marginBottom: 5,
  },
  titleHighlight: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 19,
    backgroundColor: 'rgba(249,146,89,0.1)',
  }
})

export default FlatList