// by default only one component is exported with default

import Book from "./Book";

// let image1 = "";
// let title1 = "Mern Stack";
// let discription1 = "One to loading seller";

// to make an array of objects of above

// let book1 = {
//   image:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEziFnbLshsI42ikYObkKM8Gqqbqnrue8W63OIyfdvg&s",
//   title: "Mern Stack",
//   description: "One to loading seller",
// };

// let book2 = {
//   image:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQL5dXDT4Udaw7kScEd7Lb_tFXydQex0qQw4NVGpb&s",
//   title: "Web Development",
//   description: "A bright in demand technology",
// };

let arr = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEziFnbLshsI42ikYObkKM8Gqqbqnrue8W63OIyfdvg&s",
    title: "Mern Stack",
    description: "One to loading seller",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQL5dXDT4Udaw7kScEd7Lb_tFXydQex0qQw4NVGpb&s",
    title: "Web Development",
    description: "A bright in demand technology",
  },
];

// to use it replace the following like img={book1.image} title = {book1.title}

const Booklist = () => {
  return (
    <>
      {/* <Book img={book1.image} title={book1.title} description={book1.description} /> */}
      {/* <Book img={book2.image} title={book2.title} description={book2.description} /> */}
      {/* <Book/>  */}
      {arr.map((B) => {
        return (
          <div>
            <img src={B.image}></img>
            <h2>{B.title}</h2>
            <p>{B.description}</p>
          </div>
        );
      })}
    </>
  );
};
export default Booklist;
