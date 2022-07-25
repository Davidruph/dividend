import React from "react";
import "./css/styles.css";
import "./css/tabs.css";
import Tabs from "./include/Tabs";
import Footer from "./include/Footer";
import Sidebar from "./include/Sidebar";
import HeaderNav from "./include/HeaderNav";

function Index() {
  return (
    <section className="sb-nav-fixed" id="sb-nav-fixed">
      <div id="layoutSidenav">
        <HeaderNav />
        <Sidebar />
        <div id="layoutSidenav_content" className="bg-dark">
          <main className="bg-dark mb-5">
            <div className="container-fluid">
              <Tabs />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Index;
