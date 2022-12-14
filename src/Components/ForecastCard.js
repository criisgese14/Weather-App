import { Image, StyleSheet, Text, View } from "react-native";

export default function ForecastCard ({temp, main, icon, hour}) {
    return (
        <View style={styles.container}>
            <Text style={styles.status}> {hour.toLocaleTimeString()}</Text>
            <Text style={styles.status}> {Math.round(temp)}°C </Text>
            <Image style= {styles.icon}source={{uri: `https://openweathermap.org/img/wn/${icon}@2x.png`}}/>
            <Text style = {styles.status}> {main} </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        backgroundColor: 'rgb(54,63,78)',
        margin: 10,
        borderRadius: 20,
        paddingVertical: 25,
        paddingHorizontal: 30,
    },
    icon: {
        with: 10,
        height: 70
    },
    status: {
        textAlign: 'center',
        color: 'white'
    }
})