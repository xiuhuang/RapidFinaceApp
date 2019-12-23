import React, { Component } from 'react'
import { StyleSheet, View, Text, PixelRatio } from 'react-native'

const LINE = 1 / PixelRatio.get();

class CommonSense extends Component {

  static navigationOptions = {
    title: '文章内容',
  }


  render() {

    return (
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>关于融资——你需要知道的知识与常识</Text>
          <Text style={styles.time}>2019-07-28   09:12</Text>
        </View>
        <View style={styles.conBox}>
          <Text style={styles.conText}>导读：股权融资是指企业的股东愿意让出部分企业所 有权，通过企业增资的方式引进新的股东，同时使总 股本增加的融资方式。股权融资所获得的资金，企业 无须还本付息，但新股东将与老股东同样分享企业的 赢利与增长。</Text>
        </View>
        <View style={styles.conBox}>
          <Text style={styles.conText}>股权融资与项目融资的区别</Text>
          <Text style={styles.conText}>股权融资：</Text>
          <Text style={styles.conText}>指企业通过增资的方式引进新的股东的融资方式，总 股本增加，钱到了企业而不是到了老股东手上。</Text>
        </View>

        <View style={styles.conBox}>
          <Text style={styles.conText}>股权融资与项目融资的区别</Text>
          <Text style={styles.conText}>（1）项目公司在项目完成后会结算，股权融资的项目会持续经营； </Text>
          <Text style={styles.conText}>（2）一个企业可以同时设立多个项目公司，但股权融资的话，投资人一般都会要求创始人不能在体外还有别的同行业的公司存在。</Text>
        </View>

        <View style={styles.conBox}>
          <Text style={styles.conText}>股权融资与项目融资的区别</Text>
          <Text style={styles.conText}>股权融资：</Text>
          <Text style={styles.conText}>指企业通过增资的方式引进新的股东的融资方式，总 股本增加，钱到了企业而不是到了老股东手上。</Text>
        </View>

        <View style={styles.conBox}>
          <Text style={styles.conText}>股权融资与项目融资的区别</Text>
          <Text style={styles.conText}>（1）项目公司在项目完成后会结算，股权融资的项目会持续经营； </Text>
          <Text style={styles.conText}>（2）一个企业可以同时设立多个项目公司，但股权融资的话，投资人一般都会要求创始人不能在体外还有别的同行业的公司存在。</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 24,
    paddingRight: 24,
  },
  titleBox: {
    paddingTop: 10,
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: LINE,
  },
  conBox: {
    paddingTop: 10,
  },
  title: {
    color: '#666',
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    color: '#999999',
    lineHeight: 30,
    fontSize: 12,
  },
  conText: {
    color: '#666666',
    fontSize: 14,
  }
})

export default CommonSense
