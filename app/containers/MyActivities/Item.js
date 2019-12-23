import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
  PixelRatio,
  Image,
} from 'react-native';
import IcoMoonIcon from '../../assets/icomoon'
import { Text } from 'react-native-elements';
import { isTemplateElement } from '@babel/types';

class HomeItem extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {

      const { 
        data,
        onPress,
        onLongPress,
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
                <Image source={{uri: data.pic}} style={styles.leftImg} />
                <View style={styles.rightCont}>
                  <Text style={styles.title} numberOfLines={2}>{data.name}</Text>
                  <Text style={styles.name}></Text>
                  <View style={styles.bottom}>
                    <IcoMoonIcon name="shijian" size={12} color="#999" style={{marginRight:4}}/>
                    <Text style={styles.time}>{data.time}</Text>
                    <IcoMoonIcon name="chengshidingwei" size={12} color="#999" style={{marginRight:4,marginLeft:12}}/>
                    <Text style={styles.time}>{data.address}</Text>
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
                padding: 10,
              },
              default: {
                padding: 12,
              },
            }),
            backgroundColor: 'white',
        }),
        row:{
          flexDirection:'row'
        },
        leftImg:{
          width:109,
          height:81,
          marginRight:8
        },
        rightCont:{
          flex:1
        },
        title:{
          fontSize:16,
          color:'#666',
          height:44,
          lineHeight:20,
          fontWeight:'bold'
        },
        name:{
          fontSize:14,
          color:'#666',
        },
        time:{
          fontSize:14,
          color:'#999',
        },
        bottom:{
          flexDirection:'row',
          alignItems:'center'
        }

  })
  
  export default HomeItem;