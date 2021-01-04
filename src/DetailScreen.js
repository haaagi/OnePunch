import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function DetailScreen() {
  return (
    <View style={stylesDetail.container}>
    <View style={stylesDetail.item1}>
      <View style={stylesDetail.item2}>
       <Text style={textStyles.bigBold}>1위 : 6000점</Text>
       <Text style={textStyles.bigBold}>2위 : 5000점</Text>
       <Text style={textStyles.bigBold}>3위 : 4000점</Text>
      </View>
    </View>
    
     <View style={stylesDetail.item3}>
       <Button
         title="kakaotalk"
       />
       <Button
         title="insta?"
       />
     </View>
   </View>
  );
}


const stylesHome = StyleSheet.create({
  container: {
    width : "100%",
    height : "100%",
    flex: 1,
    flexDirection: 'column', // 혹은 'column'
  },
  item1: {
    width : "100%",
    height : "15%",
    flexDirection: 'row',
  },
  item2: {
    width : "100%",
    height : "75%",
    flexDirection: 'column',

  },
  item3: {
    width : "100%",
    height : "10%",
    flexDirection: 'column',
  },
 
});

const stylesDetail = StyleSheet.create({
  container: {
    width : "100%",
    height : "100%",
    flex: 1,
    flexDirection: 'column', // 혹은 'column'
  },
  item1: {
    width : "100%",
    height : "60%",
    flexDirection: 'row',
  },
  item2: {
    width : "100%",
    height : "100%",
    flexDirection: 'column',

  },
  item3: {
    width : "100%",
    height : "40%",
    flexDirection: 'column',
  },
 
});
const textStyles = StyleSheet.create({
  
  bigBold: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

export default DetailScreen;