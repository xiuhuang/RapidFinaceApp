import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import IcoMoonIcon from '../../assets/icomoon'
import { Text } from 'react-native-elements';

class HomeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      onPress,
      onLongPress,
      Component = onPress || onLongPress ? TouchableHighlight : View,
      theme,
      time,
      title,
      leftAvatar,
      address,
      ...attributes
    } = this.props;

    return (
      <Component
        {...attributes}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <View style={styles.container(theme)}>
          <View style={styles.row}>
            <View style={styles.leftImg}>
              <Image 
              style={styles.leftImg} 
              source={{uri: leftAvatar}} 
              />
            </View>
            <View style={styles.rightCont}>
              <Text style={styles.title} numberOfLines={2}>{title}</Text>
              <Text style={styles.name}></Text>
              <View style={styles.bottom}>
                <IcoMoonIcon name="shijian" size={12} color="#999" style={{ marginRight: 4 }} />
                <Text style={styles.time}>{time}</Text>
                <IcoMoonIcon name="chengshidingwei" size={12} color="#999" style={{ marginRight: 4, marginLeft: 12 }} />
                <Text style={styles.time}>{address}</Text>
              </View>
            </View>
          </View>
        </View>
      </Component>
    );
  }
}

const styles = StyleSheet.create({
  container: theme => ({
    ...Platform.select({
      ios: {
        padding: 10,
      },
      default: {
        padding: 12,
      },
    }),
    backgroundColor: 'white',
  }),
  row: {
    flexDirection: 'row'
  },
  leftImg: {
    width: 109,
    height: 81,
    backgroundColor: '#DCDCDC',
    marginRight: 8
  },
  rightCont: {
    flex: 1
  },
  title: {
    fontSize: 16,
    color: '#666',
    height: 44,
    lineHeight: 20,
    fontWeight: 'bold'
  },
  name: {
    fontSize: 14,
    color: '#666',
  },
  time: {
    fontSize: 14,
    color: '#999',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center'
  }

})

export default HomeItem;