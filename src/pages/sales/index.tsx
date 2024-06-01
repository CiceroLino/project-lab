import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sales } from '@prisma/client';


const Sales = () => {
  const [sales, setSales] = useState<sales[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`/api/sales?page=${currentPage}`)
      .then(res => res.json())
      .then(data => {
        setSales(data.sales);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      });
  }, [currentPage]);

  return (
    <div>
      <h1>sales</h1>
      <ul>
        {sales.map(sales => (
          <li key={sales.id}>
            <Link href={`/sales/${sales.id}`}>
              {sales.id} - ${sales.product_id}
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

export default Sales;
