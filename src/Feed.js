import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase.js";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { updateDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { query, orderBy } from "firebase/firestore";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
function Feed() {
  const [input, SetInput] = useState("");
  const [posts, Setposts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postCol = collection(db, "posts");
        const querySnapshot = await query(
          postCol,
          orderBy("timestamp", "desc")
        );
        const postsLists = await getDocs(querySnapshot);
        const postsList = postsLists.docs.map((doc) => doc.data());
        Setposts(postsList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [posts]);

  const sendPost = async (e) => {
    e.preventDefault();
    const postId = uuidv4();

    try {
      await setDoc(doc(db, "posts", postId), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoURL || "",
        timestamp: serverTimestamp(),
      });
      SetInput("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="" onSubmit={sendPost}>
            <input
              type="text"
              value={input}
              onChange={(e) => SetInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#007ebb" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              name={post.name}
              description={post.description}
              message={post.message}
              photoURL={post.photoUrl}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
