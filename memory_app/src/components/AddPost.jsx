import { useState } from "react";
import axios from "axios";


const AddPost = () => {
    const [creator, setCreator] = useState("");
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = 

    const handleSubmit = (e) => {
        e.preventDefault();
        const memory = { creator, title, tag, message };

        //form validation
        if (creator === "" || title === "" || message === "" || tag === "") {
            console.log("input field cannot be empty!");
            return;
        }

        const formdata = {
            form_creator: creator,
            form_title: title,
            form_message: message,
            form_tag: tag,
        };

        axios
            .post("http://localhost:5000/posts/create", formdata)
            .then((response) => console.log(response)) //output successful message
            .catch((error) => console.log(error)); // output unsuccessful message
    };

    return (
        <div className="add_post">
            <h3>Create Your Memory</h3>
            <form onSubmit={handleSubmit}>
                <div className="creator">
                    <input
                        type="text"
                        placeholder="Creator"
                        value={creator}
                        onChange={(e) => setCreator(e.target.value)}
                    />
                </div>

                <div className="title">
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="Message">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                    ></textarea>
                </div>

                <div className="tag">
                    <input type="text" placeholder="Tag" value={tag} onChange={(e) => setTag(e.target.value)} />
                </div>

                <div className="file">
                    <input type="file" />
                </div>

                <div className="button">
                    <button type="submit" className="submit">
                        Submit
                    </button>
                    <button type="button" className="clear">
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;
