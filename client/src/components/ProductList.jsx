import React from 'react';
import { Table, Popconfirm, Button, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const ProductList = ({ onDelete, onEdit, products }) => {
  const columns = [
    {
        title: 'Product',
        dataIndex: 'description',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
    },
    {
        title: 'Final Unit Price',
        dataIndex: 'finalUnitPrice',
    },
    {
        title: 'Installments',
        dataIndex: 'installments',
    },
    {
        title: 'Paid installments',
        dataIndex: 'PaidInstallments',
    },
    {
        title: 'Beginning of term',
        dataIndex: 'beginningTerm',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
            <>
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                    <Tooltip title="Delete">
                        <Button style={{margin: 2}} type="primary" shape="circle" icon={<DeleteOutlined />} />
                    </Tooltip>
                </Popconfirm>
                <Tooltip title="Edit">
                    <Button onClick={() => onEdit(record.id)} style={{margin: 2}} type="primary" shape="circle" icon={<EditOutlined />} />
                </Tooltip>
            </>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

export default ProductList;