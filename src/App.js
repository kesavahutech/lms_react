import "./App.css";
// import Tabs from "./Components/Pages/FormTabs/Tabs";
import Layout1 from "./Components/Layout/Layout";

import { Routes, Route, Navigate } from "react-router-dom";

// import Login from "./Components/Pages/Login/Login";
// import UserAvatar from "./Components/Layout/UserAvatar";
import EDashboard from "./Components/Employee/EDashboard";
import Eprofile from "./Components/Employee/Eprofile";

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <Tabs></Tabs> */}
      <Layout1>
        <Routes>
          <Route exact path="/dashboard" element={<EDashboard />} />
          <Route exact path="/profile" element={<Eprofile />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Layout1>
    </div>
  );
}

export default App;
