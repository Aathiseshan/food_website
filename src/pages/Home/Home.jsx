// import React, { useState } from 'react'
// import "./Home.css"
// import Header from '../../components/Header/Header'
// import ExploreMenu from '../../components/Exploremenu/ExploreMenu'
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
// import Appdown from '../../components/Appdownload/Appdown'

// const Home = () => {

//   const[category,setCategory]=useState("All");



//   return (
//     <div>
//         <Header />
//         <ExploreMenu category={category} setCategory={setCategory} />
//         <FoodDisplay category={category}/>
//         <Appdown />
//     </div>
//   )
// }

// export default Home



import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/Exploremenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Appdown from '../../components/Appdownload/Appdown';

const Home = () => {
  const [category, setCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when Home mounts
  }, []);

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Appdown />
    </div>
  );
};

export default Home;
