import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, PixelRatio } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button } from 'react-native-elements';
import IcoMoonIcon from '../../assets/icomoon';
const investorInfo = {
  name: '让国内航运走向智能管理的SaaS服务平台',
  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  subtitle01: 'D轮融资',
  subtitle02: '企业服务·数据服务·区块链',
}

const investorInfo02 = {
  name: '吴培荣',
  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  subtitle01: '投资经理·英诺天使基金',
  tag: '黑铁投手',
}
const LINE = 1 / PixelRatio.get();

@connect()

class ResourceDetail extends Component {
  static navigationOptions = {
    title: '行业资源详情',
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
          leftAvatar={{ source: { uri: investorInfo.avatar_url }, size: 80, rounded: false }}
          title={<Text style={[styles.titleColor, styles.titleSize, styles.serviceTitle]}> {investorInfo.name}</Text>}
          subtitle={
            <View style={styles.flexDirection}>
              <Text style={styles.ratingText}>{investorInfo.subtitle01}</Text>
              <Text style={{ marginLeft: 6.5, marginRight: 6.5, color: '#DCDCDC' }}>|</Text>
              <Text style={styles.ratingText}>{investorInfo.subtitle02}</Text>
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
        <View style={styles.progressItem}>
          <ListItem
            containerStyle={{ padding: 0 }}
            leftAvatar={{ source: { uri: investorInfo02.avatar_url }, size: 59, rounded: false }}
            title={
              <View style={styles.flexDirection}>
                <Text style={[styles.titleColor, styles.titleSize, styles.investorTitle]}> {investorInfo02.name}</Text>
                <Text style={styles.tag}>{investorInfo02.tag}</Text>
                <IcoMoonIcon style={{ width: 16, marginLeft: 10, marginTop: 4 }} name="xinyongpingji" size={18} color='#F99259' />
                <Text style={{ color: '#F99259', fontSize: 16, marginTop: 3, marginLeft: 4 }}>A</Text>
              </View>
            }
            subtitle={
              <View>
                <View style={styles.flexDirection}>
                  <Text style={styles.darkGaryColor}>{investorInfo02.subtitle01}</Text>
                </View>
                <Text style={styles.darkGaryColor}></Text>
              </View>
            }
          />
        </View>
      </View>
    )
  }


  render() {
    return (
      <ScrollView>
        <View style={styles.investDetailContainer}>

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
  }
})

export default ResourceDetail;
