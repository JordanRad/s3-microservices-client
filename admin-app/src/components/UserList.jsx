import React from 'react';
import { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import Navigation from './Navigation';

const UserList = (props) => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        UserService.getUsers()
        .then((response)=>{
            setUsers(response.data)
            console.log(response.data);
        })
        .catch(error=>console.log(error))
    },[])
    
    let userRows = users.map((el)=>{
        return(<div key={el.id} className="text-center row mt-1 mb-1 border-line p-1 ">
                <div className="col-2">
                    {el.firstName}
                </div>
                <div className="col-2">
                    {el.lastName}
                </div>
                <div className="col-2">
                    {el.username}
                </div>
                <div className="col-4">
                    {el.email}
                </div>
                <div id={el.id} className="col-2">
                    <button  
                       
                        className="btn btn-sm btn-success mr-1">
                    Edit</button>

                    <button 
                   
                    className="btn btn-sm btn-danger ml-1">Delete</button>
                </div>

        </div>);
    })
    if(userRows.length ===0){
        return(
            <div>Loading....</div>
        )
    }else{
    return ( 
        <div className="bg-dark-blue text-white h">
            <Navigation/>
            <h2 className="text-center mb-2 pt-2">List Users</h2>
            <button  className ="btn btn-primary btn-lg m-2">Add User</button>
            <div className="col-9 mr-auto ml-auto">
                <div className="text-center row  border-line-bold">
                    <div className="f4 col-2">
                        First Name
                    </div>
                    <div className="f4 col-2">
                        Last Name
                    </div>
                    <div className="f4 col-2">
                        Username
                    </div>
                    <div className="f4 col-4">
                        E-mail Address
                    </div>
                    <div className="f4 col-2">
                        Action
                    </div>
                </div>
                {userRows}
            </div>
        </div>
     );
    }
}
 
export default UserList;