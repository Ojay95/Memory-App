import { useEffect } from "react";
import bgimage from "../assets/img/memoryimage.jpg";
import {useDispatch} from "react-redux"
import {create_data} from "../features/posts/postSlice";

import axios from 'axios'; 

//loop
const dummy_array = [1, 2, 3, 4];

const Posts = () => {
    useEffect(() => {
        const fetch_data = () => {
            axios
                .get(`http://localhost:5000/posts/get_data`)
                .then((response) => dispatchEvent(create_data(response.data))
                .catch(() => console.log(error));
        };
        fetch_data();
    }, []);

    return (
        <div
            className="posts"
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "30px",
            }}
        >
            {dummy_array.map(function (value) {
                return (
                    <div className="post" key={value}>
                        <div
                            style={{
                                backgroundImage: `url(${bgimage})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                display: "flex",
                                padding: "20px",
                                justifyContent: "space-between",
                                height: "200px",
                            }}
                            className="post_image"
                        >
                            <div className="creator">
                                <h4 style={{ marginBottom: "10px", color: "white" }}>Ojay</h4>
                                <p style={{ color: "white" }}>2 months ago </p>
                            </div>
                            <div className="edit">
                                <p style={{ color: "white" }}>...</p>
                            </div>
                        </div>

                        <div className="desc">
                            <p>#china #australia</p>

                            <h3 style={{ marginTop: "15px" }}>Visited the Escape Room</h3>

                            <p style={{ margin: "15px 0" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque iure dolor molestias
                                optio distinctio explicabo, laudantium blanditiis placeat laboriosam excepturi.
                            </p>

                            <div className="post_action">
                                <button>LIKE</button>
                                <button>DELETE</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;
