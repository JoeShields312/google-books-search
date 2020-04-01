import React from "react";
import Api from "../../utils/Api"
import "./style.css";
function Book({ _id, title, subtitle, authors, link, description, image, Button }) {
    let viewHandler = url => {

        console.log(url)
        window.open(url)}
        let deleteHandler = _id => {
                Api.deleteBook(_id).then(_=>window.location.reload())
        }
    return (
      <React.Fragment>
           <button className="btn btn-info btn-lg mx-2 my-1 px-5"
                      type="btn btn-md"
                      label="view"
                      onClick={() => viewHandler(link)}
                      >View</button>
                       <button className="btn btn-info btn-lg mx-2 my-1 px-5"
                      type="btn btn-md"
                      label="view"
                      onClick={() => deleteHandler(_id)}
                      >Delete</button>
    <ul>
      <li className="flex-wrap-reverse">
        <div size="md-8">
          <h3 className="font-italic text-white">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </div>
        <div size="md-4">
          <div className="btn-container">
          </div>
        </div>
      </li>
      <li>
        <div size="md-6">
          <p className="font-italic small text-white">Written by {authors}</p>
        </div>
      </li>
      <li>
        <div size="12 sm-4 md-2">
          <img className="img-thumbnail" src={image} alt={title} />
        </div>
        <div size="12 sm-8 md-10">
          <p className="text-white">{description}</p>
        </div>
      </li>
    </ul>
</React.Fragment>
  );
}
export default Book;