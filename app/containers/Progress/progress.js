import React, { Component } from 'react'
import { StyleSheet, View, Text, PixelRatio } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button } from 'react-native-elements';
import IcoMoonIcon from '../../assets/icomoon'


const LINE = 1 / PixelRatio.get();

@connect()

class ProgressCom extends Component {
  state = {
    visible: true,
  }

  changeShow = () => {
    const { visible } = this.state;
    console.log(visible)
    this.setState({
      visible: !visible,
    })
  }

  render() {
    const { isNotMatch } = this.props;
    const { visible } = this.state;
    return (
      <View style={styles.progressBox}>
        <View style={[styles.flexDirection, styles.titleBox]}>
          <View style={[styles.flexDirection]}>
            <Text style={[styles.lineH20, styles.darkGaryColor]}>进度</Text>
            <Text style={[styles.lineH20, styles.newProgressText]}>新进度</Text>
          </View>
          <IcoMoonIcon
            style={{ width: 20, marginLeft: 40, marginTop: 4, color: '#C7C7CC' }}
            name={visible ? 'xia' : 'shang'}
            size={12}
            onPress={this.changeShow}
          />
        </View>
        {
          visible ?
            <View style={styles.progressDetail}>
              <View style={styles.progressItem}>
                {
                  isNotMatch ?
                    <View>
                      <View style={styles.flexDirection}>
                        <View style={styles.defaultProgrss}>
                          <Text style={{ color: '#fff', textAlign: 'center', lineHeight: 19 }}>5</Text>
                        </View>
                        <Text style={[styles.grayColor, styles.marginLeft30]}>签约完成</Text>
                      </View>
                      <View style={styles.leftLineBox}>
                        <View style={styles.leftLine}></View>
                      </View>
                      <View style={styles.flexDirection}>
                        <View style={styles.defaultProgrss}>
                          <Text style={{ color: '#fff', textAlign: 'center', lineHeight: 19 }}>4</Text>
                        </View>
                        <Text style={[styles.grayColor, styles.marginLeft30]}>建立合作</Text>
                      </View>
                      <View style={styles.leftLineBox}>
                        <View style={styles.leftLine}></View>
                      </View>
                      <View style={styles.flexDirection}>
                        <View style={styles.defaultProgrss}>
                          <Text style={{ color: '#fff', textAlign: 'center', lineHeight: 19 }}>3</Text>
                        </View>
                        <Text style={[styles.grayColor, styles.marginLeft30]}>同意邀约</Text>
                      </View>
                      <View style={styles.leftLineBox}>
                        <View style={styles.leftLine}></View>
                      </View>
                    </View>
                    :
                    <View>
                      <View style={styles.flexDirection}>
                        <IcoMoonIcon style={{ color: '#e74c3c' }} name="buheshi" size={18} />
                        <Text style={{ marginLeft: 30, color: '#e74c3c' }}>条件不符合</Text>
                        <Text style={[styles.grayColor, styles.marginLeft30]}>2019-09-12 9:12</Text>
                      </View>
                      <View style={styles.leftLineBox}>
                        <View style={styles.leftLine}></View>
                      </View>
                    </View>
                }

                <View style={styles.flexDirection}>
                  <IcoMoonIcon style={{ color: '#48C7BB' }} name="yikan" size={18} />
                  <Text style={[styles.activeColor, styles.marginLeft30]}>已查看</Text>
                  <Text style={[styles.grayColor, styles.marginLeft30]}>2019-09-12 9:12</Text>
                </View>
                <View style={styles.leftLineBox}>
                  <View style={styles.leftLineGreen}></View>
                </View>
                <View style={styles.flexDirection}>
                  <IcoMoonIcon style={{ color: '#48C7BB' }} name="yikan" size={18} />
                  <Text style={[styles.activeColor, styles.marginLeft30]}>已投递</Text>
                  <Text style={[styles.grayColor, styles.marginLeft30]}>2019-09-12 9:12</Text>
                </View>
              </View>
            </View>
            : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  progressBox: {
    backgroundColor: '#ffffff',
  },
  flexDirection: {
    flexDirection: 'row',
  },
  titleBox: {
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  lineH20: {
    lineHeight: 24,
  },
  darkGaryColor: {
    color: '#666666'
  },
  newProgressText: {
    color: '#48C7BB',
    marginLeft: 17,
  },
  progressDetail: {
    paddingLeft: 30,
    marginTop: 10,
    paddingBottom: 20,
  },
  leftLineBox: {
    paddingLeft: 9,
  },
  leftLine: {
    height: 28,
    borderLeftWidth: LINE,
    borderLeftColor: '#DCDCDC',
  },
  defaultProgrss: {
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: '#999999',
  },
  leftLineGreen: {
    height: 28,
    borderLeftWidth: LINE,
    borderRadius: 0,
    borderLeftColor: '#48C7BB',
  },
  grayColor: {
    color: '#999999',
  },
  marginLeft30: {
    marginLeft: 30,
  },
  activeColor: {
    color: '#48C7BB',
  }
})

export default ProgressCom;
