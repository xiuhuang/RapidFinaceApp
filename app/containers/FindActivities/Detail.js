import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
  Image,
  View,
  PixelRatio,
  ScrollView,
  Dimensions
} from 'react-native';
import IcoMoonIcon from '../../assets/icomoon'
import { Text } from 'react-native-elements';
import ListItem from './Ditem';


class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: '活动详情'
  })

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={item.avatar_url}
      content={item.content}
      time={item.time}
      describe={item.describe}
    // onPress={() => this.gotoDetail('InvestDetail')}
    />
  )

  render() {
    const list = [
      {
        name: '吴培荣',
        avatar_url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4266673979,1826219438&fm=26&gp=0.jpg',
        subtitle: '投资经理   英诺天使基金',
        time: '3个小时前',
        describe: ['匹配度89%', '黑铁投手'],
        content: '英诺天使投资总监，主要关注消费和文旅。英诺天使基金投资管理团队已投资超过200个创业项目、管理超过20亿人民币天使基金，以清华校友为起点，建立了立铁的创业服务,以清华校友为起点，建立了立铁的创业服务'
      },
      {
        name: '李君杰',
        avatar_url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3431483334,1920515857&fm=26&gp=0.jpg',
        subtitle: '投资经理   英诺天使基金',
        time: '3个小时前',
        describe: ['匹配度89%', '黑铁投手'],
        content: '英诺天使投资总监，主要关注消费和文旅。英诺天使基金投资管理团队已投资超过200个创业项目、管理超过20亿人民币天使基金，以清华校友为起点，建立了立铁的创业服务,以清华校友为起点，建立了立铁的创业服务'
      }
    ]


    return (
      <ScrollView style={styles.container}>
        <View style={styles.section1}>
          <View style={styles.imgBox}>
            <Image
              style={styles.imgBox}
              source={{ uri: 'https://image.welian.com/ajlx1573458054929_510_260_93.jpg' }}
            />
          </View>
          <Text style={styles.imgText}>阿里云创新中心“2019双11创业节</Text>
          <Text style={styles.imgType}>免费</Text>
        </View>
        <View style={styles.headRow}>
          <IcoMoonIcon name="shijian" size={12} color="#F99259" />
          <Text style={styles.headName}>时间</Text>
          <Text style={styles.headTitle}>11-01(周五) 13:30-17:30</Text>
        </View>
        <View style={styles.headRow}>
          <IcoMoonIcon name="chengshidingwei" size={12} color="#F99259" />
          <Text style={styles.headName}>地点</Text>
          <Text style={styles.headTitle}>杭州</Text>
        </View>
        <View style={styles.headRow}>
          <IcoMoonIcon name="shijian" size={12} color="#F99259" />
          <Text style={styles.headName}>主办方</Text>
          <Text style={styles.headTitle}>快资</Text>
        </View>
        <View style={styles.sectionHead}>
          <View style={styles.leftLine} />
          <Text style={styles.sectionHeadText}>活动详情</Text>
        </View>
        <View style={styles.section2}>
          <View style={styles.secTitle}><Text style={styles.secTitleText}>尊享汇亮点</Text></View>
          <Text style={styles.secT2}>一次面见多家投资机构</Text>
          <Text style={styles.secText}>阿里云创新中心启动“2019双11创业节”1.1亿创业“红包”让创业
“初冬”不再寒冷。</Text>
          <Text style={[styles.secT2, { marginTop: 30 }]}>一次v1交流20～30分钟</Text>
          <Text style={styles.secText}>创业者与投资人交流采用1v1或1v2私密的交流方式，每个项目可以直面投资机构聊20～30分钟，保证创业者和投资人间充分交流。</Text>
        </View>
        <View style={styles.section3}>
          <View style={styles.sectionHead}>
            <View style={styles.leftLine} />
            <Text style={styles.sectionHeadText}>沟通内容:</Text>
          </View>
          <View style={styles.sect3Box}>
            <Text style={styles.text}>1、投资人和创业者交流项目，了解项目详细情况，并给出跟进或投资意愿；</Text>
            <Text style={[styles.text, { marginVertical: 8 }]}>2、投资人就是买方视角给项目发展提出建议；</Text>
          </View>
          <View style={styles.sectionHead}>
            <View style={styles.leftLine} />
            <Text style={styles.sectionHeadText}>参与条件:</Text>
          </View>
          <View style={styles.sect3Box}>
            <Text style={styles.text}>1、天使一a轮的优质项目，有完整的商业计划书；</Text>
            <Text style={[styles.text, { marginVertical: 8 }]}>2、项目主流领域:新能源环保，智能制造、半导铁、芯片ai+、军工、大消费、文化铁育、新材料、电子商务、企业屋乌、快递物流；</Text>
          </View>
        </View>
        <View style={styles.sec4Head}>
          <Text style={{ color: '#00A0E9', fontSize: 14 }}>嘉宾介绍  (顺序不分先后)</Text>
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF3F6',
    flex: 1
  },
  section1: {
    padding: 10,
    backgroundColor: '#fff'
  },
  imgBox: {
    height: 160,
    width: Dimensions.get('window').width - 20,
  },
  imgText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 2
  },
  imgType: {
    color: '#48C7BB',
    fontSize: 14
  },
  headRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderTopColor: '#DCDCDC',
    borderTopWidth: 1 / PixelRatio.get(),
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },
  headName: {
    color: '#666',
    fontSize: 12,
    marginLeft: 8,
    marginRight: 30,
    width: 38
  },
  headTitle: {
    color: '#999999',
    fontSize: 12
  },
  sectionHead: {
    height: 40,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftLine: {
    height: 16,
    width: 4,
    backgroundColor: '#00A0E9',
    borderRadius: 4,
    marginRight: 7
  },
  sectionHeadText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold'
  },
  section2: {
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingBottom: 25,
    borderTopColor: '#DCDCDC',
    borderTopWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  secTitle: {
    width: 100,
    height: 40,
    lineHeight: 40,
    borderBottomColor: '#00A0E9',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  secTitleText: {
    color: '#00A0E9',
    fontSize: 16,
    fontWeight: 'bold'
  },
  secT2: {
    color: '#383838',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8
  },
  secText: {
    fontSize: 14,
    color: '#999'
  },
  sect3Box: {
    paddingHorizontal: 10
  },
  section3: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 14,
    color: '#666',
  },
  sec4Head: {
    backgroundColor: '#fff',
    paddingLeft: 10
  }
})

export default Detail;