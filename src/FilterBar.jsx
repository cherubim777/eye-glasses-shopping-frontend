import { useState, useEffect } from 'react';

export default function FilterBar({ products, setFilteredProducts, query }) {
  const [filters, setFilters] = useState({
    age_group: [],
    gender_category: [],
    category: []
  });

    const handleFilterChange = (filterType, value, checked) => {
      // Update the filter state based on the checkbox change
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: checked
          ? [...prevFilters[filterType], value]
          : prevFilters[filterType].filter(filter => filter !== value),
      }));
      

  };

    useEffect(() => {
      console.log(filters)
      // Filter products based on the selected filters
      const filteredProducts = products.filter((product) => {
        // Check if the product matches the selected age group filters
        if (filters.age_group.length > 0 && !filters.age_group.includes(product.age_group)) {
          return false;
        }
        // Check if the product matches the selected gender filters
        if (filters.gender_category.length > 0 && !filters.gender_category.includes(product.gender_category)) {
          return false;
        }
        // Check if the product matches the selected category filters
        if (filters.category.length > 0 && !filters.category.includes(product.category)) {
          return false;
        }
        if(query !== '') {
          return product.name.toLowerCase().includes(query.toLowerCase())
        }
        return true;
      });
  
      // Update the filtered products state
      setFilteredProducts(filteredProducts);
    }, [filters, query])
  
    return (
      <div className='retailer-navbar' style={{textAlign: 'left', padding: 10, minWidth:180}}>
        <h4>Age Group</h4>
        <input type="checkbox" value="K" onChange={(e) => handleFilterChange('age_group', e.target.value, e.target.checked)} />
        <label>Kids</label><br />
        <input type="checkbox" value="T" onChange={(e) => handleFilterChange('age_group', e.target.value, e.target.checked)} />
        <label>Teens</label><br />
        <input type="checkbox" value="A" onChange={(e) => handleFilterChange('age_group', e.target.value, e.target.checked)} />
        <label>Adults</label><br />
        <input type="checkbox" value="S" onChange={(e) => handleFilterChange('age_group', e.target.value, e.target.checked)} />
        <label>Seniors</label><br />
        <h4>Gender</h4>
        <input type="checkbox" value="M" onChange={(e) => handleFilterChange('gender_category', e.target.value, e.target.checked)} />
        <label>Male</label><br />
        <input type="checkbox" value="F" onChange={(e) => handleFilterChange('gender_category', e.target.value, e.target.checked)} />
        <label>Female</label><br />
        <input type="checkbox" value="U" onChange={(e) => handleFilterChange('gender_category', e.target.value, e.target.checked)} />
        <label>Unisex</label><br />
        <h4>Product Category</h4>
        <input type="checkbox" value="Oversized" onChange={(e) => handleFilterChange('category', e.target.value, e.target.checked)} />
        <label>Oversized</label><br />
        <input type="checkbox" value="Sports" onChange={(e) => handleFilterChange('category', e.target.value, e.target.checked)} />
        <label>Sports</label><br />
        <input type="checkbox" value="Mirrored" onChange={(e) => handleFilterChange('category', e.target.value, e.target.checked)} />
        <label>Mirrored</label><br />
        <input type="checkbox" value="Gradient" onChange={(e) => handleFilterChange('category', e.target.value, e.target.checked)} />
        <label>Gradient</label><br />
        <input type="checkbox" value="Polarized" onChange={(e) => handleFilterChange('category', e.target.value, e.target.checked)} />
        <label>Polarized</label><br />
        <input type="checkbox" value="Aviator" onChange={(e) => handleFilterChange('category', e.target.value, e.target.checked)} />
        <label>Aviator</label><br />
        <input type="checkbox" value="Wayfarer" onChange={(e) => handleFilterChange('category', e.target.value, e.target.checked)} />
        <label>Wayfarer</label><br />
        <input type="checkbox" value="Round" onChange={(e) => handleFilterChange('category', e.target.value, e.target.checked)} />
        <label>Round</label><br />
        <input type="checkbox" value="Cat-Eye" onChange={(e) => handleFilterChange('category', e.target.value, e.target.checked)} />
        <label>Cat-Eye</label><br />
        <input type="checkbox" value="Clip-On" onChange={(e) => handleFilterChange('category', e.target.value, e.target.checked)} />
        <label>Clip-On</label><br />
      </div>
    );
  }