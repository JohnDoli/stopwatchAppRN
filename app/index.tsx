import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, Pressable, Button } from "react-native";
import TimeItem from './components/timeItem';
import { Stack } from 'expo-router';


function AddItem() {
  return (
    console.log('AddItem')
  );
}

function Header() {
  return (
    <View style={styles.topBar}>
      <Pressable onPress={() => console.log('Menu clicked')}>
        <Ionicons name="airplane" size={24} color="black" />
      </Pressable>

      <Text style={styles.heading}>your time</Text>

      <Pressable onPress={() => {console.log('Plus clicked'); AddItem();}}>
        <Ionicons name="pause" size={24} color="black" />
      </Pressable>
    </View>
  );
}

export default function Index() {
  return (  
    <View style={styles.container}>
      <Stack.Screen
        options={{
          header: Header,
        }}
      />

      <View style={styles.itemsWrapper}>
        <View style={styles.items}>
          <TimeItem text={'00:09:11'}/>
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
  items: {
    //style
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
    alignContent: "center",
    userSelect: "none",
  },
});