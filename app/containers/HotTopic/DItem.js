import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
  PixelRatio
} from 'react-native';
import { Avatar,Text } from 'react-native-elements';
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
        time,
        content,
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
                <View style={styles.rowHead}>
                  <Text style={{color:'#666',fontSize:14}}>回答 154</Text>
                </View>
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
                        <View style={{flexDirection:'row'}}>
                          <Text style={StyleSheet.flatten([styles.title, titleStyle])}>
                              {title}
                          </Text>
                          {
                              (describe instanceof Array) ? describe.map((item,index) => {
                                  return <Text key={index.toString()} style={styles.desItem}>
                                      {item}
                                  </Text>
                              }) : <Text key={index.toString()} style={styles.desItem}>
                                  {describe}
                              </Text>
                          } 
                        </View>
                        <Text style={StyleSheet.flatten([styles.subtitle, subtitleStyle])}>
                            {subtitle}
                        </Text>
                    </View>
                </View>
                <Text style={styles.content} numberOfLines={4}>
                        {content}
                </Text>
                <View style={styles.bottom}>
                  <IcoMoonIcon name="xiaoxi1" size={17} color='#F9945C' style={{marginRight:8}}/>
                  <Text style={{color:'#666666'}}>12</Text>
                  <IcoMoonIcon name="shoucang" size={17} color='#F9945C' style={{marginRight:8,marginLeft:20}}/>
                  <Text style={{color:'#666666'}}>12</Text>
                  <IcoMoonIcon name="fenxiang" size={17} color='#F9945C' style={{marginLeft:20}}/>
                </View>
            </View>
        </Component>
      );
    }
  }

  const styles = StyleSheet.create({
        container: theme => ({
            backgroundColor: 'white',
            paddingVertical:10
        }),
        head:{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal:10
        },
        contentContainer: {
            flex: 1,
            justifyContent: 'center',
            paddingLeft:10,
            position:'relative',
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
            color:'rgba(56, 56, 56, 1)',
            marginRight:20,
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
            color:'rgba(153, 153, 153, 1)',
            marginTop:4
        },
        describe:{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop:5,
            marginBottom:15
        },
        desItem:{
            backgroundColor:'rgba(249, 146, 89, 0.1)',
            fontSize: 14,
            height:20,
            lineHeight:20,
            marginRight:10,
            color:'#F99259',
            paddingLeft:5,
            paddingRight:5,
        },
        content:{
            color:'rgba(153, 153, 153, 1)',
            ...Platform.select({
                ios: {
                  fontSize: 15,
                },
                default: {
                  fontSize: 14,
                },
            }),
            lineHeight:20,
            marginTop:10,
            paddingHorizontal:10
        },
        bottom:{
          marginTop:15,
          paddingTop:10,
          borderTopColor:'#DCDCDC',
          borderTopWidth:1 / PixelRatio.get(),
          alignItems:'center',
          flexDirection:'row',
          paddingHorizontal:10
        },
        rowHead:{
          borderBottomColor:'#DCDCDC',
          borderBottomWidth:1 / PixelRatio.get(),
          paddingBottom:10,
          marginBottom:8,
          paddingHorizontal:10
        }
  })
  
  export default HomeItem;