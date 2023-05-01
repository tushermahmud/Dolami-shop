import './App.css';
import Header from './Layouts/Header';
import Sidebar from './Layouts/Sidebar';
import Main from "./Layouts/Main";
import { allProducts } from './sampleData';
import React,{Fragment, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductDetails from './pages/ProductDetails';
function App() {
  const [productList, setProductsList] = useState(allProducts);
  const [category, setCategory] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([
    { name: "All Items", id: null, parentId: null },
  ]);
 
  return (
    <div className="App">
      <Header />
      <div className="grid grid-cols-8 gap-5">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <Sidebar
                    setCategory={setCategory}
                    productList={productList}
                    setProductsList={setProductsList}
                    setBreadcrumbs={setBreadcrumbs}
                  />

                  <Main
                    productList={productList}
                    category={category}
                    breadcrumbs={breadcrumbs}
                    setProductsList={setProductsList}
                  />
                </Fragment>
              }
            />
            <Route path="/product-details/:id" element={<ProductDetails/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
