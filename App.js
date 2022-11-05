import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View  } from 'react-native';
import { useState } from 'react';
//hooks do react

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState([])

  const capturarTexto = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)
  }

  const adicionarLembrete = () => {
    setLembretes([lembrete, ...lembretes])
  }

  return (
    <View>
      <View style={{padding: 40}}>
        <TextInput 
          style={{borderBottomColor: '#888', borderBottomWidth: 1, padding: 12, marginBottom: 4}}
          placeholder="Lembrar..."
          onChangeText={capturarTexto}
          value={lembrete}
        />
        <Button 
          title="OK"
          onPress={adicionarLembrete}
        />
      </View>
      <View>
        <Text>{lembretes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
