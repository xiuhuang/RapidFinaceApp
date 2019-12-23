import React, { Component } from 'react'
import { StyleSheet, View, Text,  Platform, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements';
import IcoMoonIcon from '../assets/icomoon'

@connect()

class SearchPage extends Component {
  static navigationOptions = {
    // header: null
    title:'搜索'
  }

  render() {
    return (
      <View style={styles.investDetailContainer}>
       <View style={[styles.searchBarBox, Platform.OS === 'ios' ? styles.searchBarBoxPadding : null]}>
          <View style={[styles.flexDirection, styles.searchBar]}>
            <View style={styles.flexDirection}>
              <IcoMoonIcon name="sousuo" size={18} color={'#999999'} />
              <TextInput style={Platform.OS === 'ios' ? styles.textInputOs : styles.textInput} placeholder='搜索' />
            </View>
            <IcoMoonIcon name="yinpin" size={18} color={'#999999'} />
          </View>
        </View>
        <Text style={styles.textStyle}>暂无历史记录</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  investDetailContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  flexDirection: {
    flexDirection:'row',
  },
  searchBarBox: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    padding: 10,
  },
  // searchBarBoxPadding: {
  //   paddingTop: 52,
  // },
  searchBar: {
    paddingLeft: 12,
    padding: 6,
    height: 34,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(220,220,220,1)',
    backgroundColor: 'rgba(245, 245, 245, 1)',
    justifyContent: 'space-between',
  },
  textInputOs: {
    marginLeft: 10,
    width: '80%',
  },
  textInput: {
    marginLeft: 10,
    textAlign: 'left',
    height: 38,
    lineHeight: 38,
    width: '80%',
    marginTop: -6,
  },
  textStyle: {
    color:'#999',
    marginTop: 30,
    textAlign:'center',
  }
})

export default SearchPage;
