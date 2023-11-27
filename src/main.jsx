import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Landing from './Landing.jsx'
import Layout from './Layout.jsx'
import EmptyLayout from "./EmptyLayout";
import List from './List.jsx'
import './index.css'
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmptyLayout />}>
          <Route index element={<Landing />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="list" element={<Layout />}>
          <Route index element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);