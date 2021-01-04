import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './src/DetailScreen';
import ResultScreen from './src/ResultScreen';


function HomeScreen({ navigation }) {
 
    
  return (
    <View style={stylesHome.container}>
     
      <View style={stylesHome.item}>
        //해당 버튼으로 다음 화면 이동, name은 하단 NavigationContainer에 선언
        <Button
          title="next"
          onPress={() => navigation.push('Result')}
        />
      </View>
    </View>
    
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        //여기에 신규 화면 추가, import도 해줘야함
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const stylesHome = StyleSheet.create({
  container: {
    width : "100%",
    height : "100%",
    flex: 1,
    flexDirection: 'column', 
  }, 
  item: {
    width : "100%",
    height : "10%",
    flexDirection: 'column',
  },
 
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

export default App;