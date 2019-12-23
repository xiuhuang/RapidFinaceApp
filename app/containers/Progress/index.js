import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import ListItem from './item'
import { NavigationActions } from '../../utils'
import financeList from '../../data/financeData.json'

@connect()
class Progress extends Component {

  static navigationOptions = {
    title: '进度管理',
  }

  state = {
    selectedIndex: 0,
    data: financeList.data
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'ProgressDetail' }))

  }

  handleChange = (index) => {
    if(index === 0) {
      this.setState({
        data: financeList.data
      })
    } else if (index === 1) {
      const data = financeList.data.concat([]).splice(4, 5)
      this.setState({
        data
      })
    } else if(index === 2) {
      const data = financeList.data.concat([]).reverse().splice(0, 6)
      this.setState({
        data
      })
    }
    this.setState({
      selectedIndex: index
    })
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      <ListItem
        title={item.projectName}
        subtitle={item.info}
        leftAvatar={item.projectLogo}
        step={item.step}
        onPress={this.gotoDetail}
      />
    </View>
  )


  render() {
    const { selectedIndex, data } = this.state;

    const headDom = ['项目方', '投资方', '中介方'].map((title, index) => {
      const isCurrent = selectedIndex === index;
      return <Button
        key={index.toString()}
        title={title}
        type="clear"
        buttonStyle={{
          borderRadius: 0,
          borderBottomColor: isCurrent ? 'rgba(0, 160, 233, 1)' : 'transparent',
          borderBottomWidth: isCurrent ? 2 : 0,
          paddingHorizontal: 0,
          width: 70,
          marginLeft: index === 1 ? 40 : 0,
          marginRight: index === 1 ? 40 : 0,
        }}
        titleStyle={{
          color: isCurrent ? 'rgba(0, 160, 233, 1)' : 'rgba(102, 102, 102, 1)',
          fontSize: 16
        }}
        onPress={() => this.handleChange(index)}
      />
    });


    return (
      <View style={styles.container}>
        <View style={styles.head}>
          {headDom}
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={data}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(239, 243, 246, 1)'
  },
  head: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})

export default Progress
