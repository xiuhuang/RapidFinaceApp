import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { Button, ListItem } from 'react-native-elements'
import IcoMoonIcon from '../../assets/icomoon'
import financeList from '../../data/financeData.json'
import investList from '../../data/investData.json'

const intentData = [
  {
    name: '宜人坊',
    projectLogo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=125406757,1015262290&fm=26&gp=0.jpg",
    status: '已发布',
    city: '上海',
    industry: '能源',
    fStatus: '未融资',
    stage: 'a轮',
    amount: '1000',
    transfer: '2',
    invitation: '3',
    caozuo: '',
    id: 1,
  },
  {
    name: '叶氏陶瓷',
    projectLogo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2123063318,1948869321&fm=26&gp=0.jpg",
    status: '已发布',
    city: '北京',
    industry: '能源',
    fStatus: '未融资',
    stage: 'a轮',
    amount: '1000',
    transfer: '2',
    invitation: '3',
    caozuo: '',
    id: 2,
  },
  {
    name: '365呼吸卫士',
    projectLogo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3141814253,1138440935&fm=26&gp=0.jpg",
    status: '已发布',
    city: '上海',
    industry: '能源',
    fStatus: '未融资',
    stage: 'a轮',
    amount: '1000',
    transfer: '2',
    invitation: '3',
    caozuo: '',
    id: 3,
  },
  {
    name: '绿国鑫源',
    projectLogo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2838167742,1460807588&fm=26&gp=0.jpg",
    status: '已发布',
    city: '上海',
    industry: '能源',
    fStatus: '未融资',
    stage: 'a轮',
    amount: '1000',
    transfer: '2',
    invitation: '3',
    caozuo: '',
    id: 4,
  },
]
const financialData = financeList.data
const investorData = investList.data
class MyFavorite extends Component {
  static navigationOptions = {
    title: '我的收藏',
  }
  state = {
    selected: '投资人',
    currentList: investorData,
  }
  handleChange = (item) => {
    if(item === '投资人') {
      this.setState({
        currentList: investorData,
      })
    } else if (item === '投资意向') {
      this.setState({
        currentList: intentData,
      })
    } else if (item === '融资项目') {
      this.setState({
        currentList: financialData,
      })
    }
    this.setState({
      selected: item,
    })
  }
  render () {
    const { selected, currentList } = this.state
    const renderItem = ({item}) => {
      if(selected === '投资人') {
        return (
          <ListItem
          title={
            <View style={styles.invertorTitle}>
              <View><Text style={{fontSize: 16, color: '#383838'}}>{item.userName}</Text></View>
              <View style={styles.titleHighlight}><Text style={{fontSize: 14, color: '#00A0E9'}}>{item.describe[1] || '黑铁投手'}</Text></View>
            </View>
          }
          rightElement={
            <View style={styles.rightContainer}>
              <IcoMoonIcon name="duigou" size={13} color='#999999'/>
              <Text style={{fontSize: 13, color: '#999999', marginLeft: 5}}>收藏</Text>
            </View>
          }
          subtitle={`${item.userLabel}  ${item.institution}`}
          subtitleStyle={{fontSize: 14, color: '#999999'}}
          leftAvatar={{
            source: { uri: item.headUrl },
            size: 54,
          }}
          containerStyle={{height: 83, borderColor: '#DCDCDC', borderBottomWidth: 1}}
        />
        )
      } else {
        return (
          <ListItem
            title={
              <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={{fontSize: 15, color: '#333333'}}>{item.projectName || item.name}</Text>
              </View>
            }
            subtitle={
              <View style={styles.subtitleContainer}>
                <Text numberOfLines={1} style={{fontSize: 13, color: '#999999'}}>{item.info || `${item.stage}|${item.fStatus}|${item.industry}`}</Text>
              </View>
            }
            leftElement={
              <Image
                style={{width: 60, height: 60}}
                source={{uri: item.projectLogo}}
              />
            }
            rightElement={
              <View style={styles.rightContainer}>
                <IcoMoonIcon name="duigou" size={13} color='#999999'/>
                <Text style={{fontSize: 13, color: '#999999', marginLeft: 5}}>收藏</Text>
              </View>
            }
            containerStyle={{height: 83, borderColor: '#DCDCDC', borderBottomWidth: 1}}
          />
        )
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.navBarContainer}>
          {
            ['投资人', '投资意向', '融资项目'].map(item => {
              const isCurrent = selected === item;
              return <Button
                key={item}
                title={item}
                type="clear"
                buttonStyle={{
                  borderRadius: 0,
                  borderBottomColor: isCurrent ? 'rgba(0, 160, 233, 1)' : 'transparent',
                  borderBottomWidth: isCurrent ? 2 : 0,
                  paddingHorizontal: 0,
                  width: 70,
                  height: 42,
                }}
                titleStyle={{
                  color: isCurrent ? 'rgba(0, 160, 233, 1)' : 'rgba(102, 102, 102, 1)',
                  fontSize: 16
                }}
                containerStyle={{
                  height: 44
                }}
                onPress={() => this.handleChange(item)}
              />
            })
          }
        </View>
        <View>
          <FlatList
            data={currentList}
            renderItem={renderItem}
            ListFooterComponent={
              <View style={styles.footer}>
                <Text style={{fontSize: 14, color: '#666666'}}>共收藏{currentList.length}个{selected}</Text>
              </View>
            }
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 30
  },
  navBarContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1
  },
  titleContainer: {
    width: 180,
    marginBottom: 10,
  },
  invertorTitle: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
    marginBottom: 5,
  },
  titleHighlight: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 19,
    backgroundColor: 'rgba(0,160,233,0.1)',
  },
  subtitleContainer: {
    width: 180,
  },
  rightContainer: {
    flexDirection: 'row',
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 5,
    borderColor: '#979797',
    borderWidth: 1,
  },
  footer: {
    marginTop: 12,
    alignItems: 'center',
    marginBottom: 30
  }
})
export default MyFavorite