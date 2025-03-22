"use client"
import React, { useEffect, useState } from 'react'
import getTodos, { updataTodoStatus } from '@/app/actions/index'

export default function Home() {

  const [todos, setTodos] = useState<{ id: number, title: string, description: string, is_completed: boolean }[]>([])
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const checked = e.target.checked
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          is_completed: checked
        }
      }
      return todo
    })
    updataTodoStatus(id, checked)
    setTodos(updatedTodos)
  }

  useEffect(() => {
    getTodos()
      .then((todos) => {
        setTodos(todos)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="mt-10">
    <section className="w-1/2 mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-950 py-3">TODO List</h1>
      <div className="flex justify-center items-center space-x-3 p-3">
        <div className="w-full">
          <div className="relative">
            <i className="absolute fa fa-search text-blue-400 top-3 left-4"></i>
            <input type="text" className="border-2 border-blue-400 outline-none h-10 w-full text-xl text-blue-950 px-12 rounded-sm focus:outline-none hover:cursor-pointer" value={search} onChange={(e)=> setSearch(e.target.value)} />
          </div>
        </div>
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:cursor-pointer">
          <i className="fa fa-plus"></i>
        </button> */}
      </div>
      <div className="pb-5 px-5 overflow-y-auto mt-5" style={{ height: '74vh' }}>
        <ul className="space-y-3">
          {
            !loading ?
              todos.length > 0 ?
                todos
                  .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
                  .map((todo) => (
                    <li key={todo.id} className="flex bg-blue-50 rounded-md justify-between items-center p-3 border-b border-gray-300">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id={`todo-${todo.id}`} checked={todo.is_completed} className="mr-3 hover:cursor-pointer w-5 h-5" onChange={(e)=> handleCheckChange(e, todo.id)} />
                          <label htmlFor={`todo-${todo.id}`} className="flex flex-col cursor-pointer">
                            <h1 className={`text-xl font-bold text-blue-900 ${todo.is_completed ? "line-through" : "" }`}>{todo.title}</h1>
                            <p className={`text-gray-800 ${todo.is_completed ? "line-through" : "" }`}>{todo.description}</p>
                          </label>
                        </div>
                        {/* <div className="flex space-x-3">
                          <button className="bg-green-400 text-white py-1 px-3 shadow-2xs rounded-sm hover:cursor-pointer">
                            <i className="fa fa-pen text-xs"></i>
                          </button>
                          <button className="bg-gray-100 text-red-500 py-1 px-3 shadow-2xs rounded-sm hover:cursor-pointer">
                            <i className="fa fa-trash text-xs"></i>
                          </button>
                        </div> */}
                    </li>
                ))
              :
                <p className="text-center text-xl my-5 text-blue-900">Get started by adding a new todo</p>
            :
              <p className="text-center text-xl my-5 text-blue-900">Loading...</p>
          }
        </ul>
      </div>
    </section>
    {/* <button className="fixed bottom-10 right-1/5 bg-blue-500 text-white px-4 py-2 rounded-sm hover:cursor-pointer">
      <i className="fa fa-plus"></i>
    </button> */}
    </div>
  );
}
