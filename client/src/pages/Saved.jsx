import Container from "../components/Container/Container.jsx";
import React, { Component } from "react";
import { List } from "../components/List";
import Book from "../components/Book/Book.jsx";
import "../App.css";
import Api from "../utils/Api.js";


class Saved extends Component {
  // const [results, setResults] = useState([]);
  // const [bookSaved, setBookSaved] = useState("");
  state ={books : []}
  componentDidMount() {
    this.getSavedBooks();
  }
  getSavedBooks = () => {
    Api.getSavedBooks()
      .then(res => {
        console.log(res.data)
        this.setState({
          books: res.data
        })
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container className="col-md-8">
        <div>
          <div size="md-12">
            <div title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book 
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      _id={book._id}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </div>
          </div>
        </div>

      </Container>
    );
  }
}
export default Saved;
