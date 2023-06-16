import React from "react";
import Navbar from "./Navbar";
import "./SellerSettings.css"

export default function SellerSettings()
{
    return (
        <div className="settings">
            <Navbar user="retailer" />
            <div className="settings-body">
                <h3>Store Details</h3>
                <div className="profile">
                    <div className="profile-image">
                    <img src="/src/assets/profile-placeholder.png" width={130}/>
                    </div>
                    <div className="profile-info">
                        <div>Store profile</div>
                        <div>Update your store profile photos and settings </div>
                    </div>
                </div>
                <table>
                    <tr>
                        <th colSpan={2}>Store Information</th>
                    </tr>
                    <tr>
                        <td>Store Name</td>
                        <td><input type="text" placeholder="mystore"/></td>
                    </tr>
                    <tr>
                        <td>Email Address</td>
                        <td><input type="email" placeholder="contact@myshop.com"/></td>
                    </tr>
                    <tr>
                        <td>Phone number</td>
                        <td><input type="phone" placeholder="+251 923 232 232"/></td>
                    </tr>
                    <tr>
                    <td>Biography</td>
                    <textarea cols="60" rows="10" placeholder="write a short biography"></textarea>
                    </tr>
                    <tr>
                    <td>Store profile photo</td>
                        <td  className="profile-image-adder">
                            <div>
                                <div className="profile-image-small">
                                    <img src="/src/assets/profile-placeholder.png" width={90}/>
                                </div>
                                svg, png, jpg or gif (max 800x400px)
                            </div>
                            <div style={{cursor: "pointer"}}><u>Delete</u></div>  
                            <div>
                            <input type="file" id="file" placeholder="Update" style={{display: "none"}}/>
                            <label htmlFor="file" style={{cursor: "pointer"}} ><u>Update</u></label> 
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan={2} align="right"><button className="button-style theme-color">Save</button></td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th colSpan={2}>Store Address</th>
                    </tr>
                    <tr>
                        <td>Legal Business Name</td>
                        <td><input type="text" placeholder="Ethio.Inc."/></td>
                    </tr>
                    <tr>
                        <td>Address Line 1</td>
                        <td><input type="text" placeholder="1028 New Mexico 48"/></td>
                    </tr>
                    <tr>
                        <td>Address Line 2</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td><input type="text" placeholder="Addis"/></td>
                    </tr>
                    <tr>
                        <td>Postcode/zip</td>
                        <td><input type="number" placeholder="10248"/></td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td><input type="text" placeholder="Ethiopia"/></td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td><input type="text" placeholder="Addis"/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button className="button-style theme-color">Save</button></td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th colSpan={2}>Store Display</th>
                    </tr>
                    <tr>
                        <td>Product per page</td>
                        <td><input type="number" placeholder="25"/></td>
                    </tr>
                    <tr>
                    <td>Terms & conditions</td>
                    <textarea cols="60" rows="10" placeholder="write your store terms and conditions"></textarea>
                    </tr>
                    <tr>
                    <td colSpan={2}><button className="button-style theme-color">Save</button></td>
                    </tr>
                    </table>


                <table>
                    <tr>
                        <th colSpan={2}>Linked Accounts</th>
                    </tr>
                    <tr>
                        <td>Twitter</td>
                        <td><input type="text" placeholder="example@twitter.com"/></td>
                    </tr>
                    <tr>
                        <td>Facebook</td>
                        <td><input type="text" placeholder="facebook.com/username"/></td>
                    </tr>
                    <tr>
                        <td>Instagram</td>
                        <td><input type="text" placeholder="instagram.com/username"/></td>
                    </tr>
                    <tr>
                    <td colSpan={2}><button className="button-style theme-color">Save</button></td>
                    </tr>
                    </table>

            </div>
        </div>
    )
}