import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";
import Advantages from "./components/Advantages/Advantages";
import Products from "./components/Products/Products";
import Universality from "./components/Universality/Universality";
import Coatings from "./components/Coatings/Coatings";
import Questions from "./components/Questionnaire/Questionnaire";
import Guarantee from "./components/Guarantee/Guarantee";
import Faq from "./components/Faq/Faq";
import Loading from "./components/Custom/Loading";

const Item = lazy(() => import("./components/Item/Item"));
const Partners = lazy(() => import("./components/Partners/Partners"));
const MyMap = lazy(() => import("./components/Map/Map"));
const Politics = lazy(() => import("./components/Politics/Politics"));

function App() {
  const [modalData, setModalData] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [itemData, setItemData] = useState({});
  const [openItemModal, setOpenItemModal] = useState(false);

  const toggleOnModal = (content) => {
    setModalData(content);
    setOpenModal(true);
  };
  
  const toggleOffModal = () => {
    setOpenModal(false);
  };

  const toggleOnItemModal = (data) => {
    setItemData(data);
    setOpenItemModal(true);
  };
  
  const toggleOffItemModal = () => {
    setOpenItemModal(false);
  };
  
  return (
    <Router>
      <div className="wrapper">
        <Routes> 
          <Route 
            path="/"
            element={
              <>
                <Header toggleOnModal={toggleOnModal} />
                <Main toggleOnModal={toggleOnModal} />
                <Advantages />
                <Products toggleOnItemModal={toggleOnItemModal} />
                <Suspense fallback={Loading}>
                  {openItemModal && (
                    <Item
                      data={itemData}
                      toggleOffItemModal={toggleOffItemModal}
                      toggleOnModal={toggleOnModal}
                    />
                  )}
                </Suspense>
                <Universality />
                <Coatings />
                <Questions />
                <Guarantee />
                <Suspense fallback={Loading}>
                  <Partners />
                </Suspense>
                <Faq />
                <Suspense fallback={Loading}>
                  <MyMap />
                </Suspense>
                <Footer toggleOnModal={toggleOnModal} />
                {openModal && (
                  <Modal content={modalData} toggleOffModal={toggleOffModal} />
                )}
                <style>
                  {(openModal || openItemModal) &&
                    `body { overflow: hidden; padding-right: ${
                      window.innerWidth - document.documentElement.clientWidth
                    }px; }`}
                </style>
              </>
            }
          />
          <Route 
            path="/politics" 
            element={
              <Suspense fallback={Loading}>
                <Politics/>
              </Suspense>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;