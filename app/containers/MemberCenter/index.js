import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Dimensions, PixelRatio, Image } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button } from 'react-native-elements';
import IcoMoonIcon from '../../assets/icomoon';
import { NavigationActions } from '../../utils'

const LINE = 1 / PixelRatio.get();

const investorInfo = {
  name: '张明',
  avatar_url: 'https://image.welian.com/dgco1534474567650_1902_1902_263.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_F2F2F2',
  subtitle: '投资经理    英诺天使基金',
}

@connect()

class MemberCenter extends Component {
  static navigationOptions = {
    title: '会员中心',
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

  openVip = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'OpenVip' }))
  }

  renderTop() {
    return (
      <View style={styles.level}>
        <ListItem
          containerStyle={{ padding: 0 }}
          leftAvatar={{ source: { uri: investorInfo.avatar_url }, size: 42 }}
          title={<Text style={[styles.titleColor, styles.titleSize, styles.serviceTitle]}> {investorInfo.name}</Text>}
          subtitle={
            <View>
              <Text style={styles.ratingText}>{investorInfo.subtitle}</Text>
            </View>
          }
          chevron={
            <View style={styles.shoucangBox}>
              <TouchableOpacity style={{ flex: 5 }} onPress={() => this.changeTab(1)}>
                <Button
                  title='立即开通'
                  titleStyle={{ fontSize: 14 }}
                  buttonStyle={{ backgroundColor: '#48C7BB', borderRadius: 18, width: 92, marginRight: 25, }}
                  onPress={this.openVip}
                />
              </TouchableOpacity>
            </View>
          }
        />
        <View style={styles.serviceList}>
          <View style={styles.serviceItem}>
            <IcoMoonIcon style={{ width: 14, marginRight: 5 }} name="renzheng" size={15} color='#F99259' />
            <Text style={styles.serviceText}>投资人一对一对接</Text>
          </View>
          <View style={styles.serviceItem}>
            <IcoMoonIcon style={{ width: 14, marginRight: 5 }} name="renzheng" size={15} color='#F99259' />
            <Text style={styles.serviceText}>即时消息随时沟通</Text>
          </View>
        </View>
        <View style={styles.serviceList}>
          <View style={styles.serviceItem}>
            <IcoMoonIcon style={{ width: 14, marginRight: 5 }} name="renzheng" size={15} color='#F99259' />
            <Text style={styles.serviceText}>精品项目智能推荐</Text>
          </View>
          <View style={styles.serviceItem}>
            <IcoMoonIcon style={{ width: 14, marginRight: 5 }} name="renzheng" size={15} color='#F99259' />
            <Text style={styles.serviceText}>信用数据安全保障</Text>
          </View>
        </View>
      </View>
    )
  }

  renderTab() {
    const { tab } = this.state;
    const vipService = [
      '项目投递',
      '投资创建',
      '在线沟通',
      '征信大数据',
      '商业计划书',
      '项目投递',
    ]
    const svipService = [
      '项目投递',
      '投资创建',
      '在线沟通',
      '征信大数据',
      '商业计划书',
      '职业投资顾问',
      '投资广告',
      '项目广告',
      '高级投资方',
      '精品项目',
      '优质资讯',
      '学院课程'
    ]

    let vipData;
    if (tab === 1) {
      vipData = vipService
    } else {
      vipData = svipService
    }

    let vipImages = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574341370499&di=d0b9e577b9e53a021e3a814b589d72fc&imgtype=0&src=http%3A%2F%2Fimg.ljia.com%2FUploads%2Fxinxiang%2F2014-10%2F1014%2F2014102915135499347.jpg'

    return (
      <View style={styles.levelTop}>
        <View style={styles.tabBox}>
          <TouchableOpacity onPress={() => this.changeTab(1)}>
            <View style={[styles.tab, tab === 1 ? styles.tabActive : null]}>
              <Text style={[styles.tabText, tab === 1 ? styles.tabTextActive : null]}>VIP</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeTab(2)}>
            <View style={[styles.tab, tab === 2 ? styles.tabActive : null]}>
              <Text style={[styles.tabText, tab === 2 ? styles.tabTextActive : null]}>SVIP</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.vipCon}>
          <View style={styles.vipPic}>
            <Image
              style={styles.vipPic}
              source={{ uri: vipImages }}
            />
          </View>
          <View style={styles.vipServiceText}>
            {
              vipData.map((item, index) => {
                return (
                  <View key={index} style={styles.vipServiceItem}>
                    <IcoMoonIcon style={{ width: 14, marginRight: 5 }} name="huiyuanzhongxin1" size={15} color='#F99259' />
                    <Text style={styles.serviceText}>{item}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
    )
  }

  images01 = [
    'https://f10.baidu.com/it/u=2056122476,3631463412&fm=72',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1367864340,3521166290&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1624884130,3589088370&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2198375594,2532409264&fm=11&gp=0.jpg'
  ]

  images02 = [
    'https://f10.baidu.com/it/u=542623800,2042938705&fm=72',
    'https://f11.baidu.com/it/u=633004380,1824445754&fm=72',
    'https://f11.baidu.com/it/u=3820465903,930428016&fm=72',
    'https://f11.baidu.com/it/u=633004380,1824445754&fm=72',
  ]

  renderVipCourse() {
    return (
      <View style={styles.levelTop}>
        <View style={styles.levelTitle}>
          <ListItem
            containerStyle={{ padding: 0 }}
            leftAvatar={
              <View style={styles.leftBorder}>
              </View>
            }
            title={
              <View style={styles.flexDirection}>
                <Text style={styles.levelTitelText}>会员课程</Text>
              </View>
            }
          />
        </View>
        <View style={styles.courseBox}>
          {
            this.images01.map((item, index) => {
              return (
                <View key={index}>
                  <Image
                    style={styles.courseItem}
                    source={{ uri: item }}
                  />
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }

  renderRecommend() {
    return (
      <View style={styles.levelTop}>
        <View style={styles.levelTitle}>
          <ListItem
            containerStyle={{ padding: 0 }}
            leftAvatar={
              <View style={styles.leftBorder}>
              </View>
            }
            title={
              <View style={styles.flexDirection}>
                <Text style={styles.levelTitelText}>推荐项目</Text>
              </View>
            }
          />
        </View>
        <View style={styles.courseBox}>
          {
            this.images02.map((item, index) => {
              return (
                <View key={index}>
                  <Image
                    style={styles.courseItem}
                    source={{ uri: item }}
                  />
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.investDetailContainer}>
          {this.renderTop()}
          {this.renderTab()}
          {this.renderVipCourse()}
          {this.renderRecommend()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  investDetailContainer: {
    backgroundColor: '#EFF3F6',
    paddingBottom: 24,
  },
  level: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
  },
  levelTop: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  serviceTitle: {
    marginBottom: 4,
  },
  ratingText: {
    color: '#999999',
  },
  garyColor: {
    color: '#999999',
  },
  flexDirection: {
    flexDirection: 'row',
  },
  serviceList: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    marginTop: 14,
    marginRight: 60,
  },
  vipServiceItem: {
    width: '30%',
    flexDirection: 'row',
    marginTop: 20,
  },
  serviceText: {
    color: '#999999',
    fontSize: 14,
  },
  tabBox: {
    height: 43,
    flexDirection: 'row',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    paddingLeft: 15,
  },
  tabText: {
    lineHeight: 46,
    fontSize: 16,
    height: 42,
    color: '#666666'
  },
  tab: {
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 44,
  },
  tabActive: {
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#00A0E9',
  },
  tabTextActive: {
    color: '#00A0E9',
  },
  vipCon: {
    padding: 10,
  },
  vipPic: {
    height: 160,
    borderRadius: 10,
    borderWidth: LINE,
    borderColor: 'rgba(220,220,220,1)',
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  vipServiceText: {
    paddingLeft: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  levelTitle: {
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: LINE,
    padding: 10,
  },
  leftBorder: {
    width: 3,
    height: 17,
    borderRadius: 4,
    borderLeftColor: '#00A0E9',
    borderLeftWidth: 3,
  },
  levelTitelText: {
    color: '#666666',
    fontSize: 16,
    marginLeft: -6,
  },
  courseBox: {
    padding: 10,
    paddingLeft: 27,
    paddingRight: 27,
    paddingBottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  courseItem: {
    width: (Dimensions.get('window').width - 74) / 2,
    height: 100,
    marginBottom: 20,
    backgroundColor: 'rgba(245,245,245,1)',
    borderWidth: 1,
    borderColor: 'rgba(220,220,220,1)',
  }
})

export default MemberCenter;
