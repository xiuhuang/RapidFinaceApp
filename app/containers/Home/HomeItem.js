import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
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
      userLabel,
      title,
      time,
      content,
      institution,
      describe,
      contentContainerStyle,
      titleStyle,
      subtitleStyle,
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
            <Avatar
              rounded
              size={42}
              source={{
                uri: leftAvatar,
              }}
            />
            <View
              style={StyleSheet.flatten([
                styles.contentContainer,
                contentContainerStyle,
              ])}
            >
              <Text style={StyleSheet.flatten([styles.title, titleStyle])}>
                {title}
              </Text>
              <View style={styles.flexDirection}>
                <Text style={StyleSheet.flatten([styles.subtitle, subtitleStyle])}>
                  {userLabel}
                </Text>
                <Text style={StyleSheet.flatten([styles.subtitle, subtitleStyle])}>
                  {institution}
                </Text>
              </View>

            </View>
            <Text style={styles.time}>
              {time}
            </Text>
          </View>
          <View style={styles.describe}>
            <Text style={styles.desItem}>
              {describe[0]}
            </Text>
            <Text style={styles.desItem}>
              {describe[1]}
            </Text>
          </View>
          <Text style={styles.content} numberOfLines={4}>
            {content}
          </Text>
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
  flexDirection: {
    flexDirection:'row',
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
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
        fontSize: 17,
      },
      default: {
        fontSize: 16,
      },
    }),
    color: 'rgba(56, 56, 56, 1)'
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
    marginTop: 4,
    marginRight:14,
  },
  time: {
    position: 'absolute',
    right: 0,
    top: 0,
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      default: {
        fontSize: 14,
      },
    }),
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
    color: 'rgba(153, 153, 153, 1)',
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      default: {
        fontSize: 14,
      },
    }),
    lineHeight: 20
  }
})

export default HomeItem;