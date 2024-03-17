import { View, Image, Text, StyleSheet, Dimensions } from "react-native"

const MyImageComponent = () => {
    const screenWidth = Dimensions.get("screen").width
    const styles = StyleSheet.create({
        container: {  
            flex: 1,
            backgroundColor: "#aaa",
            alignItems: "center",
            justifyContent: "space-around"
        },
        header: {
          alignItems: "center"  
        },
        text: {
            fontSize: 24,
            color: "white",
            fontWeight: "600",
            textAlign: "center",
            width: screenWidth * 0.7,
            paddingBottom: 16
        },
        description: {
            textTransform: "uppercase",
            textAlign: "center"
        },
        image: {
            width: screenWidth - 16,
            alignSelf: "center",
            height: 250,
            borderColor:"blue",
            resizeMode: "stretch",
            borderRadius: 16,
            marginBottom: 16,
        }
    })

    return (
        <View style={styles.header}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://cdn.britannica.com/98/162198-050-6452139D/Radiohead-business-models-British-performers-innovator-Internet-2012.jpg',
                    }}
                />
                <Text style={styles.text}>Radiohead Müzik Grubu</Text>
                <Text style={styles.description}>radiohead müzik grubunu dinlemeyi çok seviyorum çünkü bana hitap ediyor.</Text>
        </View>
    )
}

export default MyImageComponent