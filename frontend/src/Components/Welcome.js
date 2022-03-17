import React from "react";

const Welcome = () => (
  <div className="bg-light p-5 rounded-lg m-3">
    <h1 className="display-4">Images Gallery</h1>
    <p className="lead">
      This is a simple application that retrieves photos using Unsplash API. In
      order to start enter any search term in the input field.
    </p>
    <a
      className="btn btn-primary btn-lg my-4"
      href="https://unsplash.com"
      role="button"
    >
      Learn more
    </a>
  </div>
);

export default Welcome;
