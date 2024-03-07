'use client';
import Footer from "@/layout/footer/Footer";
import Header from "@/layout/header/Header";
import Store from "../documents/store/Store";
import AboutUs from "@/layout/about/about";
import { Client } from "../client/client";
import ProductCard from "../documents/productcard/ProductCard";
import Blog from "../documents/blog/Blog";
import {Contact}  from "../documents/contact/Contact";
import Delights from "../documents/delights/Delights";

const HomePage = () => {
    return (
        <>
        <Header/>
        <Delights />
        <ProductCard/>
        <AboutUs/>
        <Client/>
        <Footer/>
         </>
    );
};

export default HomePage;