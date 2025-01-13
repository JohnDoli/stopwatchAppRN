import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, Pressable, Button } from "react-native";
import Task from './components/task';

export default function Index() {
  return (  
    <View style={styles.container}>

      <View style={styles.topBar}>
        <Pressable onPress={() => console.log('Menu clicked')}>
          <Ionicons name="menu" size={24} color="black" />
        </Pressable>

        <Text style={styles.heading}>your time</Text>

        <Pressable onPress={() => console.log('Plus clicked')}>
          <Ionicons name="add-outline" size={24} color="black" />
        </Pressable>
      </View>

      <View style={styles.itemsWrapper}>
        <View style={styles.items}>
          <Task text={'00:00:00'}/>
          <Task text={'00:00:00'}/>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  itemsWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  
  
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 64,
    padding: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  heading: {
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