import Container from "../components/Container/Container.jsx";
// import Jumbotron from "../components/Jumbotron/Jumbotron.jsx";
// import Footer from "../components/Footer/Footer.jsx";
// import Navbar from "../components/Navbar/Navbar.jsx";
import React, { Component } from "react";
// import axios from "axios";
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
                      // link={book.link}
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

//   return (
//       <Container fluid>
//       <div className="searchbox text-center px-auto mx-auto">
//         <h1 className="text-white text-center">Saved PAGE</h1>
//                 <React.Fragment>
//                     <ul className="list-group px-auto mx-auto">
//                       <li className="list-group-item my-2 mx-5 px-5">

//                       </li>
//                       <li className="list-group-item my-2 mx-5 px-5">

//                       </li>
//                       <li className="list-group-item my-2 mx-5 px-5">

//                       </li>
//                       <li className="list-group-item my-2 mx-5 px-5">

//                       </li>

//                     </ul>
//                     <br />
//                     <br />
//                 </React.Fragment>
//               );
//             })
//           : ""}
//       </div>
//     </Container>
//   );
// };



export default Saved;