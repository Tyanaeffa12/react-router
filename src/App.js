import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Users from "./Components/Users";
import NotFound from "./Components/NotFound";


//error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {

  return (
    <ErrorBoundary>
      <section>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Users" element={<Users />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      
      </section>
     </ErrorBoundary>
  );
}

export default App;
