import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    align-items: center;

`

export const InputContainer = styled.div`
    
    width: 100%;
    padding: 26px 24px 24px 24px;
    background-color: #494AA8;
    background-image: url('Pattern-bg.png');
    background-size: cover;
    min-height: 300px;

    h3{
        color: white;
        margin: 0;
        font-size: 26px;
        font-weight: 500;
        padding-bottom: 29px;
    }

    button {
        border: none;
        height: 58px;
        width: 58px;
        border-radius: 0 15px 15px 0;
        background-color: black;
        align-self: flex-end;

        &:hover{
            background-color: #3f3f3f;
        }
    }

    input[type=text]{
        width: calc(100% - 58px);
        border: none;
        height: 58px;
        border-radius: 15px 0 0 15px;
        font-size: 18px;
        padding-left: 24px;

    }

    div {
        max-width: 555px;
        margin: 0 auto;
        text-align: center;
    }

`
