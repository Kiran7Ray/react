import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import LoginStatus from "./components/LoginStatus";
import RegistrationForm from "./components/RegistrationForm";
import WindowResizeListener from "./components/WindowResizeListener";
import FetchUsers from "./components/FetchUsers";
import FocusInput from "./components/FocusInput";

// export default function App() {
//   const laptops = [
//     { id: 1, name: "Dell", price: 800 },
//     { id: 2, name: "HP", price: 750 },
//     { id: 3, name: "Lenovo", price: 900 },
//   ];

//   return (
//     <div>
//       <h2>Products</h2>
//       {laptops.map((lap) => (
//         <ProductCard key={lap.id} name={lap.name} price={lap.price} />
//       ))}
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <FocusInput />
    </div>
  );
}
