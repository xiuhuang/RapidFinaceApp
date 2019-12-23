import React, { Component } from 'react'
import { StyleSheet, View, FlatList,Text } from 'react-native'
import { connect } from 'react-redux'
import IcoMoonIcon from '../../assets/icomoon'
import { Button,Overlay } from 'react-native-elements';
import ListItem from './ListItem'
import TopMenu from "../../components/TopMenu";
import { NavigationActions } from '../../utils'
import listData from '../../data/projectData.json'

const CONFIG = [
    {
        type:'subtitle',
        selectedIndex:0,
        data:[
            { title:'不限',showTitle:'发布状态' },
            { title:'已发布' },
            { title:'未发布' },
            { title:'已完成' },
            { title:'已撤销' },
        ]
    },
    {
        type:'subtitle',
        selectedIndex:0,
        data:[
            { title:'不限',showTitle:'投资状态' },
            { title:'已投资' },
            { title:'未投资' },
            { title:'已完成' },
            { title:'已撤销' },
        ]
    },
    {
        type:'title',
        selectedIndex:0,
        data:[{
            title:'不限',
            showTitle:'金融'
        }, {
            title:'医疗'
        }, {
            title:'农业'
        }, {
            title:'科技'
        }]
    }
];

@connect()
class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '我的项目',
    headerRight: (
        <Button
          style={{ marginRight: 6 }}
          title="新增"
          type="clear"
          onPress={() => navigation.navigate({ routeName: 'MyProjectAdd' })}
        />
    ),
  })

  state = {

  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'MyProjectDetail' }))
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item,index }) => (
      <View style={{marginTop:10}}>
        <ListItem
          title={item.status}
          leftAvatar={item.projectLogo}
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
