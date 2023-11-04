import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
    return (
        <div className="app" style={{ background: "nav", height: "100vh" }}>
            <div className="container">
                <Header />
                <div
                    className=""
                    style={{ display: "flex", justifyContent: "space-between", columnGap: "20px", alignItems: "start" }}
                >
                    <Posts />
                    <AddPost />
                </div>
            </div>
        </div>
    );
};

export default App;
