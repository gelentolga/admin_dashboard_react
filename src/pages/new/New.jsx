import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";

const New = ({ inputs, title }) => {
  
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              alt="img"
            />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
              <label htmlFor="file">Image: <AddPhotoAlternateIcon className="icon"/></label>
              <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              {inputs.map((input) =>
            <div className="formInput">
              <label>{input.label}</label>
              <input type={input.type} placeholder={input.placeholder}/>
          </div>
          )}
            <button>Send</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
