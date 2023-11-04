import { useEffect, useState } from "react";
import bgimage from "../assets/img/memoryimage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { create_data } from "../features/post/postSlice";

import axios from "axios";

//loop
const dummy_array = [1, 2, 3, 4];

const Posts = () => {
    const dispatch = useDispatch();
    //grab data from redux
    const posts = useSelector((state) => state.postSlice.posts);
    //console.log(posts);

    const [loading, setLoading] = useState(true);

    //the useEffect array([]) of dependency is set to empty, in order to facilitate
    useEffect(() => {
        const fetch_data = () => {
            axios
                .get(`http://localhost:5000/posts/get_data`)
                .then((response) => {
                    console.log(response);
                    dispatch(create_data(response.data));

                    set_loading(false);
                })
                .catch((error) => console.log(error));
        };
        fetch_data();
    }, []);

    if (loading) {
        return (
            <div className="" loader>
                <div className="" spinner></div>
            </div>
        );
    }

    return (
        <div
            className="posts"
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "30px",
            }}
        >
            {posts.map(function (post, index) {
                return <Post key={index} post={post} />;
            })}
        </div>
    );
};

export default Posts;
