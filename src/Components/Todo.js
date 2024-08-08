import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import React, { useState } from 'react';
import "./Todo.css"
 
const Todo = () => {


    const [todo, setTodo] = useState("")
   
    const addTodo = async (e) => {
        if (!todo){
            return alert('pls enter your todo for the day')
        }
        e.preventDefault();  
    
       
        try {
            const docRef = await addDoc(collection(db, "todos"), {
              todo: todo,    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
 
    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Todo-App
                </h1>
   
                <div>
   
                    <div>
                        <input
                            type="text"
                            placeholder="What do you have to do today?"
                            onChange={(e)=>setTodo(e.target.value)}
                        />
                    </div>
   
                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            onClick={addTodo}
                        >
                            Submit
                        </button>
                    </div>
   
                </div>
   
                <div className="todo-content">
                    ...
                </div>
            </div>
        </section>
    )
}
 
export default Todo