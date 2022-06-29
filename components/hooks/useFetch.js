// import { useState, useEffect, useRef } from "react";

// export const useFetch = ipAddress => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
    
//   useEffect(() => {

//     const fetchLocation = async () => {

//       try {
//           setResponse(null);
//           setError(null);
//           const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ipAddress}`);
//           console.log('fetching data')
//           setResponse(await res.json());
//           console.log(x, ipAddress)
//       } 
//       catch (err) {
//         setError(err.message)
//       }

//     }
//     fetchLocation()
//   }, [ipAddress])

//   return {response, error}
// }
