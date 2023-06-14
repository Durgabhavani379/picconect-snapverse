import React from 'react'; 
import './Home.css';

export default function Home() {
  return (
    <div className="home">
          <div className="card">
            {/* card header */}
            <div className="card-header">
              <div className="card-pic">
                <img
                  src="https://th.bing.com/th/id/OIP.0ivs6TOTxbo0ArFFwaM41QHaEo?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                />
              </div>
              <h5>
               Rani
              </h5>
            </div>
          
            <div className="card-image">
              <img src="https://th.bing.com/th/id/OIP.0ivs6TOTxbo0ArFFwaM41QHaEo?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"alt="" />
            </div>
            <div className="card-content">
             
                <span
                  className="material-symbols-outlined material-symbols-outlined-red">
                  
                  favorite
                </span>
                <span>
                  favorite
                </span>
              <p>Likes</p>
            
              <p style={{ fontWeight: "bold", cursor: "pointer" }}>
            View all comments
              </p>
            </div>

            {/* add Comment */}
            <div className="add-comment">
              <span className="material-symbols-outlined">mood</span>
              <input
                type="text"
                placeholder="Add a comment"
                />
              <button>
                Post
              </button>
            </div>
          </div>
        <div className="showComment">
          <div className="container">
            <div className="postPic">
              <img src="https://th.bing.com/th/id/OIP.0ivs6TOTxbo0ArFFwaM41QHaEo?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"alt="" />
            </div>
            <div className="details">
              {/* card header */}
              <div
                className="card-header"
                style={{ borderBottom: "1px solid #00000029" }}
              >
                <div className="card-pic">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <h5>Swathi</h5>
              </div>

              {/* commentSection */}
              <div
                className="comment-section"
                style={{ borderBottom: "1px solid #00000029" }}>
       
                      <span className="commentText">Comment</span>
                </p>
              </div>

              {/* card content */}
              <div className="card-content">
                <p> Likes</p>
                <p>{item.body}</p>
              </div>
              <div className="add-comment">
                <span className="material-symbols-outlined">mood</span>
                <input
                  type="text"
                  placeholder="Add a comment"
                  
                />
                <button
                  className="comment">Post
                </button>
              </div>
            </div>
          </div>
          <div>
            <span className="material-symbols-outlined material-symbols-outlined-comment">
              close
            </span>
          </div>
        </div>
    </div>
  );
}