import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Menu = () => {
  const { restaurantId } = useParams();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/menus/${restaurantId}`)
      .then((response) => setMenu(response.data))
      .catch((error) => console.error(error));
  }, [restaurantId]);

  if (!menu) return <div>Loading...</div>;

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu.items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
