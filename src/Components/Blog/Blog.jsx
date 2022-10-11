import React from "react";
import "./blog.css";
import Footer from "../footer/Footer";
const Blog = () => {
  return (
    <>
    <div className="blogDiv">
      <h2>What is the purpose of react router?</h2>
      <p className="text-muted">
        ReactJS Router is mainly used for developing Single Page Web
        Applications. React Router is used to define multiple routes in the
        application. When a user types a specific URL into the browser, and if
        this URL path matches any 'route' inside the router file, the user will
        be redirected to that particular route.
      </p>

      <h2>How does Context API works?</h2>
      <p className="text-muted">
        The React Context API is a way for a React app to effectively produce
        global variables that can be passed around. This is the alternative to
        "prop drilling" or moving props from grandparent to child to parent, and
        so on. Context is also touted as an easier, lighter approach to state
        management using Redux. React.createContext() is all you need. It
        returns a consumer and a provider. Provider is a component that as it's
        names suggests provides the state to its children. It will hold the
        "store" and be the parent of all the components that might need that
        store. Consumer as it so happens is a component that consumes and uses
        the state.
      </p>

      <h2>What is useRef hook in react?</h2>
      <p className="text-muted">
        The useRef Hook allows us to persist values between renders. It can be
        used to store a mutable value that does not cause a re-render when
        updated. It can be used to access a DOM element directly.
      </p>
      
    </div>
    <Footer/>
    </>
  );
};

export default Blog;
