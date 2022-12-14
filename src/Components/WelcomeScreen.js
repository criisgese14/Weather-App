import { View, Text, StyleSheet } from "react-native"

export default function WelcomeScreen () {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> Welcome to my weather app!! </Text>
            <Text style = {styles.subtitle}> To start, search a city in the input</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginVertical: 200,
        marginHorizontal: 10,
        paddingVertical: 30,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 15,
        
    },
    title: {
        fontSize: 25,
        paddingVertical: 5,
        color: 'white'
    },
    subtitle: {
        fontSize: 18,
        paddingVertical: 5,
        color: 'white'
    }
})