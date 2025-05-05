import { Text, View, StyleSheet
} from "react-native";

const About = () => {
    return (
<View style={ styles. container}>
    <Text>Tes About</Text>

</View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default About;