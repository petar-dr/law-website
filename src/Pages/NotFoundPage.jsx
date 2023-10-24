import React from "react";

function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <h1 className="notFoundPage__h1">404</h1>
      <h2 className="notFoundPage__h2">PAGE NOT FOUND</h2>
      <p className="notFoundPage__p">
        We’re sorry, the page you requested does not exist in our database! You
        can search our site using the box below or return to our <a href="/" className="notFoundPage__p__a">home page</a> .
      </p>
    </div>
  );
}

export default NotFoundPage;
