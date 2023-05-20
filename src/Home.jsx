import React from "react";

export default function Home(){
    return (
        <div className="intro">
            <div className="intro-text">
                <div className="intro-text-title">Vision care for you</div>
                <div className="intro-text-description">Discover a range of stylish and affordable eyeglasses that provide the vision care you deserve, all from the comfort of your own home.</div>
                <button>Explore</button>
            </div>
            <div className="intro-images">
                <div className="intro-images-vertical">
                    <div className="intro-image-n">new</div>
                    <div className="intro-image-p">popular</div>
                </div>
                <div className="intro-image-f">featured</div>
            </div>
        </div>

    )
}