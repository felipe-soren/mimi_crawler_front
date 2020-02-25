import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Container } from './styles.js';

const Table = ({ urls }) => {
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", (e)=>{
      console.log(e.target.className)
      if(e.target.className === "modal-bg" || e.target.className === "close") {
        setShowModal(false)
      }
    });
  });

  async function handleElement(e) {
    console.log(files)
    setShowModal(true);
    setIsLoading(true);
    try {
      const result = await axios.post('https://cors-anywhere.herokuapp.com/https://s6lcxof4pj.execute-api.us-east-1.amazonaws.com/dev/list-files-page', 
      {"url": e.target.innerText})
      setFiles(result.data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <>
      <Container>
        {showModal ? (
          <div className="modal-bg">
            {isLoading ? (<ReactLoading type= "spin" color= "#ffffff"/>) :
            (
              <div className="modal-content">
                <div className="modal-header">
                  <h1>Files</h1>
                  <button className="close" onClick={()=> setShowModal(false)}>
                    <span aria-hidden="true">x</span>
                  </button>
                </div>
              <ul>
                {files.length === 0 || files.length === undefined ? (
                <li>
                  No files to display
                </li>) : (
                  files.map(file=> (
                    <li><a target="_blank" rel="noopener noreferrer" href={`${file}`}>{file}</a></li>
                    ))
                )}
              </ul>
              <div className="modal-footer">
                <button className="btn" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
            )}
          </div>
        ) : (
          ""
        )}
        <table>
          {urls.map(url => (
            <tr>
              <td onClick={(e) => handleElement(e)}>{url}</td>
            </tr>
          ))}
        </table>
      </Container>
    </>
  );
};

export default Table;
