import * as React from 'react';
import {Component} from 'react';  

import { View, Text, Button, Image, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import {  createAppContainer } from "react-navigation";
import SQLite from 'react-native-sqlite-storage';

var db ;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        score: "",
        scores : [{score : "0"}],
    };

        

    SQLite.DEBUG(true);
    SQLite.enablePromise(true);

    db = SQLite.openDatabase(
      {
        name: 'OnePunch',
        createFromLocation: '~OnePunch.db',
      },
      (DB) => {
        console.log('success opening fineDustLocalDB')
        db = DB;
        callbackAftDb();
      },
      error => {
        console.error(error);
      }
    );

    console.log("first"+this.state.scores[0]);



    function callbackAftDb() {
      let createQuery = '';
      let selectQuery = '';

     

      ExecuteCreateQuery = (sql, params = []) => new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(sql, params, (trans, results) => {
            resolve(results);
            console.log("table created");
          },
            (error) => {
              reject(error);
              console.error(error);
            });
        });
      });
  
      ExecuteInsertQuery = (sql, params = []) => new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(sql, params, (trans, results) => {
            resolve(results);
            console.log("insert complete");
          },
            (error) => {
              reject(error);
              console.error(error);
            });
        });
      });

      try {
        createQuery = ExecuteCreateQuery("create table if not exists records (id INTEGER primary key AUTOINCREMENT not null , score INTEGER, reg_dt INTEGER);",[]);
      }
      catch(err) {
        console.log("table create failed");
      }

      

    }

    
    
  }
 
  
  
  componentDidMount(){
    

    
  }

  ExecuteSelectQuery = (sql, params = []) => new Promise((resolve, reject) => {
   
  });

 

  test = () => {
    console.log("test");
   // let selectQuery = ExecuteSelectQuery("select * from records;",[]);
    db.transaction((trans) => {
      trans.executeSql("select * from records;", [], (trans, results) => {
        const rows = results.rows;
        
        var scorestemp = [];
        for (let i = 0; i < rows.length; i++) {
          
          scorestemp.push({
            ...rows.item(i),
          });
          console.log("here"+ scorestemp[i].score);

        }
        console.log("select complete");

        this.setState({...this.state, scores : scorestemp});
        console.log("state?..." + this.state.scores);
        
      },
        (error) => {
          reject(error);
          console.error(error);
        });
      });

  }

  renderScores() {
    return this.state.scores.map((value, index) => {
        return (
            <Text style={{ textAlign: "center" }}>{value.score}</Text>
        )
    })
  }

  render() {
    function insertScore(score) {
      console.log("score : "+score);
      let timestamp = new Date().getTime();
      let insertQuery = ExecuteCreateQuery('INSERT INTO records (score, reg_dt) values (?, ?)', [score, timestamp]);
      console.log("inserted");
    }
       
    
    return (

      

  
      <View style={stylesHome.container}>
        
      
        <View style={stylesHome.item} /*해당 버튼으로 다음 화면 이동, name은 하단 NavigationContainer에 선언*/>
          <Button
            title="next"
            onPress={() => this.props.navigation.navigate('Result')}
          />
           <TextInput
             style={stylesHome.input}
             onChangeText={(score) => this.setState({ score : score })}
             name="scoreInput"
           />
           <Button
             title="insert"
             onPress={() => insertScore(this.state.score)}
           />
            <Button
             title="show"
             onPress={() => this.test()}
           />
           {this.renderScores()}
           
           
          
        </View>
      </View>
      
    )
  }
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
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 
});

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

export default HomeScreen;