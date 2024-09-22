import React, { useEffect , useState } from 'react'
import axios from 'axios';

export default function User() {
    const [Users, setUser] = useState([])
    const getInfo = async ()=>{
        const {data} = await axios.get('http://localhost:3000/user');
        setUser(data);
    }
    useEffect(()=>{
        getInfo();
    },[]);
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
    </tr>
  </thead>
  <tbody>
    
   {
    Users.map(user =>
        <tr>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
      </tr>
    )
   }
  </tbody>
</table>
  )
}
