import React from 'react';

import Select from './Select/Select';
import classes from './Importer.css';

const importer = (props) => (

  <div className={classes.Form}>

    <div className={classes.FormSection}>
      <div className={classes.UserBox}>
        <input type="text" name="" required="" />
        <label>Site</label>
      </div>
      <div className={classes.UserBox}>
        <input type="text" name="" required="" />
        <label>Path</label>
      </div>
    </div>

    <div className={classes.FormSection}>

      <Select />

      {/* <div className={classes.UserBox}>
        <input type="text" name="" required="" />
        <label>Main Path</label>
      </div> */}
    {/* <div className={classes.UserBox}>
      <select> 
        <option>Pictures</option>
        <option className={classes.Bloop}>Documents</option>
        <option>Songs</option>
        <option>Albums</option>
        <option>Downloads</option>
        <option>Desktop</option>
        <option>Music</option>
        <option>Videos</option>
        <option>Windows (C:)</option>
        <option>Lenovo (D:)</option>
      </select> 
    </div> */}

      

      {/* <div className={classes.UserBox}>
        <input type="text" name="" required="" />
        <label>Secondary Path</label>
      </div>
      <div className={classes.UserBox}>
        <input type="text" name="" required="" />
        <label>Project</label>
      </div> */}
    </div>

    <div className={classes.FormSection}>
      <div className={classes.UserBox}>
      <input type="text" name="" required="" />
        <label>File</label>
      </div>
    </div>

    <div className={classes.FormSection} style={{flexDirection: 'row'}}>
      <div className={classes.UserBox}>
      <input type="text" name="" required="" />
        <label>Group Name</label>
      </div>
      <div className={classes.UserBox}>
        <input type="text" name="" required="" />
        <label>Exists?</label>
      </div>
      <div className={classes.UserBox}>
        <input type="text" name="" required="" />
        <label>Year</label>
      </div>
    </div>

  </div>
);

export default importer;