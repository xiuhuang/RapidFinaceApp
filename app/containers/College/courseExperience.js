import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  PixelRatio,
  Alert,
  ToastAndroid
} from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button } from 'react-native-elements';
import Swiper from 'react-native-swiper'
import Toast from 'react-native-root-toast'
import IcoMoonIcon from '../../assets/icomoon'


const LINE = 1 / PixelRatio.get();

@connect()

class CourseExperience extends Component {
  static navigationOptions = {
    title: '课程试看',
  }

  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      open: false,
    }
  };

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

  renderCon01() {
    const { open } = this.state;
    const desc = '我们现在的生产力极好，比如手机、飞机、火箭都会 被人们制造得很好，但我们每天赖以生存的城市却如手机、飞机、火箭都会 被人们制造得很好，但我们每天赖以生存的城市却一 成不变'
    const len = desc.length;
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
                <Text style={styles.levelTitelText}>简介</Text>
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
          <Text style={styles.conTitle}>究竟是什么决定了城市的美与丑？</Text>
          <View style={{ paddingTop: 10 }}>
            <View style={styles.flexDirection}>
              <Text style={styles.garyColor}>评分5.0 </Text>
              <Text style={styles.garyColor}> | 美国 |</Text>
              <Text style={styles.garyColor}> 社会问题 建筑设计 交通规划</Text>
            </View>
          </View>
          <View style={{ paddingTop: 10, }}>
            <Text
              style={styles.darkGaryColor}
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
        </View>
      </View>
    )
  }

  renderCon02() {
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
                <Text style={styles.levelTitelText}>视频合集</Text>
              </View>
            }
            chevron={
              <Text style={{ color: '#999', fontSize: 12 }}>共35集</Text>
            }
          />
        </View>
        <View style={styles.levelSwiperCon}>
          <View style={{ height: 100 }}>
            <Swiper
              style={{ height: 100, padding: 0 }}
              showsButtons={true}
              showsPagination={false}
              prevButton={<IcoMoonIcon name='icon-test' size={20} color='#666' />}
              nextButton={<IcoMoonIcon name='Rectangle' size={20} color='#666' />}
            >
              <View>
                <View style={{ flexDirection: 'row', padding: 20, paddingLeft: 36 }}>
                  <View style={styles.swiperItem}>
                    <Text style={{ fontSize: 12, color: '#999999' }}>风靡全球40年的 “定位”</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                      <Text style={{ fontSize: 12, color: '#00A0E9' }}>正在播放</Text>
                      <Text style={{ fontSize: 12, color: '#F99259' }}>试看</Text>
                    </View>
                  </View>
                  <View style={styles.swiperItem}>
                    <Text style={{ fontSize: 12, color: '#999999' }}>如何“洗脑”客户</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                      <Text style={{ fontSize: 12, color: '#999999' }}>11:00</Text>
                    </View>
                  </View>
                  <View style={styles.swiperItem}>
                    <Text style={{ fontSize: 12, color: '#999999' }}>如何用心理学去影响用户认知？</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                      <Text style={{ fontSize: 12, color: '#999999' }}>12:00</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Swiper>
          </View>
        </View>
      </View>
    )
  }

  renderCon03() {
    const courseData = [
      {
        title: '50个顶级成功人士的人生建议！',
        image: ''
      },
      {
        title: '50个顶级成功人士的人生建议！',
        image: ''
      },
      {
        title: '50个顶级成功人士的人生建议！',
        image: ''
      },
      {
        title: '50个顶级成功人士的人生建议！',
        image: ''
      },
      {
        title: '50个顶级成功人士的人生建议！',
        image: ''
      },
      {
        title: '50个顶级成功人士的人生建议！',
        image: ''
      },
      {
        title: '50个顶级成功人士的人生建议！',
        image: ''
      },
      {
        title: '50个顶级成功人士的人生建议！',
        image: ''
      },
    ]
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
                <Text style={styles.levelTitelText}>为你推荐</Text>
              </View>
            }
          />
        </View>
        <View style={styles.newCourseBox}>
          {
            courseData.map((item, index) => {
              return (
                <View style={styles.newCourseItem} key={index}>
                  <View style={styles.newCourseItemTop}></View>
                  <View style={styles.newCourseItemBottom}>
                    <Text style={{ lineHeight: 18, marginTop: 4, color: '#666666' }}>{item.title}</Text>
                  </View>
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
        <View style={styles.container}>
          <View style={styles.topImg}>
            <Image
              style={styles.topImg}
              source={require('../../images/courses/detailaaa.jpg')}
            />
          </View>
          {this.renderCon01()}
          {this.renderCon02()}
          {this.renderCon03()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF3F6',
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
  },
  level: {
    backgroundColor: '#fff',
    marginTop: 10,
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
    borderBottomWidth: LINE,
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
  levelSwiperCon: {

  },
  conTitle: {
    color: '#666666',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  swiperItem: {
    width: '28%',
    borderColor: '#DCDCDC',
    borderWidth: LINE,
    height: 64,
    marginRight: 22,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  newCourseBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  newCourseItem: {
    width: (Dimensions.get('window').width - 30) / 2,
    borderWidth: LINE,
    borderColor: 'rgba(220,220,220,1)',
    marginTop: 10,
  },
  newCourseItemTop: {
    height: 85,
    borderBottomColor: 'rgba(220,220,220,1)',
    borderBottomWidth: LINE,
  },
  newCourseItemBottom: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  }
})

export default CourseExperience;
