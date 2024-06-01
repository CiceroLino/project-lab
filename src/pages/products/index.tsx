import { useState, useEffect } from 'react';
import Link from 'next/link';
import { products } from '@prisma/client';


const Products = () => {
  const [products, setProducts] = useState<products[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`/api/products?page=${currentPage}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      });
  }, [currentPage]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(products => (
          <li key={products.id}>
            <Link href={`/products/${products.id}`}>
              {products.product_name} - ${products.about_product}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
      <Link href="/">
        Home
      </Link>
    </div>
  );
};

export default Products;
