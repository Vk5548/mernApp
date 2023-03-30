import React from 'react';

import './GoalList.css';
/*
Now every Functional component also receives props or parameters
@param: props: is an Object which in this case will contain an 
attribute called "goals": React does this job for us
*/
function GoalList(props){
    console.log(props.goals)
    return(
        <ul className='goal-list'>
            {false && <p>/*
            so the data sent here should be output in a dynamic way
            I am guessing there must be some kind of loop here
            Q: how can we get data first here to render the data here
            A: Using props
            Q: how do display data dynamically here our array of data
            A: we can't map plain Js objs here to react; we need jsx here
            Therefore, we use .map(): it iterates over every entry in the array;
            default function provided by js
            */</p>}

            {props.goals.map(goal => {
                return <li key={goal.id}>{goal.text}</li>
            })}
       
      </ul>
    );
};

export default GoalList;