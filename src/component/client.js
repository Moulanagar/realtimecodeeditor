import react from "react";
import Avatar from "react-avatar"; // Assuming Avatar is a component that displays user avatars

const Client = ({ username }) => {
    return (
        <div className="client">
            <Avatar name={username} size={50} round="14px"/>
            <span className="username">{username}</span>
        </div>
    );
};

export default Client;
