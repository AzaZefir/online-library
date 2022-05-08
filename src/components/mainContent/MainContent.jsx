import React, { useState } from "react";
import { data } from "./../../DAO/data";
import { MyModal } from "../common/MyModal/MyModal";
import Add from "./../../assets/image/add-svgrepo-com.svg";
import MyPostForm from "../common/MyPost/MyPost";
import Card from "./card/Card";
import EditCard from "./editCard/EditCard";

const MainContent = () => {
  const [book, setBook] = useState(data);
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const createPost = (newPost) => {
    setBook([newPost, ...book]);
    setModal(false);
  };

  const deletePost = (post) => {
    setBook(book.filter((p) => p.id !== post.id));
  };
  return (
    <div>
      <Card setEditMode={setEditMode} book={book} deletePost={ deletePost}/>
      {editMode ? (
        <Card/>
      ) : (
          <EditCard/>
      )}
      {book.length !== 0 || (
        <h1
          style={{ textAlign: "center", marginTop: "25%", marginBottom: "25%" }}
        >
          Books doesn't found
        </h1>
      )}
      <MyModal visible={modal} setVisible={setModal}>
        <MyPostForm create={createPost} />
      </MyModal>
      <div className="card_add">
        <img onClick={() => setModal(true)} src={Add} alt="" />
      </div>
    </div>
  );
};

export default MainContent;
