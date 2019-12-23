import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import IcoMoonIcon from '../../assets/icomoon'

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
      location,
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
              rounded={false}
              size={81}
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
                  {subtitle[0]}
                </Text>
                <Text style={StyleSheet.flatten([styles.subtitle, subtitleStyle, styles.line])}>|</Text>
                <Text style={StyleSheet.flatten([styles.subtitle, subtitleStyle])}>
                  {subtitle[1]}
                </Text>
              </View>
              <View style={styles.flexDirection}>
                <IcoMoonIcon style={{ width: 14, marginRight:4, marginTop:7}} name="chengshidingwei" size={12} color='#F99259' />
                <Text style={StyleSheet.flatten([styles.subtitle, subtitleStyle])}>{location}</Text>
              </View>
              <Text style={StyleSheet.flatten([styles.subtitle, subtitleStyle, styles.line])}></Text>
            </View>
          </View>
          <View style={styles.describe}>
            <Text style={styles.desItem}>
              {describe[0]}
            </Text>
            <Text style={styles.grayColor}>
              {describe[1]}
            </Text>
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
        fontSize: 14,
      },
      default: {
        color: ANDROID_SECONDARY,
        fontSize: 13,
      },
    }),
    color: 'rgba(153, 153, 153, 1)',
    marginTop: 6,
    marginRight: 13,
  },
  line: {
    color: '#DCDCDC',
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
    marginTop: 15,
    marginBottom: 15
  },
  desItem: {
    backgroundColor: 'rgba(249, 146, 89, 0.1)',
    fontSize: 14,
    height: 20,
    lineHeight: 20,
    marginRight: 10,
    color: 'rgba(249, 146, 89, 1)',
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
  },
  flexDirection: {
    flexDirection: 'row',
  },
  grayColor: {
    color: '#999999',
  }
})

export default HomeItem;