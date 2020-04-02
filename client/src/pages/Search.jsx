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
    // eslint-disable-next-line
  }, [searchterm]);

  let saveHandler=(result)=>{
    console.log(result)
    //pack up data
    const data = {id: result.id, image: result.volumeInfo.imageLinks.thumbnail, title: result.volumeInfo.title, authors: result.volumeInfo.authors, publishedDate: result.volumeInfo.publishedDate, description: result.volumeInfo.description, link: result.volumeInfo.infoLink }
    console.log(data)
    //make api call
    axios.post("/api/books", data)
      .then(x => console.log(x))
      .then(() => alert(`${result.volumeInfo.title} saved`))
  }
  let viewHandler = url => {

    console.log(url)
    window.open(url)}
  return (
    <Container fluid>
      <div className="searchbox text-center px-auto mx-auto">
        <div className="searchtext">
        <h1 className="gsearch mx-auto">
          <p><span style={{color: "#4285F4"}}>S</span></p>
          <p><span style={{color: "#DB4437"}}>E</span></p>
          <p><span style={{color: "#F4B400"}}>A</span></p>
          <p><span style={{color: "#0F9D58"}}>R</span></p>
          <p><span style={{color: "#4285F4"}}>C</span></p>
          <p><span style={{color: "#DB4437"}}>H</span></p>
        </h1>
        <input
          className="searchbar text-center md-10 sm-10"
          type="text"
          placeholder="Search Google Books"
          value={searchterm}
          onChange={event => {
            console.log(event.target.value);
            setSearchTerm(event.target.value);
          }}
        />
        </div>
           <br />
        {results.length
          ? results.map((result, index) => {
              return (
                <React.Fragment key={index}>
                    <div className="px-auto mx-auto text-white">
                    <div className="my-2 mx-5 px-5">{result.volumeInfo.imageLinks ?<img src={result.volumeInfo.imageLinks.thumbnail} alt="" />:""}</div>
                      <div className="my-2 mx-5 px-5">
                        {result.volumeInfo.title}
                      </div>
                      <div className="my-2 mx-5 px-5">
                        {result.volumeInfo.authors}
                      </div>
                      <div className="my-2 mx-5 px-5">
                        {result.volumeInfo.publishedDate}
                      </div>
                      <div className="my-2 mx-5 px-5">
                        {result.volumeInfo.description}
                      </div>
                      <button className="btn btn-info btn-sm mx-5 my-1 px-5"
                      type="btn btn-md"
                      label="view"
                      onClick={() => viewHandler(result.volumeInfo.infoLink)}
                      >View</button>
                      <button
                        className="btn btn-info btn-sm mx-5 my-1 px-5"
                        type="btn btn-md"
                        label="search"
                        // book={this.state.books
                         onClick={() => saveHandler(result)}
                      >
                        <strong>Save</strong>
                      </button>
                    </div>
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
