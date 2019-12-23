import React from 'react';
import {
  StyleSheet,
  View,
  PixelRatio,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  DeviceEventEmitter
} from 'react-native';
import { connect } from 'react-redux'
import { Text, Button } from 'react-native-elements';
import { NavigationActions } from '../../utils'

const LINE = 1 / PixelRatio.get();
class Item extends React.Component {

  state = {
    value: '',
  }

  
  routerTo = () => {
    console.log('222')
  }


  handleClick = (value) => {
    this.setState({
      value,
    })
  }

  render() {
    const { data, title } = this.props;
    const { value } = this.state;
    return (
      <View style={styles.chooseBox}>
        <View style={styles.title}>
          <Text style={styles.titleFont}>{title}</Text>
          <View style={styles.youxian}>
            <Text style={styles.titleFont}>优先级</Text>
            <TextInput 
            maxLength={4}
            style={styles.textInput} 
            keyboardType = {'number-pad'}
            />
            <View style={styles.arrowBox}>
              <View style={[styles.arrowTop, styles.arrow]}></View>
              <View style={[styles.arrowBottom, styles.arrow]}></View>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.inContent}>
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.handleClick(item)}
                >
                  <Text
                    key={index}
                    style={[styles.item, index === 0 || index === 5 ? null : styles.moreItem, value === item ? styles.active : null]}
                  >{item}</Text>
                </TouchableOpacity>

              )
            })}
          </View>
        </View>
      </View>
    )
  }
}

@connect(({ app }) => ({ ...app }))

class ChoosePage extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: '匹配设置'
  })


  // componentWillUnmount(){
  //   DeviceEventEmitter.emit('ChangeUI', {color:'red',text:'通知'});
  // }



  back = () => {
    this.props.dispatch(NavigationActions.back());
    // this.props.navigation.state.params.refresh();
  }

  cityData = ['北京市', '上海市', '广州市', '深圳', '天津', '杭州', '重庆', '南京', '武汉', '西安',]
  workData = ['新兴行业', '高新行业', '大健康', '文创', '传统实业', '政府机关', '民生', '房地产']
  projectData = ['天使轮', 'A轮', 'B轮', 'C轮', 'D轮', '已上市']
  typeData = ['房产抵押', '股权质押']

  render() {
    return (
      <ScrollView style={styles.container}>
        <Item title='所在城市' data={this.cityData} />
        <Item title='所属行业' data={this.workData} />
        <Item title='项目阶段' data={this.projectData} />
        <Item title='融资方式' data={this.typeData} />
        <View style={styles.footerBox}>
          <TouchableOpacity
            onPress={this.back}
          >
            <Text style={styles.footerBtn}>确定</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderLeftColor: '#00A0E9',
    borderLeftWidth: 3,
    paddingLeft: 10,
  },
  titleFont: {
    color: '#999',
    marginRight: 10,
  },
  content: {
    padding: 10,
  },
  inContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  item: {
    width: (Dimensions.get('window').width - 80) / 5,
    marginTop: 5,
    paddingBottom: 10,
  },
  moreItem: {
    marginLeft: 10,
  },
  chooseBox: {
    borderBottomColor: 'rgba(220,220,220,1)',
    borderBottomWidth: LINE,
    marginBottom: 20,
    marginTop: 5,
  },
  active: {
    color: '#00A0E9',
  },
  footerBox: {
    height: 48,
    backgroundColor: '#00A0E9',
    width: Dimensions.get('window').width - 40,
    borderRadius: 30,
  },
  footerBtn: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 52,
    textAlign: 'center',
  },
  textInput: {
    width: 50,
    height: 20,
    borderColor: '#333',
    borderWidth: LINE,
    paddingVertical: 0,
  },
  youxian: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  arrowBox:{
    position:'absolute',
    width: 10,
    height:20,
    right:2,
  },
  arrow: {
    borderWidth: 4,
    borderColor:'transparent',
  },
  arrowTop: {
    borderBottomColor:'#999',
  },
  arrowBottom: {
    borderTopColor:'#999',
    marginTop:2,
  }
})

export default ChoosePage;