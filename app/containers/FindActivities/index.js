import React, { Component } from 'react'
import { StyleSheet, View, FlatList,Text } from 'react-native'
import { connect } from 'react-redux'
import IcoMoonIcon from '../../assets/icomoon'
import { Button,Overlay } from 'react-native-elements';
import ListItem from './Item.js'
import listData from '../../data/activityData.json'

import TopMenu from "../../components/TopMenu";
import { NavigationActions } from '../../utils'

const CONFIG = [
    {
        type:'subtitle2',
        selectedIndex:0,
        data:[
            { title:'不限',showTitle:'时间' },
            { title:'2019-01' },
            { title:'2019-02' },
            { title:'2019-03' },
            { title:'2019-04' },
        ]
    },
    {
        type:'subtitle',
        selectedIndex:0,
        data:[
            { title:'不限',showTitle:'地点' },
            { title:'上海' },
            { title:'南京' },
            { title:'北京' },
            { title:'杭州' },
        ]
    },
    {
        type:'title',
        selectedIndex:0,
        data:[{
            title:'不限',
            showTitle:'费用'
        }, {
            title:'500以内'
        }, {
            title:'500-1000'
        }, {
            title:'1000以上'
        }]
    },
    {
        type:'title2',
        selectedIndex:0,
        data:[{
            title:'不限',
            showTitle:'筛选'
        }, {
            title:'地址'
        },]
    }
];

@connect()
class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '投融动态',
    headerRight: (
        <Button
          style={{ marginRight: 6 }}
          title="新增"
          type="clear"
          onPress={() => navigation.navigate({ routeName: 'InvestAdd' })}
        />
    ),
  })

  state = {

  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'FindActivitiesDetail' }))
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item,index }) => (
      <View style={{marginTop:10}}>
        <ListItem
          title={item.name}
          leftAvatar={item.pic}
          address={item.address}
          onPress={this.gotoDetail}
          index={index}
          {...item}
        />
      </View>
  )

  onSelectMenu=(index, subindex, data)=>{
       this.setState({index, subindex, data});
  };


  render() {
    return (
      <View style={styles.container}>
        <TopMenu 
            config={CONFIG} 
            onSelectMenu={this.onSelectMenu} 
            renderContent={()=>
                (<FlatList
                    keyExtractor={this.keyExtractor}
                    data={listData.data}
                    renderItem={this.renderItem}
                />)
            }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(239, 243, 246, 1)'
  },
})

export default Home
