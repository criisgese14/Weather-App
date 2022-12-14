import { ActivityIndicator, ImageBackground, StyleSheet, Text, View, Image, ScrollView, RefreshControl, FlatList } from 'react-native';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import ForecastCard from './ForecastCard';
import { getForecast, refreshData } from '../Controllers/index';
import { CurrentWeather } from './CurrentWeather';
import Input from './Input';
import WelcomeScreen from './WelcomeScreen';

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

export default function Home(){

    const [data, setData] = useState({});
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    const img = require('../../assets/background.jpg');

    return (
        <ImageBackground style={styles.backgroundImage}>
            <ScrollView
                style={{marginTop: Constants.statusBarHeight}}
                refreshControl={
                    <RefreshControl
                    refreshing={refreshing}
                    onRefresh={() => refreshData(setRefreshing, input2, setData)}/>
                }
            >
            <Input
            input = {input}
            setInput = {setInput} 
            getForecast = {getForecast} 
            setLoading = {setLoading} 
            setData = {setData} 
            setInput2 = {setInput2} 
            setForecast = {setForecast}
            />
            {loading && (
            <View> 
                <ActivityIndicator size={'large'} color='blue'/>
            </View>
            )}
            {data.name ?
              <View style={{marginTop: 10}}>
                <CurrentWeather 
                  city = {data?.name}
                  country = {data?.sys?.country}
                  actualTemp= {data?.main?.temp}
                  status = {data?.weather[0]?.main}
                  icon = {data?.weather[0]?.icon}
                  minTemp = {data?.main?.temp_min}
                  maxTemp = {data?.main?.temp_max}
                  humidity = {data?.main?.humidity}
                  wind = {data?.wind?.speed}
                  />
                <View style={{backgroundColor:'rgb(32,43,60)', marginTop: 30, borderRadius: 10, marginHorizontal: 5}}>
                <Text style={styles.subtitle}>Hourly Forecast</Text>
                <FlatList
                  horizontal
                  data={forecast}
                  style={{borderRadius: 20}}
                  renderItem={( {item} ) => {
                    var dt = new Date(item?.dt * 1000)
                    return(
                      <ForecastCard
                      key={item?.dt}
                      id={item?.dt}
                      hour={dt}
                      temp={item?.main?.temp}
                      icon={item?.weather[0]?.icon}
                      main={item?.weather[0]?.main}
                      />
                      )
                    }}/>
                </View>
              </View> 
              : <WelcomeScreen/>}
            <StatusBar style='dark' />
            </ScrollView>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
    },
    subtitle: {
      fontSize: 20,
      marginTop: 15,
      marginBottom: 10,
      marginLeft: 10,
      color: 'white'
    }
    
  });