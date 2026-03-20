import { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TaskItem } from './App'

interface Props {
  item: TaskItem
  deleteToDo: (id: string) => void
  toggleTodo: (id: string) => void
}

// id: number
//   text: string
//   completed: boolean

const TaskInit = ({ item }: Props): React.ReactNode => {
  const {text, completed, id} = item 
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button
testID='deleteTodo'
title='add task'
onPress={deleteToDo(id)}
/>
<Button
testID='toggleTodo'
title='add task'
onPress={toggleTodo}
/>
    </View>
  )
}

export const Task = memo(TaskInit)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
