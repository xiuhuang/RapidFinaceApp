import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity, PixelRatio } from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements';
import { NavigationActions } from '../../utils'

const LINE = 1 / PixelRatio.get();

@connect()

class Sort extends Component {


  routerTo = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'SortCourses' }))
  }

  render() {
    const { title, data } = this.props;
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
                <Text style={styles.levelTitelText}>{title}</Text>
              </View>
            }
          />
        </View>
        <View style={styles.sortBox}>
          {
            data.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.routerTo()}
                >
                  <View
                    style={styles.sortItem}

                  >
                    <Text style={styles.sortText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    )
  }
}

class CourseSort extends Component {

  static navigationOptions = {
    title: '课程分类',
  }

  constructor(props) {
    super(props);
  };

  hotData = ['TED', '记录片', '心理', '国际名校', '经济', '历史']

  scienceData = ['社会', '科技·互联网', '心理', '国际名校', '艺术', '社会', '科技·互联网', '心理', '国际名校', '艺术']


  renderSorts() {
    return (
      <View>
        <Sort title='热门' data={this.hotData} />
        <Sort title='社科' data={this.scienceData} />
        <Sort title='工作·生活' data={this.hotData} />
      </View>


    )
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inContainer}>
          <ScrollView>
            {this.renderSorts()}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF3F6'
  },
  inContainer: {
    padding: 10,
    marginTop: 10,
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
  }

})

export default CourseSort
