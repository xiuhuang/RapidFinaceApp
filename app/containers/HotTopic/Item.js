import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
  PixelRatio,
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
      title,
      messagePic,
      chat,
      zan,
      Component = onPress || onLongPress ? TouchableHighlight : View,
      theme,
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
                source={{ uri: messagePic }}
              />
            </View>
            <View style={styles.rightCont}>
              <Text style={styles.title} numberOfLines={2}>{title}</Text>
              <Text style={styles.name}>36氪</Text>
              <Text style={styles.time}>2019-07-28  09:12</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <IcoMoonIcon name="xiaoxi1" size={17} color='#F9945C' style={{ marginRight: 8 }} />
            <Text style={{ color: '#666666' }}>{chat}</Text>
            <IcoMoonIcon name="shoucang" size={17} color='#F9945C' style={{ marginRight: 8, marginLeft: 20 }} />
            <Text style={{ color: '#666666' }}>{zan}</Text>
            <IcoMoonIcon name="fenxiang" size={17} color='#F9945C' style={{ marginLeft: 20 }} />
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
    marginTop: 15,
    paddingTop: 10,
    borderTopColor: '#DCDCDC',
    borderTopWidth: 1 / PixelRatio.get(),
    alignItems: 'center',
    flexDirection: 'row'
  }

})

export default HomeItem;