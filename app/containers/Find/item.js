import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
  PixelRatio
} from 'react-native';
import { Avatar, Text, ListItem } from 'react-native-elements';
import IcoMoonIcon from '../../assets/icomoon'

const LINE = 1 / PixelRatio.get();

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
          disabled && disabledStyle, styles.conBox
        ]}>
          <View style={styles.head}>
            <Avatar
              rounded={false}
              size={81}
              source={{
                uri: leftAvatar,
              }}
            />
            <View
              style={styles.contentContainer}
            >
              <Text
                style={StyleSheet.flatten([styles.title])}
                numberOfLines={2}
              >
                {title}
              </Text>
              <View style={styles.flexDirection}>
                <Text style={StyleSheet.flatten([styles.subtitle])}>
                  {subtitle}
                </Text>
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
        padding: 14,
      },
      default: {
        padding: 16,
      },
    }),
    backgroundColor: 'white',
  }),
  head: {
    flexDirection: 'row',
  },
  contentContainer: {
    flex:1,
    paddingLeft: 10,
    flexDirection:'column',
    justifyContent: 'space-between',
  },
  title: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 16,
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
        fontSize: 14,
      },
      default: {
        color: ANDROID_SECONDARY,
        fontSize: 13,
      },
    }),
    color: 'rgba(153, 153, 153, 1)',
    marginTop: 8,
    marginRight: 13,
  },
  line: {
    color: '#DCDCDC',
  },
  flexDirection: {
    flexDirection: 'row',
  },
  grayColor: {
    color: '#999999',
  },
  leftText: {
    color: '#999999',
    marginRight: 6,
  },
  rightText: {
    color: '#666',
    marginRight: 6,
  }
})

export default HomeItem;