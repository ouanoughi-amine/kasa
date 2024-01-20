import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";


function NotFound () {
    return (
        <>
        <Navbar />
        <Error404 />
        <Footer />
        </>
    )
}
export default NotFound