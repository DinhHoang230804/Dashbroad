import "./App.css";

import Header from "./Component/Header/Header";
import Main from "./Component/Setting/Message/Main";

import Chat from "./Component/Omnichat/chat/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbroad from "./Component/Dashbroad/Dashbroad";
import AppointmentScheduler from "./Component/Setting/Message/Calendar/AppointmentScheduler";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Dashbroad />} />
        <Route path="chat" element={<Chat />} />
        <Route path="setting" element={<Main />} />
        <Route path="/setting/lichhen" element={<AppointmentScheduler />} />
      </Routes>
    </div>
  );
}

export default App;
