import React, { useState, useEffect} from "react";
import { Box } from "@chakra-ui/react";
import axios from 'axios'

const initstate={
      title:"",
      price:"",
      imageUrl:""
     };

function Admin({handleFormSubmit}){
      const [formState,setFormState] = React.useState(initstate);
      const[Data,setData]=React.useState([])
      
      const getData=()=>{
        return axios({
            method:'get',
            url:`https://mockserver-y04s.onrender.com/products?_limit=3`
        })
    };

const fetchedData=()=>{
    getData().then((res)=>setData(res.data))
};

useEffect(()=>{
    fetchedData()
},[]);

      const handleChange=(e)=>{
            //  e.preventDefault(); //when we submit the form it prevents the default behaivour
            const {name,value}=e.target;
            setFormState({
              ...formState,
              [name]:value,
             });
            };
            const handleSubmit=()=>{}
console.log(formState)
// const handleSubmit=(e)=>{
//       e.preventDefault();
//       handleFormSubmit(formState);
//       setFormState(initstate);
// };
const {title,price,imageUrl}=formState;
      return(<>
      <h1>Adimn Page</h1>
            <div id='product-creation-form' style={{border:'1px solid Red', width:'40%',margin:'auto',paddingTop:'10px',paddingBottom:'20px'}}>
                  <form onSubmit={handleSubmit}> 
                        <label>
                              Title:
                              <input 
                              name='title'
                              type="text" placeholder='Enter product Title'
                              value={title}
                              onChange={handleChange}
                              />
                        </label>
                        <br/>
                        <br/>
                        <label>
                              Price:
                              <input 
                              name='price'
                              type="number" placeholder='Enter product Price'
                              value={price}
                              onChange={handleChange}
                              />
                        </label>
                        <br/>
                        <br/>
                        <label>
                              Imageurl:
                              <input 
                              name='imageUrl'
                              type="text" placeholder='Enter product Image'
                              value={imageUrl}
                              onChange={handleChange}
                              />
                        </label>
                        <br/>
                        <br/>
                        <label>
                              <input type="submit" value="Add Product"  />
                        </label>
                  </form>
            </div>
            <div style={{border:'1px solid black',height:'300px',display:'grid',gridTemplateColumns:'repeat(4,1fr'}} >
                {Data.map((el)=>(
                    <Box key={el.id}>
                        <img src={el.image} width='200px'/>
                    </Box>
                ))}
            </div>
            </>
      )
}

export default Admin;