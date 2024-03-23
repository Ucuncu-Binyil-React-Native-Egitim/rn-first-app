import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Alistirma1 = () => {
    const [counter, setCounter] = useState(0)
  
    return (
    <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
        <TextInput
            style={{fontSize: 16}}
            placeholder='Metin giriniz'
            onChangeText={(e) => setCounter(e.length)}
        />

        <Text style={{fontSize: 24, textAlign: "center"}}>
            {counter} tane karakter var.
        </Text>
    </View>
  )
}

export default Alistirma1