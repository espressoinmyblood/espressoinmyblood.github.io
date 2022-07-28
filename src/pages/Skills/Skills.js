import React from 'react'
import { InfoSection } from '../../components';
import { skillsObject, projectsObject } from '../../constants/Data';
 

const Home = () => {
  return (
    <>
        <InfoSection {...skillsObject}/>
        <InfoSection {...projectsObject}/>
    </>
  );
};

export default Home;