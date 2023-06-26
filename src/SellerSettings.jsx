import React, { useState ,useEffect} from "react";
import Navbar from "./Navbar";
import "./SellerSettings.css";

export default function SellerSettings() {

  const token = localStorage.getItem("retailerToken");
  const [settings, setSettings] = useState({
    store_name: "",
    email: "",
    phone_number: "",
    biography: "",
    product_per_page: "",
    terms_and_conditions: "",
    twitter: "",
    facebook: "",
    instagram: "",
    legal_business_name: "",
    local_address: "",
    subcity: "",
    city: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleImageChange = (e) => {
    setSettings({ ...settings, photo: e.target.files[0] });
  };

  
  useEffect(() => {
    // Fetch the initial settings data from the server
    fetch("http://127.0.0.1:8000/user/getRetailerProfile", {
        headers: { 
            // 'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
        },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } return response.json();
      })
      .then((data) => {
        setSettings(data);
      })
      .catch((error) => {
        console.error("Error fetching settings:", error);
      });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("store_name", settings.store_name);
    formData.append("email", settings.email);
    formData.append("phone_number", settings.phone_number);
    formData.append("biography", settings.biography);
    formData.append("product_per_page", settings.product_per_page);
    formData.append("terms_and_conditions", settings.terms_and_conditions);
    formData.append("twitter", settings.twitter);
    formData.append("facebook", settings.facebook);
    formData.append("instagram", settings.instagram);
    formData.append("legal_business_name", settings.legal_business_name);
    formData.append("local_address", settings.local_address);
    formData.append("subcity", settings.subcity);
    formData.append("city", settings.city);
    typeof settings.photo !== "string" && formData.append("photo", settings.photo);
    console.log(formData);

    fetch("http://127.0.0.1:8000/user/updateRetailer/", {
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Settings saved successfully");
        })
        .catch((error) => {
          console.error("Error saving settings:", error);
        });
    };
  

  return (
    <div className="settings">
      <Navbar user="retailer" />
      <div className="settings-body">
        <h3>Store Details</h3>
        <div className="profile">
          <div className="profile-image">
            <img
              src={
                settings.photo
                ? settings.photo
                : "/src/assets/profile-placeholder.png"
              }
              width={130}
            />
          </div>
          <div className="profile-info">
            <div>Store profile</div>
            <div>Update your store profile photos and settings </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <table>
              <tr>
                <th colSpan={2}>Store Information</th>
              </tr>
              <tr>
                <td>Store Name</td>
                <td>
                  <input
                  required
                    type="text"
                    name="store_name"
                    placeholder="mystore"
                    value={settings.store_name}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Email Address</td>
                <td>
                  <input
                  required
                    type="email"
                    name="email"
                    placeholder="contact@myshop.com"
                    value={settings.email}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Phone number</td>
                <td>
                  <input
                  required
                    type="phone"
                    name="phone_number"
                    placeholder="+251 923 232 232"
                    value={settings.phone_number}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Biography</td>
                <td>
                  <textarea
                    name="biography"
                    cols="60"
                    rows="10"
                    placeholder="write a short biography"
                    value={settings.biography}
                    onChange={handleInputChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>Store profile photo</td>
                <td className="profile-image-adder">
                  <div>
                    <div className="profile-image-small">
                      <img
                        src={
                          settings.photo
                            ? settings.photo
                            : "/src/assets/profile-placeholder.png"
                        }
                        width={90}
                      />
                    </div>
                    svg, png, jpg or gif (max 800x400px)
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <u>Delete</u>
                  </div>
                  <div>
                    <input
                    required
                      type="file"
                      id="file"
                      accept="image/*"
                      placeholder="Update"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                    <label htmlFor="file" style={{ cursor: "pointer" }}>
                      <u>Update</u>
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <hr />
                </td>
              </tr>
              <tr>
                <th colSpan={2}>Legal information</th>
              </tr>
              <tr>
                <td>Legal business name</td>
                <td>
                  <input
                    type="text"
                    name="legal_business_name"
                    placeholder="my business name"
                    value={settings.legal_business_name}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Local address</td>
                <td>
                  <input
                  required
                    type="text"
                    name="local_address"
                    placeholder="123 Main St"
                    value={settings.local_address}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Sub-city</td>
                <td>
                  <input
                  required
                    type="text"
                    name="subcity"
                    placeholder="Bole"
                    value={settings.subcity}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <input
                  required
                    type="text"
                    name="city"
                    placeholder="Addis Ababa"
                    value={settings.city}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <th colSpan={2}>Product display settings</th>
              </tr>
              <tr>
                <td>Products per page</td>
                <td>
                  <input
                    type="number"
                    name="product_per_page"
                    placeholder="12"
                    value={settings.product_per_page}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Terms and conditions</td>
                <td>
                  <textarea
                    name="terms_and_conditions"
                    cols="60"
                    rows="10"
                    placeholder="write your terms and conditions here"
                    value={settings.terms_and_conditions}
                    onChange={handleInputChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <hr />
                </td>
              </tr>
              
              <tr>
                <th colSpan={2}>Social media</th>
              </tr>
              <tr>
                <td>Twitter</td>
                <td>
                  <input
                    type="text"
                    name="twitter"
                    placeholder="twitter.com/yourstore"
                    value={settings.twitter}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Facebook</td>
                <td>
                  <input
                    type="text"
                    name="facebook"
                    placeholder="facebook.com/yourstore"
                    value={settings.facebook}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Instagram</td>
                <td>
                  <input
                    type="text"
                    name="instagram"
                    placeholder="instagram.com/yourstore"
                    value={settings.instagram}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <hr />
                </td>
              </tr>
             
              <tr>
                <td colSpan={2}>
                  <button type="submit" className="button-style theme-color">Save changes</button>
                </td>
              </tr>
          </table>
        </form>
      </div>
    </div>
  );
}