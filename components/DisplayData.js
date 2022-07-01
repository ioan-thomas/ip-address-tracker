import {DataContainer} from './styles/DisplayData.styled'

export default function DisplayData({response, error}){

    if (error){
        console.log(error);
        return (
            <DataContainer>
                <div className="container">
                    <p className='error'>Please enter a valid IP address (e.g. 8.8.8.8)</p>
                </div>
            </DataContainer>
        )
    }


   return (

    <DataContainer>

        {response && 
        <div className='container'>
            <div className="border info">
                <h6>IP ADDRESS</h6>
                <p>{response.ip}</p>
            </div>
            <div className="border info">
                <h6>LOCATION</h6>
                <p>{`${response.location?.city}`},</p> 
                <p>{`${response.location?.region}, ${response.location?.country}`}</p>
            </div>
            <div className="border info">
                <h6 >TIMEZONE</h6>
                <p>{`UTC ${response.location?.timezone}`}</p>
            </div>
            <div className="info bottom">
                <h6>ISP</h6>
                <p>{response.isp}</p>
            </div>
        </div>
        
    }
        
     </DataContainer>
   )
 }
 