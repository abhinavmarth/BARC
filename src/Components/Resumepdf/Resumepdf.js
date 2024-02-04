import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Resume from '../../Assests/resume.pdf';

const Resumepdf = () => {
    
  return (
    <div>
        <iframe src={Resume} width="90%" height="500px" />
    </div>
  )
}

export default Resumepdf