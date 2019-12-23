import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  PixelRatio,
  ImageBackground,
  Alert,
  ToastAndroid
} from 'react-native'
import { connect } from 'react-redux'
import IcoMoonIcon from '../../assets/icomoon'
import Swiper from 'react-native-swiper'
import Toast from 'react-native-root-toast'
import { ListItem, Button } from 'react-native-elements';
import { NavigationActions } from '../../utils';
import courseData from '../../data/courseData.json';

const LINE = 1 / PixelRatio.get();

@connect()

class College extends Component {

  static navigationOptions = {
    title: '快资学院',
  }

  constructor(props) {
    super(props);
  };

  routerTo = (routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName }))
  }

  banners = [
    require('../../images/courses/banner1.jpg'),
    require('../../images/courses/banner2.jpg'),
    require('../../images/courses/banner3.jpg')
  ]


  addCourse() {
    Toast.show('添加成功！请到我的课程中查看', {
      position: Toast.positions.CENTER,
      shadow: false,
      opacity: 0.6,
    })
  }

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
                <TouchableOpacity
                  key={index}
                  onPress={() => this.routerTo('Introduce')}
                >
                  <View
                    style={styles.slideBox}

                  >
                    <Image
                      style={styles.slide1}
                      source={item}
                    />
                  </View>
                </TouchableOpacity>

              )
            })
          }
        </Swiper>
      </View>
    )
  }

  renderMenu() {
    const menuData = [
      {
        name: '课程分类',
        iconName: 'kechengfenlei',
        routeName: 'CourseSort',
      }, {
        name: '课程推荐',
        iconName: 'kechengtuijian',
        routeName: 'Recommend',
      }, {
        name: '我的课程',
        iconName: 'wodekecheng1',
        routeName: 'MyCourse',
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
                  style={[styles.menuItem]}
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

  renderPlayMost() {
    const playData = [
      {
        name: '创造力的性质',
        image: require('../../images/courses/index02.jpg'),
      },
      {
        name: '如何用心理学去影响用户认知？',
        image: require('../../images/courses/index01.jpg'),
      },
    ]
    return (
      <View style={{ paddingBottom: 20, }}>
        <View style={styles.levelTitle}>
          <ListItem
            containerStyle={{ padding: 0 }}
            leftAvatar={
              <View style={styles.leftBorder}>
              </View>
            }
            title={
              <View style={styles.flexDirection}>
                <Text style={styles.levelTitelText}>播放最多</Text>
              </View>
            }
          />
        </View>
        <View style={styles.playMostBox}>
          {
            playData.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => this.routerTo('Introduce')}
                  key={index}
                >
                  <ImageBackground
                    style={styles.playItemImageBackground}

                    source={item.image}
                  >
                    <View style={styles.playItem}>
                      <View style={styles.playItemTop}>
                        <Button
                          title='添加课程'
                          buttonStyle={{
                            backgroundColor: '#48C7BB',
                            padding: 0,
                            borderRadius: 4,
                            width: 79,
                            height: 24,
                          }}
                          onPress={this.addCourse}
                          titleStyle={{ fontSize: 14 }}
                        />
                      </View>
                      <View style={styles.playItemBottom}>
                        <Text style={{ lineHeight: 22, color: '#fff', fontWeight: 'bold', fontSize: 16, }}>{item.name}</Text>
                        <Text style={{ lineHeight: 22, color: '#fff' }}>{item.desc}</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

    )
  }

  renderNewCourse() {
    return (
      <View style={{ paddingBottom: 10 }}>
        <View style={styles.levelTitle}>
          <ListItem
            containerStyle={{ padding: 0 }}
            leftAvatar={
              <View style={styles.leftBorder}>
              </View>
            }
            title={
              <View style={styles.flexDirection}>
                <Text style={styles.levelTitelText}>最新课程</Text>
              </View>
            }
            chevron={
              <Text style={{ color: '#999' }}>查看更多</Text>
            }
          />
        </View>
        <View style={styles.newCourseBox}>
          {
            courseData.data.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => this.routerTo('Introduce')}
                  key={index}
                >
                  <View style={styles.newCourseItem}>
                    <View>
                      <Image
                        style={styles.newCourseItemTop}
                        source={{ uri: item.img }}
                      />
                    </View>
                    <View style={styles.newCourseItemBottom}>
                      <Text style={{ lineHeight: 18, marginTop: 4, color: '#666666' }}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerTop}>
            {this.renderSwiper()}
            {this.renderMenu()}
          </View>
          <View style={styles.containerBottom}>
            {this.renderPlayMost()}
            {this.renderNewCourse()}
          </View>
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
  containerTop: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  containerBottom: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  flexDirection: {
    flexDirection: 'row',
  },
  swiperBox: {
    height: 160,
  },
  wrapper: {
    height: 160,
  },
  slideBox: {
    //  backgroundColor:'green',
  },
  slide1: {
    borderRadius: 4,
    height: 160,
    width: Dimensions.get('window').width - 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingLeft: 40,
  },
  menuItem: {
    width: (Dimensions.get('window').width - 100) / 3,
    alignItems: 'center',
  },
  menuItemText: {
    color: '#666666',
    fontSize: 14,
    marginTop: 5,
  },
  levelTitle: {
    paddingBottom: 10,
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: LINE,
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
  playMostBox: {
    paddingTop: 10,
  },
  playItemImageBackground: {
    width: Dimensions.get('window').width - 20,
    padding: 10,
    height: 150,
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  playItem: {
    borderRadius: 4,
    height: 130,
    justifyContent: 'space-between',
  },
  playItemTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  newCourseBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  newCourseItem: {
    width: (Dimensions.get('window').width - 30) / 2,
    height: 128,
    borderWidth: LINE,
    borderColor: 'rgba(220,220,220,1)',
    marginTop: 10,
  },
  newCourseItemTop: {
    height: 85,
    width: (Dimensions.get('window').width - 30) / 2,
  },
  newCourseItemBottom: {
    paddingLeft: 10,
    paddingRight: 10,
  }

})

export default College
