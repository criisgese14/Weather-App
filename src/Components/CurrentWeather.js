import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";

export const CurrentWeather = ({city, country, actualTemp, status, icon, minTemp, maxTemp, humidity, wind}) => {

    const imgHumidity = require('../../assets/humidity.png');
    const imgWind = require('../../assets/wind.png');
    return (
        <View style={styles.weatherContainer}>

                <Text style={styles.city}>{`${city}, ${country}`}</Text>

                <View style= {styles.dataContainer}>

                <View>
                <Text style={styles.actualTemp}> {Math.round(actualTemp)}°ᶜ</Text>
                </View>

                <View>
                <Image style= {styles.iconWeather}source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}}/>
                </View>
                </View>

                <Text style={styles.status}> {status}</Text>

                <View style={{backgroundColor:'rgb(32,43,60)', borderRadius: 10, marginHorizontal: 5, paddingTop: 10}}>
                <Text style={{fontSize: 20, color: 'white', marginLeft: 10, marginBottom: 5}}>Details</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 10}}>
                <View style={styles.detailContainer}>
                <Text style={{color: 'grey'}}>Temp</Text>
                <Text style={styles.temp}> {`Min ${Math.round(minTemp)}°ᶜ`}</Text>
                <Text style={styles.temp}> {`Max ${Math.round(maxTemp)}°ᶜ`}</Text>
                </View>
                <View style={styles.detailContainer}>
                <Text style={{color: 'grey'}}>Humidity</Text>
                <Image source={imgHumidity} style={{width:20, height: 20}}/>
                <Text style={{color: 'white'}} >{humidity}%</Text>
                </View>
                <View style={styles.detailContainer}>
                <Text style={{color: 'grey'}}>Wind</Text>
                <Image source={imgWind} style={{width:20, height: 17}}/>
                <Text style={{color: 'white'}}>{wind} m/s</Text>
                </View>
                </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    weatherContainer: {
        paddingBottom: 10,
    },
    iconWeather: {
        width: 180,
        height: 150
    },
    dataContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    city: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    actualTemp: {
        fontSize: 70,
        color: 'white'
    },
    status: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
        color: 'white'
    },
    // containerMaxMin: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     backgroundColor: 'rgb(54,63,78)',
    //     borderRadius: 20,
    //     paddingHorizontal: 35,
    //     paddingVertical: 15,
    //     marginHorizontal: 10,
    //     width: '30%',
    //     height: '100%'
    // },
    temp: {
        display: 'flex',
        textAlign: 'center',
        color: 'white'
    },
    detailContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(54,63,78)',
        borderRadius: 20,
        padding: 15,
        width: 100,
        height: 85,
    }
  });