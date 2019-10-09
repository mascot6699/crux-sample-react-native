import React, { Component } from "react";
import { AsyncStorage as localStorage } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { cruxPay } from "@cruxpay/js-sdk";
// import * as blockstack from "blockstack";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'default value'
    };
    styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }
    });
  }

  componentDidMount(){
    this.testCrux().then(res => {
      alert('hello')
    }).catch(err => {
      alert(err);
    })
  }

  async testCrux() {
    await localStorage.setItem("cruxPay", JSON.stringify({
      hello: "world"
    }));
    let a = await localStorage.getItem("cruxPay");
    this.setState({data: a});
    return a;
  }

  // async cruxInit() {
  //   let cruxClientOptions = {
  //     getEncryptionKey: getPassHashedEncryptionKey,     
  //     walletClientName: 'cruxdev'
  //   }
  //   let cruxClient = new cruxPay.CruxClient(cruxClientOptions);
  //   cruxClient.init()
  //   .then(() => {
  //     console.log('CruxClient initialized');
  //   }).catch((err) => {
  //     console.log('CruxClient error', err);
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        {/* <Text>{this.state.data}</Text> */}
      </View>
    );
  }
}

export default App;
