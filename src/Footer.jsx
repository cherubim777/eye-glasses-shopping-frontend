import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer(){
    const navigate = useNavigate();

    return (
        <footer>
            <div className="footer-title">VISION</div>
            <div className="footer-links">
                <div>
                    Use Cases
                    <ul>
                        <li>Customer</li>
                        <li>Retailer</li>
                    </ul>
                </div>
                <div>
                    Company
                    <ul>
                        <li onClick={() => navigate("/aboutUs")}>About Us</li>
                        <li>FAQs</li>
                        <li onClick={() => navigate("/contactUs")}>Contact Us</li>
                    </ul>
                </div>
                <div>
                    Follow Us
                    <ul>
                        <li>Facebook</li>
                        <li>Github</li>
                        <li>Telegram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div>
                    Contact Us
                    <ul>
                        <li>Location</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
            &copy; 2023 All Rights Reserved
        </footer>
    )
}