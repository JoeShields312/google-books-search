import React from "react";
import Api from "../../utils/Api";

function Book({

  _id,
  title,
  subtitle,
  authors,
  link,
  description,
  image,
  button
})

{
  const viewHandler = url => {
    console.log(url);
    window.open(url);
  };
  const deleteHandler = _id => {
    console.log(_id)
    Api.deleteBook(_id)
      .then(() => alert('book deleted'))
      .then(_ => window.location.reload());
  };
  return (
    <React.Fragment>
      <div className="text-center px-3">
        <div className="">
          <div size="md-8 text-center">
            <h3 className="font-italic text-white">{title}</h3>
            {subtitle && <h5 className="font-italic">{subtitle}</h5>}
          </div>
        </div>
        <div>
          <div size="md-6">
            <p className="font-itadivc small text-white">
              Written by {authors}
            </p>
          </div>
        </div>
        <div>
          <div size="12 sm-4 md-2">
            <img className="img-thumbnail mb-3" src={image} alt={title} />
          </div>
          <div size="12 sm-8 md-10">
            <p className="text-white text-wrap">{description}</p>
          </div>
        </div>
        <button
          className="btn btn-info btn-sm mx-5 my-1 mb-3 px-5"
          type="btn btn-md"
          label="view"
          onClick={() => viewHandler(link)}
        >
          View
        </button>
        <button
          className="btn btn-info btn-sm mx-5 my-1 mb-3 px-5"
          type="btn btn-md"
          label="view"
          onClick={() => deleteHandler(_id)}
        >
          Delete
        </button>
      </div>
    </React.Fragment>
  );
}
export default Book;
