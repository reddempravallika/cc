import firebase from "./Firestore";
import {useState} from 'react';
 
const Courselist = () => {
    const db = firebase.firestore();
    const [info , setInfo] = useState([]);
 
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
 
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("courses").get().then((querySnapshot) => {
            
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                console.log(element)
                setInfo(arr => [...arr , data]);
                 
            });
        })
    }
     
    // Display the result on the page
    return (
        <div>
            <center>
            <h2>Course Details</h2>
            </center>
         
        {
            info.map((data) => (
            <Frame 
                   name={data.name}
                   />
            ))
        }
        </div>
 
    );
}
 
// Define how each display entry will be structured
const Frame = ({  name }) => {
    console.log(name);
    return (
        <center>
            <div className="div">
                 
            <p>NAME : {name}</p>
  
 
  
            </div>
        </center>
    );
}
 
export default Courselist;