const Pizza = (props) => {

  return (
    <div
      className="pizza"
      onClick={() => {
        console.log("hi");
      }}
    >
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} />
    </div >
  );
};

export default Pizza;
//export const Blah = () => <h1>blah</h1>
