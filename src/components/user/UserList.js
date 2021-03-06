// use user.js to list out the users
//Strech goal to display past and upcoming eatery outings of users/friends
import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { UserCard } from "./User"
import { useHistory } from "react-router-dom" 
import "./User.css"

export const UserList = () => {
  // This state changes when  getUsers()` is invoked below
  const { users, getUsers } = useContext(UserContext)


  // const history = useHistory()
  //useEffect - reach out to the world for something
  useEffect(() => {
    
    console.log("UserList: useEffect - getUsers")
    getUsers()

  }, [])


  return (
    <div className= "users">
    {console.log("UserList: Render", users)}
      <h2>Users</h2>
      
      {
     users.map( user => {
          return <UserCard key={user.id}  user={user} />
        })
      }
    </div>
  )
}