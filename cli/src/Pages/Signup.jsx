import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import {storage} from '../../firebase.config';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading'

const Signup = () => {
  const {register,handleSubmit,reset}=useForm();
  const [loading,setLoading]=useState();
  const navigate=useNavigate();
  const signup=async(data)=>{
    setLoading(true);
    try{
    const usercredential=await createUserWithEmailAndPassword(auth,data.email,data.password);
    const user=usercredential.user;

    const storageRef=ref(storage,`images/${Date.now()+data.username}`)
    const uploadTask=uploadBytesResumable(storageRef,data.image[0]);
    uploadTask.on(
      'state_changed', 
      (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  },
      error=>{
      toast.error(error.message);
    },async()=>{
      const url=await getDownloadURL(uploadTask.snapshot.ref);
      await updateProfile(user,{
        displayName:data.username,
        photoURL:url
      })
      setLoading(false);
      toast.success("Sign Up Successfull !!");
      navigate('/login');
    })
    }
    catch(e){
     toast.error(e.message);
    }
    reset();
  }
  return (
    <form onSubmit={handleSubmit(signup)}>
    <div className="flex" style={{flexDirection:'column',justifyContent:'flex-start',gap:'50px', padding: "60px 6vw" }}>
      <h2>Signup</h2>
      <div className="flex register-card">
        <input
          type="text"
          name="username"
          id="username"
          {...register("username",{required:true})}
          placeholder="Username"
        />
        <input
          type="text"
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
        <input
          type="file"
          name="image"
          id="image"
          {...register("image",{required:true})}
        />

{
          loading?(  <ReactLoading type='spin' color='white' height={50} width={50} />):
        <button type="submit">Create An Account</button>
        }
        <div style={{ color: "white", fontSize: "14px", fontWeight: "200" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "white" }}>
            Login
          </Link>
        </div>
      </div>
    </div>
    </form>
  )
}

export default Signup