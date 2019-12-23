import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  PixelRatio,
  Platform,
  Image,
  AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import IcoMoonIcon from '../../assets/icomoon'
import Swiper from 'react-native-swiper'
import { ListItem } from 'react-native-elements'
import { NavigationActions } from '../../utils'
import liveData from '../../data/liveData.json'
import senseData from '../../data/senseData.json'

const LINE = 1 / PixelRatio.get();
@connect()
class Find extends Component {
  static navigationOptions = {
    tabBarLabel: '发现',
    tabBarIcon: ({ focused, tintColor }) => (
      <IcoMoonIcon name="faxian" size={22} color={focused ? tintColor : 'gray'} />
    ),
  }

  state = {
    selectedIndex: 0,
    isOpen: false
  }

  componentWillMount() {
    AsyncStorage.getItem('LoginInfo', (data) => {
      console.log(data);
      if (!data) {
        this.gotoLogin();
      }
    })
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }


  banners = [
    require('../../images/courses/banner1.jpg'),
    require('../../images/courses/banner2.jpg'),
    require('../../images/courses/banner3.jpg')
  ]


  renderSwiper() {
    return (
      <View style={styles.swiperBox}>
        <Swiper
          style={styles.wrapper}
          loop={true}
          autoplay={true}
        >
          {
            this.banners.map((item, index) => {
              return (
                <View style={styles.slideBox}
                  key={index}
                >
                  <Image
                    style={styles.slide1}
                    source={item}
                  />
                </View>
              )
            })
          }
        </Swiper>
      </View>
    )
  }

  routerTo = (routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: routeName }))
  }

  renderMenu() {
    const menuData = [
      {
        name: '投融动态',
        iconName: 'rongchuanghuodong',
        routeName: 'FindActivities',
      }, {
        name: '热门话题',
        iconName: 'remenhuati',
        routeName: 'HotTopicList'
      }, {
        name: '金融服务',
        iconName: 'jinrongfuwu',
        routeName: 'FinanceService'
      }, {
        name: '快资学院',
        iconName: 'kuaizixueyuan',
        routeName: 'College',
      }, {
        name: '进度管理',
        iconName: 'jinduguanli',
        routeName: 'Progress'
      }, {
        name: '资源共享',
        iconName: 'ziyuangongxiang',
        routeName: 'ResourcesSharing',
      }, {
        name: 'VIP 服务',
        iconName: 'vipfuwu',
        routeName: 'VipService'
      }
    ]
    return (
      <View style={styles.menu}>
        {
          menuData.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => this.routerTo(item.routeName)}
              >
                <View
                  style={[styles.menuItem, index !== 3 && index !== 7 ? styles.marginR : null, index < 3 ? styles.marginB : null]}
                  key={index}
                >
                  <IcoMoonIcon name={item.iconName} size={41} color={'#00A0E9'} />
                  <Text style={styles.menuItemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>

            )
          })
        }
      </View>
    )
  }

  renderCommonSense() {
    return (
      <View style={styles.level}>
        <TouchableOpacity
          onPress={() => this.routerTo('CommonSense')}
        >
          <View style={styles.levelTitle}>
            <ListItem
              containerStyle={{ padding: 0 }}
              leftAvatar={
                <View style={styles.leftBorder}>
                </View>
              }
              title={
                <View style={styles.flexDirection}>
                  <Text style={styles.levelTitelText}>融资常识</Text>
                </View>
              }
              chevron={
                <View style={styles.subtitleView}>
                  <IcoMoonIcon name="Rectangle" size={18} color={'#C7C7CC'} />
                </View>
              }
            />
          </View>
        </TouchableOpacity>
        <View style={styles.senseBox}>
          <View style={styles.senseList}>
            {
              senseData.data.map((item, index) => {
                if (index < 4) {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => this.routerTo('SenseDetail')}
                    >
                      <View

                        style={styles.senseItem}
                      >
                        <View>
                          <Image
                            style={styles.senseItemPic}
                            source={{ uri: item.pic }}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
                }
              })
            }
          </View>
        </View>
      </View>
    )
  }

  renderLive() {

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
                <Text style={styles.levelTitelText}>大佬录播</Text>
              </View>
            }
            chevron={
              <View style={styles.subtitleView}>
                <IcoMoonIcon name="Rectangle" size={18} color={'#C7C7CC'} />
              </View>
            }
          />
        </View>
        <View style={styles.senseBox}>
          <View style={[styles.flexDirection, styles.liveList]}>
            {
              liveData.data.map((item, index) => {
                return (
                  <TouchableOpacity
                  key={index} 
                  onPress={()=> this.routerTo('Introduce')}
                  >
                    <View style={styles.liveItem}>
                      <View>
                        <Image
                          style={styles.liveItemPic}
                          source={{ uri: item.titleUrl }}
                        />
                      </View>
                      <View style={styles.liveTitle}>
                        <Text
                          style={[styles.darkGray]}
                          numberOfLines={2}
                        >{item.title}</Text>
                      </View>
                      <Text style={styles.yellowColor}>VIP专享受</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </View>
    )
  }

  renderNews() {
    return (
      <View style={styles.newsBox}>
        <View style={styles.newsLeft}>
          <Text style={[styles.lineHeight22, styles.darkGray]}>交易</Text>
          <Text style={[styles.lineHeight22, styles.darkGray]}>快资</Text>
        </View>
        <View style={styles.newsCenter}>
          <Text
            style={styles.newsDesc}
            numberOfLines={1}
          >A项目刚刚获得熊猫资本3000万元C轮融资</Text>
          <Text
            style={styles.newsDesc}
            numberOfLines={1}
          >腾讯资本成功与上海ai交通签订投资协</Text>
        </View>
        <View style={styles.newsRight}>
          <Text style={[styles.lineHeight22, styles.grayColor]}>3分钟前</Text>
          <Text style={[styles.lineHeight22, styles.grayColor]}>09:21  19-11</Text>
        </View>
      </View>
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={[styles.searchBarBox, Platform.OS === 'ios' ? styles.searchBarBoxPadding : null]}>
          <View style={[styles.flexDirection, styles.searchBar]}>
            <View style={styles.flexDirection}>
              <IcoMoonIcon name="sousuo" size={18} color={'#999999'} />
              <TextInput style={Platform.OS === 'ios' ? styles.textInputOs : styles.textInput} placeholder='搜索' />
            </View>
            <IcoMoonIcon name="yinpin" size={18} color={'#999999'} />
          </View>
        </View>
        <ScrollView>
          <View style={styles.inContainer}>
            {this.renderSwiper()}
            {this.renderMenu()}
            {this.renderNews()}
          </View>
          {this.renderCommonSense()}
          {this.renderLive()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF3F6'
  },
  inContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  containerBottom: {
    backgroundColor: '#fff',
  },
  flexDirection: {
    flexDirection: 'row',
  },
  searchBarBox: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    padding: 10,
  },
  searchBarBoxPadding: {
    paddingTop: 52,
  },
  searchBar: {
    paddingLeft: 12,
    padding: 6,
    height: 34,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(220,220,220,1)',
    backgroundColor: 'rgba(245, 245, 245, 1)',
    justifyContent: 'space-between',
  },
  textInputOs: {
    marginLeft: 10,
    width: '80%',
  },
  textInput: {
    marginLeft: 10,
    textAlign: 'left',
    height: 38,
    lineHeight: 38,
    width: '80%',
    marginTop: -6,
  },
  swiperBox: {
    height: 160,
  },
  wrapper: {
    height: 160,
  },
  slide1: {
    borderRadius: 10,
    height: 160,
    width: Dimensions.get('window').width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 15,
    paddingBottom: 15,
  },
  menuItem: {
    width: Dimensions.get('window').width / 4 - 16,
    alignItems: 'center',
  },
  marginR: {
    marginRight: 14,
  },
  marginB: {
    marginBottom: 37,
  },
  menuItemText: {
    color: '#666666',
    fontSize: 14,
    marginTop: 5,
  },
  newsBox: {
    borderWidth: LINE,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 7,
    paddingRight: 7,
    borderColor: '#DCDCDC',
    borderRadius: 4,
    flexDirection: 'row',
    lineHeight: 22,
    justifyContent: 'space-between',
  },
  newsLeft: {
    borderRightColor: '#DCDCDC',
    borderRightWidth: 1,
    paddingRight: 9,
    fontSize: 14,
    lineHeight: 30,
    marginRight: 10,
  },
  lineHeight22: {
    lineHeight: 22,
  },
  darkGray: {
    color: '#666666'
  },
  newsCenter: {
    width: Dimensions.get('window').width - 180,
  },
  newsDesc: {
    color: '#666',
    lineHeight: 22,
  },
  grayColor: {
    color: '#999999',
  },
  leftBorder: {
    width: 3,
    height: 17,
    borderRadius: 4,
    borderLeftColor: '#00A0E9',
    borderLeftWidth: 3,
  },
  level: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  levelTitle: {
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: LINE,
    padding: 10,
  },
  levelTitelText: {
    color: '#666666',
    fontSize: 16,
    marginLeft: -6,
  },
  senseBox: {
    padding: 10,
    paddingBottom: 0,
  },
  liveList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  senseItem: {
    width: (Dimensions.get('window').width - 30) / 2,
    marginBottom: 10,
  },
  senseItemPic: {
    height: 76,
    width: (Dimensions.get('window').width - 30) / 2,
  },
  liveItem: {
    width: (Dimensions.get('window').width - 40) / 3,
  },
  liveItemPic: {
    height: 76,
    marginBottom: 10,
  },
  yellowColor: {
    color: '#F99259',
    lineHeight: 28,
  },
  senseList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },


})

export default Find
