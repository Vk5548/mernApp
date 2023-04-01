//always have to do that else can't use JSX
import React, {useState} from 'react';

import './NewGoal.css';

//In Js, we can create functions in functions
function NewGoal (props) {
    //new variable
    //Now a couple things:
    //1: we can not reset it , bcz even if we do it woukdn't be
    // reflected as we are not re-rendering anything.
    //Inorder to do that, we are using : useState instead of a variable
    //---let enteredText = '';
    const [enteredText, setEnteredText] = useState(''); // only initial state initially




    //arrow function
    //event automaticallky passed by the react
    const addGoalHandler = (event) => {
        //prevents any request to the server in the background
        //-- event.preventDeafult();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };
        //resetting the input text
        //Similarly we will use function here to reset the value
        //--- enteredText = '';
        setEnteredText(''); 

        //Now, I can call the function in the parent component
        //--- console.log(newGoal)
        props.onAddGoal(newGoal);
    }

    //when text is changed
    const textChangeHandler = event => {
        //Now instead of this, we will use set function to set the useState variable
        //--- enteredText = event.target.value;
        //Work of this type of function is to re-render when the state a.k.a. value
        //changes
        setEnteredText(event.target.value) 

    };


    //return the JSX element
    return (
        //return a JSX element 
        //In regular html <input /> could't have been a self-closing
        //but in JSX it has to be that way
        //Here, we could have something like: onSubmit={()=> {}}; but instead
        <form className='new-goal' onSubmit={addGoalHandler}>
            <input type="text" onChange={textChangeHandler}/>
            <button type='submit'>Add Goal</button>
        </form>
    );
};

export default NewGoal;
