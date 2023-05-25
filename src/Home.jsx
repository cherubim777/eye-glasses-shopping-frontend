import React from "react";
import Products from "./Products";
import Footer from "./Footer";

export default function Home(){
    return (
        <>
        <div className="intro">
            <div className="intro-text">
                <div className="intro-text-title">Vision care for you</div>
                <div className="intro-text-description">Discover a range of stylish and affordable eyeglasses that provide the vision care you deserve, all from the comfort of your own home.</div>
                <button className="theme-color button-style">Explore</button>
            </div>
            <div className="intro-images">
                <div className="intro-images-vertical">
                    <div className="intro-image-n">
                        <div className="intro-image-tag theme-color">New</div>
                    </div>
                    <div className="intro-image-p">
                        <div className="intro-image-tag theme-color">Popular</div>
                    </div>
                </div>
                <div className="intro-image-f">
                    <div className="intro-image-tag theme-color">Featured</div>
                </div>
            </div>

        </div>
        
        <Products category="Featured"/>
        <Products category="New"/>
        <Products category="Popular"/>
        
        <Footer />
        

        </>
    )
}