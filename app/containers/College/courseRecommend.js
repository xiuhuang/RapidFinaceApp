import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions, ScrollView, PixelRatio, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements';
import { NavigationActions } from '../../utils'
import courseData from '../../data/courseData.json';

const LINE = 1 / PixelRatio.get();

@connect()

class CourseRecommend extends Component {

  static navigationOptions = {
    title: '课程推荐',
  }

  constructor(props) {
    super(props);
  };

  routerTo = (routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inContainer}>
          <ScrollView>
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
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#48C7BB', }}>按播放量</Text>
                    <View style={styles.sortBtnBox}>
                      <View style={styles.sortBtnTop}></View>
                      <View style={styles.sortBtnBottom}></View>
                    </View>

                  </View>
                }
              />
            </View>
            <View style={styles.newCourseBox}>
              {
                courseData.data.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => this.routerTo('Introduce')}
                    >
                      <View style={styles.newCourseItem}>
                        <View>
                          <Image
                            style={styles.newCourseItemTop}
                            source={{uri: item.img}}
                          />
                        </View>
                        <View style={styles.newCourseItemBottom}>
                          <Text style={{ lineHeight: 18, marginTop: 4, color: '#666666' }}>{item.title}</Text>
                          <Text style={{ lineHeight: 18, color: '#48C7BB' }}>{item.seePersonNum}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </ScrollView>
        </View>
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
    backgroundColor: '#fff'
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
  sortBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sortItem: {
    width: (Dimensions.get('window').width - 54) / 3,
    borderWidth: LINE,
    borderColor: '#DCDCDC',
    marginTop: 10,
  },
  sortText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  sortBtnBox: {
    height: 16,
    marginTop: -8,
    marginLeft: 18,
  },
  sortBtnTop: {
    width: 10,
    borderWidth: 7,
    borderColor: 'transparent',
    borderBottomColor: '#999999',
  },
  sortBtnBottom: {
    width: 10,
    borderWidth: 7,
    borderColor: 'transparent',
    borderTopColor: '#999999',
    marginTop: 2,
  },
  newCourseBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  newCourseItem: {
    width: (Dimensions.get('window').width - 30) / 2,
    height: 150,
    borderWidth: LINE,
    borderColor: 'rgba(220,220,220,1)',
    marginTop: 10,
  },
  newCourseItemTop: {
    height: 85,
    width: (Dimensions.get('window').width - 30) / 2,
  },
  newCourseItemBottom: {
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

export default CourseRecommend
