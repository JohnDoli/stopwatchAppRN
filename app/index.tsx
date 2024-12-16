import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, Pressable } from "react-native";

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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  text: {
    fontSize: 20,
    fontWeight: "medium",
    textAlign: "center",
  },
});