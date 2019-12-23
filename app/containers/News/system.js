import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import IcoMoonIcon from '../../assets/icomoon'
import { Avatar, Tooltip } from 'react-native-elements';
import { createAction, NavigationActions } from '../../utils'

const newsData = {
  time: '2月16日 12:34',
  news: [
    {
      name: '吴培荣',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '让国内航运走向智能管理的SaaS',
      time: '16:40',
      desc: '黑铁投手',
      identity: '投资经理·英诺天使基金',
      status: '投递成功',
      match: '匹配度80%'
    },
    {
      name: '张扬',
      avatar_url: 'http://b-ssl.duitang.com/uploads/item/201602/26/20160226231719_VKyJr.thumb.700_0.jpeg',
      subtitle: '让国内航运走向智让国内航运走向智能管理的SaaS能管理的SaaS',
      time: '2019.11.03',
      desc: '黑铁投手',
      identity: '投资方',
      status: '投递审批中',
      match: '匹配度100%'
    },
    {
      name: '金耶兵',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '让国内航运走向智能管理的SaaS',
      time: '16:40',
      desc: '黑铁投手',
      identity: '项目方',
      status: '投递失败',
      match: '匹配度20%'
    }
  ]
}


@connect()

class System extends Component {

  static navigationOptions = {
    title: '系统消息',
  }

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timeBox}><Text style={[styles.grayColor, styles.size11, styles.lineHeight40]}>{newsData.time}</Text></View>
        <View>
          {
            newsData.news.map((item, index) => {
              return (
                <View style={[styles.flexDirection, styles.newsbox]} key={index}>
                  <View style={{ width: 44 }}>
                    <View style={styles.sysIcon}>
                      <IcoMoonIcon name="xiaoxi2" size={20} color="#fff" />
                    </View>
                  </View>
                  <View style={styles.infoBox}>
                    <View style={styles.arrow}></View>
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
                        项目:{item.subtitle}
                      </Text>
                      <Text style={[styles.grayColor, styles.size11, styles.lineHeight30, styles.status]}>{item.status}!</Text>
                    </View>
                  </View>
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
    width: '100%',
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
    paddingLeft: 16,
    paddingRight: 20,
    paddingTop: 5,
    fontSize: 14,
    marginBottom: 20,
  },
  infoBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingBottom: 0,
    marginLeft: 17,
    borderRadius: 4,
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
  position: {
    lineHeight: 26,
  },
  match: {
    paddingBottom: 7,
  },
  arrow: {
    // width: 20,
    // height:20,
    top: 16,
    left: -20,
    position: 'absolute',
    borderWidth: 10,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#fff',
    // backgroundColor:'pink',
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

export default System
