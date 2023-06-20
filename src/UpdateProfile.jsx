import React ,{useState,useEffect} from "react";
import UserInput from "./UserInput";

export default function ProfileUpdate({ userType }) {
    const [fields, setFields] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  
    const handleFieldChange = (event) => {
      const { name, value } = event.target;
      setFields((prevFields) => ({ ...prevFields, [name]: value }));
    };
  
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/${userType}/profile`);
        const userData = await response.json();
        setFields(userData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
  
    const handleUpdate = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/${userType}/profile`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(fields)
        });
  
        if (response.ok) {
          console.log('Profile updated successfully');
        } else {
          console.log('Error updating profile');
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchUserData();
    }, [userType]);
  
   
        return (
            <div className="login-form">
              <div className="">Update Profile</div>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                <form onSubmit={handleUpdate}>
                  <UserInput type="text" title="User Name" name="username" value={fields.username} onChange={handleFieldChange} />
                  <UserInput type="text" title="First Name" name="first_name" value={fields.first_name} onChange={handleFieldChange} />
                  <UserInput type="text" title="Last Name" name="last_name" value={fields.last_name} onChange={handleFieldChange} />
                  <UserInput type="number" title="Phone Number" name="phone_number" value={fields.phone_number} onChange={handleFieldChange} />
                  <UserInput type="email" title="Email Address" name="email" value={fields.email} onChange={handleFieldChange} />
                  <UserInput type="text" title="Local Address" name="local_address" value={fields.local_address} onChange={handleFieldChange} />
                  <UserInput type="text" title="Subcity" name="subcity" value={fields.subcity} onChange={handleFieldChange} />
                  {userType === 'retailer' && (
                    <div>
                      <UserInput type="text" title="Store Name" name="store_name" value={fields.store_name} onChange={handleFieldChange} />
                      <label>
                        Accept custom order?
                        <input type="radio" required name="accepts_custom_order" value="True" checked={fields.accepts_custom_order === 'True'} onChange={handleFieldChange} /> Yes
                        <input type="radio" name="accepts_custom_order" value="False" checked={fields.accepts_custom_order === 'False'} onChange={handleFieldChange} /> No
                      </label>
                    </div>
                  )}
                  <button className="button-style theme-color">Update</button>
                  </form>
                </>
              )}
            </div>
          );
        }
  