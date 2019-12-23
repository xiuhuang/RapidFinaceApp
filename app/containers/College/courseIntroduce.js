import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  PixelRatio,
  Image,
  Alert,
  ToastAndroid,
} from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button } from 'react-native-elements';
import IcoMoonIcon from '../../assets/icomoon'
import Toast from 'react-native-root-toast'
import { NavigationActions } from '../../utils'


const LINE = 1 / PixelRatio.get();

const listData = [
  {
    name: '风靡全球40年的“定位”',
    time: '11分钟',
    isFree: true,
  },
  {
    name: '如何“洗脑”客户？',
    time: '13分钟',
    isFree: false,
  },
  {
    name: '如何用心理学去影响用户认知？',
    time: '10分钟',
    isFree: true,
  },
  {
    name: '如何从用户需求出发找定位？',
    time: '22分钟',
    isFree: false,
  },
  {
    name: '从市场与自身条件出发找定位',
    time: '22分钟',
    isFree: false,
  },
  {
    name: '用抢第一、抱大腿、唱反调来定位',
    time: '22分钟',
    isFree: false,
  },
  {
    name: '为什么股神巴菲特选择投资可口？',
    time: '22分钟',
    isFree: false,
  },
  {
    name: '如何有效“击中”用户？',
    time: '22分钟',
    isFree: false,
  },
  {
    name: '打造强大品牌的命名规则是什么？',
    time: '22分钟',
    isFree: false,
  },
  {
    name: '互联网巨头取名的原则有哪些？',
    time: '22分钟',
    isFree: false,
  },
]

@connect()

class CourseIntroduce extends Component {
  static navigationOptions = {
    title: '课程介绍',
  }

  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      open: false,
    }
  };


  changeTab(tab) {
    this.setState({
      tab
    })
  }

  openDesc() {
    this.setState({
      open: true,
    })
  }

  addCourse() {
    Toast.show('添加成功！请到我的课程中查看', {
      position: Toast.positions.CENTER,
      shadow: false,
      opacity: 0.6,
    })
  }

  renderTab() {
    const { tab } = this.state;
    return (
      <View style={styles.level}>
        <View style={styles.tabBox}>
          <TouchableOpacity onPress={() => this.changeTab(1)}>
            <View style={[styles.tab, tab === 1 ? styles.tabActive : null]}>
              <Text style={[styles.tabText, tab === 1 ? styles.tabTextActive : null]}>课程介绍</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeTab(2)}>
            <View style={[styles.tab, tab === 2 ? styles.tabActive : null]}>
              <Text style={[styles.tabText, tab === 2 ? styles.tabTextActive : null]}>内容列表</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderCon01() {
    const { open } = this.state;
    const desc = '亚马逊平台在店铺注册的环节中，很多细节需要大家注意，尤其是账户信息的唯一性和一致性。希望通过本系列课程的学习，大家能够掌握亚马逊店铺的注册及相关账号的获取方法，正式成为跨境电商亚马逊平台数百万卖家中的一员。'
    len = desc.length;
    return (
      <View style={styles.level}>
        <View style={styles.levelTitle}>
          <ListItem
            containerStyle={{ padding: 0 }}
            leftAvatar={
              <View style={styles.leftBorder}>
              </View>
            }
            title={
              <View style={styles.flexDirection}>
                <Text style={styles.levelTitelText}>课程推荐</Text>
              </View>
            }
            chevron={
              <Button
                title='添加课程'
                titleStyle={{ fontSize: 14 }}
                onPress={this.addCourse}
                buttonStyle={{ backgroundColor: '#48C7BB', borderRadius: 4, width: 78, height: 24, padding: 0 }}
              />
            }
          />
        </View>
        <View style={styles.levelCon}>
          <Text style={styles.conTitle}>亚马逊平台店铺注册环节细节</Text>
          <View style={{ paddingTop: 10 }}>
            <View style={styles.flexDirection}>
              <Text style={styles.garyColor}>评分5.0 </Text>
              <Text style={styles.garyColor}> | 美国 |</Text>
              <Text style={styles.garyColor}> 社会问题 建筑设计 交通规划</Text>
            </View>
          </View>
          <View style={{ paddingTop: 10, flexDirection: 'row' }}>
            <Text
              style={{ color: '#666', lineHeight: 20, fontWeight: 'bold' }}
              numberOfLines={!open ? 3 : 50}
            >
              {
                len > 60 && !open ?
                  desc.substring(1, 60) + '......'
                  :
                  desc
              }
              {
                !open ?
                  <Text
                    style={{ marginLeft: 10, color: '#48C7BB', fontWeight: 'bold' }}
                    onPress={() => this.openDesc()}>详情</Text>
                  :
                  null
              }
            </Text>
          </View>
          <View style={{ flex: 1, }}>
            <Image style={styles.imgStyle} source={require('../../images/courses/detail01.png')} />
            <Image style={styles.imgStyle} source={require('../../images/courses/detail02.png')} />
            <Image style={styles.imgStyle} source={require('../../images/courses/detail03.png')} />
          </View>
        </View>
      </View>
    )
  }

  renderCon02() {
    return (
      <View style={styles.level}>
        <View style={styles.inLevel}>
          {
            listData.map((item, index) => {
              return (
                <View style={styles.listBox} key={index}>
                  <ListItem
                    containerStyle={{ padding: 0 }}
                    leftAvatar={
                      <Text style={styles.sort}>{index + 1}</Text>
                    }
                    title={
                      <View>
                        <Text style={styles.listTitle}>{item.name}</Text>
                        <Text style={styles.listTime}>{item.time}</Text>
                      </View>
                    }
                    chevron={
                      <View style={styles.flexDirection}>
                        {!item.isFree ?
                          <TouchableOpacity
                            onPress={() => this.routerTo()}
                          >
                            <Text style={styles.try}>试看</Text>
                          </TouchableOpacity>

                          : null
                        }
                        <IcoMoonIcon name='caidan1' size={22} color={'#DCDCDC'} style={{ marginRight: 10 }} />
                        <IcoMoonIcon name='shikan' size={22} color={'#DCDCDC'} />
                      </View>
                    }
                  />
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }

  routerTo = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Experience' }))
  }

  render() {
    const { tab } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.topImg}>
              <Image
                style={styles.topImg}
                source={require('../../images/courses/detailaaa.jpg')}
              />
            </View>
            {this.renderTab()}
            {
              tab === 1 ?
                this.renderCon01()
                :
                this.renderCon02()
            }

          </View>
        </ScrollView>
        <View style={styles.footerBox}>
          <TouchableOpacity>
            <Text style={[styles.footerBtn, styles.footerBtnRight]}>购买 ¥99.99</Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF3F6',
    position: 'relative',
  },
  garyColor: {
    color: '#999999',
  },
  darkGaryColor: {
    color: '#666',
  },
  flexDirection: {
    flexDirection: 'row',
  },
  topImg: {
    width: Dimensions.get('window').width,
    height: 160,
    marginBottom: 10,
  },
  level: {
    backgroundColor: '#fff',
  },
  inLevel: {
    padding: 10,
    paddingBottom: 40,
  },
  tabBox: {
    height: 43,
    paddingLeft: 10,
    flexDirection: 'row',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: LINE,
  },
  tabText: {
    lineHeight: 46,
    fontSize: 16,
    height: 42,
    color: '#666666'
  },
  tab: {
    marginRight: 44,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#00A0E9',
  },
  tabTextActive: {
    color: '#00A0E9',
  },
  grayColor: {
    color: '#999999',
  },
  levelTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#D7D7D7',
  },
  listBox: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: LINE,
    borderBottomColor: '#D7D7D7',
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
    fontWeight: 'bold',
    marginLeft: -6,
  },
  levelCon: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  conTitle: {
    color: '#666666',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  sort: {
    fontSize: 16,
    color: '#999',
  },
  listTitle: {
    color: '#999',
    fontSize: 16,
  },
  listTime: {
    color: '#DCDCDC',
    fontSize: 12,
    marginTop: 5,
  },
  try: {
    color: '#F99259',
    fontSize: 12,
    lineHeight: 20,
    marginRight: 10,
  },
  footerBox: {
    height: 52,
    position: 'absolute',
    bottom: 0,
  },
  footerBtn: {
    width: Dimensions.get('window').width,
    fontSize: 16,
    lineHeight: 52,
    textAlign: 'center',
  },
  footerBtnRight: {
    color: '#fff',
    backgroundColor: '#48C7BB',
  },
  imgStyle: {
    resizeMode: 'cover',
    width: Dimensions.get('window').width - 40,
  }
})

export default CourseIntroduce;
