import { FlatList, Text } from "react-native"

const MyList = () => {
    const mydata = [1]

    return (
        <FlatList 
            data={mydata}
            renderItem={(a) => <Text style={{fontSize: 48}}>{a.item}</Text>}
            ListHeaderComponent={() => <Text style={{fontSize: 48}}>{mydata.length === 0 ? "" : "Burası header"}</Text>}
            ListFooterComponent={() => <Text style={{fontSize: 48}}>Bura futır</Text>}
            ListEmptyComponent={() => <Text style={{fontSize: 48}}>Nereye geldik la</Text>}
        />
    )
}

export default MyList
