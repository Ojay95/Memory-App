
import PropTypes from "prop_types";
import axios from "axios";

const Post = () => {
    const deletePost (postId) => {
        axios.delete (`http://localhost:5000/posts/delete_post/`)
            .then ((response) => console.log(response))
            .catch ((error)=> console.log (error))
    }
    return (
        <div className="post">
            <div
                style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    display: "flex",
                    padding: "20px",
                    justifyContent: "space-between",
                    height: "200px",
                    backgroundImage: `url(${post.form_selected_file})`,
                }}
                className="post_image"
            >
                <div className="creator">
                    <h4 style={{ marginBottom: "10px", color: "white" }}>{post.form_creator}</h4>
                    <p style={{ color: "white" }}>{post.form_created_at} </p>
                </div>
                <div className="edit">
                    <p style={{ color: "white" }}>...</p>
                </div>
            </div>

            <div className="desc">
                <p>{post.form_tag}</p>

                <h3 style={{ marginTop: "15px" }}>{post.form_title}</h3>

                <p style={{ margin: "15px 0" }}>{post.form_message}</p>

                <div className="post_action">
                    <button>LIKE</button>
                    <button type= "button" onClick={() => deletePost(post._id)}>DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default Post;
