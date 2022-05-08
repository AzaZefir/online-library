import ModalClose from './../../../assets/image/close (1).png'

export const MyModal = ({ children, visible, setVisible }) => {
    const rootClasses = ['myModal'];
  
    if (visible) {
      rootClasses.push('active');
    }
  
    return (
      <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
        <div
          className='myModalContent'
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <img src={ModalClose} onClick={() => setVisible(false)} alt="" />
        </div>
      </div>
    );
  };