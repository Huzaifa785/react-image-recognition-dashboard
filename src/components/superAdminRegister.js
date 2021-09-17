import React, { useState } from 'react'
import RegisterLoginNavbar from './RegisterLoginNavbar'
import RegisterLoginFooter from './RegisterLoginFooter'
import env from '../settings'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const SuperAdminRegister = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${env.api}/super-admin-register`, {
                username,
                password,
                email,
                roleType: "superAdmin",
            })
        } catch (error) {
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
                                        <h1>Sign up!</h1>
                                    </div>
                                    <form onSubmit={(e) => {

                                        handleSubmit(e)
                                    }}>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-single-02"></i></span>
                                                </div>
                                                <input value={username} onChange={e => setUsername(e.target.value)} class="form-control" placeholder="Username" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input value={password} onChange={e => setPassword(e.target.value)} class="form-control" placeholder="Password" type="password" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                                </div>
                                                <input value={email} onChange={e => setEmail(e.target.value)} class="form-control" placeholder="Email" type="email" />
                                            </div>
                                        </div>                               
                                     
                                        <div class="text-center">
                                            <input type="submit" class="btn btn-primary mt-4" value="Create account" />
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

export default SuperAdminRegister
