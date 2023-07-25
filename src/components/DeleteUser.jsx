import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux';
import { clearUsers } from '../store/slices/UserData';
// import { clearUsers } from "../store/action";

function DeleteUser() {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={()=>{dispatch(clearUsers())}}>Delete Users</Button>
    </div>
  )
}

export default DeleteUser
