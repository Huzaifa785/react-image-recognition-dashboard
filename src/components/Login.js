import React, { useState } from 'react'
import RegisterLoginNavbar from './RegisterLoginNavbar'
import RegisterLoginFooter from './RegisterLoginFooter'
import env from '../settings'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let loginData = await axios.post(`${env.api}/login`, { email, password })
            console.log(loginData)
            if (loginData.data.roleType === "superAdmin") {
                window.localStorage.setItem("app_token",loginData.data.token)
                window.localStorage.setItem("userName",loginData.data.userName)
                window.localStorage.setItem("roleType",loginData.data.roleType)
                history.push("/admin-dashboard")
            }
            if (loginData.data.roleType === "condoOwner" && loginData.data.approved === "yes") {
                window.localStorage.setItem("app_token",loginData.data.token)
                window.localStorage.setItem("userName",loginData.data.userName)
                window.localStorage.setItem("roleType",loginData.data.roleType)
                history.push("/condo-owner-dashboard")
            }
            if (loginData.data.roleType === "condoOwner" && loginData.data.approved === "no") {
                setMessage("Your account is currently waiting for Super Admin's approval!")
            }
            if (loginData.data.roleType === "condoOwner" && loginData.data.approved === "rejected") {
                setMessage("Your account has been rejected by Super Admin!")
            }
        } catch (error) {
            setMessage("Username/Password is incorrect!")
            console.log(error)
        }
    }
    return (
        <>
            <RegisterLoginNavbar />
            <div class="main-content bg-default">

                <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
                    <div class="container">

                    </div>
                    <div class="separator separator-bottom separator-skew zindex-100">
                        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>

                <div class="container mt--8 pb-5">

                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8">
                            <div class="card bg-secondary border-0">
                                <div class="card-body px-lg-5 py-lg-5">
                                    <div class="text-center text-muted mb-4">
                                        <h1>Sign in!</h1>
                                    </div>
                                    <form onSubmit={(e) => {
                                        handleSubmit(e)
                                    }}>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                                </div>
                                                <input required value={email} onChange={e => setEmail(e.target.value)} class="form-control" placeholder="Email" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input required value={password} onChange={e => setPassword(e.target.value)} class="form-control" placeholder="Password" type="password" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <h4 className="text-center">{message}</h4>
                                        </div>
                                        <div class="text-center">
                                            <input type="submit" class="btn btn-primary mt-4" value="Login" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RegisterLoginFooter />
        </>
    )
}

export default Login
