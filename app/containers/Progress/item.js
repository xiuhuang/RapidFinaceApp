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
      num,
      step,
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
              <Text style={StyleSheet.flatten([styles.title, titleStyle])}>
                {title}
              </Text>
              <View style={styles.flexDirection}>
                <Text style={StyleSheet.flatten([styles.subtitle])}>
                  {subtitle}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <ListItem
              containerStyle={{ padding: 0, marginTop: 12 }}
              title={
                <View style={styles.flexDirection}>
                  <Text style={styles.leftText}>进度</Text>
                  <Text style={styles.rightText}>{step}条</Text>
                </View>
              }
              chevron={
                <View style={styles.flexDirection}>
                  <Text style={{ color: '#F99259', fontSize: 14 }}>新进展</Text>
                  <IcoMoonIcon style={{ width: 14, marginLeft: 10 }} name="Rectangle" size={18} color='#C7C7CC' />
                </View>
              }
            />
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
  leftText:{
    color:'#999999',
    marginRight:6,
  },
  rightText:{
    color:'#666',
    marginRight:6,
  }
})

export default HomeItem;