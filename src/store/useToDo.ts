import { create } from 'zustand'

type Todo = {
  todo:{
  id:string
  title:string
  }[],
  setTodo: (todo:{
  id:string
  title:string
  }) => void,
  clearAll:()=>void
  clearone:(id:string)=>void
}

export const usetodo = create<Todo>()((set) => ({
  todo:[],
  setTodo: (newTodo) => set((todos) => ({todo:[...todos.todo,newTodo]})),
  clearAll:()=>set({todo:[]}),
  clearone:(id)=>set((previous)=>({todo:previous.todo.filter((allitem)=>allitem.id !==id)})),
}))

