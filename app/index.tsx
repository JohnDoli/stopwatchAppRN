import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, Pressable, Button } from "react-native";

export default function Index() {
  return (  
    <View style={styles.container}>
      <Pressable onPress={() => console.log('Menu clicked')}>
        <Ionicons name="menu" size={24} color="black" />
      </Pressable>
      <Text style={styles.text}>your time</Text>
      <Pressable onPress={() => console.log('Plus clicked')}>
        <Ionicons name="add-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 64,
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  text: {
    fontSize: 24,
    fontWeight: "normal",
    fontFamily: "monospace, sans-serif",
    textAlign: "center",
  },
  iconButton: {
    height: 32,
    width: 80,
    color: "black",
    justifyContent: "center",
  },
});