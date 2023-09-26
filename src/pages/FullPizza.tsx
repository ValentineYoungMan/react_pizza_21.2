import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    name: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://63a808cc7989ad3286f90030.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('error');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>'Loading...'</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.name}</h2>
      <h4>$ {pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
