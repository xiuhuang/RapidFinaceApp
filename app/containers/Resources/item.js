import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import { Avatar, Text, Button } from 'react-native-elements';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';
const LINE = 1 / PixelRatio.get();

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
      tag,
      contentContainerStyle,
      titleStyle,
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
              <View style={styles.flexDirection}>
                <Text style={StyleSheet.flatten([styles.title, titleStyle])}>
                  {title}
                </Text>
                <Text style={styles.tag}>{tag}</Text>
              </View>
              <Text style={StyleSheet.flatten([styles.subtitle])}>
                {subtitle}
              </Text>
            </View>
            <View>
              <TouchableOpacity >
                <Button
                  title='推荐'
                  titleStyle={{ fontSize: 14, lineHeight: 22 }}
                  buttonStyle={{ backgroundColor: '#48C7BB', borderRadius: 18, width: 78, height: 25, padding: 0 }}
                />
              </TouchableOpacity>
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
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: LINE,
    borderBottomColor: '#DCDCDC',
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
    color: '#666',
    marginRight: 13,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  grayColor: {
    color: '#999999',
  },

  tag: {
    color: '#999999',
    fontSize: 14,
    marginLeft: 17.5,
    marginTop: 2,
  }
})

export default HomeItem;