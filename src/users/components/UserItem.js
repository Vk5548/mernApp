import React from "react";

//importing css
import './UserItem.css';

//importing components
import Avatar from '../../shared/components/UIElements/Avatar';

function UserItem(props){
    //returning list all the item for every user
    return(
        <li className="user-item">
            <div className="user-item__content">
                <div className="user-item__image">
                    <Avatar />
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                </div>
            </div>
        </li>
    );
};

export default UserItem;