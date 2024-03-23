import { View, Button, TextInput, ScrollView } from "react-native"

const Ders1 = (props) => {
    let textInputtakiDeger = ""

    return (
        <View style={{backgroundColor: props.bacgroundColor}}>
            <Button onPress={() => console.log(textInputtakiDeger)} title={props.buttonTitle} />
            <TextInput
                style={{padding: 8}}
                placeholder={props.placeholderText}
                placeholderTextColor={props.placeholderTextColor}
                onChangeText={(deger) => {textInputtakiDeger = deger}}
            />
        </View>
    )
}

export default Ders1