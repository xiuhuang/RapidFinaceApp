import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions, Modal, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Rating, Button, CheckBox } from 'react-native-elements';
import { NavigationActions } from '../utils'
import IcoMoonIcon from '../assets/icomoon'
import projectList from '../data/projectData.json'

const investorInfo = {
  name: '吴培荣',
  avatar_url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1349944129,1637349918&fm=15&gp=0.jpg',
  subtitle: '投资经理 英诺天使基金'
}

const investList = [
  {
    name: '多彩投',
    avatar_url: 'http://img3.imgtn.bdimg.com/it/u=4092633267,789621430&fm=26&gp=0.jpg',
    subtitle: '文旅地产股权众筹平台'
  },
  {
    name: '企鹅童话',
    avatar_url: 'http://img5.imgtn.bdimg.com/it/u=340757297,1869667194&fm=26&gp=0.jpg',
    subtitle: '文旅地产股权众筹平台'
  }
]

const organization = {
  name: '英诺天使基金',
  avatar_url: 'http://img3.imgtn.bdimg.com/it/u=4195510169,3347137982&fm=26&gp=0.jpg',
  subtitle: '30位投资人'
}

const assessList = [
  {
    name: '匿名',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    rating: 3,
    assessCon: '该用户未填写评价内容。该用户未填写评价内容该用户未 填写评价内容该用户未填写评价内容该用户未填写评价内容。',
    type: '个人投资',
    time: '2019-12-03'
  },
  {
    name: '李先生',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    rating: 5,
    assessCon: '该用户未填写评价内容。该用户未填写评价内容该用户未 填写评价内容该用户未填写评价内容该用户未填写评价内容。',
    type: '机构投资',
    time: '2019-11-03'
  }
]

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
      visible: false,
      selected: [],
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
        <View style={styles.tabBox}>
          <TouchableOpacity onPress={() => this.changeTab(1)}>
            <View style={[styles.tab, tab === 1 ? styles.tabActive : null]}>
              <Text style={[styles.tabText, tab === 1 ? styles.tabTextActive : null]}>个人详情</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeTab(2)}>
            <View style={[styles.tab, tab === 2 ? styles.tabActive : null]}>
              <Text style={[styles.tabText, tab === 2 ? styles.tabTextActive : null]}>投资详情</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderSynopsis() {
    return (
      <View style={styles.info}>
        <View>
          <Text style={[styles.infoTitleText, styles.darkGrayColor]}>个人简介</Text>
          <Text style={styles.grayColor}>英诺天使投资总监，主要关注消费和文旅。英诺天使基金 投资管理团队已投资超过200个创业项目、管理超过20亿 人民币天使基金，以清华校友为起点，建立建立建立建立 建立建立建立。</Text>
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
    return (
      <View style={styles.level}>
        <View style={styles.infoTitleBox}>
          <Text style={styles.borderTitle}>投资案例</Text>
        </View>
        {
          investList.map((item, index) => {
            return (
              <View style={styles.caseBox}>
                <ListItem
                  key={index}
                  containerStyle={{ padding: 0 }}
                  leftAvatar={{ source: { uri: item.avatar_url }, size: 'large', rounded: false }}
                  title={<View style={styles.subtitleView}>
                    <Text style={styles.caseName}>{item.name}</Text>
                  </View>}
                  subtitle={
                    <View style={styles.subtitleView}>
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

  renderInfo03() {
    return (
      <View style={styles.level}>
        <View style={styles.infoTitleBox}>
          <Text style={styles.borderTitle}>所属机构</Text>
        </View>
        <View style={styles.caseBox}>
          <ListItem
            containerStyle={{ padding: 0 }}
            leftAvatar={{ source: { uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=125406757,1015262290&fm=26&gp=0.jpg' }, size: 'large', rounded: false }}
            title={<View style={styles.subtitleView}>
              <Text style={styles.caseName}>{organization.name}</Text>
            </View>}
            subtitle={
              <View style={styles.subtitleView}>
                <Text style={styles.casesub}>{organization.subtitle}</Text>
              </View>
            }
          />
        </View>
      </View>
    )
  }


  renderInfo04() {
    return (
      <View style={[styles.level, styles.assessBox]}>
        <View style={styles.infoTitleBox}>
          <Text style={styles.borderTitle}>创业者评价</Text>
        </View>
        {
          assessList.map((item, index) => {
            return (
              <View style={styles.assess} key={index}>
                <ListItem
                  containerStyle={{ paddingBottom: 5 }}
                  leftAvatar={{ source: { uri: item.avatar_url }, size: 40 }}
                  title={<View style={styles.subtitleView}>
                    <Text style={styles.caseName}>{item.name}</Text>
                  </View>}
                  chevron={
                    <View style={styles.subtitleView}>
                      <Rating
                        imageSize={20}
                        readonly
                        startingValue={item.rating}
                        style={styles.rating}
                      />
                    </View>
                  }
                />
                <Text style={styles.assessCon}>{item.assessCon}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, }}>
                  <Text style={styles.grayColor}>投资类型： {item.type}</Text>
                  <Text style={styles.grayColor}>{item.time}</Text>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }

  renderProInfo() {
    const proInfo = [{
      name1: '所属行业',
      title1: '能源、航空、电子',
      name2: '城市',
      title2: '西安',
    }, {
      name1: '投资方式',
      title1: '股权投资',
      name2: '投资金额（万人民币）',
      title2: '2000',
    }, {
      name1: '预期收益率（%）',
      title1: '4',
      name2: '单笔投资金额（万人民币）',
      title2: '1500',
    }]
    const proInfo2 = [{
      name1: '所属行业',
      title1: '能源、航空、电子',
      name2: '城市',
      title2: '西安',
    }, {
      name1: '投资方式',
      title1: '股权投资',
      name2: '投资金额（万人民币）',
      title2: '2000',
    }, {
      name1: '预期收益率（%）',
      title1: '3',
      name2: '单笔投资金额（万人民币）',
      title2: '1500',
    }]
    return (
      <View style={[styles.level, styles.assessBox]}>
        <View style={styles.infoTitleBox}>
          <View style={styles.lbefore} />
          <Text style={styles.borderTitle}>投资列表</Text>
        </View>
        <View style={styles.proInfoHead}>
          <View style={styles.proInfoNo}>
            <Text style={{ fontSize: 14, color: '#999999' }}>1</Text>
          </View>
          <Text style={styles.proInfoText} numberOfLines={1}>
            寻全国医疗器械等项目股权合作
          </Text>
          <View style={{ alignItems: 'flex-end', minWidth: 50 }}>
            <Text style={styles.proInfoStatus}>
              天使轮
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
            寻全国医疗器械
          </Text>
          <View style={{ alignItems: 'flex-end', minWidth: 50 }}>
            <Text style={styles.proInfoStatus}>
              A轮
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

  handleSelect = (item) => {
    const { selected } = this.state
    let arr = selected.concat([])
    if (selected.find(i => i.id === item.id)) {
      arr = arr.filter(i => i.id !== item.id)
    } else {
      arr.push(item)
    }
    this.setState({
      selected: arr,
    })
  }

  handleClose = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    const { tab, visible, selected } = this.state;
    const renderItem = ({ item, index }) => {
      const checked = selected.find(i => i.id === item.id)
      return (
        <ListItem
          title={
            <View>
              <Text numberOfLines={1}>项目{index}: {item.projectName}</Text>
            </View>
          }
          rightElement={(
            <CheckBox
              checked={checked}
              checkedIcon={<IcoMoonIcon name="yikan" size={18} color={'#00A0E9'} />}
              uncheckedIcon={<View style={{ width: 18, height: 18, borderRadius: 20, borderWidth: 1, borderColor: '#999999' }}></View>}
              containerStyle={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}
              onPress={() => this.handleSelect(item)}
            />
          )}
          onPress={() => this.handleSelect(item)}
          containerStyle={{ height: 50, borderColor: '#DCDCDC', borderBottomWidth: 1 }}
        />
      )
    }
    return (
      <View style={styles.investDetailContainer}>
        <ScrollView>
          <View>
            {this.renderTop()}
            {this.renderTab()}
            {
              tab === 1 && <>
                {this.renderSynopsis()}
                {this.renderInfo01()}
                {this.renderInfo01()}
                {this.renderInfo03()}
                {this.renderInfo04()}
              </>
            }
            {
              tab === 2 && <>
                {this.renderProInfo()}
              </>
            }
          </View>
        </ScrollView>
        <View style={[styles.levelLast]}>
          <View style={{ flex: 2 }}></View>
          <View style={{ flex: 5 }}>
            <Button
              title='在线沟通'
              titleStyle={{ fontSize: 14 }}
              buttonStyle={{ backgroundColor: '#48C7BB', borderRadius: 18, width: 92 }}
              onPress={() => this.props.dispatch(NavigationActions.navigate({ routeName: 'Chats' }))}
            />
          </View>
          <View style={{ flex: 5 }}>
            <Button
              title='投递项目'
              titleStyle={{ fontSize: 14 }}
              buttonStyle={{ backgroundColor: '#03AAF3', borderRadius: 18, width: 92 }}
              onPress={() => this.setState({ visible: true })}
            />
          </View>
          <TouchableOpacity style={{ flex: 2 }}>
            <View style={styles.subtitleView}>
              <IcoMoonIcon style={styles.iconShoucang} name="fenxiang" size={20} color='#F99259' />
              <Text style={styles.grayColor}>分享</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={this.handleClose}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalContainer}>
              <Text style={{ textAlign: 'center', color: '#333333', fontSize: 16, fontWeight: '500', marginBottom: 20 }}>选择投递项目</Text>
              <FlatList
                data={projectList.data.concat([]).splice(0, 3)}
                renderItem={renderItem}
              />
              <View style={styles.modalFooter}>
                <Button
                  title='取消'
                  titleStyle={{ fontSize: 14, color: '#666' }}
                  buttonStyle={{ backgroundColor: '#fff', borderRadius: 18, width: 92, borderColor: '#666', borderWidth: 1 }}
                  onPress={this.handleClose}
                  containerStyle={{ marginRight: 30 }}
                />
                <Button
                  title='确认投递'
                  disabled={selected.length === 0 ? true : false}
                  titleStyle={{ fontSize: 14, color: '#fff' }}
                  buttonStyle={{ backgroundColor: '#03AAF3', borderRadius: 18, width: 92 }}
                  onPress={this.handleClose}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  investDetailContainer: {
    backgroundColor: '#EFF3F6',
    position: 'relative',
  },
  level: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
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
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
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
  info: {
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 0,
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
    paddingTop: 16,
    paddingBottom: 10,
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 300,
    width: Dimensions.get('window').width,
    justifyContent: 'space-between'
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
  levelTop: {
    paddingTop: 0,
  },
  assessCon: {
    color: '#666666',
    lineHeight: 24,
  },
  proInfoText: {
    color: '#00A0E9',
    fontSize: 15,
    flex: 1
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
  },
  shoucanged: {
    backgroundColor: '#EE4040',
  },
  assessBox: {
    marginBottom: 100,
  },
  modalContent: {
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)'
  },
  modalContainer: {
    position: 'absolute',
    height: 300,
    width: '100%',
    bottom: 0,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  modalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default InvestDetail;
