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

// export default function App() {
//   return (
//     <div>
//       <FocusInput />
//     </div>
//   );
// }

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navigation from "./components/Navigation";
// import Home from "./components/Home";
// import About from "./components/About";
// import UserProfile from "./components/UserProfile";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div style={{ padding: 20 }}>
//         <h1>React Routing Example</h1>

//         {/* Navigation links */}
//         <Navigation />

//         <hr />

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user/:userId" element={<UserProfile />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

import Card from "./components/Card";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Card Component Demo</h1>

      {/* Card 1 */}
      <Card>
        <p>This is a paragraph inside card</p>
      </Card>

      {/* Card 2 */}
      <Card>
        <button>Click Me</button>
      </Card>

      {/* Card 3 */}
      <Card>
        <h3>Fruits</h3>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
        </ul>
      </Card>
    </div>
  );
}
