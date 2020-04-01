import Container from "../components/Container/Container.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
const key = "AIzaSyCJsckSxIQ8Ry42DxSvgFEeNp26mXtVDw8";

const Search = () => {
  const [results, setResults] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  useEffect(() => {
    if (searchterm) {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=` +
            key
        )
        .then(x => {
          setResults(x.data.items);
          console.log(results);
        });
    }
  }, [searchterm]);

  let saveHandler=(result)=>{
    console.log(result)
    //pack up data
    const data = {id: result.id, image: result.volumeInfo.imageLinks.thumbnail, title: result.volumeInfo.title, authors: result.volumeInfo.authors, publishedDate: result.volumeInfo.publishedDate, description: result.volumeInfo.description, link: result.volumeInfo.infoLink }
    console.log(data)
    //make api call
    axios.post("/api/books", data).then(x => console.log(x))
  }
  let viewHandler = url => {

    console.log(url)
    window.open(url)}
  return (
    <Container fluid>
      <div className="searchbox text-center px-auto mx-auto">
        <h1 className="text-white text-center">SEARCH PAGE</h1>
        <input
          className="searchbox text-center md-10 sm-10"
          type="text"
          placeholder="Search Books"
          value={searchterm}
          onChange={event => {
            console.log(event.target.value);
            setSearchTerm(event.target.value);
          }}
        />
           <br />
           <br />
        {results.length
          ? results.map((result, index) => {
              return (
                <React.Fragment key={index}>
                    <ul className="list-group px-auto mx-auto">
                    <li className="list-group-item my-2 mx-5 px-5">{result.volumeInfo.imageLinks ?<img src={result.volumeInfo.imageLinks.thumbnail} />:""}</li>
                      <li className="list-group-item my-2 mx-5 px-5">
                        {result.volumeInfo.title}
                      </li>
                      <li className="list-group-item my-2 mx-5 px-5">
                        {result.volumeInfo.authors}
                      </li>
                      <li className="list-group-item my-2 mx-5 px-5">
                        {result.volumeInfo.publishedDate}
                      </li>
                      <li className="list-group-item my-2 mx-5 px-5">
                        {result.volumeInfo.description}
                      </li>
                      <button className="btn btn-info btn-lg mx-5 my-1 px-5"
                      type="btn btn-md"
                      label="view"
                      onClick={() => viewHandler(result.volumeInfo.infoLink)}
                      >View</button>
                      <button
                        className="btn btn-info btn-lg mx-5 my-1 px-5"
                        type="btn btn-md"
                        label="search"
                        // book={this.state.books
                         onClick={() => saveHandler(result)}
                      >
                        <strong>Save</strong>
                      </button>
                    </ul>
                    <br />
                    <br />
                </React.Fragment>
              );
            })
          : ""}
      </div>
    </Container>
  );
};

export default Search;
