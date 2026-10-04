import React, { Component } from "react";
import { Product } from "../Services/ProductService";
import "./product.css";

interface ProductListProps {
  products: Product[];
  onSelect: (product: Product) => void;
  selectedProductId?: string;
}

class ProductList extends Component<ProductListProps> {
  render() {
    const { products, onSelect, selectedProductId } = this.props;

    return (
      <div className="product-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <article
              className={`product-card overflow-hidden rounded-xl${selectedProductId === product.id ? " product-card-selected" : ""}`}
            key={product.id}
          >
            <button
              className="product-card-action"
              type="button"
              onClick={() => onSelect(product)}
              aria-label={`View details for ${product.name}`}
            >
              <span className="product-image-wrap">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                />
                <span className="product-image-tag">{product.category}</span>
              </span>
              <span className="product-card-copy">
                <span className="product-number">
                  {String(index + 1).padStart(2, "0")} / PRODUCT
                </span>
                <span className="product-name">{product.name}</span>
                <span className="product-summary">{product.summary}</span>
                <span className="product-card-link">
                  View details <span aria-hidden="true">↗</span>
                </span>
              </span>
            </button>
          </article>
        ))}
      </div>
    );
  }
}

export default ProductList;
