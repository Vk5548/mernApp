import React from "react";


//importing css
import './UsersList.css';
//importing components
import UserItem from "./UserItem";
import Users from "../pages/Users";

function UsersList(props){
    //so two possible branches of JSX code: No users or List of all
    //users; which I will get from props i.e outside of this component
    if(props.items.length === 0){
        return (<div className="center">
            <h2>No Users found.</h2>
        </div>);
    }
    //sending all the data from Users page to UsersItem
    return(
        <ul className="users-list">
            {props.items.map(user => (
                <UserItem
                    key={user.id}
                    id={user.id} 
                    image={user.image} 
                    name={user.name} 
                    placeCount={user.places}
                 />
            ))}
        </ul>
    );
};

export default UsersList;