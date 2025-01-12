import { useState } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
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
      <View className="flex items-center bg-red-300">
        <Text>{item.title}</Text>

        <View style={styles.container}>
          <Button 
            title="Edit"  
            color="green"
          />
          <Button 
            title="Delete" 
            color="red"
          />
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
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  btn: {
    width: 20,
    height: 20,
    borderRadius: 20,
    cursor: "pointer"
  }
})
