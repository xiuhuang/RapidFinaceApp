import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions, ScrollView, PixelRatio, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button } from 'react-native-elements';
import { NavigationActions } from '../../utils';
import courseData from '../../data/courseData.json';

const LINE = 1 / PixelRatio.get();

@connect()

class MyCourse extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '我的课程',
  })
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
            <View style={styles.newCourseBox}>
              {
                courseData.data.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => this.routerTo('Introduce')}
                    >
                      <View style={styles.newCourseItem} >
                        <View >
                          <Image
                            style={styles.newCourseItemTop}
                            source={{uri:item.img}}
                          />
                        </View>
                        <View style={styles.newCourseItemBottom}>
                          <Text style={{ lineHeight: 18, marginTop: 10, color: '#666666' }}>{item.title}</Text>
                          <View style={[styles.flexDirection, styles.newCourseItemPrice]}>
                            {
                              item.price === 0 ?
                                <Text style={{ lineHeight: 18, color: '#06AD55', fontWeight: 'bold' }}>免费</Text>
                                :
                                <Text style={{ lineHeight: 18, color: '#EE1414', }}>¥{item.price}</Text>
                            }

                            <Text style={{ lineHeight: 18, color: '#999999', fontSize: 12 }}>{item.num}</Text>
                          </View>
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
  },
  flexDirection: {
    flexDirection: 'row',
  },
  newCourseBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  newCourseItem: {
    width: (Dimensions.get('window').width - 30) / 2,
    marginBottom: 16,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  newCourseItemTop: {
    width: '100%',
    height: 95,
  },
  newCourseItemBottom: {
    paddingLeft: 10,
    height: 76,
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor:'pink',
  },
  newCourseItemPrice: {
    justifyContent: 'space-between',
  }
})

export default MyCourse
