// we can choose props name by ourself xyz
const Book = (props) => {
    // where ever we have object we can have destructuring
    let {img, title, description,arr} = props;
  return (
    <>
      <div>
        <img src="img"/>
        <h4>{title}</h4>
        <p>{description}</p>
      
        {/* <img src={props.img} alt=''/> */}
        {/* <h1>Hello World</h1>
        <img src={image} alt={title1} />
        <p>{title}</p>
        <p>discription</p> */}
      </div>
    </>
  );
};
export default Book;
