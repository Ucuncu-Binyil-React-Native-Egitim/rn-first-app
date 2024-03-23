import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const StateNedir = () => {
    const [state, setState] = useState(1);

    return (
        <View>
            <Text style={{fontSize: 36}}>{state}</Text>
            <Button 
                title="1 Arttır"
                onPress={() => setState(state + 2)}
            />
        </View>
    )
}

export default StateNedir
