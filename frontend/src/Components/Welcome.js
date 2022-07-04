import React from "react";

const Welcome = () => (
  <div className="bg-light p-5 rounded-lg m-3">
    <h1 className="display-4">Images Gallery</h1>
    <p className="lead">
      This is a simple Full stack Application that retrieves photos from
      Unsplash with help of my Python API. In order to start, enter any search
      term in the input field and get the random photo. After saving a picture,
      it's going to be stored in our own MongoDB, in order to delete it simply
      press "Delete" button, "Remove" button removes the picture only from the
      state and current session, after page reloading all "removed" pictures
      will show up again due to useEffect hook that Fetches them from our DB.
    </p>
    <a
      class="btn btn-primary"
      href="https://unsplash.com"
      role="button"
      target="__blank"
    >
      Unsplash.com
    </a>
  </div>
);

export default Welcome;
