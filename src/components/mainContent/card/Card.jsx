import React from "react";
import MyButton from "../../common/MyButton/MyButton";
import Delete from "./../../../assets/image/delete-button-svgrepo-com.svg";
import Edit from "./../../../assets/image/edit-svgrepo-com.svg";

const Card = ({ book, setEditMode, deletePost }) => {
  const onSubmit = (data) => {
    setEditMode(false);
  };

  return (
    <div className="main_content_card_container">
      {book.map((item) => (
        <div key={item.id} className="card">
          <div className="image_block">
            <img src={item.img} alt="" />
          </div>
          <div>{item.name}</div>
          <div>{item.author}</div>
          <div>{item.category}</div>
          <div className="button_icon">
            <MyButton>Choose</MyButton>
            <img
              src={Delete}
              className="white"
              alt=""
              onClick={() => deletePost(item)}
            />
            <img src={Edit} alt="" onSubmit={onSubmit} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
