import React,{useState} from "react";
import { FormControl,InputLabel,Input,FormHelperText } from "@material-ui/core";

const Contact = () => {

  const  [Data, setData] = useState({
    email:"",
    mobile:"",
    text:"",
  });

  const handleEvent=(e)=>{
     const {name,value}=e.target;
     setData((prev)=>{
       return({
         ...prev,[name]:value,
       });
     })
  }

  const sendData=async ()=>{
    const res = await fetch("/contactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Data.email,
        mobile: Data.mobile,
        text:Data.text,
      }),
    });

    if (res.status===422){
      alert("missing credentials");
    }else{
      alert("Response Sent");
      setData({
        email:"",
        mobile:"",
        text:"",
      })
    }
  }
  return (
    <React.Fragment>
      <div className="Contact_wrapper">
        <div className="Contact_content">
        <h1><span>C</span>ontact <span>U</span>s</h1>
          <FormControl style={{"borderBottom":"1px solid #298fe8"}}>
            <InputLabel  htmlFor="Email_input">Email address</InputLabel>
            <Input name="email" value={Data.email}  id="Email_input" aria-describedby="my-helper-text" onChange={handleEvent} />
          </FormControl>
          <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          <FormControl style={{"borderBottom":"1px solid #298fe8","marginTop":"2rem"}}>
            <InputLabel htmlFor="Mobile_input">Mobile Number</InputLabel>
            <Input name="mobile" value={Data.mobile} onChange={handleEvent} id="Mobile_input" aria-describedby="my-helper-text" />
            
            
          </FormControl>
          <FormHelperText id="my-helper-text">
              We'll never share your Mobile Number.
            </FormHelperText>
          <textarea name="text" value={Data.text} onChange={handleEvent} placeholder="Leave Your Comments"/>
          <button onClick={sendData}>Submit</button>
        </div>
        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_bp1bwvhv.json"  background="transparent"  speed="1"  style={{"width":"500px","height":"500px"}}  loop  autoplay></lottie-player>
        
        
      </div>
    </React.Fragment>
  );
};

export default Contact;