import {api_key, baseUrl} from '@env';
import axios from 'axios';
const { Alert } = require("react-native");


const getCurrentForecast = async (setLoading, setData, setInput2, setInput, input) => {
    try { 
      setLoading(true);
      const data = await axios.get(`${baseUrl}/data/2.5/weather?q=${input}&units=metric&appid=${api_key}`);
      setData(data.data);
      setInput2(input);
      setLoading(false);
      setInput(''); 
    } catch (error) {
      console.log(error);
      Alert.alert('The city does not exist');
      setLoading(false);
    };
  };

  const getHourlyForecast = async (setForecast, input) => {
    try {
        const data = await axios.get(`${baseUrl}/data/2.5/forecast?q=${input}&units=metric&appid=${api_key}`)
        setForecast(data.data.list);
    } catch (error) {
        console.log(error.response.data.cod, error.response.data.message);
    };
  };

  export const getForecast = async (setLoading, setData, setInput2, setInput, setForecast, input) => {
    await getCurrentForecast(setLoading, setData, setInput2, setInput, input);
    await getHourlyForecast(setForecast, input);
  }

  export const refreshData = async (setRefreshing, input2, setData) => {
    try {
        setRefreshing(true);
        const data = await axios.get(`${baseUrl}/data/2.5/weather?q=${input2}&units=metric&appid=${api_key}`);
        setData(data.data);
        setRefreshing(false);
    } catch (error) {
        console.log(error);
        Alert.alert('no se pudo actualizar');
        setRefreshing(false);
    };
  };