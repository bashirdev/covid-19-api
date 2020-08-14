import React from 'react';
// import Card from  './components/Cards/Card';
// import Chart from  './components/Chart/Chart';
// import CountyPicker from  './components/CountyPicker/CountyPicker';
import {Cards, Chart,CountyPicker} from './components';
import styles from './components/App.module.css';
import {fetchData } from './api';

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
             <Cards data={data}/>
             <CountyPicker  handleCountryChange={this.handleCountryChange}/>
             <CountyPicker />
             <Chart data={data} country={country}/>
            </div>
           );
    }
}

export default App;