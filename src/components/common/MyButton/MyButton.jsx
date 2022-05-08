const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className='my_button'>
            {children}
      </button>
    )
  }
  
  export default MyButton