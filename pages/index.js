import { useState } from "react"

import dynamic from "next/dynamic";

import DisplayData from "../components/DisplayData"

// styles
import { InputContainer, MainContainer } from "../components/styles/Containers.styled";
import Image from "next/image";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {

  const [ipAddress, setIpAddress] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState([51.505, -0.09])


  const handleClick = () => {

    const fetchInfo = async (ipAddress) => {
      setError(null);
      console.log(ipAddress)
      try {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ipAddress}`);
        console.log('fetching data')
        const data = await res.json();
        setResponse(data)
        setLocation([data.location.lat, data.location.lng])
        console.log(data)
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
    <MainContainer>
      <InputContainer>
        <div>
          <h3>IP Address Tracker</h3>
          <input 
            type="text"
            onChange={onChange}
            value={ipAddress}
            placeholder="Search for any IP address or domain"
            />
          <button onClick={handleClick}>
            <Image src="/icon-arrow.svg" alt="" height='12' width='9'/>
          </button>
        </div>
      </InputContainer>

      <DisplayData response={response} error={error}/>
      <MapWithNoSSR location={location}/>
    </MainContainer>
  )
}
