import AsyncStorage from '@react-native-async-storage/async-storage';


export const getUserConstants = async (user:string):Promise<string|null> => {
    try {
        const value = await AsyncStorage.getItem(user);
        return value
    } catch (e) {
        console.log(e)
        return null
    }
}

export const storeData = async (key:string,value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

export const removeData = async (key:string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
};