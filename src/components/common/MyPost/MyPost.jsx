import { useState } from "react";
import MyButton from "../MyButton/MyButton";

const MyPostForm = ({ create }) => {
  const [post, setPost] = useState({ img: "", name: "", author: "", category:''});

  const addPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({img: "", name: "", author: "", category:'' });
  };

  return (
    <form className='post_container'>
      <div className='modal_input'>
        <span>Image</span>
        <input
          type=''
          className='textArea'
          placeholder="Image URL"
          onChange={(e) => setPost({ ...post, img: e.target.value })}
          value={post.distance}
        ></input>
      </div>
      <div className='modal_input'>
        <span>Name</span>
        <input
          className='textArea'
          onChange={(e) => setPost({ ...post, name: e.target.value })}
          value={post.time}
        ></input>
      </div>
      <div className='modal_input'>
        <span>Author</span>
        <input
          className='textArea'
          onChange={(e) => setPost({ ...post, author: e.target.value })}
          value={post.date}
        ></input>
      </div>
      <div className='modal_input'>
        <span>Category</span>
        <input
          className='textArea'
          onChange={(e) => setPost({ ...post, category: e.target.value })}
          value={post.date}
        ></input>
      </div>

      <div className='item'>
        <MyButton className='btn' onClick={addPost}>
          Save
        </MyButton>
      </div>
    </form>
  );
};
export default MyPostForm;
