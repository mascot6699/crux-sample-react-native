import 'react-native-get-random-values';
import AsyncStorage from "@react-native-community/async-storage";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button} from "react-native";

// NOTE: this is a dist built from the branch inmemory-cache-ios of js-sdk
import { encryption, CruxClient } from "./cruxpay-sdk";
import {RNLocalStorage, RNLocalStorage1} from "./RNLocalStorage"


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
      data: 'default value',
      data1: '-'
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
          })
          .catch((err) => {
          console.log(err.errorCode);
          console.log(err.message);
      })

      let keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      alert(keys);

      await AsyncStorage.clear()
      let s = new RNLocalStorage1();
      await s.setJSON("payIDClaim", {"identitySecrets":"{\"iv\":\"59ZAnVm5vyC6zIZz\",\"encBuffer\":\"1JstBA1vk8LpSfI9kPlGtWytcAZUbGN51g5E8NA/OVXjSsygdjdceeW0bb/2GbR9qkkq4P7nuP9lCjxbXWcsJaj/0AWUOA82AmZnbP7yUH8ATQwdSgyhUQDGboSVsO2JYFg1tPg2P+kA0jIoRYYGpAlcT8hhEe5jRSp9NBZ2cFWV/z3yDRMZtXHUQtwY/bPenREqBv7iBgwnqWLzrDMoY+KrjOXzUC3BWCByYfj02WkXLq6tQnJyPepCl1OGhpfoDCBgRbrIZ+uJxDp0RrAbp52OSREPaHPF/6oShTm5Pre1ZswBxufqwWMfNARY0wA=\"}","virtualAddress":"yadu007@cruxdev.crux"})
      // s.sync();
      let keys1 = await AsyncStorage.getAllKeys();
      console.log(keys1);
      alert(keys1);

      let cruxClientOptions = {
        getEncryptionKey: () => 'fookey',
        walletClientName: 'cruxdev',
        storage: s
      }
      let data1 = {}
      let cruxClient = new CruxClient(cruxClientOptions);
      cruxClient.init().then(() => {
          console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa init');
          // alert("init done");

          // cruxClient.resolveCurrencyAddressForCruxID('shree_007@cruxdev.crux', 'ethereum').then((iadd) => {
          //     console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa resolved address', iadd);
          //     alert("shree_007@cruxdev.crux + eth => " + JSON.stringify(iadd));
          // }).catch((err) => {
          //     console.log('resolveCurrencyAddressForCruxID errorCode', err.errorCode);
          //     console.log('errorMessage', err.message);
          // })
          // // //
          // cruxClient.getAddressMap().then((addressMap) => {
          //     console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa addressMap', addressMap);
          //     alert("addressMap done" + JSON.stringify(addressMap));
          // }).catch((err) => {
          //     console.log('getAddressMap errorCode', err.errorCode);
          //     console.log('errorMessage', err.message);
          // })

          //
          let newAddressMapping = {
              "bitcoin": {"addressHash": "1HX4KvtPdg9QUYwQE1kNqTAjmNaDG7w82V"},
              "ethereum": {"addressHash": "0x0a2311594059b468c9897338b027c8782398b481"},
              "ripple": {"addressHash": "rpfKAA2Ezqoq5wWo3XENdLYdZ8YGziz48h", "secIdentifier": "5555"},
              "tron": {"addressHash": "TG3iFaVvUs34SGpWq8RG9gnagDLTe1jdyz"}
          }
          cruxClient.putAddressMap(newAddressMapping).then((res) => {
              console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa res', res)

              cruxClient.getAddressMap().then((addressMap) => {
                  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa after change addressMap', addressMap)
                  alert("after change addressMap" + JSON.stringify(addressMap));
              }).catch((err) => {
                  console.log('after getAddressMap errorCode', err.errorCode);
                  console.log('errorMessage', err.message);
                  alert("ERROR after change addressMap" + err.message);
              })

          }).catch((err) => {
              console.log('putAddressMap errorCode', err.errorCode);
              console.log('errorMessage', err.message);
              alert("ERROR putAddressMap" + err.errorCode + err.message);
          })


          // cruxClient.getCruxIDState()
          //     .then((state) => {
          //         console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa state', state)
          //         alert("getCruxIDState done" + JSON.stringify(state));
          //     })
          //     .catch((err) => {
          //     console.log('getCruxIDState errorCode', err.errorCode);
          //     console.log('errorMessage', err.message);
          // })
          //
          // cruxClient.isCruxIDAvailable("shree_007")
          //     .then((state) => {
          //         console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa shree_007@cruxdev.crux is unavailable?', state)
          //         alert("shree_007@cruxdev.crux is unavailable?" + state);
          //     })
          //     .catch((err) => {
          //     console.log('isCruxIDAvailable false errorCode', err.errorCode);
          //     console.log('errorMessage', err.message);
          // })
          //
          // cruxClient.isCruxIDAvailable("shree_100007")
          //     .then((state) => {
          //         console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa shree_100007@cruxdev.crux is available?', state)
          //         alert("shree_100007@cruxdev.crux is unavailable?" + state);
          //     })
          //     .catch((err) => {
          //         console.log('isCruxIDAvailable true errorCode', err.errorCode);
          //         console.log('errorMessage', err.message);
          //     })

          // NOTE: for registering make sure payIDClaim is not set
          // cruxClient.registerCruxID("umang_testa", newAddressMapping)
          //     .then((state) => {
          //           console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa registerCruxID', state)
          //           alert('registerCruxID' + state)
          //     })
          //     .catch((err) => {
          //         console.log('registerCruxID errorCode', err.errorCode);
          //         console.log('errorMessage', err.message);
          //
          //         alert('registerCruxID' + err.errorCode + ' ' +err.message)
          //     })


      })
      .catch((err) => {
        console.log('init errorCode', err.errorCode);
        console.log('errorMessage', err.message);
        return {};
      })

  }

  componentDidMount() {
    this.testCrux().then(res => {
      console.log('hello' + res);
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
