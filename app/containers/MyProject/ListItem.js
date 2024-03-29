import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import { Avatar, Text } from 'react-native-elements';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

class HomeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      onPress,
      onLongPress,
      Component = onPress || onLongPress ? TouchableHighlight : View,
      disabled,
      disabledStyle,
      theme,
      leftAvatar,
      subtitle,
      title,
      time,
      content,
      info,
      describe,
      contentContainerStyle,
      titleStyle,
      subtitleStyle,
      index,
      ...attributes
    } = this.props;

    return (
      <Component
        {...attributes}
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
      >
        <View style={[
          styles.container(theme),
          disabled && disabledStyle
        ]}>
          <View style={styles.head}>
            <Text style={styles.leftNum}>
              {index + 1}
            </Text>
            <View
              style={StyleSheet.flatten([
                styles.contentContainer,
                contentContainerStyle,
              ])}
            >
              <Text style={StyleSheet.flatten([styles.title, titleStyle])}>
                {title}
              </Text>
            </View>
            <Text style={styles.time}>
              {time}
            </Text>
          </View>
          <View style={styles.content}>
            <Image source={{ uri: leftAvatar }} style={styles.leftIcon} />
            <View style={styles.rightBox}>
              <Text numberOfLines={2} style={styles.rTitle}>
                {content}
              </Text>
              <Text style={styles.rInfo}>
                {info}
              </Text>
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
        padding: 14,
      },
      default: {
        padding: 16,
      },
    }),
    backgroundColor: 'white',
  }),
  leftNum: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(245,245,245,1)',
    borderRadius: 2,
    color: '#999',
    textAlign: 'center',
    lineHeight: 30
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF3F6'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    position: 'relative',
  },
  title: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 16,
      },
      default: {
        fontSize: 15,
      },
    }),
    color: '#333'
  },
  subtitle: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      default: {
        color: ANDROID_SECONDARY,
        fontSize: 14,
      },
    }),
    color: 'rgba(153, 153, 153, 1)',
    marginTop: 4
  },
  time: {
    fontSize: 13,
    color: 'rgba(153, 153, 153, 1)'
  },
  describe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15
  },
  desItem: {
    backgroundColor: 'rgba(0, 160, 233, 0.1)',
    fontSize: 14,
    height: 20,
    lineHeight: 20,
    marginRight: 10,
    color: 'rgba(0, 160, 233, 1)',
    paddingLeft: 5,
    paddingRight: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#F5F5F5',
    marginRight: 10
  },
  rightBox: {
    flex: 1
  },
  rTitle: {
    fontSize: 15,
    color: '#333',
    lineHeight: 20
  },
  rInfo: {
    fontSize: 13,
    color: '#999',
    marginTop: 4
  }
})

export default HomeItem;