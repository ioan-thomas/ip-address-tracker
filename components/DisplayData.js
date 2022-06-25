export default function DisplayData({response, error}){

   return (

    <div className="container">
        {response && 
        <>
            <div className="data-container border">
                <h6 className="data-title">IP ADDRESS</h6>
                <h4 className="data">{response.ip}</h4>
            </div>
            <div className="data-container border">
                <h6 className="data-title">LOCATION</h6>
                <h4 className="data">{`${response.location.city}, ${response.location.region}, ${response.location.country}`}</h4>
            </div>
            <div className="data-container border">
                <h6 className="data-title">TIMEZONE</h6>
                <h4 className="data">{`UTC ${response.location.timezone}`}</h4>
            </div>
            <div className="data-container">
                <h6 className="data-title">ISP</h6>
                <h4 className="data">{response.isp}</h4>
            </div>
        </>}
        {error && <p>{error}</p>}

        <style jsx>{`
            .data, .data-title {
                margin: 0;
            }
            .container {
                margin: 1rem
            }
            .data-container {
                padding: 0.25rem
            }
            .border {
                border-right: solid 1px hsl(0, 0%, 59%)
            }
            .container {
                display: flex;
                gap: 1rem
            }
        `}</style>
     </div>
   )
 }
 