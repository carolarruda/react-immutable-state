import { useState } from "react"
import {initialWorkouts, generateWorkout} from "./Workouts.js"
import "./App.css"
import Workout from "./Workout/Workout.js"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)

  const addNewWorkout = () => {
    const newWorkout = generateWorkout()
    console.log("addNewWorkout:", newWorkout)
    setWorkouts([...workouts,newWorkout])

    // wouldnt be initial cuz i want the new workout along with the other workouts otherwise id get it next to initial all time
  }

  const deleteWorkout = (workout) => {
    console.log("deleteWorkout:", workout)

    const filterWorkout = workouts.filter(item => {
      if(workout !== item) {
        return workout
      }
    })
    setWorkouts(filterWorkout)


  }

  // const completeWorkout = (workout) => {
  //   console.log("completeWorkout:", workout)

  //   const workoutToUpdate = workouts.map((item) => {
  //     if (item === workout) {
  //       return {
  //         ...item,
  //         done: true
  //       }}
  //       else {
  //         return item
  //       }
  //     });
  //     setWorkouts(workoutToUpdate)
  //     }
    
  const completeWorkout = (workout) => {
    console.log("completeWorkout:", workout)
    const updatedWorkouts = workouts.map(item => item === workout ? { ...item, done: !item.done } : item
    )
    setWorkouts(updatedWorkouts)

  }


  

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <ul>
        {workouts.map((workout, index) => {return <Workout
        key= {index}
        completeWorkout={completeWorkout}
        deleteWorkout={deleteWorkout}
        workout={workout} />
        }
   
        )}
      </ul>
      
    </div>
  )
}

export default App
