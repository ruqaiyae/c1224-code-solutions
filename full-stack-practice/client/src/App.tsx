import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Product } from './components/Product';
import { About } from './components/About';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
