import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button } from 'react-native-elements';
import IcoMoonIcon from '../../assets/icomoon'

const investorInfo = {
  name: '吴培荣',
  avatar_url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1349944129,1637349918&fm=15&gp=0.jpg',
  subtitle: '投资经理 英诺天使基金'
}

@connect()

class InvestDetail extends Component {
  static navigationOptions = {
    title: '投资详情',
  }

  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      isShoucang: false,
    }
  };

  changeTab(tab) {
    this.setState({
      tab
    })
  }

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
          leftAvatar={{ source: { uri: investorInfo.avatar_url }, size: 42 }}
          title={<Text style={[styles.titleColor, styles.titleSize]}> {investorInfo.name}</Text>}
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>{investorInfo.subtitle}</Text>
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
          <IcoMoonIcon style={{ width: 14, marginRight: 8, marginTop: 5 }} name="renzheng" size={14} color='#F99259' />
          <View style={{ flex: 3 }}>
            <Text style={[styles.garyColor, styles.size12]}>快资官方认证</Text>
            <Text style={[styles.garyColor, styles.size12]}>平均反馈3天以上</Text>
          </View>
          <IcoMoonIcon style={{ width: 14, marginRight: 10, marginTop: 5 }} name="renzheng" size={14} color='#F99259' />
          <View style={{ flex: 3 }}>
            <Text style={[styles.garyColor, styles.size12]}>投资机构已备案</Text>
            <Text style={[styles.garyColor, styles.size12]}>1个月内活跃</Text>
          </View>
          <View style={{ flex: 3 }}>
            <Text style={{ color: '#F99259', lineHeight: 24, textAlign: 'right', fontSize:12 }}>匹配度89%</Text>
            <Text style={{ textAlign: 'right', color: '#666666', lineHeight: 24, fontSize: 12 }}>10天前发布</Text>
          </View>
        </View>
      </View>
    )
  }

  renderTab() {
    const { tab } = this.state;
    return (
      <View style={styles.levelTop}>
        <View style={styles.tabBox}>
          <TouchableOpacity onPress={() => this.changeTab(1)}>
            <View style={[styles.tab, tab === 1 ? styles.tabActive : null]}>
              <Text style={[styles.tabText, tab === 1 ? styles.tabTextActive : null]}>投资详情</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeTab(2)}>
            <View style={[styles.tab, tab === 2 ? styles.tabActive : null]}>
              <Text style={[styles.tabText, tab === 2 ? styles.tabTextActive : null]}>项目信息</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderInfo01() {
    const infoList = [{
      name: '投资名称',
      title: '让国内航运走向智能管理的SaaS服务平台'
    }, {
      name: '投资行业',
      title: '先进制造'
    }, {
      name: '投资阶段',
      title: '天使轮'
    }, {
      name: '投资地区',
      title: '上海市'
    }, {
      name: '投资方式',
      title: '股权质押'
    }, {
      name: '投资期限',
      title: '12个月'
    }, {
      name: '投资金额',
      title: '1500万人民币'
    }, {
      name: '资金性质',
      title: '银行'
    }, {
      name: '预期收益',
      title: '6%'
    }, {
      name: '单笔投额',
      title: '1000-3000万人民币'
    }, {
      name: '投资人',
      title: '颤栗'
    }, {
      name: '投资机构',
      title: '杉木资本'
    }]
    return (
      <View style={[styles.level, { marginTop: 0 }]}>
        <View style={styles.infoTitleBox}>
          <View style={styles.lbefore} />
          <Text style={styles.borderTitle}>投资信息</Text>
        </View>
        {
          infoList.map(item => {
            return <View style={styles.textList}>
              <Text style={{ color: '#999', minWidth: 60, lineHeight: 20 }}>{item.name}</Text>
              <Text style={styles.preference}>{item.title}</Text>
            </View>
          })
        }
      </View>
    )
  }

  renderInfo02() {
    const infoList = [{
      name: '机构信息',
      title: '杉木资本'
    }, {
      name: '机构评级',
      title: 'A级'
    }, {
      name: '尽调周期',
      title: '无'
    }, {
      name: '审批时间',
      title: '2周内'
    }, {
      name: '可投资金总额',
      title: '1亿人民币'
    }]
    return (
      <View style={styles.level}>
        <View style={styles.infoTitleBox}>
          <View style={styles.lbefore} />
          <Text style={styles.borderTitle}>机构信息</Text>
        </View>
        {
          infoList.map(item => {
            return <View style={styles.textList}>
              <Text style={{ color: '#999', minWidth: 60, lineHeight: 20 }}>{item.name}</Text>
              <Text style={styles.preference}>{item.title}</Text>
            </View>
          })
        }
      </View>
    )
  }

  renderInfo03() {
    return (
      <View style={styles.level}>
        <View style={styles.infoTitleBox}>
          <View style={styles.lbefore} />
          <Text style={styles.borderTitle}>附件信息</Text>
        </View>
        <View style={styles.fileInfo}>
          <View style={styles.fileIcon}>

          </View>
          <Text style={styles.fileName}>投递须知及项目要求.doc</Text>
        </View>
      </View>
    )
  }

  renderProInfo() {
    const proInfo = [{
      name1: '项目名称',
      title1: '让国内航运走向智能管理向智能管理向智能管理',
      name2: '融资阶段',
      title2: 'A轮融资',
    }, {
      name1: '所属行业',
      title1: '金融',
      name2: '所在城市',
      title2: '上海市',
    }, {
      name1: '融资方式',
      title1: '股权质押',
      name2: '融资金额',
      title2: '1500万人民币',
    }, {
      name1: '接受成本',
      title1: '6%',
      name2: '融资期限',
      title2: '12个月',
    }, {
      name1: '项目人',
      title1: '张叁',
      name2: '立项时间',
      title2: '2019-02-21',
    }]
    return (
      <View style={[styles.level, { marginTop: 0 }]}>
        <View style={styles.infoTitleBox}>
          <Text style={styles.borderTitle}>签约项目</Text>
        </View>
        {
          proInfo.map(item => {
            return <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <View style={{
                flex: 7,
                borderRightColor: '#DCDCDC',
                borderRightWidth: 1,
                marginRight: 30
              }}>
                <Text style={styles.grayColor}>{item.name1}</Text>
                <Text numberOfLines={1} style={[styles.darkGrayColor, { paddingRight: 10, marginTop: 2 }]}>{item.title1}</Text>
              </View>
              <View style={{ flex: 5 }}>
                <Text style={styles.grayColor}>{item.name2}</Text>
                <Text numberOfLines={1} style={[styles.darkGrayColor, { paddingRight: 10, marginTop: 2 }]}>{item.title2}</Text>
              </View>
            </View>
          })
        }
      </View>
    )
  }

  renderProInfo2() {
    const proInfo = [{
      name1: '项目名称',
      title1: '让国内航运走向智能管理向智能管理向智能管理',
      name2: '融资阶段',
      title2: 'A轮融资',
    }, {
      name1: '所属行业',
      title1: '金融',
      name2: '所在城市',
      title2: '上海市',
    }, {
      name1: '融资方式',
      title1: '股权质押',
      name2: '融资金额',
      title2: '1500万人民币',
    }]
    const proInfo2 = [{
      name1: '项目名称',
      title1: '让国内航运走向智能管理向智能管理向智能管理',
      name2: '融资阶段',
      title2: 'A轮融资',
    }, {
      name1: '所属行业',
      title1: '金融',
      name2: '所在城市',
      title2: '上海市',
    }, {
      name1: '融资方式',
      title1: '股权质押',
      name2: '融资金额',
      title2: '1500万人民币',
    }]



    return (
      <View style={styles.level}>
        <View style={styles.infoTitleBox}>
          <View style={styles.lbefore} />
          <Text style={styles.borderTitle}>接收项目</Text>
        </View>
        <View style={styles.proInfoHead}>
          <View style={styles.proInfoNo}>
            <Text style={{ fontSize: 14, color: '#999999' }}>2</Text>
          </View>
          <Text style={styles.proInfoText} numberOfLines={1}>
            寻全国医疗器械等项目股权合作寻全国医疗器械等项目股权合作
          </Text>
          <View style={{ alignItems: 'flex-end', minWidth: 50 }}>
            <Text style={styles.proInfoStatus}>
              未应约
            </Text>
          </View>
        </View>
        {
          proInfo.map(item => {
            return <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <View style={{
                flex: 7,
                borderRightColor: '#DCDCDC',
                borderRightWidth: 1,
                marginRight: 30
              }}>
                <Text style={styles.grayColor}>{item.name1}</Text>
                <Text numberOfLines={1} style={[styles.darkGrayColor, { paddingRight: 10, marginTop: 2 }]}>{item.title1}</Text>
              </View>
              <View style={{ flex: 5 }}>
                <Text style={styles.grayColor}>{item.name2}</Text>
                <Text numberOfLines={1} style={[styles.darkGrayColor, { paddingRight: 10, marginTop: 2 }]}>{item.title2}</Text>
              </View>
            </View>
          })
        }
        <View style={[styles.proInfoHead, { borderTopColor: '#DCDCDC', borderTopWidth: 1, paddingTop: 20, marginTop: 10 }]}>
          <View style={styles.proInfoNo}>
            <Text style={{ fontSize: 14, color: '#999999' }}>2</Text>
          </View>
          <Text style={styles.proInfoText} numberOfLines={1}>
            寻全国医疗器械等项目股权合作寻全国医疗器械等项目股权合作
          </Text>
          <View style={{ alignItems: 'flex-end', minWidth: 50 }}>
            <Text style={styles.proInfoStatus}>
              未应约
            </Text>
          </View>
        </View>
        {
          proInfo2.map(item => {
            return <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <View style={{
                flex: 7,
                borderRightColor: '#DCDCDC',
                borderRightWidth: 1,
                marginRight: 30
              }}>
                <Text style={styles.grayColor}>{item.name1}</Text>
                <Text numberOfLines={1} style={[styles.darkGrayColor, { paddingRight: 10, marginTop: 2 }]}>{item.title1}</Text>
              </View>
              <View style={{ flex: 5 }}>
                <Text style={styles.grayColor}>{item.name2}</Text>
                <Text numberOfLines={1} style={[styles.darkGrayColor, { paddingRight: 10, marginTop: 2 }]}>{item.title2}</Text>
              </View>
            </View>
          })
        }
      </View>
    )
  }


  render() {
    const { tab } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ paddingBottom: 70 }}>
            {this.renderTop()}
            {this.renderTab()}
            {
              tab === 1 && <>
                {this.renderInfo01()}
                {this.renderInfo02()}
                {this.renderInfo03()}
              </>
            }
            {
              tab === 2 && <>
                {this.renderProInfo()}
                {this.renderProInfo2()}
              </>
            }
          </View>
        </ScrollView>
        <View style={styles.bottomView}>
          <Button
            title={<Text style={{ fontSize: 14 }}>撤回</Text>}
            buttonStyle={styles.bottomBtn}
            onPress={() => this.changeTab(1)}
          />
          <Button
            title={<Text style={{ fontSize: 14 }}>投递完成</Text>}
            buttonStyle={[styles.bottomBtn, { backgroundColor: '#03AAF3' }]}
            onPress={() => this.changeTab(2)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF3F6',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  level: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  ratingText: {
    color: '#999999',
    marginTop: 4,
  },
  iconShoucang: {
    marginLeft: 4,
    marginBottom: 8,
  },
  garyColor: {
    color: '#999999',
    lineHeight: 24
  },
  tabBox: {
    height: 43,
    flexDirection: 'row',
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
  infoTitleText: {
    lineHeight: 40,
    fontSize: 16,
  },
  grayColor: {
    color: '#999999',
  },
  infoTitleBox: {
    paddingLeft: 6,
    marginBottom: 10,
    marginLeft: -10
  },
  preference: {
    color: '#666666',
    marginLeft: 10,
    flex: 1,
    textAlign: 'left',
    lineHeight: 22,
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
    lineHeight: 30,
  },
  assess: {
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 10,
  },
  darkGrayColor: {
    color: '#666',
  },
  titleColor: {
    color: '#383838'
  },
  levelLast: {
    marginTop: 10,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 20,
  },
  levelTop: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 10,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
  },
  lbefore: {
    width: 3,
    height: 16,
    backgroundColor: 'rgba(0,160,233,1)',
    borderRadius: 4,
    position: 'absolute',
    left: 2,
    top: 3,
  },
  borderTitle: {
    marginLeft: 5,
    fontSize: 16,
    color: '#666666',
    fontWeight: 'bold'
  },
  titleSize: {
    fontSize: 16,
  },
  size12: {
    fontSize: 12
  },
  assessCon: {
    color: '#666666',
    lineHeight: 24,
  },
  fileInfo: {
    height: 68,
    borderRadius: 4,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    alignItems: 'center'
  },
  fileIcon: {
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  fileName: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold'
  },
  bottomView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 50,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
  },
  bottomBtn: {
    backgroundColor: '#48C7BB',
    borderRadius: 19,
    height: 32,
    width: 110,
    marginHorizontal: 20
  },
  proInfoHead: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  proInfoNo: {
    width: 30,
    height: 30,
    borderRadius: 2,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  proInfoText: {
    color: '#00A0E9',
    fontSize: 15,
    flex: 1
  }
})

export default InvestDetail;
