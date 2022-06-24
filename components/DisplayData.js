export default function DisplayData({response, error}){

   return (

    <div>
        {response && 
        <>
            <div className="data-container border">
                <h6 className="data-title">IP ADDRESS</h6>
                <h4>{response.ip}</h4>
            </div>
            <div className="data-container border">
                <h6 className="data-title">LOCATION</h6>
                <h4>{`${response.location.city}, ${response.location.region}, ${response.location.country}`}</h4>
            </div>
            <div className="data-container border">
                <h6 className="data-title">TIMEZONE</h6>
                <h4>{`UTC ${response.location.timezone}`}</h4>
            </div>
            <div className="data-container">
                <h6 className="data-title">ISP</h6>
                <h4>{response.isp}</h4>
            </div>
        </>}
        {error && <p>{error}</p>}
     </div>
   )
 }
 