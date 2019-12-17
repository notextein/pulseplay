import AsyncStorage from '@react-native-community/async-storage';

const responseModel = success => {
  return { success: success };
};

const storage = {
  removeKey: async (key, callback) => {
    try {
      await AsyncStorage.removeItem(key);
      callback(responseModel(true));
    } catch (exception) {}
  },
  getValue: async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      return null;
    }
  },
  addKey: async (key, value, callback) => {
    try {
      await AsyncStorage.setItem(key, value);
      callback(responseModel(true));
    } catch (e) {
      callback(responseModel(false));
    }
  }
};

export default storage;
