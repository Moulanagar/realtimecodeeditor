import React,{useState} from "react";
import {v4 as uuid} from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";        

const Home = () => {
    const navigate = useNavigate();//to redirect to route
    const [roomid,setroomid] = useState("");
    const [username,setusername] = useState("");
    const createnewroom = (e) => {
        e.preventDefault();// to stop reloading
        const id= uuid();
        setroomid(id);

        toast.success("Created a new room");
    }
    const joinroom = (e) => {
        e.preventDefault();
        if (!roomid || !username) {
            toast.error("Room ID and Username are required");
            return;
        }
        // Logic to join the room
        toast.success(`Joined room: ${roomid}`);
        //redirect
        navigate(`/editor/${roomid}`, { 
            state: { 
                username,    
            } // pasing data from one route to other
        }
        );
    }

    const handleInputEnter=(e)=>{
        if (e.key === "Enter") {
            joinroom(e);
        }
    }
    
  return (
    <div className="homePageWrapper">
        <div className="formWrapper">
            <img src="./code-sync.png" alt="code-sync-logo" />
            <h4 className="mainlabel">Paste Invitation Room Id</h4>
            <div className="inputGroup">
                <input type="text" className="inputbox" placeholder="Room Id"
                onChange={(e) => setroomid(e.target.value)}// to set manually
                value={roomid} 
                onKeyUp={handleInputEnter}
                />

                <input type="text" className="inputbox" placeholder="User Name"
                onChange={(e) => setusername(e.target.value)}// to set manually
                value={username} 
                onKeyUp={handleInputEnter}
                />

                <button className="btn joinbtn" onClick={joinroom}> Join</button>

                <span className="createinfo">
                    If you don't have an invite then create &nbsp;
                    <a onClick={createnewroom} href="" className="createNewBtn">
                        New Room
                    </a>
                </span>
            </div>
            
        </div>
        <footer>
            <h4>Built with 💙 by Arham</h4>
        </footer>
    </div>
  );
};

export default Home;
