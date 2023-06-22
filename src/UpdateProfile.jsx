import React ,{useState,useEffect} from "react";
import UserInput from "./UserInput";

export default function ProfileUpdate({ userType }) {
    const [fields, setFields] = useState({});
    const token = localStorage.getItem('customerToken');

    const handleFieldChange = (event) => {
      const { name, value } = event.target;
      setFields((prevFields) => ({ ...prevFields, [name]: value }));
    };

    const handleImageChange = (event) => {
      setFields({ ...fields, photo: event.target.files[0] });
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/user/getCustomerProfile`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          }
        })
        .then(response => response.json())
        .then(data => {
          setFields(data);
          
        })
        .catch(error => {
          console.log(error);
        })  
    }, [])
      
      const handleUpdate = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("first_name", fields.first_name);
      formData.append("last_name", fields.last_name);
      formData.append("phone_number", fields.phone_number);
      formData.append("email", fields.email);
      formData.append("local_address", fields.local_address);
      formData.append("subcity", fields.subcity);
      formData.append("city", fields.city);
      typeof fields.photo !== "string" && formData.append("photo", fields.photo);
      console.log(formData);
  
      fetch("http://127.0.0.1:8000/user/updateCustomer/", {
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
            console.log("Profile updated successfully");
          })
          .catch((error) => {
            console.error("Error updating profile: ", error);
          });
      };
  
   
        return (
            <div className="login-form">
              <h2 className="">Update Profile</h2>
                <form onSubmit={handleUpdate}>
                  <UserInput type="text" title="First Name" name="first_name" value={fields.first_name} onChange={handleFieldChange} />
                  <UserInput type="text" title="Last Name" name="last_name" value={fields.last_name} onChange={handleFieldChange} />
                  <UserInput type="number" title="Phone Number" name="phone_number" value={fields.phone_number} onChange={handleFieldChange} />
                  <UserInput type="email" title="Email Address" name="email" value={fields.email} onChange={handleFieldChange} />
                  <UserInput type="text" title="Local Address" name="local_address" value={fields.local_address} onChange={handleFieldChange} />
                  <UserInput type="text" title="Subcity" name="subcity" value={fields.subcity} onChange={handleFieldChange} />
                  <UserInput type="text" title="City" name="city" value={fields.city} onChange={handleFieldChange} />
                  <img src="" alt="" />
                  <input type="file" title="Photo" name="photo" onChange={handleImageChange} accept="image/*" /><br /><br />
                  <button className="button-style theme-color">Update</button>
                  </form>
            </div>
          );
        }
  