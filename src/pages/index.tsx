import { useEffect, useState } from "react";
import CustomerController from "@/api/customer.controller";
import ProductController from "@/api/product.controller";
import SalesController from "@/api/sales.controller";
import { Card, Layout, Table } from "antd";

export default function HomePage() {
  const [customers, setCustomers] = useState([]);
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerList = await CustomerController.list();
        const salesList = await SalesController.list();
        const productList = await ProductController.list();

        setCustomers(customerList);
        setSales(salesList);
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const customerColumns = [
    { title: 'Customer ID', dataIndex: 'customer_id' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Gender', dataIndex: 'gender' },
    { title: 'Location', dataIndex: 'location' },
    { title: 'Item Purchased', dataIndex: 'item_purchased' },
    { title: 'Purchase Amount (USD)', dataIndex: 'purchase_amount_usd' },
  ];

  const salesColumns = [
    { title: 'User ID', dataIndex: 'user_id' },
    { title: 'Product ID', dataIndex: 'product_id' },
    { title: 'Interaction Type', dataIndex: 'interaction_type' },
    { title: 'Timestamp', dataIndex: 'time_stamp' },
  ];

  const productColumns = [
    { title: 'Product ID', dataIndex: 'uniqe_id' },
    { title: 'Product Name', dataIndex: 'product_name' },
    { title: 'Brand', dataIndex: 'brand_name' },
    { title: 'Category', dataIndex: 'category' },
    { title: 'List Price', dataIndex: 'list_price' },
    { title: 'Selling Price', dataIndex: 'selling_price' },
  ];

  return (
    <Layout>
      <Layout.Content>
        <Card title="Customers">
          <Table dataSource={customers} columns={customerColumns} />
        </Card>
        <Card title="Sales">
          <Table dataSource={sales} columns={salesColumns} />
        </Card>
        <Card title="Products">
          <Table dataSource={products} columns={productColumns} />
        </Card>
      </Layout.Content>
    </Layout>
  );
}
