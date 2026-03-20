export enum DisplayTasks {
  ALL = 'all',
  COMPLETED = 'completed',
  ACTIVE = 'active'
}

export const useTasksHelper = () => {
const [inputValue, setInputValue] = useState<string>('')
const [tasks, setTasks] = useState<Task []>()
const [displayTasks, setDisplayTasks] = useState<DisplayTasks>(DisplayTasks.ALL)

const filteredTasks = tasks.filter((item) => {
  if(
    displayTasks === DisplayTasks.ALL
  ){
    return item
  } else if(displayTasks === DisplayTasks.COMPLETED && item.completed){
    return item
  } else if (
    isplayTasks === DisplayTasks.ACTIVE && !item.completed
  ) {
    return item
  }
})

const onSubmitTask = useCallback(() => {
setTasks([...tasks, {
  id: new Date(),
  text: inputValue,
  completed: false
}])
setInputValue('')
}, [inputValue, tasks])

const deleteToDo = useCallback((id: number) => {
const filteredTasks = tasks.filter((item) => !item.id.includes(id))
setTasks(filteredTasks)
}, [tasks])

const toggleTodo = useCallback((id: string) => {
  const newArrOfTasks = tasks.map((item) => {
    if(item.id === id){
      return {
        id: selectedTask.id,
    text: selectedTask.text,
    completed: !selectedTask.completed
      }
    }
    return item
  })

  setTasks(newArrOfTasks)
}, [tasks])


const displayAll = useCallback(() => {
setDisplayTasks(DisplayTasks.ALL)
}, [tasks])

const displayCompleted = useCallback(() => {
  setDisplayTasks(DisplayTasks.COMPLETED)
}, [tasks])

const displayActive = useCallback(() => {
  setDisplayTasks(DisplayTasks.ACTIVE)
}, [tasks])


return {
  inputValue,
  setInputValue,
  filteredTasks,
  onSubmitTask,
  deleteToDo,
  toggleTodo,
  displayAll,
  displayCompleted,
  displayActive,
}
}