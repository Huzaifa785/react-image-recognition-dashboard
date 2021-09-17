import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CondoApproval = (props) => {
  const [condoList, setCondoList] = useState([])

  useEffect(async () => {
    let condoOwners = await axios.get("http://localhost:4000/condo-approval")
    setCondoList(...condoOwners.data)
  }, [])

  const approveCondo = async (id) => {
    try {
      let user = await axios.post(`http://localhost:4000/approve-condo/${id}`)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const rejectCondo = async (id) => {
    try {
      await axios.post(`http://localhost:4000/reject-condo/${id}`)
      window.location.reload()
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
                  <h6 class="h2 text-white d-inline-block mb-0">Condo Approvals</h6>
                  <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                    <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                      <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                      {/* <li class="breadcrumb-item"><a href="#">Condo Approvals</a></li> */}
                      <li class="breadcrumb-item active" aria-current="page">Condo Approvals</li>
                    </ol>
                  </nav>
                </div>
                <div class="col-lg-6 col-5 text-right">
                  <Link to="/approved-condos" class="btn btn-sm btn-neutral">Approved Condos</Link>
                  <Link to="/rejected-condos" class="btn btn-sm btn-neutral">Rejected Condos</Link>
                  <Link to="/condo-approval" class="btn btn-sm btn-neutral">Pending Condos</Link>
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
                  <h3 class="mb-0 text-yellow">Pending Condos</h3>
                </div>

                <div class="table-responsive">
                  <table class="table align-items-center table-dark table-flush">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col" class="sort text-light" data-sort="name">Owner Name</th>
                        <th scope="col" class="sort text-light" data-sort="budget">Condo name</th>
                        <th scope="col" class="sort text-light" data-sort="completion">Number Of Units</th>
                        <th scope="col" class="sort text-light" data-sort="status">Status</th>
                        <th scope="col" class="sort text-light" data-sort="action">Action</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody class="list">
                      {
                        condoList.map((condo) => {
                          return <tr>
                            <td>
                              {condo.ownerName}
                            </td>
                            <td>
                              {condo.condoName}
                            </td>
                            <td>
                              {condo.numberOfUnits}
                            </td>
                            <td>
                              <span class="badge badge-dot mr-4">
                                <i class="bg-yellow"></i>
                                <span class="status">pending</span>
                              </span>
                            </td>
                            <td>
                              <button className='btn btn-success' onClick={() => approveCondo(condo._id)}>Approve</button>
                              <button className='btn btn-danger' onClick={() => rejectCondo(condo._id)}>Reject</button>
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

export default CondoApproval
