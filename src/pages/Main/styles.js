import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 95%;

  .content{
    height: 100%;
    width: 80%;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 900px;
  padding: 5px;
  display: flex;

  input {
    flex: 1;
    width: 70%;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError) ? '2px solid #f00' : 0};
    
    &:focus {
    -webkit-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.20);
    -moz-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.20);
    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.20);
  }
  }
  
  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #6c7ae0;
    color: #FFF;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover{
      background: #1A5276
    }
  }

  `
