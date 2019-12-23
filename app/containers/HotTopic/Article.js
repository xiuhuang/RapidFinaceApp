import React, { Component } from 'react'
import { StyleSheet, View, Text, PixelRatio, ScrollView } from 'react-native'

const LINE = 1 / PixelRatio.get();

class CommonSense extends Component {

  static navigationOptions = {
    title: '文章内容',
  }


  render() {

    return (
      <ScrollView style={styles.container}>
        <View >
          <View style={styles.titleBox}>
            <Text style={styles.title}>个人投资找项目过程中需要注意什么？</Text>
            <Text style={styles.time}>2019-07-28   09:12</Text>
          </View>
          <View style={styles.conBox}>
            <Text style={styles.conText}>个人投资找项目过程中需要注意什么？在创业的道路
  上有越来越多的年轻人，然而，在创业之前我们得有一个好
  的规划，不仅如此，我们还需要前期的融资。一个好的投资
  者需要寻找适合自己投资的项目，因此，如何寻找好的项目
  就显得尤为重要，今天针对个人投资找项目给大家做一下展
开介绍，那么，个人投资找项目需要注意哪些方面？</Text>
          </View>
          <View style={styles.conBox}>
            <Text style={styles.conText}>一、个人投资找项目的准备工作是什么</Text>
            <Text style={styles.conText}>做正确的事，找到正确的方向和定位。想要投资人快速
  做出判断，创业者就需要一句话让投资人明白你是做什么
的?</Text>
            <Text style={styles.conText}>二、个人投资找项目的方向?</Text>
            <Text style={styles.conText}>创业者需要对目标风投进行必要的调查，确定是否是适
  合你的那位投资人，研究风投的投资历史。你的先搞懂哪些
  机构专业，并且声誉良好，不同的投资机构关注的领域不同，
哪些机构偏好你的方向。</Text>
          </View>

          <View style={styles.conBox}>
            <Text style={styles.conText}>三、个人投资找项目的投资人</Text>
            <Text style={styles.conText}>1、懂你、信你、帮你。创业者不要只看钱，还的看人，
  先选人，再选机构;投资人都信不过，你还敢拿机构的钱吗?
道理跟选合伙人一样重要。</Text>
            <Text style={styles.conText}>2、别被美好承诺所获。投资人看回报，在你没有产生
回报之前，所有的变数都可能纯在。</Text>
          </View>
          <View style={styles.conBox}>
            <Text style={styles.conText}>四、正确对待个人投资找项目</Text>
            <Text style={styles.conText}>初创期估值是浮云，确保融资和创业成功是第一位。创
  业不成功，股权就没有什么价值，拿再多的股权也无用，阶
  段性的高估值也没有意义。对初创公司而言，估值并不是越
  高越好，一定要符合公司目前的发展阶段以及资本市场的规
则，否则会带来隐患。</Text>
          </View>

          <View style={styles.conBox}>
            <Text style={styles.conText}>五、个人投资找项目的早期估值</Text>
            <Text style={styles.conText}>先算融资额，用实现阶段性目标需要的资金量X1.5倍，
  再考虑合适的股权稀释比例区间，10-25%范围，稀释30%
以上的股权是危险的，过渡性融资可以控制在10%以内。</Text>
            <Text style={styles.conText}>从狭义上讲，融资(financing)即是一个企业的资金筹集
            的行为与过程，也就是说公司根据自身的生产经营状况、资
            金拥有的状况，以及公司未来经营发展的需要，通过科学的
            预测和决策，采用一定的方式，从一定的渠道向公司的投资
            者和债权人去筹集资金，组织资金的供应，以保证公司正常
            生产需要，经营管理活动需要的理财行为。从广义上讲，
            融资也叫金融，就是货币资金的融通，当事人通过各种方式
            到金融市场上筹措或贷放资金的行为。个人投资找项目的关
键就在于需要好的融资。</Text>
          </View>
        </View>
      </ScrollView>
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
