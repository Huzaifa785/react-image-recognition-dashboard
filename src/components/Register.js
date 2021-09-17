import React, { useState } from 'react'
import RegisterLoginNavbar from './RegisterLoginNavbar'
import RegisterLoginFooter from './RegisterLoginFooter'
import env from '../settings'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [ownerName, setOwnerName] = useState("")
    const [condoName, setCondoName] = useState("")
    const [email, setEmail] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [numberOfUnits, setNumberOfUnits] = useState("")
    const [typeOfProperty, setTypeOfProperty] = useState("")

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${env.api}/register`, {
                username,
                password,
                ownerName,
                condoName,
                email,
                contactNumber,
                country,
                address,
                city,
                numberOfUnits,
                roleType: "condoOwner",
                approved: "no"
            })
            history.push("/")
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
                                                <input value={username} onChange={e => setUsername(e.target.value)} class="form-control" placeholder="Username" type="text" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input value={password} onChange={e => setPassword(e.target.value)} class="form-control" placeholder="Password" type="password" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-single-02"></i></span>
                                                </div>
                                                <input value={ownerName} onChange={e => setOwnerName(e.target.value)} class="form-control" placeholder="Owner Name" type="text" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-building"></i></span>
                                                </div>
                                                <input value={condoName} onChange={e => setCondoName(e.target.value)} class="form-control" placeholder="Condo Name" type="text" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                                </div>
                                                <input value={email} onChange={e => setEmail(e.target.value)} class="form-control" placeholder="Email" type="email" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                                                </div>
                                                <input value={contactNumber} onChange={e => setContactNumber(e.target.value)} class="form-control" placeholder="Contact No." type="tel" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-shop"></i></span>
                                                </div>
                                                <input value={address} onChange={e => setAddress(e.target.value)} class="form-control" placeholder="Address" type="text" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-building"></i></span>
                                                </div>
                                                <input value={city} onChange={e => setCity(e.target.value)} class="form-control" placeholder="City" type="text" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-world-2"></i></span>
                                                </div>
                                                <input value={country} onChange={e => setCountry(e.target.value)} class="form-control" placeholder="Country" type="text" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-building"></i></span>
                                                </div>
                                                <input value={numberOfUnits} onChange={e => setNumberOfUnits(e.target.value)} class="form-control" placeholder="No. of Units In Condo" type="text" required />
                                            </div>
                                        </div>
                                        {/* <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-shop"></i></span>
                                                </div>
                                                <select className="form-control">
                                                    <option value="">Select Type Of Property</option>
                                                    <option value="Co-Op/Condo">Co-Op/Condo</option>
                                                    <option value="Multi-Family">Multi-Family</option>
                                                    <option value="Commercial/Office">Commercial/Office</option>
                                                    <option value="Student Housing">Student Housing</option>
                                                    <option value="Mixed Use">Mixed Use</option>
                                                    <option value="Non-Profit">Non-Profit</option>
                                                    <option value="Industrial">Industrial</option>
                                                    <option value="Senior Living">Senior Living</option>
                                                </select>
                                            </div>
                                        </div> */}
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

export default Register
