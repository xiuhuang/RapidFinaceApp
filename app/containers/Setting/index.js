import React, {Component} from 'react'
import { StyleSheet, View, SectionList, Text, PixelRatio } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import IcoMoonIcon from '../../assets/icomoon'
import { NavigationActions } from '../../utils'

@connect()

class Setting extends Component {
  static navigationOptions = {
    title: '设置',
  }
  renderItem = ({item}) => {
    if(item.name === 'loginOut') {
      return (
        <View style={{marginTop: 63}}>
          <ListItem
            title={item.title}
            titleStyle={{color: '#F32020', fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}
            onPress={this.loginOut}
          />
        </View>
      )
    }
    return (
      <ListItem
        title={item.title}
        titleStyle={{fontSize: 16, color: '#333333'}}
        chevron={<IcoMoonIcon name="Rectangle" size={15} color='#D1D1D6'/>}
        style={{marginTop:1 / PixelRatio.get()}}
      />
    )
  }
  loginOut = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }
  render() {
    const section1 = [
      {
        title: '账号与安全',
        name: 'accounts',
      },
      {
        title: '信息认证',
        name: 'infoAuth',
      }
    ]
    const section2 = [
      {
        title: '屏蔽管理',
        name: 'shield'
      }
    ]
    const section3 = [
      {
        title: '帮助中心',
        name: 'helpCenter',
      },
      {
        title: '清除缓存',
        name: 'clearCache'
      }
    ]
    const section4 = [
      {
        title: '退出',
        name: 'loginOut',
      }
    ]
    return(
      <View style={styles.container}>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={({ section: { title } }) => (
            title !== undefined?<Text style={{ fontWeight: "bold" }}>{title}</Text>:null
          )}
          sections={[
            { title: '', data: section1 },
            { title: '', data: section2 },
            { title: '', data: section3 },
            { data: section4}
          ]}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(239, 243, 246, 1)'
  }
})

export default Setting