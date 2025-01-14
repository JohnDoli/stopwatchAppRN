import { Link } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";

interface TaskProps {
    text: string;
}

const Task: React.FC<TaskProps> = (props) => {
    
    return (
        <Link href="/about" asChild>
            <TouchableOpacity onPress={() => console.log('Item clicked')}>
                <View style={styles.item}>
                    <Text style={styles.itemTime}>{props.text}</Text>
                    <Text style={styles.itemName}>untitled</Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    itemName: {
        fontSize: 16,
        fontWeight: "semibold",
        fontFamily: "monospace, sans-serif",
    },
    itemTime: {
        fontSize: 24,
        fontWeight: "normal",
        fontFamily: "monospace, sans-serif",
    },
});

export default Task;