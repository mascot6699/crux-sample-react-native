import React, { Component } from "react";
import { StyleSheet, Text, View, Button} from "react-native";

import { encryption } from "@cruxpay/js-sdk/dist/cruxpay-sdk"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'default value'
    }
  }

  async testCrux() {
      console.log("uuuuuuuuuuuuuuu")
      console.log(encryption)
      let encryptJSON = encryption.Encryption.encryptJSON;
      let decryptJSON = encryption.Encryption.decryptJSON;
      encryptJSON({'test':'test1'}, 'foo')
          .then((encryptedValue)=>{
              console.log(encryptedValue);
              decryptJSON(encryptedValue.encBuffer, encryptedValue.iv, 'foo').then((decryptedValue)=>{
                  console.log(decryptedValue);
              })
          }).catch((err) => {
          console.log(err.errorCode);
          console.log(err.message);
      })
  }

  componentDidMount() {
    this.testCrux().then(res => {
      console.log('hello');
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
          <Text>
              {this.state.data}
          </Text>

      </View>
    );
  }
}

export default App;
