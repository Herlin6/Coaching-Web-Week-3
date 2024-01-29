import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [product,setProduct] = useState([])
  const fetchData = async()=>{
    const res = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME')
    setProduct(res.data)
  }

  useEffect(()=>{
    fetchData();
  },[])
  
  return (
    <div align="center">
      <h1>Cat Photos</h1>
      {product.map((data, i)=>(
        <div key={i}>
          <table>
            <tr>
              <td>
                <img src={data.url}/><br/>
              </td>
              <td>
              Height:{data.height}<br/>
              Width: {data.width}<br/>
              id: {data.id}<br/>
              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  )
}

export default App