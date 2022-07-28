import React from 'react'
import { InfoSection } from '../../components';
import { aboutMeObject, skillsObject, projectsObject } from '../../constants/Data';
 

const Home = () => {
  return (
    <>
        <InfoSection {...aboutMeObject}/>
        <InfoSection {...skillsObject}/>
        <InfoSection {...projectsObject}/>
    </>
  );
};

export default Home;