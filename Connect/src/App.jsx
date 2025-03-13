import "./App.css";
import Dashbroad from "./Component/Dashbroad/Dashbroad";
import Header from "./Component/Header/Header";
import Main from "./Component/message/Main";
import Chat from "./Component/Omnichat/chat/Chat";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="dashboard" element={<Dashbroad />} />
        <Route path="chat" element={<Chat />} />
        <Route path="setting" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
