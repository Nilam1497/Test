import * as React from 'react';
import  { useState } from 'react';
import  { useEffect } from 'react';
import axios from 'axios';
import './table.css';



export default function BasicTable() {
  //const [user, setUser] = useState<user | undefined
  const requestOptions={
    method:'post',
    headers: { }
  };
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://set-pp-data-dev-dot-da-sb-poc-dev.nw.r.appspot.com/get-my-suppliers',requestOptions)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);


  return (
    
    <div className="p-2">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Organisation_Logo</th>
         
            <th scope="col">currency</th>
            <th scope="col">domain</th>
            <th scope="col">org_supplier_name</th>
           
            <th scope="col">tier</th>
            <th scope="col">total_contracts</th>
            <th scope="col">total_spend</th>
            <th scope="col">categories</th>
            {/* <th scope="col">spend_breakdown</th> */}
          </tr>


        </thead>
        <tbody>
          {user.map((item,i) => (
            <tr key={i}>
              <th> <img src={item.Organisation_Logo} height='30px'width='70px' alt='logo' /> </th>

              <td>{item.currency}</td>
              <td>{item.domain}</td>
              <td>{item.org_supplier_name}</td>
              <td>{item.tier}</td>
              <td>{item.total_contracts}</td>
              <td>{item.total_spend}</td>    
              <td>     {item.categories.map((c)=>
                  <>{c}</> )}
                 </td>

         {/* <td>{item.spend_breakdown && item.spend_breakdown.map((s)=>(
                  <>
                  <div>
                    {s.id}
                    {s.title}
                    </div>
                  </>   
         ))} </td>    */}     
           </tr>  
          ))}
        </tbody>
      </table>
    </div>
  );
}

