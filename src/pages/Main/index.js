import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactLoading from 'react-loading';
import Header from './components/Header';
import { Container, Form } from './styles';
import Table from './components/Table';
import axios from 'axios';

const Main = () => {
  const [urls, setUrl] = useState([]);
  const [inputUrl, setInputUrl] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false)

  async function handleSearch (e) {
    if (inputUrl === "") return;
    e.preventDefault()
    setIsloading(true)
    setError(false)
    try {
      const result = await axios.post('https://cors-anywhere.herokuapp.com/https://s6lcxof4pj.execute-api.us-east-1.amazonaws.com/dev/list-pages', 
      {"url": `${inputUrl}`})
      if (result.data.length === undefined) {
        setIsloading(false)
        setError(true)
        return ;
      } else {
        setUrl(result.data)
      }
    } catch (error) {
      console.log(error)
    }
    setIsloading(false)
  }

  return (
    <>
      <Header />
      <Container>
        <div className="content">
        <Form
          withError={error}
          onSubmit={(e) => handleSearch(e)}
          accept-charset="ISO-8859-1"
        >
          <input
            type="text"
            placeholder="URL"
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <button type="submit">
              SEARCH
          </button>
        </Form>
          {isLoading ? (<ReactLoading type= "spin" color= "#000000"/>) : ("")}
          <Table urls={urls} />
        </div>
      </Container>
    </>
  );
};

export default Main;
