import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Invoice, Invoices, SentInvoices } from "./pages/Invoice/Invoices";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NothingHere from "./pages/NothingHere";
import Posts from "./pages/Post/Posts";
import PostLists from "./pages/Post/PostLists";
import Post from "./pages/Post/Post";
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NothingHere />} />
          <Route path="posts" element={<Posts />}>
            <Route path="" element={<PostLists />} />
            <Route path=":slug" element={<Post />} />
          </Route>
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<Invoice />} />
            <Route path="sent" element={<SentInvoices />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
