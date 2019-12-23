import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions, PixelRatio, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux';
import IcoMoonIcon from '../../assets/icomoon';
import { CheckBox } from 'react-native-elements';

const LINE = 1 / PixelRatio.get();

@connect()

class OpenVip extends Component {
  static navigationOptions = {
    title: '开通会员',
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: 'VIP'
    }
  };

  handleChange = (type) => {
    this.setState({
      checked: type
    })
  }
  render() {
    const { checked } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.inContainer}>
          <View style={styles.chooseBox}>
            <Text style={styles.openVipTitle}>会员开通/续费</Text>
            <View style={styles.chooseTab}>
              <TouchableHighlight underlayColor={'#fff'} onPress={() => this.handleChange('VIP')}>
                <View style={styles.tab}>
                  <View style={styles.bage}>
                    <Text style={styles.vip}>VIP会员</Text>
                  </View>
                  <View style={styles.flexDirection}>
                    <Text style={styles.priceText}>365元/年</Text>
                    <CheckBox
                      checkedIcon={
                        <IcoMoonIcon style={{ marginTop: 8 }} name="yikan" size={22} color='#00A0E9' />
                      }
                      uncheckedIcon={
                        <View style={styles.uncheckedIcon}></View>
                      }
                      checked={checked === 'VIP'}
                      onPress={() => this.handleChange('VIP')}
                    />
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor={'#fff'} onPress={() => this.handleChange('SVIP')}>
                <View style={styles.tab} onPress={() => this.handleChange('SVIP')}>
                  <View style={styles.bage}>
                    <Text style={[styles.vip, styles.svip]}>SVIP会员</Text>
                  </View>
                  <View style={styles.flexDirection}>
                    <Text style={styles.priceText}>10000元/年</Text>
                    <CheckBox
                      checkedIcon={
                        <IcoMoonIcon style={{ marginTop: 8 }} name="yikan" size={22} color='#00A0E9' />
                      }
                      uncheckedIcon={
                        <View style={styles.uncheckedIcon}></View>
                      }
                      checked={checked === 'SVIP'}
                      onPress={() => this.handleChange('SVIP')}
                    />
                  </View>
                </View>
              </TouchableHighlight>
            </View>
            <View style={[styles.flexDirection, styles.yue]}>
              <Text style={{ color: '#383838', fontSize: 16, fontWeight: 'bold' }}>充值余额</Text>
              <Text style={{ color: '#383838' }}>¥0.00</Text>
            </View>
            <View>
              <Text style={{ textAlign: 'right', marginTop: 20, fontSize: 16, color: '#999999' }}>抵扣后价格  ¥365.00</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ marginBottom:10, flexDirection: 'row', justifyContent:'center' }}>
            <Text style={{ color: '#999', textAlign: 'center' }}>完成支付即代表您同意</Text>
            <View style={{borderBottomColor: '#999', borderBottomWidth: 1 }}>
              <Text style={{ color: '#999', }}>《快资会员购买协议》</Text>
            </View>
          </View>
          <View style={styles.footerBox}>
            <Text style={[styles.footerBtn, styles.footerBtnLeft]}>需要支付: ¥355.00</Text>
            <Text style={[styles.footerBtn, styles.footerBtnRight]}>立即支付</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF3F6',
  },
  flexDirection: {
    flexDirection: 'row',
  },
  inContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
  chooseBox: {
    height: 260,
    paddingLeft: 22,
    paddingRight: 22,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  openVipTitle: {
    color: '#666',
    fontSize: 16,
    lineHeight: 40,
  },
  chooseTab: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    position: 'relative',
    width: (Dimensions.get('window').width - 94) / 2,
    height: 65,
    borderColor: '#666666',
    borderWidth: LINE,
    paddingLeft: 20,
  },
  checkedIcon: {
    width: 22,
    height: 22,
    borderRadius: 10,
    borderWidth: LINE,
    borderColor: '#DCDCDC',
  },
  uncheckedIcon: {
    width: 22,
    height: 22,
    borderRadius: 10,
    borderWidth: LINE,
    marginTop: 8,
    borderColor: '#DCDCDC',
  },
  priceText: {
    fontSize: 16,
    color: '#999',
    lineHeight: 65,
  },
  bage: {
    position: 'absolute',
    top: -10,
    left:-15,
  },
  vip: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 4,
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    backgroundColor: '#F99259',
  },
  svip: {
    backgroundColor: '#383838'
  },
  yue: {
    justifyContent: 'space-between',
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#DCDCDC',
    borderTopWidth: LINE,
    borderBottomWidth: LINE,
  },
  footerBox: {
    flexDirection: 'row',
    height: 52
  },
  footerBtn: {
    width: Dimensions.get('window').width / 2,
    fontSize: 16,
    lineHeight: 52,
    textAlign: 'center',
  },
  footerBtnLeft: {
    color: '#666',
    backgroundColor: '#fff',
  },
  footerBtnRight: {
    color: '#fff',
    backgroundColor: '#00A0E9',
  }
})

export default OpenVip;
