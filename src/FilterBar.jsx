import { useState } from 'react';

export default function FilterBar({ products, setFilteredProducts }) {
    const [ageGroupFilters, setAgeGroupFilters] = useState([]);
    const [genderFilters, setGenderFilters] = useState([]);
    const [categoryFilters, setCategoryFilters] = useState([]);
  
    const handleFilterChange = () => {
      // Filter products based on the selected filters
      const filteredProducts = products.filter((product) => {
        // Check if the product matches the selected age group filters
        if (ageGroupFilters.length > 0 && !ageGroupFilters.includes(product.ageGroup)) {
          return false;
        }
        // Check if the product matches the selected gender filters
        if (genderFilters.length > 0 && !genderFilters.includes(product.gender)) {
          return false;
        }
        // Check if the product matches the selected category filters
        if (categoryFilters.length > 0 && !categoryFilters.includes(product.category)) {
          return false;
        }
        return true;
      });
      // Update the filtered products state
      setFilteredProducts(filteredProducts);
    };
  
    return (
      <div className='retailer-navbar' style={{textAlign: 'left', padding: 10, minWidth:180}}>
        <h4>Age Group</h4>
        <input type="checkbox" onChange={() => setAgeGroupFilters([...ageGroupFilters, "Kids"])} />
        <label>Kids</label><br />
        <input type="checkbox" onChange={() => setAgeGroupFilters([...ageGroupFilters, "Teens"])} />
        <label>Teens</label><br />
        <input type="checkbox" onChange={() => setAgeGroupFilters([...ageGroupFilters, "Adults"])} />
        <label>Adults</label><br />
        <input type="checkbox" onChange={() => setAgeGroupFilters([...ageGroupFilters, "Seniors"])} />
        <label>Seniors</label><br />
        <h4>Gender</h4>
        <input type="checkbox" onChange={() => setGenderFilters([...genderFilters, "Male"])} />
        <label>Male</label><br />
        <input type="checkbox" onChange={() => setGenderFilters([...genderFilters, "Female"])} />
        <label>Female</label><br />
        <input type="checkbox" onChange={() => setGenderFilters([...genderFilters, "Unisex"])} />
        <label>Unisex</label><br />
        <h4>Product Category</h4>
        <input type="checkbox" onChange={() => setCategoryFilters([...categoryFilters, "Oversized"])} />
        <label>Oversized</label>
        <input type="checkbox" onChange={() => setCategoryFilters([...categoryFilters, "Sports"])} />
        <label>Sports</label><br />
        <input type="checkbox" onChange={() => setCategoryFilters([...categoryFilters, "Mirrored"])} />
        <label>Mirrored</label>
        <input type="checkbox" onChange={() => setCategoryFilters([...categoryFilters, "Gradient"])} />
        <label>Gradient</label><br />
        <input type="checkbox" onChange={() => setCategoryFilters([...categoryFilters, "Polarized"])} />
        <label>Polarized</label>
        <input type="checkbox" onChange={() => setCategoryFilters([...categoryFilters, "Aviator"])} />
        <label>Aviator</label><br />
        <input type="checkbox" onChange={() => setCategoryFilters([...categoryFilters, "Wayfarer"])} />
        <label>Wayfarer</label>
        <input type="checkbox" onChange={() => setCategoryFilters([...categoryFilters, "Round"])} />
        <label>Round</label><br />
        <input type="checkbox" onChange={() => setCategoryFilters([...categoryFilters, "Cat-Eye"])} />
        <label>Cat-Eye</label>
        <input type="checkbox" onChange={() => setCategoryFilters([...categoryFilters, "Clip-On"])} />
        <label>Clip-On</label>
        <br />
      </div>
    );
  }