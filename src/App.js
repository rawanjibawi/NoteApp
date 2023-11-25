import "./App.css";
import NoteListPage from "./pages/NoteListPage";
import NotePage from "./pages/NotePage";
import Header from "./components/Headers";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NoteListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
