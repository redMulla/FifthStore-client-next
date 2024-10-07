import { SalesModel } from '@/data';
import { Table } from 'flowbite-react';
import React from 'react';

interface SalesOrderProps {
  sales: SalesModel[];
}

const SalesOrder: React.FC<SalesOrderProps> = ({ sales }) => {
  return (
    <div className="flex flex-col rounded-lg dark:bg-gray-700 font-primary">
      <Table className="font-primary">
        <Table.Head>
          <Table.HeadCell>Channel</Table.HeadCell>
          <Table.HeadCell>Draft</Table.HeadCell>
          <Table.HeadCell>Confirmed</Table.HeadCell>
          <Table.HeadCell>Packed</Table.HeadCell>
          <Table.HeadCell>Shipped</Table.HeadCell>
          <Table.HeadCell>Invoiced</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {sales.map((sale) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={sale.id}
            >
              <Table.Cell>{sale.channel}</Table.Cell>
              <Table.Cell>{sale.draft}</Table.Cell>
              <Table.Cell>{sale.confirmed}</Table.Cell>
              <Table.Cell>{sale.packed}</Table.Cell>
              <Table.Cell>{sale.shipped}</Table.Cell>
              <Table.Cell>{sale.invoiced}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default SalesOrder;
