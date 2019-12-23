import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions, Image, Modal, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Rating, Button, CheckBox } from 'react-native-elements';
import IcoMoonIcon from '../assets/icomoon'
import { NavigationActions } from '../utils'
import projectList from '../data/projectData.json'

const investorInfo = {
  name: '让国内航运走向智能管理的SaaS',
  avatar_url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2123063318,1948869321&fm=26&gp=0.jpg',
  subtitle: 'D轮融资进行中',
  platform: '服务平台',
  time: '3天前',
}

const basicInfo = {
  name: '让国内航运走向智能管理的SaaS服务平台',
  location: '智能推荐的AI航运分析平台',
  industry: '互联网航运',
  city: '上海',
  stage: '研发中',
  creatTime: '2019-02-21',
  cycle: '2019/02/21-2019/12/30',
  pattern: 'TOP',
  ability: '盈利',
  nature: '民营企业',
  method: '参照同行',
  price: '1000万人民币',
  cash: '固定资产',
  personNum: '32人',
  youshi: '无',
  content: '针对新的航运项目进行AI算法分析，智能推荐 航线的AI分析平台',
}

@connect()

class ProjectDetail extends Component {
  static navigationOptions = {
    title: '项目方详情',
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
    const { isShoucang } = this.state
    return (
      <View style={styles.level}>
        <ListItem
          containerStyle={{ padding: 0 }}
          leftAvatar={{ source: { uri: investorInfo.avatar_url }, rounded: false, size: 54 }}
          title={<Text style={[styles.titleColor, styles.titleSize]}>{investorInfo.name}</Text>}
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.darkGrayColor}>{investorInfo.platform}</Text>
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
          <View style={{ flex: 3 }}>
          </View>
          <View style={{ flex: 3 }}>
          </View>
          <View style={{ flex: 3 }}>
            <Text style={{ color: '#F99259', lineHeight: 24, textAlign: 'right' }}>匹配度89%</Text>
          </View>
        </View>
        <Text style={styles.grayColor}>发布时间 <Text style={styles.darkGrayColor}>{investorInfo.time}</Text></Text>
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
              <Text style={[styles.tabText, tab === 1 ? styles.tabTextActive : null]}>项目详情</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeTab(2)}>
            <View style={[styles.tab, tab === 2 ? styles.tabActive : null]}>
              <Text style={[styles.tabText, tab === 2 ? styles.tabTextActive : null]}>商业计划书</Text>
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
          <Text style={styles.infoTitleText}>基本信息</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>项目名称</Text>
          <Text style={styles.preference}>{basicInfo.name}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>项目定位</Text>
          <Text style={styles.preference}>{basicInfo.location}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>所属行业</Text>
          <Text style={styles.preference}>{basicInfo.industry}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>城市</Text>
          <Text style={styles.preference}>{basicInfo.city}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>阶段</Text>
          <Text style={styles.preference}>{basicInfo.stage}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>立项时间</Text>
          <Text style={styles.preference}>{basicInfo.creatTime}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>项目周期</Text>
          <Text style={styles.preference}>{basicInfo.cycle}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>商业模式</Text>
          <Text style={styles.preference}>{basicInfo.pattern}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>盈利能力</Text>
          <Text style={styles.preference}>{basicInfo.ability}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>企业性质</Text>
          <Text style={styles.preference}>{basicInfo.nature}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>估值方法</Text>
          <Text style={styles.preference}>{basicInfo.method}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>期望估值</Text>
          <Text style={styles.preference}>{basicInfo.price}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>财务状况</Text>
          <Text style={styles.preference}>{basicInfo.cash}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>项目人数</Text>
          <Text style={styles.preference}>{basicInfo.personNum}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>优势资源</Text>
          <Text style={styles.preference}>{basicInfo.youshi}</Text>
        </View>
        <View style={styles.textList}>
          <Text style={{ color: '#999', flex: 1, lineHeight: 20 }}>项目内容</Text>
          <Text style={styles.preference}>{basicInfo.content}</Text>
        </View>
      </View>
    )
  }

  renderInfo01() {
    return (
      <View style={styles.level}>
        <View style={styles.infoTitleBox}>
          <Text style={styles.borderTitle}>附加信息</Text>
        </View>
        <View style={[styles.flexDirection, styles.marginBottom]}>
          <View style={{
            flex: 6,
            borderRightColor: '#DCDCDC',
            borderRightWidth: 1,
            marginRight: 36
          }}>
            <Text style={styles.grayColor}>企业测评</Text>
            <Text style={styles.darkGrayColor}>A级</Text>
          </View>
          <View style={{ flex: 6 }}>
            <Text style={styles.grayColor}>还款来源</Text>
            <Text style={styles.darkGrayColor}>无</Text>
          </View>
        </View>
        <View style={[styles.flexDirection, styles.marginBottom]}>
          <View style={{
            flex: 6,
            borderRightColor: '#DCDCDC',
            borderRightWidth: 1,
            marginRight: 36
          }}>
            <Text style={styles.grayColor}>担保方式</Text>
            <Text style={styles.darkGrayColor}>无</Text>
          </View>
          <View style={{ flex: 6 }}>
            <Text style={styles.grayColor}>征信状态</Text>
            <Text style={styles.darkGrayColor}>良好</Text>
          </View>
        </View>
        <View style={[styles.flexDirection, styles.marginBottom]}>
          <View style={{
            flex: 6,
            borderRightColor: '#DCDCDC',
            borderRightWidth: 1,
            marginRight: 36
          }}>
            <Text style={styles.grayColor}>法律纠纷</Text>
            <Text style={styles.darkGrayColor}>无</Text>
          </View>
          <View style={{ flex: 6 }}>
            <Text style={styles.grayColor}>希望使用资金性质</Text>
            <Text style={styles.darkGrayColor}>无</Text>
          </View>
        </View>
        <View style={[styles.flexDirection, styles.marginBottom]}>
          <View style={{
            flex: 6,
          }}>
            <Text style={styles.grayColor}>资金到位时间</Text>
            <Text style={styles.darkGrayColor}>无</Text>
          </View>

        </View>
      </View>
    )
  }

  renderInfo02() {
    return (
      <View style={styles.level}>
        <View style={styles.infoTitleBox}>
          <Text style={styles.borderTitle}>融资详情</Text>
        </View>
        <View style={[styles.flexDirection, styles.marginBottom]}>
          <View style={{
            flex: 6,
            borderRightColor: '#DCDCDC',
            borderRightWidth: 1,
            marginRight: 36
          }}>
            <Text style={styles.grayColor}>融资轮数</Text>
            <Text style={styles.darkGrayColor}>D轮融资</Text>
          </View>
          <View style={{ flex: 6 }}>
            <Text style={styles.grayColor}>期望融资金额</Text>
            <Text style={styles.darkGrayColor}>5000万人民币</Text>
          </View>
        </View>
        <View style={[styles.flexDirection, styles.marginBottom]}>
          <View style={{
            flex: 6,
            borderRightColor: '#DCDCDC',
            borderRightWidth: 1,
            marginRight: 36
          }}>
            <Text style={styles.grayColor}>融资方式</Text>
            <Text style={styles.darkGrayColor}>股权融资</Text>
          </View>
          <View style={{ flex: 6 }}>
            <Text style={styles.grayColor}>出让占比</Text>
            <Text style={styles.darkGrayColor}>5%</Text>
          </View>
        </View>
      </View>
    )
  }

  renderInfo03() {
    return (
      <View style={[styles.level, styles.marginBottom10]}>
        <View style={styles.infoTitleBox}>
          <Text style={styles.borderTitle}>成功融资</Text>
        </View>
        <View style={[styles.flexDirection, styles.marginBottom]}>
          <View style={{
            flex: 6,
            borderRightColor: '#DCDCDC',
            borderRightWidth: 1,
            marginRight: 36
          }}>
            <Text style={styles.grayColor}>投资方</Text>
            <Text style={styles.darkGrayColor}>红杉资本</Text>
          </View>
          <View style={{ flex: 6 }}>
            <Text style={styles.grayColor}>融资金额</Text>
            <Text style={styles.darkGrayColor}>5000万人民币</Text>
          </View>
        </View>
        <View style={[styles.flexDirection, styles.marginBottom]}>
          <View style={{
            flex: 6,
            borderRightColor: '#DCDCDC',
            borderRightWidth: 1,
            marginRight: 36
          }}>
            <Text style={styles.grayColor}>融资方式</Text>
            <Text style={styles.darkGrayColor}>股权融资</Text>
          </View>
          <View style={{ flex: 6 }}>
            <Text style={styles.grayColor}>出让占比</Text>
            <Text style={styles.darkGrayColor}>5%</Text>
          </View>
        </View>
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
          <View style={{ flex: 1 }}>
            {this.renderTop()}
            {this.renderTab()}
            {tab === 1 && <>
              {this.renderSynopsis()}
              {this.renderInfo01()}
              {this.renderInfo02()}
              {this.renderInfo03()}
            </>
            }
            {tab === 2 && <>
              <View style={styles.plan}>
                <Image
                  resizeMode={'cover'}
                  style={styles.planBox}
                  source={require('../images/plan/1.jpeg')}
                />
                <Image
                  resizeMode={'cover'}
                  style={styles.planBox}
                  source={require('../images/plan/2.jpeg')}
                />
                <Image
                  resizeMode={'cover'}
                  style={styles.planBox}
                  source={require('../images/plan/3.jpeg')}
                />
                <Image
                  resizeMode={'cover'}
                  style={styles.planBox}
                  source={require('../images/plan/4.jpeg')}
                />
              </View>
            </>
            }
          </View>
        </ScrollView>
        <View style={styles.levelLast}>
          <View style={{ flex: 2 }}></View>
          <TouchableOpacity style={{ flex: 5 }} onPress={() => this.changeTab(1)}>
            <Button
              title='在线沟通'
              titleStyle={{ fontSize: 14 }}
              buttonStyle={{ backgroundColor: '#48C7BB', borderRadius: 18, width: 92 }}
              onPress={() => this.props.dispatch(NavigationActions.navigate({ routeName: 'Chats' }))}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 5 }} onPress={() => this.changeTab(1)}>
            <Button
              title='投递项目'
              titleStyle={{ fontSize: 14 }}
              buttonStyle={{ backgroundColor: '#03AAF3', borderRadius: 18, width: 92 }}
              onPress={() => this.setState({ visible: true })}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 2 }} onPress={() => this.changeTab(1)}>
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
    flex: 1,
  },
  level: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  ratingText: {
    color: '#999999',
  },
  iconShoucang: {
    marginLeft: 4,
    marginBottom: 8,
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
  infoTitleText: {
    lineHeight: 40,
    fontSize: 16,
    color: '#666666',
  },
  grayColor: {
    color: '#999999',
  },
  infoTitleBox: {
    borderLeftColor: '#00A0E9',
    borderLeftWidth: 3,
    marginBottom: 20,
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
  darkGrayColor: {
    color: '#666',
    lineHeight: 26,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  rightBorder: {
    borderRightColor: '#DCDCDC',
    borderRightWidth: 1,
  },
  marginBottom: {
    marginBottom: 20,
  },
  levelLast: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
  levelTop: {
    paddingTop: 0,
  },
  borderTitle: {
    marginLeft: 5,
    fontSize: 16,
    color: '#666666',
  },
  titleColor: {
    color: '#383838',
    fontSize: 16,
  },
  titleSize: {
    fontSize: 16,
  },
  size12: {
    fontSize: 12
  },
  info: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  marginBottom10: {
    marginBottom: 100,
  },
  plan: {
    padding: 10,
    marginBottom: 70,
    backgroundColor: '#fff',
  },
  planBox: {
    width: Dimensions.get('window').width - 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
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

export default ProjectDetail;
