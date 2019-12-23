import React, { Component } from 'react'
import { StyleSheet, View, SectionList, Text, PixelRatio, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import IcoMoonIcon from '../../assets/icomoon'
import { NavigationActions } from '../../utils'


@connect(({ app }) => ({ ...app }))
class My extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ focused, tintColor }) => (
      <IcoMoonIcon name="wodexinlemoren-copy" size={22} color={focused ? tintColor : 'gray'} />
    ),
  }
  constructor(props) {
    super(props)
    this.state={
      loginInfo: null
    }
    this.getLoginInfo = this.getLoginInfo.bind(this)
  }
  componentDidMount() {
    this.getLoginInfo()
  }
  shouldComponentUpdate () {
    this.getLoginInfo()
    return true
  }
  async getLoginInfo(){
    const value = await AsyncStorage.getItem('LoginInfo');
    if (value !== null) {
      this.setState({
        loginInfo: JSON.parse(value)
      })
    }
  }
  goMyInfo = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'MyInfo' }))
  }

  goMyList = (item) => {
    if (item.name === '我的投资') {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'MyInVestment' }))
    } else if (item.name === '我的项目') {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'MyProject' }))
    } else if (item.name === '会员中心') {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'MemberCenter' }))
    }else if(item.name === '我的活动'){
      this.props.dispatch(NavigationActions.navigate({ routeName: 'MyActivities' }))
    } else if (item.name === '设置') {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'Setting' }))
    } else if (item.name === '我的课程') {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'MyCourse' }))
    } else if (item.name === '身份切换') {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'SwitchIdentity' }))
    } else if (item.name === '我的好友') {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'MyFriends' }))
    }else if(item.name === '我的收藏') {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'MyFavorite' }))
    }
  }


  renderItem = ({ item }) => {
    const { loginInfo } = this.state
    if (item.type === 'head') {
      return <ListItem
        title={<View style={styles.headTitle}><Text style={styles.name}>{item.name}</Text><Text style={styles.desc}>{item.desc}</Text></View>}
        subtitle={item.subtitle}
        subtitleStyle={{ color: '#999999', marginTop: 6 }}
        leftAvatar={{ source: { uri: 'https://image.welian.com/dgco1534474567650_1902_1902_263.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_F2F2F2' } }}
        chevron={<IcoMoonIcon name="Rectangle" size={15} color='#D1D1D6' />}
        containerStyle={{ paddingTop: 52 }}
        onPress={this.goMyInfo}
      />
    }
    return (
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        rightTitle={`${item.name === '身份切换'? loginInfo && loginInfo.loginType: ''}`}
        leftIcon={<IcoMoonIcon name={item.icon} size={18} color='rgba(0, 160, 233, 1)' />}
        chevron={<IcoMoonIcon name="Rectangle" size={15} color='#D1D1D6' />}
        style={{ marginTop: 1 / PixelRatio.get() }}
        onPress={() => this.goMyList(item)}
      />
    )
  }


  render() {
    const { loginInfo } = this.state
    const section1 = [{
      name: '会员中心',
      icon: 'huiyuanzhongxin'
    }];
    const section2 = [
      {
        name: '我的投资',
        icon: 'wodetouzi',
      }, {
        name: '我的项目',
        icon: 'wodexiangmu',
      }, {
        name: '我的课程',
        icon: 'wodekecheng',
      }, {
        name: '我的活动',
        icon: 'wodehuodong',
      }, {
        name: '我的收藏',
        icon: 'wodeshoucang',
      }, {
        name: '我的好友',
        icon: 'wodehaoyou',
      }];

    const section3 = [{
      name: '身份切换',
      icon: 'qiehuanshenfen',
    }, {
      name: '设置',
      icon: 'shezhi',
    }];

    const headData = [{
      type: 'head',
      name: '张明',
      subtitle: '投资经理  熊猫资本',
      desc: '黑铁投手'
    }];
    
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={({ section: { title } }) => (
            title !== undefined ? <Text style={{ fontWeight: "bold" }}>{title}</Text> : null
          )}
          sections={[
            { data: headData },
            { title: "", data: section1 },
            { title: "", data: section2 },
            { title: "", data: section3 }
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
    backgroundColor: 'rgba(239, 243, 246, 1)'
  },
  headTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    color: '#383838',
    fontSize: 16
  },
  desc: {
    color: '#00A0E9',
    fontSize: 14,
    marginLeft: 10,
    backgroundColor: 'rgba(0, 160, 233, 0.1)',
    paddingHorizontal: 5,
    paddingVertical: 3
  }
})

export default My
