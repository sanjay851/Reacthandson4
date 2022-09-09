import React from 'react'
import Navbar from './Navbar'
import './Navbar.css'

export default function Student() {
  return (
    <div>
       <Navbar/>
       <h2 className='stud'>Student Details</h2>
       <button className='btnans'>Add New Student</button>
       <table class="table table-dark table-sm">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <button className='btn btn-primary'>Change</button>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mohan</th>
      <td>24</td>
      <td>full stack</td>
      <td>January</td>
      <button className='btn btn-primary'>Edit</button>
    </tr>
    <tr>
    <th scope="row">Mohan</th>
      <td>24</td>
      <td>full stack</td>
      <td>January</td>
      <button className='btn btn-primary'>Edit</button>
    </tr>
    <tr>
    <th scope="row">Mohan</th>
      <td>24</td>
      <td>full stack</td>
      <td>January</td>
      <button className='btn btn-primary'>Edit</button>
    </tr>
    <tr>
    <th scope="row">Mohan</th>
      <td>24</td>
      <td>full stack</td>
      <td>January</td>
      <button className='btn btn-primary'>Edit</button>
    </tr>
    <tr>
    <th scope="row">Mohan</th>
      <td>24</td>
      <td>full stack</td>
      <td>January</td>
      <button className='btn btn-primary'>Edit</button>
    </tr>
  </tbody>
</table>
    </div>
  )
}