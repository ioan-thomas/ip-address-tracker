import styled from "styled-components";

export const DataContainer = styled.div`

    z-index: 5;
    position: absolute;
    margin-top: 9.05rem; 
    
    p, h6 {
        margin: 0;
    }

    h6 {
        font-size: 10px;
        color: #969696;
        padding-bottom: 13px;

    }

    p{
        font-size: 20px;
        color: #2c2c2c;
        font-weight: 500;
    }
    
    .container{
        margin: 0 auto;
        background-color: white;
        text-align: center;
        border-radius: 15px;
    }
    .info {
        padding: 24px 24px 0 24px;
        min-width: 279px;
    }

    .bottom {
        padding-bottom: 24px;
    }

    .error{
        color: red;
    }


    @media only screen and (min-width: 1245px) {

        margin-top: 12rem;

        .border {
            border-right: solid 1px hsl(0, 0%, 59%);
        }

        .container {
            display: flex;
            padding: 37px 32px;
            align-items: center;
        }

        .info {
            padding: 0;
            height: fit-content;
            max-width: 213px;
        }

        h6 {
            font-size: 12px;
            padding-bottom: 13px;
        }
        p{
            font-size: 26px;
            word-break: break-word;
        }

        .bottom {
            padding-bottom: 0;
        }
    }

`
