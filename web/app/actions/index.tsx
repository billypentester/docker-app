'use server'

const backendUrl = process.env.BACKEND_URL

export default async function getTodos() {

    const response = await fetch(`${backendUrl}/todo`)
    const todos = await response.json()

    if(!todos.status) {
        return []
    }
    
    return todos.data
  
}

export async function updataTodoStatus(id: number, isCompleted: boolean) {
    const response = await fetch(`${backendUrl}/todo/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            is_completed: isCompleted
        })
    })
    const todo = await response.json()
    return todo
}

