import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native'
import { connect } from 'react-redux'
import IcoMoonIcon from '../../assets/icomoon'
import { Avatar, Tooltip } from 'react-native-elements';
import { createAction, NavigationActions } from '../../utils'

const newsData = {
  time: '2月16日 12:34',
  news: [
    {
      name: '徐作彪',
      avatar_url: 'https://image.welian.com/zzvh1542086359868_1242_1242_370.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_F2F2F2',
      subtitle: '2月16日 12:34 由对方首次发起沟通',
      time: '16:40',
      desc: '黑铁投手',
      identity: '投资经理·英诺天使基金',
      match: '匹配度80%'
    },
  ]
}


@connect()

class Chats extends Component {

  static navigationOptions = {
    title: '消息详情',
  }

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 20, flex: 1 }}>
          {
            newsData.news.map((item, index) => {
              return (
                <View style={[styles.flexDirection, styles.topNewsbox]} key={index}>
                  <View style={styles.topInfoBox}>
                    <View style={[styles.flexDirection]}>
                      <Text style={[styles.darkGrayColor, styles.investorName]}>{item.name}</Text>
                      <Text style={[styles.blueColor, styles.desItem]}>{item.desc}</Text>
                    </View>
                    <View style={styles.textBox}>
                      <Text style={[styles.grayColor, styles.size12, styles.position]}>{item.identity}</Text>
                      <Text style={[styles.blueColor, styles.match]}>{item.match}</Text>
                    </View>
                    <View style={[styles.flexDirection]}>
                      <Text
                        style={[styles.grayColor, styles.size11, styles.lineHeight30, styles.projectName]}
                        numberOfLines={1}
                      >
                        {item.subtitle}
                      </Text>
                    </View>
                  </View>
                </View>
              )
            })
          }
          <View style={styles.timeBox}><Text style={[styles.grayColor, styles.size11, styles.lineHeight40]}>{newsData.time}</Text></View>
          <View>
            <View style={[styles.flexDirection, styles.newsbox]}>
              <View style={{ width: 44 }}>
                <Avatar
                  rounded
                  size={44}
                  source={{
                    uri: 'https://image.welian.com/zzvh1542086359868_1242_1242_370.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_F2F2F2'
                  }}
                />
              </View>
              <View style={styles.infoBox}>
                <View style={styles.arrow}></View>
                <Text style={styles.chatCon}>您好，能详细的描述下贵公司的项目吗？ 有没有资料发一份</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footerBox}>
          <IcoMoonIcon name="yuyin" size={22} color='#666666' style={styles.chatIcon}/>
          <TextInput style={styles.chatInput} />
          <IcoMoonIcon name="tupian" size={22} color='#666666' style={styles.chatIcon}/>
          <IcoMoonIcon name="tianjia" size={22} color='#666666' style={styles.chatIcon}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#EFF3F6',
  },
  grayColor: {
    color: '#999999',
  },
  darkGrayColor: {
    color: '#666666',
  },

  size11: {
    fontSize: 11,
  },
  size12: {
    fontSize: 12,
  },
  timeBox: {
    alignItems: 'center',
  },
  lineHeight40: {
    lineHeight: 40,
  },
  lineHeight30: {
    lineHeight: 30,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  newsbox: {
    paddingTop: 5,
    fontSize: 14,
    marginBottom: 20,
  },
  topInfoBox: {
    flex: 1,
    paddingBottom: 0,
    borderRadius: 4,
    padding: 20,
    backgroundColor: '#fff',
  },
  infoBox: {
    flex: 1,
    paddingBottom: 0,
    marginLeft: 17,
    borderRadius: 4,
    padding: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  blueColor: {
    color: '#00A0E9',
  },
  desItem: {
    backgroundColor: 'rgba(0, 160, 233, 0.1)',
    fontSize: 14,
    height: 20,
    lineHeight: 20,
    marginRight: 10,
    color: 'rgba(0, 160, 233, 1)',
    paddingLeft: 5,
    paddingRight: 5,
  },
  investorName: {
    lineHeight: 20,
    marginRight: 10,
  },
  textBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFF3F6',
  },
  status: {
    marginLeft: 4,
  },
  projectName: {
    width: '80%',
    height: 30,
    overflow: 'hidden',
  },
  match: {
    paddingBottom: 7,
  },
  arrow: {
    top: 16,
    left: -20,
    position: 'absolute',
    borderWidth: 10,
    borderColor: 'transparent',
    borderRightColor: '#fff',
  },
  chatCon: {
    color: '#333',
    lineHeight: 20,
  },
  footerBox: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems:'center',
    width: Dimensions.get('window').width,
  },
  chatInput: {
    flex:1,
    height: 38,
    paddingLeft:10,
    backgroundColor: '#eee',
  },
  chatIcon:{
    marginRight:10,
    marginLeft:10,
  }

})

export default Chats
