import React, { useState } from "react";
import "./homepage.css"
import axios from "axios"

const Homepage = (props) => {
    const [inputField , setInputField] = useState({
        name: props.currentUser.name,
        email: props.currentUser.email,
        password:props.currentUser.password,
        reEnterPassword: props.currentUser.password,
        _id:props.currentUser._id
    })

    const updateUser = async () => {
        alert(JSON.stringify(inputField));
        const { name, email, password, reEnterPassword } = inputField
        if( name && email){
            const response = await axios.post(`http://localhost:8000/updateUser/${props.currentUser._id}`, inputField)
            .catch((error) => alert(error))

            if (response && response.data) {
                console.log(response);
                console.log(response.data);
            }
        } else {
            alert("invalid input")
        }
        
    }
    
    const inputsHandler = (e) =>{
        const { name, value } = e.target;
       setInputField((prevState) => ({
         ...prevState,
         [name]: value,
       }));
    }
    
    const submitButton = () =>{
        alert(inputField.name)
        updateUser(inputField);
    }

    
    
    return (
        <div className="homepage">
        <div className="register">

             Name
            <input 
            type="text" 
            name="name" 
            onChange={inputsHandler} 
            placeholder="User Name" 
            value={inputField.name}/>
    
            <br/>
            <br/>
             E-mail
            <input 
            type="text" 
            name="email" 
            onChange={inputsHandler} 
            placeholder="E-mail" 
            value={inputField.email}/>
    
            <br/>
            <br/>
             Password
            <input 
            type="text"
            name="password" 
            onChange={inputsHandler} 
            placeholder="Paasword" 
            value={inputField.password}/>
             <br/>
            <br/>
            <br/>
            <button type="button" class="btn btn-warning" style={{width:'100%'}} onClick={submitButton}>Update</button>
            <hr/>
            <a style={{textDecoration:'none', color:'black'}} href="/login"><button type="button" class="btn btn-info" style={{width:'100%'}}>Logout</button></a>
            

        </div>
        </div>
    )
}

export default Homepage