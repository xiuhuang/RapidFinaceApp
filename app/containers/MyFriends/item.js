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
      userLabel,
      title,
      institution,
      tag,
      id,
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
        <View >
          <View style={styles.head}>
            <Avatar
              rounded={false}
              size={49}
              source={{
                uri: leftAvatar,
              }}
              rounded
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
              <View style={styles.flexDirection}>
                <Text style={StyleSheet.flatten([styles.subtitle])}>
                  {userLabel}  {institution}
                </Text>
              </View>
            </View>
            <Text style={styles.idText}>ID:{id}</Text>
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
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: LINE,
    paddingBottom: 10,
    padding:14,
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
  },
  tag: {
    fontSize: 14,
    color: '#00A0E9',
    backgroundColor: 'rgba(0,160,233,0.1)',
    marginLeft: 10,
  },
  idText: {
    color:'#999'
  }
})

export default HomeItem;