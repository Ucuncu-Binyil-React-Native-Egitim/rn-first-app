import { Text, TouchableOpacity, StyleSheet, View, Dimensions, FlatList } from "react-native"

const {width} = Dimensions.get("screen")

const Ders2 = () => {
    const data = [
        { id: '1', title: 'Öğe 1' },
        { id: '2', title: 'Öğe 2' },
        { id: '3', title: 'Öğe 3' },
        { id: '4', title: 'Öğe 3' },
        { id: '5', title: 'Öğe 3' },
        { id: '6', title: 'Öğe 3' },
        { id: '7', title: 'Öğe 3' },
        { id: '8', title: 'Öğe 3' },
        { id: '9', title: 'Öğe 3' },
        { id: '10', title: 'Öğe 3' },
        { id: '11', title: 'Öğe 19' },
        { id: '12', title: 'Öğe 3' },
        { id: '13', title: 'Öğe 3' },
        { id: '14', title: 'Öğe 3' },
        { id: '15', title: 'Öğe 3' },
        { id: '16', title: 'Öğe 3' },
    ];

    
    
    const dokunuldu = (id) => {
        console.log(id)
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.renderItemContainer} onPress={() => dokunuldu(item.id)}>
            <Text style={{fontSize: 48}}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
    },
    renderItemContainer: {
        width,
    },
    button: {
        paddingVertical: 16, 
        paddingHorizontal: 4,
        backgroundColor: "#104194",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize:36, 
        color: "white"
    },
    seperator: {
        height: 1,
        backgroundColor: "#666",
        width 
    }
})


export default Ders2