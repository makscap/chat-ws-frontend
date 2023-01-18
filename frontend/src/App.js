import { useState } from "react";
import "./App.css";
import Chat from "./Chat/Chat";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className=" bg-[#000000] p-[20px]">
      {isAuth ? (
        <Chat />
      ) : (
        <div>
          <form>
            <label for="name">Name:</label>
            <input type="text" name="name" />
            <label for="companion">Companion:</label>
            <input type="text" name="companion" />

            <button onClick={setIsAuth(!isAuth)}>JOIN</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
