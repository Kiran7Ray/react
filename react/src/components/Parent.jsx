import Child from "./Child";

export default function Parent(props) {
  return (
    <div>
      <Child userName={props.userName} />
    </div>
  );
}
