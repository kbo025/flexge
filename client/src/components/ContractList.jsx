import React from 'react';
import { Table, Popconfirm, Button, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const ContractList = ({ onDelete, contracts }) => {
  const columns = [
    {
      title: 'Document Number',
      dataIndex: 'documentNumber',
    },
    {
        title: 'Social Reason',
        dataIndex: 'socialReason',
    },
    {
        title: 'Company',
        dataIndex: 'company',
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
                    <Button style={{margin: 2}} type="primary" shape="circle" icon={<EditOutlined />} />
                </Tooltip>
            </>
        );
      },
    },
  ];
  return <Table dataSource={contracts} columns={columns} />;
};

export default ContractList;