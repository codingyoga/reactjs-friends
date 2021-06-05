import React from 'react';
import Grid from '@material-ui/core/Grid';
import beer from './assets/beer.gif'
import './Tasks.css';
import Eachtask from './Eachtask';

//Five levels - Sober,Buzzed,Tipsy,Drunk,Wasted 

function Tasks() {
  return (
    <header className="App-header">
        <br></br><br></br>     
  <div>
      <div class="neon">Reactjs </div>
      <div class="flux">Friends </div>
  </div>
  <div>A fun way to learn reactjs.</div>
    <img src={beer} alt="loading..." /> 
    <div>
      <Grid container spacing={10}>
        <Eachtask task_num="Task 1" task_heading="Cheers React Friends"
        task_des="Display Cheers React Friends on UI" 
        sample_code_link = "https://codesandbox.io/s/modest-pine-89j19?file=/src/App.js" />

        <Eachtask task_num="Task 2" task_heading="Birthday Picker"
        task_des="Pop-up Calender and display selected date on UI" 
        sample_code_link = "https://codesandbox.io/s/modest-pine-89j19?file=/src/App.js" />

        <Eachtask task_num="Task 3" task_heading="Cocktail Mocktail"
        task_des="Display Cocktail menu in horizontal nav bar and Mocktail menu in vertical nac bar" 
        sample_code_link = "https://codesandbox.io/s/modest-pine-89j19?file=/src/App.js" />

        <Eachtask task_num="Task 4" task_heading="Offer Drink"
        task_des="Choose your fav drink from menu and display that image" 
        sample_code_link = "https://codesandbox.io/s/modest-pine-89j19?file=/src/App.js" />

        <Eachtask task_num="Task 5" task_heading="Order One More"
        task_des="Create a button to order drink and display drink count" 
        sample_code_link = "https://codesandbox.io/s/modest-pine-89j19?file=/src/App.js" />

        <Eachtask task_num="Task 6" task_heading="Order One More"
        task_des="Create a button to order drink and display drink count" 
        sample_code_link = "https://codesandbox.io/s/modest-pine-89j19?file=/src/App.js" />
      </Grid>
    </div>
    <br>
    </br>
    <br>
    </br>
    </header>
  );
}

export default Tasks;
