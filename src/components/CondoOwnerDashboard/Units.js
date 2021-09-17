import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Units = (props) => {
    const [unitList, setUnitList] = useState([])

    useEffect(async () => {
        let units = await axios.get("http://localhost:4000/units", {
            headers: {
                "Authorization": window.localStorage.getItem("app_token")
            }
        })
        setUnitList([...units.data])
    }, [])
    console.log(unitList)

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
                                    <h6 class="h2 text-white d-inline-block mb-0">Units</h6>
                                    <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                                        <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                                            {/* <li class="breadcrumb-item"><a href="#">Condo Approvals</a></li> */}
                                            <li class="breadcrumb-item active" aria-current="page">Units</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid mt--6">
                    <div class="row">
                        <div class="col">
                            <div class="card bg-default shadow">

                                <div class="card-header bg-transparent border-0">
                                    <h3 class="mb-0 text-yellow">Units</h3>
                                </div>

                                <div class="table-responsive">
                                    <table class="table align-items-center table-dark table-flush">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col" class="sort text-light" data-sort="name">Tenant Name</th>
                                                <th scope="col" class="sort text-light" data-sort="budget">Contact Number</th>
                                                <th scope="col" class="sort text-light" data-sort="completion">Unit Number</th>
                                                <th scope="col" class="sort text-light" data-sort="status">Email</th>
                                                <th scope="col" class="sort text-light" data-sort="action">View Report</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody class="list">
                                            {
                        unitList.map((unit) => {
                          return <tr>
                            <td>
                              {unit.tenantName}
                            </td>
                            <td>
                              {unit.contactNumber}
                            </td>
                            <td>
                              {unit.unitNumber}
                            </td>
                            <td>
                              {unit.email}
                            </td>
                            <td>
                              <button className='btn btn-success'>View Report</button>
                            </td>
                          </tr>
                        })
                      }
                                        </tbody>
                                    </table>
                                </div>

                                <div class="card-footer py-4">
                                    <nav aria-label="...">
                                        <ul class="pagination justify-content-end mb-0">
                                            <li class="page-item disabled">
                                                <a class="page-link" href="#" tabindex="-1">
                                                    <i class="fas fa-angle-left"></i>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link" href="#">1</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">
                                                    <i class="fas fa-angle-right"></i>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Units
