import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const AddUnit = (props) => {
    const [tenantName, setTenantName] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [unitNumber, setUnitNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let postData = await axios.post(`http://localhost:4000/add-unit`, {
                tenantName,
                contactNumber,
                unitNumber,
                email,
                password,
                roleType: "tenant",
                approved: "yes"
            }, {
                headers: {
                    "Authorization": window.localStorage.getItem("app_token")
                }
            })
            history.push("/units")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Sidebar />
            <div class="main-content" id="panel">
                <Navbar />
                <div class="header bg-primary pb-6">
                    <div class="container-fluid">
                        <div class="header-body">
                            <div class="row align-items-center py-4">
                                <div class="col-lg-6 col-7">
                                    <h6 class="h2 text-white d-inline-block mb-0">Add Unit</h6>
                                    <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                                        <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                                            <li class="breadcrumb-item"><a href="#">Condo</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">Add Unit</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-3 mt-5">
                    <form onSubmit={(e) => {
                        handleSubmit(e)
                    }}>
                        <input value={tenantName} onChange={e => setTenantName(e.target.value)} style={{ maxWidth: "50%" }} type="text" className="form-control" placeholder="Tenant Name" required />
                        <input value={contactNumber} onChange={e => setContactNumber(e.target.value)} style={{ maxWidth: "50%" }} type="tel" className="form-control mt-3" placeholder="Contact Number" required />
                        <input value={unitNumber} onChange={e => setUnitNumber(e.target.value)} style={{ maxWidth: "50%" }} type="text" className="form-control mt-3" placeholder="Unit Number" required />
                        <input value={email} onChange={e => setEmail(e.target.value)} style={{ maxWidth: "50%" }} type="email" className="form-control mt-3" placeholder="Email" required />
                        <input value={password} onChange={e => setPassword(e.target.value)} style={{ maxWidth: "50%" }} type="password" className="form-control mt-3" placeholder="Password" required />
                        <input type="submit" className="btn btn-primary mt-3" value="Add Unit" required />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddUnit
