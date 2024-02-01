import React from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axiosInstance from './helpers/axiosInstance'
import { useState } from 'react'
import STYLE from "./Signup.module.css"
const Teacher = () => {
  let navigate = useNavigate()
        let [teacherData, setTeacherData] = useState({
                teacherName: "",
                email: "",
                password: "",
                phone: "",
                gender: ""
        })

        let tdata = (e) => {
                setTeacherData({ ...teacherData, [e.target.name]: e.target.value })
        }
        let handleTeacherSignup = (e) => {
                e.preventDefault();
                try {
                        axiosInstance.post("/users/save", teacherData)
                        navigate("/login")
                        toast.success(`user ${teacherData.teacherName} Signuped successfully !`)
                }
                catch (err) {
                        console.log(err);
                        alert("Fill the details properly")
                }
        }
  return (
    <>
      <div  className={STYLE.formholder}>
                        <form action="" onSubmit={handleTeacherSignup} className={STYLE.form}>
                                <h2>STAFF SIGNUP</h2>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="username">Username </label>
                                        <input type="text" id='username' name='userName' onChange={tdata} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="email">Email </label>
                                        <input type="email" id='email' name='email' onChange={tdata} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id='password' name='password' onChange={tdata} />
                                </div>
                                <div className={STYLE.formitems} >
                                        <label htmlFor="phone">Phone</label>
                                        <input type="number" id='phone' name='phone' onChange={tdata} />
                                </div >
                                        <label htmlFor="gender">Gender</label>
                                <div className={STYLE.formitems}>
                                        <div>
                                                Male:  <input type="radio" name='gender' value={"male"} onChange={tdata} />
                                        </div>
                                        <div>
                                                Female : <input type="radio" name='gender' value={"female"} onChange={tdata} />
                                        </div>
                                </div>
                                <button className={STYLE.signup}>Signup</button>
                        </form>
                </div>
    </>
  )
}

export default Teacher
