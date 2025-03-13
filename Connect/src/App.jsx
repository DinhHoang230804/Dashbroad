import "./App.css";
import Dashbroad from "./Component/Dashbroad/Dashbroad";
import Header from "./Component/Header/Header";
import Chat from "./Component/Omnichat/chat/Chat";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route index element={<Navigate to ="/dashboard" replace/>}/>
          <Route path="/dashboard" element={<Dashbroad />} />
          <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
