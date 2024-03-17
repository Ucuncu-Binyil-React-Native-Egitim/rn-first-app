import { View, StyleSheet, Dimensions, Button } from "react-native"
import MyImageComponent from "../components/MyImageComponent"

const Home = () => {
    const dinle = () => {
        console.log("müzik çalıyorrrrr !!!")
    }

    const styles = StyleSheet.create({
        container: {  
            flex: 1,
            backgroundColor: "#aaa",
            alignItems: "center",
            justifyContent: "space-around"
        },
    })

    return (
        <View style={styles.container}>
            <MyImageComponent />
            <Button title="Dinlemeye Başla" onPress={dinle} />
        </View>
    )
}

export default Home