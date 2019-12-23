import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button } from 'react-native-elements';
import IcoMoonIcon from '../../assets/icomoon'

const investorInfo = {
  name: '巨鼎金服',
  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  subtitle: '机构评级  A级  |  项目成交量 300',
  location: '杭州'
}

const investList = [
  {
    name: '吴培荣',
    avatar_url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1349944129,1637349918&fm=15&gp=0.jpg',
    subtitle: '投资经理',
    tag: '黑铁投手',
  },
  {
    name: '杨丽丽',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '投资经理',
    tag: '白银投手',
  }
]

const caseList = [
  {
    name: '多彩投',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '文旅地产股权众筹平台',
  },
  {
    name: '多彩投',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '文旅地产股权众筹平台',
  }
]

@connect()

class FinanceDetail extends Component {
  static navigationOptions = {
    title: '金融服务方详情',
  }

  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      isShoucang: false,
    }
  };

  shoucang = () => {
    const { isShoucang } = this.state;
    this.setState({
      isShoucang: !isShoucang,
    })
  }

  renderTop() {
    const { isShoucang } = this.state;
    return (
      <View style={styles.level}>
        <ListItem
          containerStyle={{ padding: 0 }}
          leftAvatar={{ source: { uri: investorInfo.avatar_url }, size: 80, rounded: false }}
          title={<Text style={[styles.titleColor, styles.titleSize, styles.serviceTitle]}> {investorInfo.name}</Text>}
          subtitle={
            <View>
              <Text style={styles.ratingText}>{investorInfo.subtitle}</Text>
              <View style={styles.flexDirection}>
                <IcoMoonIcon style={{ width: 14, marginRight: 4, marginTop: 5 }} name="chengshidingwei" size={12} color='#F99259' />
                <Text style={styles.ratingText}>{investorInfo.location}</Text>
              </View>
              <Text style={styles.ratingText}></Text>
            </View>
          }
          chevron={
            <TouchableOpacity
              onPress={this.shoucang}
            >
              <View style={styles.shoucangBox}>
                {
                  isShoucang ?
                    <IcoMoonIcon style={styles.iconShoucang} name="shoucang1" size={17} color='#EE4040' />
                    :
                    <IcoMoonIcon style={styles.iconShoucang} name="shoucang" size={17} color='#EE4040' />
                }

                <Text style={[styles.titleColor, styles.size12]}>收藏</Text>
              </View>
            </TouchableOpacity>

          }
        />
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <IcoMoonIcon style={{ width: 14, marginRight: 4, marginTop: 5 }} name="renzheng" size={14} color='#F99259' />
          <View style={{ flex: 3 }}>
            <Text style={[styles.garyColor, styles.size12]}>快资官方认证</Text>
            <Text style={[styles.garyColor, styles.size12]}>平均反馈3天以上</Text>
          </View>
          <IcoMoonIcon style={{ width: 14, marginRight: 8, marginTop: 5 }} name="renzheng" size={14} color='#F99259' />
          <View style={{ flex: 3 }}>
            <Text style={[styles.garyColor, styles.size12]}>投资机构已备案</Text>
            <Text style={[styles.garyColor, styles.size12]}>1个月内活跃</Text>
          </View>
          <View style={{ flex: 3 }}>
            <Text style={{ color: '#F99259', lineHeight: 24, textAlign: 'right', fontSize: 12 }}>匹配度89%</Text>
            <Text style={{ textAlign: 'right', color: '#666666', lineHeight: 24, fontSize: 12 }}>10天前发布</Text>
          </View>
        </View>
      </View>
    )
  }

  renderTab() {
    const { tab } = this.state;
    return (
      <View style={[styles.level, styles.levelTop]}>
        {this.renderSynopsis()}
      </View>
    )
  }

  renderSynopsis() {
    return (
      <View style={styles.info}>
        <View>
          <Text style={[styles.infoTitleText, styles.darkGrayColor]}>机构简介</Text>
          <Text style={[styles.grayColor, styles.lineHeight20]}>巨鼎金服，主要关注消费和文旅。英诺天使基金投资管理 团队已投资超过200个创业项目、管理超过20亿人民币天 使基金，以清华校友为起点，建立建立建立建立建立建立。</Text>
        </View>
      </View>
    )
  }

  renderInfo01() {
    return (
      <View style={styles.level}>
        <View style={styles.infoTitleBox}>
          <Text style={styles.borderTitle}>投资偏好</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>投资行业</Text>
          <Text style={styles.preference}>先进制造/文娱体育/硬件/人工智能/机器人/
          先进制造/文娱体育/硬件/人工智能/机器人动漫</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>投资阶段</Text>
          <Text style={styles.preference}>天使轮</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>投资方式</Text>
          <Text style={styles.preference}>股权投资</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>投资期限</Text>
          <Text style={styles.preference}>1年</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>单笔投额</Text>
          <Text style={styles.preference}>100-1500万人民币</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>投资地区</Text>
          <Text style={styles.preference}>上海/广州/北京/杭州/深圳/武汉/成都</Text>
        </View>
      </View>
    )
  }

  renderInfo02() {
    let len = investList.length;
    return (
      <View style={styles.level}>
        <View style={styles.infoTitleBox}>
          <Text style={styles.borderTitle}>入住投资人 ({len})</Text>
        </View>
        {
          investList.map((item, index) => {
            return (
              <View style={styles.caseBox} key={index}>
                <ListItem
                  key={index}
                  containerStyle={{ padding: 0 }}
                  leftAvatar={{ source: { uri: item.avatar_url }, size: 80, rounded: false }}
                  title={<View style={styles.flexDirection}>
                    <Text style={styles.caseName}>{item.name}</Text>
                    <Text style={[styles.grayColor, styles.tag]}>{item.tag}</Text>
                  </View>}
                  subtitle={
                    <View >
                      <Text style={styles.casesub}>{item.subtitle}</Text>
                    </View>
                  }
                  chevron={
                    <View>
                      <Button
                        title='投递项目'
                        titleStyle={{ fontSize: 14 }}
                        buttonStyle={{ backgroundColor: '#03AAF3', borderRadius: 18, width: 78, height: 24, padding: 0 }}
                      />
                    </View>
                  }
                />
              </View>
            )
          })
        }
      </View>
    )
  }

  renderInfo03() {
    return (
      <View style={styles.level}>
        <View style={styles.infoTitleBox}>
          <Text style={styles.borderTitle}>投资案例</Text>
        </View>
        {
          caseList.map((item, index) => {
            return (
              <View style={styles.caseBox} key={index}>
                <ListItem
                  containerStyle={{ padding: 0 }}
                  leftAvatar={{ source: { uri: item.avatar_url }, size: 'large', rounded: false }}
                  title={<View>
                    <Text style={styles.caseName}>{item.name}</Text>
                  </View>}
                  subtitle={
                    <View>
                      <Text style={styles.casesub}>{item.subtitle}</Text>
                    </View>
                  }
                />
              </View>
            )
          })
        }

      </View>
    )
  }


  render() {
    return (
      <ScrollView>
        <View style={styles.investDetailContainer}>
          {this.renderTop()}
          {this.renderTab()}
          {this.renderInfo01()}
          {this.renderInfo02()}
          {this.renderInfo03()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  investDetailContainer: {
    backgroundColor: '#EFF3F6',
  },
  level: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
  },
  serviceTitle: {
    marginBottom: 4,
  },
  ratingText: {
    color: '#999999',
    lineHeight: 20,
    height: 20,
  },
  iconShoucang: {
    marginLeft: 4,
    marginBottom: 8,
  },
  garyColor: {
    color: '#999999',
    lineHeight: 24
  },
  infoTitleText: {
    lineHeight: 40,
    fontSize: 16,
  },
  grayColor: {
    color: '#999999',
  },
  infoTitleBox: {
    borderLeftColor: '#00A0E9',
    borderLeftWidth: 3,
    marginBottom: 10,
  },
  preference: {
    color: '#666666',
    marginLeft: 10,
    width: '100%',
    flex: 5,
    lineHeight: 22
  },
  textList: {
    flexDirection: 'row',
    marginTop: 5,
  },
  caseBox: {
    borderColor: '#DCDCDC',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  caseName: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
  casesub: {
    color: '#666666',
    fontSize: 16,
    lineHeight: 40,
  },
  darkGrayColor: {
    color: '#666',
  },
  titleColor: {
    color: '#383838'
  },
  levelTop: {
    paddingTop: 0,
  },
  borderTitle: {
    marginLeft: 5,
    fontSize: 16,
    color: '#666666',
  },
  titleSize: {
    fontSize: 16,
  },
  size12: {
    fontSize: 12
  },
  lineHeight20: {
    lineHeight: 20,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  shoucangBox: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  tag: {
    marginLeft: 18,
  }
})

export default FinanceDetail;
