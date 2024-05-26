import React, { useState } from "react";
import InputBox from "../Components/UI/InputBox";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import firebase, { auth } from '../../firebase.config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import ReactLoading from 'react-loading';
import { useSelector } from "react-redux";


const Login = () => {
  const {register,handleSubmit}=useForm();
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const totalQuantity = useSelector((s) => s.cart.totalQuantity);
  const login =async(data)=>{
    setLoading(true);
    try{
      const userCredential=await signInWithEmailAndPassword(auth,data.email,data.password);
      const user=userCredential.user;
      toast.success('Successfully Login');
      if(totalQuantity>0){
        navigate('/checkout');
      }else{
      navigate('/');
      }
    }
    catch(e){
      toast.error(e.message);
    }
    setLoading(false);
  }
  return (
    <form onSubmit={handleSubmit(login)}>
    <div className="flex" style={{flexDirection:'column',justifyContent:'flex-start',gap:'50px', padding: "60px 6vw" }}>
      <h2>Login</h2>
      <div className="flex login-card">
        <input
          type="email"
          name="email"
          id="email"
          {...register("email",{required:true})}
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          id="password"
          {...register("password",{required:true})}
          placeholder="Enter your password"
        />
        {
          loading?(  <ReactLoading type='spin' color='white' height={50} width={50} />):
        <button type="submit">Login</button>
        }
        <div style={{ color: "white", fontSize: "14px", fontWeight: "200" }}>
          Don&apos;t have an account?{" "}
          <Link to="/register" style={{ color: "white" }}>
            Create an account
          </Link>
        </div>
      </div>
    </div>
    </form>
  );
};

export default Login;
