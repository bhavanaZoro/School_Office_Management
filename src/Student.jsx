import React from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from './helpers/axiosInstance'
import { useState } from 'react'
import { toast } from 'react-toastify'
import STYLE from "./Signup.module.css"

const Student = () => {
    let navigate = useNavigate()
        let [studentsdata, setStudentsdata] = useState({
                studentName: "",
                email: "",
                password: "",
                phone: "",
                gender: ""
        })

        let sdata = (e) => {
                setStudentsdata({ ...studentsdata, [e.target.name]: e.target.value })
        }
        let handleStudentSignup = (e) => {
                e.preventDefault();
                try {
                        axiosInstance.post("/users/save", studentsdata)
                        navigate("/login")
                        toast.success(`user ${studentsdata.studentName} Signuped successfully !`)
                }
                catch (err) {
                        console.log(err);
                        alert("Fill the details properly")
                }
        }
  return (
    <>
      <div className={STYLE.formholder} >
                        <form action="" onSubmit={handleStudentSignup} className={STYLE.form}>
                                <h2>STUDENT SIGNUP</h2>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="username">Username </label>
                                        <input type="text" id='username' name='userName' onChange={sdata} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="email">Email </label>
                                        <input type="email" id='email' name='email' onChange={sdata} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id='password' name='password' onChange={sdata} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="phone">Phone</label>
                                        <input type="number" id='phone' name='phone' onChange={sdata} />
                                </div>
                                        <label htmlFor="gender">Gender</label>
                                <div className={STYLE.formitems}>
                                        <div>
                                                Male:  <input type="radio" name='gender' value={"male"} onChange={sdata} />
                                        </div>
                                        <div>
                                                Female : <input type="radio" name='gender' value={"female"} onChange={sdata} />
                                        </div>
                                </div>
                                <button className={STYLE.signup}>Signup</button>
                        </form>
                </div>
    </>
  )
}

export default Student
