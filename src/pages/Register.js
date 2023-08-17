import React,{useState,useEffect} from 'react';
import {Form,Input, message} from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import Spinner from '../components/Spinner';

const Register = () =>{
   const navigate = useNavigate();
   const [loading,setloading] = useState(false);
    //form submit
    const submitHandler = async (values) =>{
        // console.log(values);
        try{
            setloading(true);
            await axios.post("/users/register",values);
            message.success("registration successful");
            setloading(false);
            navigate("/login");
        }
        catch(error){
            setloading(false);
          message.error("invalid username or password");
        }
    }

    //prevent for login user
    useEffect(() =>{
        if(localStorage.getItem("user")){
            navigate("/");
        }
    },[navigate]);
    return (
        <>
        <div className="register-page">
            {loading && <Spinner/> }
          <Form layout="vertical" onFinish={submitHandler}>
            <h1>Register Form</h1>
             <Form.Item label="Name" name="name">
                <Input />
             </Form.Item>

             <Form.Item label="Email" name="email">
                <Input type="email" />
             </Form.Item>

             <Form.Item label="Password" name="password">
                <Input type="password" />
             </Form.Item>
             <div className="d-flex justify-content-between ">
                 <Link to="/login">Already Registered? login</Link>
                 <button className="btn btn-primary">Register</button>
             </div>
          </Form>
        </div>
        </>
    )
}

export default Register