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

  .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .close{
    border: 0;
    background-color: transparent;
    -webkit-appearance: none;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: #e9ecef
    }
  }

  .modal-content {
    height: auto;
    max-height: 500px;
	  width: 600px;
	  background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #ffffff;
    justify-content: flex-start;
  }

  .modal-footer {
    display: flex;
    margin-top: auto;
    padding: 1rem;
    border-top: 1px solid #e9ecef;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    justify-content: flex-end;
  }

  .btn {
    color: #ffffff;
    background-color: #6c757d;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    &:hover{
      background: #e9ecef
    }
  }

  li, ul{
    display: flex;
    flex-direction: column;
    padding: 5px;
    word-wrap: break-word;     
    overflow-wrap: break-word; 
    justify-content: flex-start;
  }

  li {
    text-align: left;
    padding: 10px;
  }

  a{
    font-size: 15px;
  }

  h1, span {
    padding: 5px;
  }
`;
