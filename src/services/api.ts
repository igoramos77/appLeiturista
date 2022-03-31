import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import baseURL from './baseURL';

const api = axios.create({
  baseURL: baseURL,
});

export default api;