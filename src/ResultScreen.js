import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ResultScreen({ navigation }) {
  let score = 500;
  let cnt = "blank"; // 결과 내용 변수
  let imgPath = require("../img/blank.png"); //결과 내용 이미지

  //-------------점수 별 결과 값 분기문-------------------------
  if(score>=1 && score <5000){
    cnt ="Test Contents";
    imgPath=require("../img/img1.png");
  } else if (score>=5000 && score <=10000){
    cnt ="Test Contents2222";
    imgPath=require("../img/img2.png");
  }

  //-------------점수별 결과 값 분기 종료 ----------------------
    
  return (
    <View style={stylesHome.container}>
     <View style={stylesHome.item1}>
        <Text style={textStyles.bigBold}>{cnt}</Text>
     </View>
     <View style={stylesHome.item2}>
        <Image source={imgPath} style={{width: "100%", height: "100%"}}/>
        <Text>test</Text>
      </View>
      <View style={stylesHome.item3}>
        <Button
          title="공유하기"
          onPress={() => navigation.navigate('Details')}
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

export default ResultScreen;