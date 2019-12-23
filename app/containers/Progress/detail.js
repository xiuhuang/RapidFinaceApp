import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, PixelRatio } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button } from 'react-native-elements';
import IcoMoonIcon from '../../assets/icomoon';
import ProgressCom from './progress';
const investorInfo = {
  "id": 4,
  "projectName": "宜人坊",
  "projectLogo": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=125406757,1015262290&fm=26&gp=0.jpg",
  "credit": "良",
  "matchRate": "98%",
  "position": "sed aute",
  "subordIndustryCode": "IT软件",
  "financeStage": "A轮",
  "amount": "2000万元",
  "publishTime": "1天前",
  "deliverStatus": "0",
  "address": "上海",
  "info": "D轮投资 | 企业服务·数据服务·区块链"
}

const progressList = [
  {
    "id": 1,
    "headUrl": "http://47.103.37.193:5001/static/images/invest/9.jpg",
    "userName": "王文嘉",
    "userLabel": "合伙人",
    "institution": "信天创投",
    "investProject": "35",
    "match": "95",
    "publishTime": "3天前",
    "deliverStatus": "0",
    "userId": 1,
    "id": 100883,
    "describe": ["匹配度89%", "黑铁投手"],
    "isNotMatch": false,
    "content": "英诺天使投资总监，主要关注消费和文旅。英诺天使基金投资管理团队已投资超过200个创业项目、管理超过20亿人民币天使基金，以清华校友为起点，建立了立铁的创业服务,以清华校友为起点，建立了立铁的创业服务"
  },
  {
    "id": 2,
    "headUrl": "http://47.103.37.193:5001/static/images/invest/10.jpg",
    "userName": "刘柏",
    "userLabel": "合伙人",
    "institution": "英诺创投",
    "investProject": "35",
    "match": "95",
    "publishTime": "3天前",
    "deliverStatus": "0",
    "userId": 1,
    "id": 100883,
    "isNotMatch": true,
    "describe": ["匹配度89%", "白银投手"],
    "content": "英诺天使投资总监，主要关注消费和文旅。英诺天使基金投资管理团队已投资超过200个创业项目、管理超过20亿人民币天使基金，以清华校友为起点，建立了立铁的创业服务,以清华校友为起点，建立了立铁的创业服务"
  }
]

const LINE = 1 / PixelRatio.get();

@connect()

class ProgressDetail extends Component {
  static navigationOptions = {
    title: '进度管理详情',
  }

  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
    }
  };


  changeTab(tab) {
    this.setState({
      tab
    })
  }

  renderTop() {
    return (
      <View style={styles.level}>
        <ListItem
          containerStyle={{ padding: 0 }}
          leftAvatar={{ source: { uri: investorInfo.projectLogo }, size: 80, rounded: false }}
          title={<Text style={[styles.titleColor, styles.titleSize, styles.serviceTitle]}> {investorInfo.projectName}</Text>}
          subtitle={
            <View style={styles.flexDirection}>
              <Text style={styles.ratingText}>{investorInfo.info}</Text>
            </View>
          }
        />
      </View>
    )
  }

  renderInfo01() {
    return (
      <View style={styles.level}>
        <View style={styles.topBox}>
          <View style={styles.infoTitleBox}>
            <Text style={styles.borderTitle}>已投递投资方</Text>
          </View>
        </View>
        {
          progressList.map((item, index) => {
            return (
              <View style={styles.progressItem} key={item.id}>
                <ListItem
                  containerStyle={{ padding: 0 }}
                  leftAvatar={{ source: { uri: item.headUrl }, size: 59, rounded: false }}
                  title={
                    <View style={styles.flexDirection}>
                      <Text style={[styles.titleColor, styles.titleSize, styles.investorTitle]}> {item.userName}</Text>
                      <Text style={styles.tag}>{item.describe[1]}</Text>
                      <IcoMoonIcon style={{ width: 16, marginLeft: 10, marginTop: 4 }} name="renzheng" size={16} color='#F99259' />
                      <Text style={{ color: '#F99259', fontSize: 16, marginTop: 3, marginLeft: 4 }}>A</Text>
                    </View>
                  }
                  subtitle={
                    <View>
                      <View style={styles.flexDirection}>
                        <Text style={styles.darkGaryColor}>{item.userLabel}·{item.institution}</Text>
                      </View>
                      <Text style={styles.darkGaryColor}></Text>
                    </View>
                  }
                />
                <ProgressCom isNotMatch={item.isNotMatch}/>
              </View>
            )
          })
        }
      </View>
    )
  }


  render() {
    return (
      <ScrollView>
        <View style={styles.investDetailContainer}>
          {this.renderTop()}
          {this.renderInfo01()}

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  investDetailContainer: {
    flex: 1,
    backgroundColor: 'rgba(239, 243, 246, 1)'
  },
  level: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
  },
  serviceTitle: {
    marginBottom: 13,
  },
  investorTitle: {
    marginBottom: 6,
  },
  ratingText: {
    color: '#999999',
    lineHeight: 20,
    height: 20,
  },
  garyColor: {
    color: '#999999',
    lineHeight: 24
  },
  darkGaryColor: {
    color: '#666666',
  },
  infoTitleBox: {
    borderLeftColor: '#00A0E9',
    borderLeftWidth: 3,
    marginBottom: 10,
  },
  titleColor: {
    color: '#383838'
  },
  borderTitle: {
    marginLeft: 5,
    fontSize: 16,
    color: '#666666',
  },
  titleSize: {
    fontSize: 16,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  tag: {
    marginLeft: 5,
    color: '#F99259',
    paddingLeft: 13,
    paddingRight: 13,
    lineHeight: 22,
    height: 22,
    backgroundColor: 'rgba(249,146,89,0.1)',
  },
  topBox: {
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: LINE,
  },
  progressItem: {
    paddingTop: 10,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: LINE,
  }
})

export default ProgressDetail;
