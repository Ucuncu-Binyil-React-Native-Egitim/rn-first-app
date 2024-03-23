import Ders1 from './src/screens/Ders1';
import Ornek1 from './src/components/Ornek1';
import { TextInput, View } from 'react-native';
import StateNedir from './src/components/StateNedir';
import Alistirma1 from './src/screens/Alistirma1';
// import Home from './src/screens/Home';

const App = () => {
  return (
  <View>
    {/* <Home />
    <Ders1 
      buttonTitle="1. Buton" 
      placeholderText="1. metin girme alanı"
      bacgroundColor="red"
      placeholderTextColor="white"
    />
    <Ornek1 text1="özgür bunu yapar" text2="sdalkn" text3="fsghdfj" text4="ali haydar"/> 
    <StateNedir />*/}
    <Alistirma1 />
  </View>
  );
}

export default App
