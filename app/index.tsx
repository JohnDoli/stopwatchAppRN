import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, Pressable, Button } from "react-native";
import TimeItem from './components/timeItem';
import { Stack } from 'expo-router';
import React, { useState } from 'react';



interface HeaderProps {
  onAddItem(): void;
}

function Header({ onAddItem }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => console.log('Menu clicked')}>
        <Ionicons name="airplane" size={24} color="black" />
      </Pressable>

      <Text style={styles.heading}>your time</Text>

      <Pressable onPress={() => {console.log('Plus clicked'); onAddItem();}}>
        <Ionicons name="home" size={24} color="black" />
        <Ionicons name="home" size={24} color="black" />
      </Pressable>
    </View>
  );
}

export default function Index() {
  const [items, setItems] = useState([{ text: '00:00:00' }]);

  const addItem = () => {
    setItems(prevItems => [...prevItems, { text: '00:00:00' }]);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          header: () => <Header onAddItem={addItem} />,
        }}
      />

      <View style={styles.itemsWrapper}>
        {
          items.map((item, index) => {
            return <TimeItem key={index} text={item.text} />
          })
        }
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
    backgroundColor: "#fff",
    maxWidth: "80%",
    alignSelf: "center",
  },
  
  header: {
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