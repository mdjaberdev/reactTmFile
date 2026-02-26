import { useRef, useState } from "react";
import "./App.css";

function App() {
  let [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  let containerRef = useRef(false);
  let handleShowTwo = () => {
    if (containerRef == "block") {
      containerRef.current.hidden
    }else {
       containerRef.current
    }
  };
  return (
    <div className="flex justify-around">
      {/* useState  */}
      <div className="">
        <button onClick={handleShow}>Open</button>
        <div>
          {show && (
            <ul className="">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          )}
        </div>
      </div>
      <div className="">
        <button onClick={handleShowTwo}>OpenTwo</button>
        <ul ref={containerRef} className={`hidden`}>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
