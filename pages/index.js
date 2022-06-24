import { useState } from "react"
import DisplayData from "../components/DisplayData"


export default function Home() {

  const [ipAddress, setIpAddress] = useState('');
  const [response, setResponse] = useState(null)

  const handleClick = () => {
    const fetchInfo = async (ipAddress) => {
      try {
          const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=8.8.8.8`);
          const setResponse = await res.json();
      } 
      catch (err) {
          setResponse(err.message)
      }
  }

  }


  return (
    <div>
      <DisplayData response={response && response}/>
        <label>
          <span>ip Address:</span>
          <input 
          type="text"
          onChange={(e) => setIpAddress(e.target.value)}
          value={`${ipAddress}`}
          />
        </label>
        <button onClick={handleClick}>Find</button>
    </div>
  )
}
