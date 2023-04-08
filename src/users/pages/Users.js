import React from "react";


//importing components
import UsersList from "../components/UsersList";

function Users() {
    //dummy data: later will be extracted 
    const USERS = [
        {id:'u1', 
    name: 'Vaidehi Kalra', 
    image:'https://randomwordgenerator.com/img/picture-generator/52e3d1454f55ab14f1dc8460962e33791c3ad6e04e507440762a7cd09448c3_640.jpg',
    places: 3
}
];
    //forwarding the data to UsersList to display
    return (<UsersList items={USERS}/>);
};

export default Users; 