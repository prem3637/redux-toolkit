/* eslint-disable jsx-a11y/alt-text */
import { Button, Col, Row } from "react-bootstrap";
import React from "react";
import DeleteUser from "./DeleteUser";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/UserData";
import { AiFillDelete } from "react-icons/ai";
function UserDetails() {
  const newData = useSelector((state) => state.users);
  const dispatch = useDispatch();


  const addNewUser = (data) => {
    dispatch(addUser(data));
  };

  const removeSingleUser = (id) =>{
    dispatch(removeUser(id))
  }
  return (
    <div className="my-5">
      <Row>
        <Col md={3}></Col>
        <Col md={7}>
          <div className="d-flex justify-content-around">
            <h4>List of user details</h4>
            <Button
              onClick={() => {
                addNewUser(fakeUserData());
              }}
            >
              Add New user
            </Button>
          </div>
          <br />
          {newData && (
            <table className="table text-center" style={{fontSize:14}}>
              <thead>
                <tr>
                  <th>name</th>
                  <th>age</th>
                  <th>birth</th>
                  <th>phone</th>
                  <th>gender</th>
                  <th>country</th>
                  <th>pic</th>
                  <th>address</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {newData.map((item,index)=>{
                  return(
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.birth}</td>
                    <td>{item.phone}</td>
                    <td>{item.gender}</td>
                    <td>{item.country}</td>
                    <td>
                      <img src={item.pic} style={{height:50,width:50,borderRadius:25}}/>
                    </td>
                    <td>{item.address}</td>
                    <td><Button variant="danger" onClick={()=>{removeSingleUser(index)}}>
                      <AiFillDelete />
                      </Button></td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
          )}

          <hr className="mt-4" />
          <DeleteUser />
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}

export default UserDetails;
