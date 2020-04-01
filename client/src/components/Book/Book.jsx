import React from "react";
import "./style.css";
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ul>
      <li className="flex-wrap-reverse">
        <div size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </div>
        <div size="md-4">
          <div className="btn-container">
          </div>
        </div>
      </li>
      <li>
        <div size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </div>
      </li>
      <li>
        <div size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </div>
        <div size="12 sm-8 md-10">
          <p>{description}</p>
        </div>
      </li>
    </ul>
  );
}
export default Book;