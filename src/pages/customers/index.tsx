import { useState, useEffect } from 'react';
import Link from 'next/link';
import { customers } from '@prisma/client';


const Customers = () => {
  const [customers, setCustomers] = useState<customers[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`/api/customers?page=${currentPage}`)
      .then(res => res.json())
      .then(data => {
        setCustomers(data.customers);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      });
  }, [currentPage]);

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map(customers => (
          <li key={customers.id}>
            <Link href={`/customers/${customers.id}`}>
              {customers.id} - ${customers.category}
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

export default Customers;
