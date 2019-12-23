import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { SearchBar, CheckBox, ListItem, Button } from 'react-native-elements';
import IcoMoonIcon from '../../assets/icomoon'
import { NavigationActions } from '../../utils'
import FlatList from './FlatList'
import list from '../../data/investData.json'
import { identifier } from '@babel/types';

@connect(({ app }) => ({ ...app }))
class ResourcesSharing extends Component {
  static navigationOptions = {
    title: '资源共享',
  }
  state = {
    selectedItem: null,
    search: '',
    dataList: list.data,
    selected: [],
  }
  updateSearch = (search) => {
    const findOfQuery = (arr, keyWord) => {
      const result = []
      arr.forEach(element => {
        if(element.name.indexOf(keyWord)>=0) {
          result.push(element)
        }
      })
      return result
    }
    const dataList = search? findOfQuery(data, search): data
    this.setState({
      search,
      dataList,
    })
  }
  handleSelect = (selectedItem) => {
    console.log(selectedItem)
    const { selected } = this.state
    let arr = selected.concat([])
    if(selected.find(i => i.id === selectedItem.id)) {
      arr = arr.filter(i => i.id === selectedItem.id)
    } else {
      arr.push(selectedItem)
    }
    this.setState({
      selected: arr,
    }) 
  }
  checkAll = () => {
    const { dataList, selected } = this.state
    if(selected.length === dataList.length) {
      this.setState({
        selected: []
      })
    } else {
      this.setState({
        selected: dataList
      })
    }
  }
  goShare = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'ChooseSharer' }))
  }
  render() {
    const { search,selectedItem, dataList, selected } = this.state
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="搜索"
          onChangeText={this.updateSearch}
          value={search}
          searchIcon={<IcoMoonIcon name="sousuo" size={18} color={'#999999'} />}
          containerStyle={{backgroundColor: 'rgba(239, 243, 246, 1)', borderBottomWidth: 0, borderTopWidth: 0}}
          inputContainerStyle={{backgroundColor: '#fff', borderRadius: 14, height: 28, marginTop: 5, marginBottom: 6}}
          showLoading={false}
          clearIcon={null}
        />
        <View>
          <FlatList
            data={dataList}
            leftElement={(item) => {
              const checked = selected.find(i => i.id === item.id)
              return (
                <CheckBox
                  checked={checked}
                  checkedIcon={<IcoMoonIcon name="yikan" size={18} color={'#00A0E9'} />}
                  uncheckedIcon={<View style={{width: 18, height: 18, borderRadius: 12, borderWidth: 1, borderColor: '#999999'}}></View>}
                  containerStyle={{paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0}}
                  onPress={() => this.handleSelect(item)}
                />
              )
            }}
            onPress={this.handleSelect}
            selectedItem={selectedItem}
            selected={selected}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContainer}>
            <CheckBox
              checked={selected.length === dataList.length}
              title="全选"
              textStyle={{fontSize: 14, color: '#666666'}}
              checkedIcon={<IcoMoonIcon name="yikan" size={18} color={'#00A0E9'} />}
              uncheckedIcon={<View style={{width: 18, height: 18, borderRadius: 12, borderWidth: 1, borderColor: '#999999'}}></View>}
              containerStyle={{paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0, backgroundColor: '#fff', borderColor: '#fff'}}
              onPress={this.checkAll}
            />
            <View style={styles.footerRight}>
              <Text style={{fontSize: 14, color: '#666666'}}>已选择 16 位</Text>
              <Button
                title="共享资源"
                containerStyle={{
                  width: 100,
                  marginLeft: 10,
                }}
                disabled={selected.length === 0}
                disabledStyle={{backgroundColor: '#999999'}}
                disabledTitleStyle={{color: '#fff', fontSize: 14}}
                buttonStyle={{
                  borderColor: '#03AAF3',
                  borderRadius: 30,
                  backgroundColor: '#03AAF3',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                titleStyle={{fontSize: 14, color: '#fff'}}
                onPress={this.goShare}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgba(239, 243, 246, 1)',
    paddingBottom: 82,
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  navItem: {
    width: '50%',
    height:52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff'
  },
  footerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    paddingLeft: 18,
    paddingRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default ResourcesSharing