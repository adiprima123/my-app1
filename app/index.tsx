import { Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
    const splashTimer = ()=>(
        setTimeout(()=>{
            router.replace("../(tabs)")
        }, 2000)
    )
    useEffect(()=>{ 
        splashTimer()
    })

    return (
            <LinearGradient
                colors={['#292f56', '#008ba0']}
                style={styles.container}
            >
                <Text style={styles.textLogo}>Elearning</Text>
                <Text style={styles.textSubLogo}>Belajar pemrograman semakin mudah</Text>
                <Text style={styles.textSubLogo}>Welcome ADIPRIMA RAHARJA</Text>
            </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogo: {
        fontSize: 80,
        fontWeight: 700,
        color: 'lightblue'
    },
    textSubLogo: {
        color: 'lightblue',
    }
});