import React from "react";
import { useState } from "react";
import Client from "../component/client"; // Assuming Client is a component that displays connected users
import Editor from "../component/editor"; // Assuming editor is a component that handles the code editing functionality
const EditorPage = () => {
    const [clients,setclients] = useState([
        {socketId: "1234",username: "User1"}, {socketId: "5678", username: "User2"}
    ]);
  return (
    <div>
      <div className="mainwrap">
        <div className="aside">
            <div className="asideInner">
                <div className="logo">
                    <img className="logoImage" src="/code-sync.png" alt="code-sync-logo" />
                </div>
                <h3>Connected</h3>
                <div className="clientslist">
                    {
                        clients.map((client) => (
                            <Client key={client.socketId} username={client.username} />
                        ))
                    }
                </div>
            </div>
            <button className="btn copyroomid">Copy Room ID</button>
            <button className="btn leavebtn">Leave</button> 
        </div>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
