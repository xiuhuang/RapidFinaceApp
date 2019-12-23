import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import { Avatar,Text } from 'react-native-elements';

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
                        <Text style={StyleSheet.flatten([styles.subtitle, subtitleStyle])}>
                            {subtitle}
                        </Text>
                    </View>
                </View>
                <View style={styles.content}>
                  <View style={styles.contRow}>
                    <Text style={styles.rowName}>领域:</Text>
                    <Text style={styles.rowText}>大数据，科技类，先进制造，企业服务。</Text>
                  </View>
                  <View style={styles.contRow}>
                    <Text style={styles.rowName}>阶段:</Text>
                    <Text style={styles.rowText}>种子，天使，a轮。</Text>
                  </View>
                  <View style={styles.contRow}>
                    <Text style={styles.rowName}>个人简介:</Text>
                    <Text style={styles.rowText}>天使投资人，华盛顿大学访问学者，成都市科技局等多家政府，高校特聘投资人。</Text>
                  </View>
                  <View style={styles.contRow}>
                    <Text style={styles.rowName}>投资案例:</Text>
                    <Text style={styles.rowText}>三角兽、智能一点、图灵传感、汉威激光、壹生智能等。</Text>
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
        head:{
            flexDirection: 'row',
            alignItems: 'center',
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
            color:'rgba(56, 56, 56, 1)'
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
        time:{
            position:'absolute',
            right:0,
            top:0,
            ...Platform.select({
                ios: {
                  fontSize: 15,
                },
                default: {
                  fontSize: 14,
                },
            }),
            color:'rgba(153, 153, 153, 1)'
        },
        describe:{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop:5,
            marginBottom:15
        },
        desItem:{
            backgroundColor:'rgba(0, 160, 233, 0.1)',
            fontSize: 14,
            height:20,
            lineHeight:20,
            marginRight:10,
            color:'rgba(0, 160, 233, 1)',
            paddingLeft:5,
            paddingRight:5,
        },
        content:{
            
        },
        contRow:{
          flexDirection:'row',
          marginTop:5
        },
        rowName:{
          fontSize:14,
          color:'#383838',
          width:68,
        },
        rowText:{
          fontSize:14,
          color:'#666',
          flex:1
        }
  })
  
  export default HomeItem;