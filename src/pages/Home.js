import React from 'react';


export default function Home() {


  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scopr="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
        <button className="btn btn-primary mx-2">View</button>
        <button className="btn btn-outline- tertiary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
        </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>
        <button className="btn btn-primary mx-2">View</button>
        <button className="btn btn-outline- primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
        </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>
        <button className="btn btn-primary mx-2">View</button>
        <button className="btn btn-outline- primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
        </div>
        </div>
  )
}
