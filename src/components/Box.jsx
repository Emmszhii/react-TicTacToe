export default function Box(props) {
  const { clickHandler } = props;
  return (
    <>
      <div className="box" onClick={props.clickHandler} id={props.id}></div>
    </>
  );
}
