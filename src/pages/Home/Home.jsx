import React, { useState } from 'react'; 
import './Home.css';
import Header from '../../components/Header/header';
import Menu from '../../components/Menu/Menu';

const Home = () => {
  const [category, setCategory] = useState("All"); 

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
