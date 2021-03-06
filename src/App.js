import React from 'react';
// import Card from  './components/Cards/Card';
// import Chart from  './components/Chart/Chart';
// import CountyPicker from  './components/CountyPicker/CountyPicker';
import {Cards, Chart,CountyPicker} from './components';
import styles from './components/App.module.css';
import {fetchData } from './api';
import coronaImage from './images/image.png';

class App  extends React.Component{
    state={
        data:{},
      country:'',
    }
   async componentDidMount(){
        const fetchedData = await fetchData();
       
      this.setState({data:fetchedData});
    }

    handleCountryChange= async (country)=>{
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData , country: country});
    }
        
    
    render() {
        const {data, country} =this.state;
        return(
           
            <div className={styles.container}>
             <img className={styles.image}  src={coronaImage} alt="covid_19"/>
             <Cards data={data}/>
             <CountyPicker  handleCountryChange={this.handleCountryChange}/>
           
             <Chart data={data} country={country}/>
            </div>
           );
    }
}

export default App;