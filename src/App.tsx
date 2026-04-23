import TaskOne from "./views/TaskOne";
import TaskTwo from "./views/TaskTwo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TaskOne />} />
          <Route path="/taskOne" element={<TaskOne />} />
          <Route path="/taskTwo" element={<TaskTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
