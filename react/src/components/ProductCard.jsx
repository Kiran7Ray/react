export default function ProductCard({ name, price }) {
  return (
    <div style={{ border: "1px solid black", margin: 5, padding: 10 }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}
