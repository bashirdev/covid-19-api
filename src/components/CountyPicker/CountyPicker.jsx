import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './County.module.css';

import {fetchCountries} from '../../api';


const  CountyPicker =({handleCountryChange}) =>{

   const [fetchedCountries, setFetchedCountries] = useState([0]);
   useEffect(()=>{
      const fetchAPI = async () =>{
          setFetchedCountries(await fetchCountries());
      }
      fetchAPI();
   }, [setFetchedCountries]);
   
   return(
    <div className="county-index">
    <FormControl className={styles.FormControl}>
       <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}> 
          <option value='global'> Global </option>
      {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)};
       </NativeSelect>
       </FormControl> 
       </div>
);
}

export default CountyPicker;