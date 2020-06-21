//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import DummyData from '../../dummy-data';
// import data 
/*
  const dummyData = [
    {
        username: "philzcoffee",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                username: "philzcoffee",
                text: "We've got more than just coffees!"
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "martinseludo",
                text: "Can't wait to try it!"
            }
        ]
    },
 */
const PostsPage = () => {
  // set up state for your data
  const {username, thumbnailUrl, imageUrl} = DummyData;
  const {likes} = DummyData;
  const {comments} = DummyData;
  const {text} = comments;
  const [postsData, setPostsData] = React.useState(username, thumbnailUrl, imageUrl);
  const [commentSectionData, setCommentSectionData] = React.useState(username, text)

  return (
    <div className="posts-container-wrapper">
      { data.map(post => {
        return (
          <div>
            <Post 
            postsData={postsData} 
            setPostsData={setPostsData} 
          />
          <CommentSection 
              commentSectionData={commentSectionData} 
              setCommentSectionData={setCommentSectionData} 
          />
          </div>
        )
      }
      )
    }
    </div>
  );
};

export default PostsPage;
