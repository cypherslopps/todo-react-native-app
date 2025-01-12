import { useState } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button, StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type Todo = {
  id: string;
  title: string
}

export default function Index() {
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Math.random().toString(),
          title: todo
        }
      ]);
      
      setTodo("");
    }
  }

  const renderItem = ({ item }: { item: { title: string } }) => {
    return (
    <View style={styles.itemsContainer}>
        <Text style={styles.todoTitle}>{item.title}</Text>

        <View style={styles.todoUtilsContainer}>
          <TouchableOpacity 
            style={{
              ...styles.todoUtilsBtn,
              backgroundColor: "teal"
            }}
          >
            <Text>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{
              ...styles.todoUtilsBtn,
              backgroundColor: "red"
            }}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <TextInput 
        placeholder="Add a new todo"
        value={todo}
        onChangeText={setTodo}
        style={styles.input}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList 
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ marginTop: 10 }}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  itemsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 500
  },
  todoUtilsContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 6
  },
  todoUtilsBtn: {
    borderRadius: 20,
    cursor: "pointer",
    padding: 5
  }
})
