import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
//hooks do react


export default function App() {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador + 1) 
  }

  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <Button
        title='incrementar'
        onPress={incrementar}
      />
      <StatusBar style="auto" />
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
