import React, { Component } from "react";
import { StyleSheet, Text, View, Button} from "react-native";

import { encryption } from "@cruxpay/js-sdk/dist/cruxpay-sdk";
import { CruxClient } from "@cruxpay/js-sdk/dist/cruxpay-sdk";
import {RNLocalStorage} from "./RNLocalStorage"

// import {RNLocalStorage} from "./RNLocalStorage";
// import { BlockstackService } from "@cruxpay/js-sdk/lib/packages/name-service/blockstack-service"

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
      let encryptJSON = encryption.Encryption.encryptJSON;
      let decryptJSON = encryption.Encryption.decryptJSON;
      encryptJSON({'test':'test1'}, 'foo')
          .then((encryptedValue)=>{
              console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa encryptedValue => ', encryptedValue);
              decryptJSON(encryptedValue.encBuffer, encryptedValue.iv, 'foo').then((decryptedValue)=>{
                  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa decryptedValue => ', decryptedValue);
              })
          }).catch((err) => {
          console.log(err.errorCode);
          console.log(err.message);
      })

      // let n = BlockstackService.getAddressMapping("cs1@devcoinswitch.crux").then((a) => {
      //   console.log('CruxClient initialized');
      //   console.log(a);
      // }).catch((err) => {
      //   console.log(err.errorCode);
      //   console.log(err.message);
      // })


      let s = new RNLocalStorage();
      s.setJSON("payIDClaim", {"identitySecrets":"{\"iv\":\"59ZAnVm5vyC6zIZz\",\"encBuffer\":\"1JstBA1vk8LpSfI9kPlGtWytcAZUbGN51g5E8NA/OVXjSsygdjdceeW0bb/2GbR9qkkq4P7nuP9lCjxbXWcsJaj/0AWUOA82AmZnbP7yUH8ATQwdSgyhUQDGboSVsO2JYFg1tPg2P+kA0jIoRYYGpAlcT8hhEe5jRSp9NBZ2cFWV/z3yDRMZtXHUQtwY/bPenREqBv7iBgwnqWLzrDMoY+KrjOXzUC3BWCByYfj02WkXLq6tQnJyPepCl1OGhpfoDCBgRbrIZ+uJxDp0RrAbp52OSREPaHPF/6oShTm5Pre1ZswBxufqwWMfNARY0wA=\"}","virtualAddress":"yadu007@cruxdev.crux"})
      // s.sync();
      //
      let cruxClientOptions = {
        getEncryptionKey: () => 'fookey',
        walletClientName: 'cruxdev',
        storage: s
      }

      let cruxClient = new CruxClient(cruxClientOptions);
      cruxClient.init().then(() => {
          console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa init');

          cruxClient.resolveCurrencyAddressForCruxID('shree_007@cruxdev.crux', 'ethereum').then((iadd) => {
              console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa resolved address', iadd);
          }).catch((err) => {
              console.log('errorCode', err.errorCode);
              console.log('errorMessage', err.message);
          })

          cruxClient.getAddressMap().then((addressMap) => {
              console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa addressMap', addressMap)
          }).catch((err) => {
              console.log('errorCode', err.errorCode);
              console.log('errorMessage', err.message);
          })

      }).catch((err) => {
        console.log('errorCode', err.errorCode);
        console.log('errorMessage', err.message);
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
