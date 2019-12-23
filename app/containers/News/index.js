import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import IcoMoonIcon from '../../assets/icomoon'
import { ListItem, Badge } from 'react-native-elements';
import { NavigationActions } from '../../utils'

const messageList = [
  {
    name: '金雨',
    avatar_url: 'https://image.welian.com/jmxv1571651649374_1240_1240_293.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_F2F2F2',
    subtitle: '这个项目不错！',
    time: '16:40',
    identity: '投资经理·英诺天使基金',
    badge: true,
  },
  {
    name: '徐作彪',
    avatar_url: 'https://image.welian.com/zzvh1542086359868_1242_1242_370.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_F2F2F2',
    subtitle: '我想简单的了解下项目',
    time: '2019.11.03',
    identity: '投资总监·小苗基金',
  },
  {
    name: '刘学炎',
    avatar_url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1682324091,1666510177&fm=115&gp=0.jpg',
    subtitle: '项目投递成功消息',
    time: '16:40',
    identity: '投资经理·青山资本',
  }
]

@connect(({ app }) => ({ ...app }))

class News extends Component {
  static navigationOptions = {
    tabBarLabel: '消息',
    tabBarIcon: ({ focused, tintColor }) => (
      <IcoMoonIcon name="xiaoxi" size={22} color={focused ? tintColor : 'gray'} />
    ),
  }

  gotoSystem = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'System' }))
  }

  gotoChats = (name) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Chats', title: name }))
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <ListItem
            containerStyle={{ padding: 10 }}
            leftAvatar={
              <View style={styles.sysIcon}>
               <IcoMoonIcon name="xiaoxi2" size={20} color="#fff" />
              </View>
            }
            title={<Text style={[styles.titleColor, styles.titleSize]}> 系统消息</Text>}
            subtitle={
              <View style={styles.marginTop6}>
                <Text style={[styles.grayColor, styles.size12]}>项目投递成功消息</Text>
              </View>
            }
            onPress={this.gotoSystem}
          />
        </View>
        <View style={styles.messageList}>
          {
            messageList.map((item, index) => {
              return (
                <View style={styles.messageItem} key={index}>
                  <ListItem
                    containerStyle={{ padding: 10 }}
                    leftAvatar={{ source: { uri: item.avatar_url }, size: 40 }}
                    title={
                      <View style={styles.flexDirection}>
                        <Text style={[styles.titleColor, styles.titleSize]}> {item.name}</Text>
                        <Text style={[styles.grayColor, styles.size12, styles.marginLeft10]}> {item.identity}</Text>
                      </View>
                    }
                    subtitle={
                      <View style={styles.marginTop6}>
                        <Text style={[styles.lightGrayColor, styles.size12]}>{item.subtitle}</Text>
                      </View>
                    }
                    chevron={
                      <Text style={styles.lightGrayColor}>{item.time}</Text>
                    }
                    onPress={() => this.gotoChats(item.name)}
                  />
                  {
                    item.badge ?
                      <Badge
                        status="error"
                        containerStyle={{ position: 'absolute', top: 10, left: 40 }}
                      />
                      :
                      null
                  }
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  top: {
    // padding: 10,
    backgroundColor: '#fff',
  },
  titleColor: {
    color: '#666666',
  },
  grayColor: {
    color: '#999999',
  },
  titleSize: {
    fontSize: 14,
    lineHeight: 20,
  },
  size12: {
    fontSize: 12,
  },
  marginTop6: {
    marginTop: 6
  },
  messageList: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  messageItem: {
    // padding: 10,
    borderBottomColor: '#EFF3F6',
    borderBottomWidth: 1,
  },
  lightGrayColor: {
    color: '#C1C1C1',
  },
  marginLeft10: {
    marginLeft: 10,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sysIcon:{
    width:40,
    height:40,
    backgroundColor:'#00A0E9',
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center',
  }

})

export default News
