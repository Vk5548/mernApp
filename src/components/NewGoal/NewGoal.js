//always have to do that else can't use JSX
import React from 'react';

import './NewGoal.css';

//In Js, we can create functions in functions
function NewGoal (props) {
    //arrow function
    //event automaticallky passed by the react
    const addGoalHandler = (event) => {
        //prevents any request to the server in the background
        // event.preventDeafult();

        const newGoal = {
            id: Math.random().toString(),
            text: 'My new Goal!'
        };
        //Now, I can call the function in the parent component
        //console.log(newGoal)
        props.onAddGoal(newGoal);
    }

    //return the JSX element
    return (
        //return a JSX element 
        //In regular html <input /> could't have been a self-closing
        //but in JSX it has to be that way
        //Here, we could have something like: onSubmit={()=> {}}; but instead
        <form className='new-goal' onSubmit={addGoalHandler}>
            <input type="text"/>
            <button type='submit'>Add Goal</button>
        </form>
    );
};

export default NewGoal;
