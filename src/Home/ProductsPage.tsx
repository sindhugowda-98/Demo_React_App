import React, { useMemo, useRef, useState } from "react";
import Brand from "../Components/Brand";
import { getProducts } from "../Services/ProductService";
import ProductList from "./ProductList";
import FormulationSection from "./FormulationSection";
import { Product } from "../Services/ProductService";

interface ProductsPageProps {
  onHome: () => void;
  onLogin: () => void;
  initialProductId?: string;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onHome, onLogin, initialProductId }) => {
  // useMemo caches the service result for this page render. The callback only runs again if its dependency list changes.
  const products = useMemo(() => getProducts(), []);
  const [selectedProductId, setSelectedProductId] = useState(initialProductId ?? products[0]?.id);
  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId) ?? products[0],
    [products, selectedProductId],
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const detailRef = useRef<HTMLElement>(null);
  const selectProduct = (product: Product) => {
    setSelectedProductId(product.id);
    window.requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <main className="products-page">
      <div className="announcement"><span className="announcement-dot" /> SCIENCE FOR A MORE SUSTAINABLE TOMORROW</div>
      <header className="products-header">
        <Brand />
        <nav className={menuOpen ? "products-nav-open" : ""} aria-label="Main navigation">
          <a href="/#products" onClick={() => { setMenuOpen(false); onHome(); }}>Products</a>
          <a href="/#about" onClick={() => { setMenuOpen(false); onHome(); }}>About</a>
          <a href="/#contact" onClick={() => { setMenuOpen(false); onHome(); }}>Contact us</a>
        </nav>
        <button className="button button-primary" onClick={onLogin}>Login <span>→</span></button>
        <button className={`products-menu-toggle${menuOpen ? " is-open" : ""}`} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <section className="products-hero">
        <span className="eyebrow"><span className="eyebrow-line" /> OUR DAIRY PRODUCTS</span>
        <h1>Dairy favourites.<br /><em>Blended with care.</em></h1>
        <p>Explore our dairy products, from everyday milk ingredients to frozen treats. Select a card to learn more.</p>
      </section>

      {selectedProduct && <section ref={detailRef} className="product-detail" aria-live="polite">
        <div className="product-detail-image"><img src={selectedProduct.image} alt={selectedProduct.imageAlt} /></div>
        <div className="product-detail-copy">
          <span className="eyebrow"><span className="eyebrow-line" /> {selectedProduct.category}</span>
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <ul>{selectedProduct.highlights.map((highlight) => <li key={highlight}><span>✳</span>{highlight}</li>)}</ul>
          <a className="button button-dark" href="https://stabiblendbiotechsolutions.com">Ask about this product <span>↗</span></a>
        </div>
      </section>}

      <section className="products-catalog" id="products">
        <div className="products-catalog-heading">
          <div><span className="eyebrow">OUR PRODUCTS</span><h2>A range for <em>every occasion.</em></h2></div>
          <span className="catalog-count">{products.length} products</span>
        </div>
        <ProductList products={products} onSelect={selectProduct} selectedProductId={selectedProductId} />
      </section>

      <FormulationSection />

      <footer className="products-footer"><Brand /><button className="text-link" onClick={onHome}>← Return to home</button></footer>
    </main>
  );
};

export default ProductsPage;
