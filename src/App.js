// functions starting with "use" are called hooks
//which can be used inside only a functional component
import {useState} from 'react';

// importing css
import './App.css';

//importing components
import  GoalList  from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal';
function App() {
  //calling my hook function: passed an array: initial State
  // You can have multiple useState(); and they will be managed independently
  //It returns exactly 2 elements:
  //latest snapchot and how to re-render
  //2nd: function to update the elements
  //using array de-structuring

  //Here, you're using the localStorage API to store the updated state as a 
  //JSON string. You can also retrieve the stored state when the component is 
  //loaded using the getItem method of the localStorage object:

  const [courseGoals, setCourseGoals] = useState(() => {
    const storedGoals = localStorage.getItem('courseGoals');
    return storedGoals ? JSON.parse(storedGoals) : [
      {id: 'cg1', text: 'Finish the Course'},
      {id: 'cg2', text: 'Learn all about the courses main topic'},
      {id: 'cg3', text: 'Help other students Q&A'}
    ];
  });
  //it will be an array and each goal can be a javascript object
  //you can ofcourse create a class or constructor function instead
  //of an array of JSON objects

  // For now, here this is also static data; Later
  //we will get data either from the user using the UI 
  //
  //Here we learned how to send data to a lowe level component 
  //i.e. from App to GoalList in our case


  //CallBack function: is a function that is passed as a prop to a child 
  //component, which the child component can then call to send data or 
  //trigger an action back to the parent component.
  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.concat(newGoal);
      localStorage.setItem('courseGoals', JSON.stringify(updatedGoals));
      return updatedGoals;
    });
      // courseGoals.concat(newGoal))
    //push changes something
    // courseGoals.push(newGoal);
    // console.log(newGoal)
  };

  // All of this converted to React.createElement(...)
  return (
    <div>
      <h2 className='course-goals'>Course Goals</h2>
     {false && <p>/*COMMENT
      Q: So in order to transfer data from one component to other :
      A: 1: using props or (Attributes)
      "goals" here is a prop. 
      Q: Now when we use "{}" in JSX(JAvascript XML) syntax
      A: It means that we want to integrate something from Javascript(Js)
      VALID : we are just pointing to Js object; <GoalList goals={courseGoals}/> 

      Q: Now , we want the data from NewGoal to parent i.e App
      A: you still do it with props; But we need a callback Function
      */</p>} 
      <NewGoal onAddGoal={addNewGoalHandler}/> 
      <GoalList goals={courseGoals}/> 
    </div>
  )
  };
export default App;

// EVen tafter the new goal entry being added to the list, it is not rendered.
//React does not re-render; Instead we tell React when to: using STATES
