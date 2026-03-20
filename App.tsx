import { StyleSheet, View } from 'react-native';
import { useTasksHelper } from './useTasksHelper';



export default function App(): React:ReactNode {

const {
  inputValue,
  setInputValue,
  filteredTasks,
  onSubmitTask,
  deleteToDo,
  toggleTodo,
  displayAll,
  displayCompleted,
  displayActive,
} = useTasksHelper()

  return (
    <View style={styles.container}>

      <Text>Filter:</Text>
      <Button
      testId='filter all'
      text='filter all'
      onPress={displayAll}
      />
      <Button
      testId='filter completed'
      text='filter completed'
      onPress={displayCompleted}
      />
      <Button
      testId='filter active'
      text='filter active'
      onPress={displayActive}
      />

      <FlatList 
      data={filteredTasks}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <Task item={item} deleteToDo={deleteToDo} toggleTodo={toggleTodo}/>}
      />

      <TextInput
      testId='infput for to do'
      placeholder='your task here'
      value={inputValue}
      onChangeText={setInputValue}
      onSubmitEditing={onSubmitTask}
      />
      <Button
      testID='addToDo'
      title='add task'
      onPress={onSubmitTask}
      />



    </View>
  );
}

// - filterTodos(): Filters the to-do list based on the selected filter (All, Active, or Completed).

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
