import React, { useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Container } from './styles';

const Table = ({ urls }) => {
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
          <div className="modal-bg" onClick={() => setShowModal(false)}>
            {isLoading ? (<ReactLoading type= "spin" color= "#ffffff"/>) :
            (
              <div className="modal-content">
              <h1>
                Files
              </h1>
              <ul>
                {files.length === 0 ? (
                <li>
                  No files to display
                </li>) : (
                  files.map(file=> (
                    <li><a target="_blank" rel="noopener noreferrer" href={`${file}`}>{file}</a></li>
                    ))
                )}
              </ul>
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
