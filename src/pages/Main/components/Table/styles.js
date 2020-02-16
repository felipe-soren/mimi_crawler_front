import styled from 'styled-components';

export const Container = styled.div`
padding-top: 30px;
padding-bottom: 30px;
width: 100%;
display: flex;
justify-content: center;

table {
  width: 70%;
  border-collapse:separate;
  border-spacing: 0;
  table-layout:fixed;
}

tr {
  font-size: 15px;
  text-align: left;
  border-radius: 10px;
}

table tr:last-child td{
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

table tr:first-child td{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

th {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  background: #6c7ae0;
  color: #ffffff
}

td {
  background: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  color: #666666;
  border-bottom: 1px solid #f2f2f2;
  word-wrap: break-word;     
    overflow-wrap: break-word; 
  cursor: pointer;
}

td:hover {
  background: #f2f2f2;
}

.modal-bg{
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
    align-items: center;
    justify-content: center;
  }

  .modal-content {
	  height: 700px;
	  width: 600px;
	  background-color: white;
	  text-align: center;
	  position: relative;
    border-radius: 10px;
    background-color: #ffffff;
  }

  li, ul{
    padding: 5px;
    word-wrap: break-word;     
    overflow-wrap: break-word; 
  }

  a{
    font-size: 15px;
  }

  h1 {
    padding: 5px;
  }
`;
