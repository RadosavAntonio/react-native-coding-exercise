# Problem Statement

Build a React Native To-Do List application with the following functionality:

1. Add a new to-do item.
2. Delete a to-do item.
3. Display the list of to-do items.

# State Management

Use React Native’s state management to manage the to-do list.

The state should include an array of to-do objects where each object has the following structure:

```
{
  id: uniqueId, // A unique ID for each to-do item (can use Date.now())
  text: 'Send email', // The text of the to-do item
}
```

# Functions to Implement

- addTodo(): Adds a new to-do item to the list.
- deleteTodo(): Deletes a specific to-do item by ID.

# Example of what the UI could look like

+-------------------------------------------+
| HL To-Do App                              |
+-------------------------------------------+
| Add a new to-do: [input field]            |
| [Add Button]                              |
+-------------------------------------------+
| To-Do Items:                              |
| - Send email [Delete]                     |
| - Pay phone bill [Delete]                 |
| - Buy apples [Delete]                     |
+-------------------------------------------+
