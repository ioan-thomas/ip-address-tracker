import { useState } from "react"
import DisplayData from "../components/DisplayData"


export default function Home() {

  const [ipAddress, setIpAddress] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    const fetchInfo = async (ipAddress) => {
      setError(null);
      console.log(ipAddress)
      try {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ipAddress}`);
        console.log('fetching data')
        const data = await res.json();
        setResponse(data)
      } 
      catch (err) {
        setError(err.message)
      }
  }
    fetchInfo(ipAddress);
  }

  const onChange = (e) => {
    setIpAddress(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>ip Address:</span>
          <input 
          type="text"
          onChange={onChange}
          value={ipAddress}
          />
        </label>
        <button>Find</button>
      </form>
      <DisplayData response={response} error={error}/>
    </div>
  )
}
