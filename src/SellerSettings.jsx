import React from "react";

export default function SellerSettings()
{
    return (
        <div>
            <hr/>
            <div>&lt; Settings</div>
            <div>
                <h3>Store Details</h3>
                <div>view store</div>
            </div>
            <div>space for background image</div>
            <div className="profile">
                <img />
                <div>Store profile</div>
                <div>Update your store profile photos and settings </div>
            </div>
            <table>
                <tr>
                    <th>Store Information</th>
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
                <textarea   cols="30" rows="10" placeholder="write a short biography"></textarea>
                </tr>
                <tr>
                  <td>Store profile photo</td>
                    <td>
                        <div><img />svg, png, jpg or gif (max 800x400px)</div>
                        <div>Delete</div>  
                        <div>Update</div>
                     </td>
                </tr>
                <tr>
                    <td><button>Save</button></td>
                </tr>
            </table>

            <table>
                <tr>
                    <th>Store Address</th>
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
                    <td><button>Save</button></td>
                </tr>
            </table>

            <table>
                <tr>
                    <th>Store Display</th>
                </tr>
                <tr>
                    <td>Product per page</td>
                    <td><input type="number" placeholder="25"/></td>
                </tr>
                <tr>
                <td>Terms & conditions</td>
                <textarea   cols="30" rows="10" placeholder="write your store terms and conditions"></textarea>
                </tr>
                <tr>
                    <td>store visibility</td>
                    <td>
                        <select>
                            <option value="public">Public</option>
                        </select>
                    </td>
                </tr>
                <tr>
                <td><button>Save</button></td>
                </tr>
                </table>


            <table>
                <tr>
                    <th>Linked Accounts</th>
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
                <td><button>Save</button></td>
                </tr>
                </table>

        </div>
    )
}