import AsyncStorage from "@react-native-community/async-storage";
import {storage} from "./cruxpay-sdk"

const MEMORY_KEY_PREFIX = '@CruxPay:';
let dataMemory = {};

export class RNLocalStorage extends storage.StorageService {

    setItem = async (key, value) => {
        // AsyncStorage.setItem(MEMORY_KEY_PREFIX + key, value);
        dataMemory[key] = value;
        return Promise.resolve(dataMemory[key]);
    }

    getItem = async (key) => {
        return Promise.resolve(Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined);
    }

    // static sync(callback) {
    //     AsyncStorage.getAllKeys((errKeys, keys) => {
    //         if (errKeys) return callback(errKeys, null);
    //         const memoryKeys = keys.filter((key) => key.startsWith(MEMORY_KEY_PREFIX));
    //         AsyncStorage.multiGet(memoryKeys, (err, stores) => {
    //             if (err) return callback(err, null);
    //             stores.map((result, index, store) => {
    //                 const key = store[index][0];
    //                 const value = store[index][1];
    //                 const memoryKey = key.replace(MEMORY_KEY_PREFIX, '');
    //                 dataMemory[memoryKey] = value;
    //                 return undefined;
    //             });
    //             callback(null, 'SUCCESS');
    //             return undefined;
    //         });
    //         return undefined;
    //     });
    // }
}


// LocalStorage service implementation
export class RNLocalStorage1 extends storage.StorageService {


    setItem = async (key, value) => {
        return AsyncStorage.setItem(key, value);
    }

    // @ts-ignore
    getItem = async (key) => {
        return AsyncStorage.getItem(key);
    }
}
