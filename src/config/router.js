import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import Management from '../pages/Management';
import Demo from '../pages/Demo';

export default [
  {
    key: 'demo',
    label: '示例',
    icon: <UserOutlined />,
    children: [
      { key: 'demo1', label: '店铺装修', url: './demo', component: Demo }
    ]
  },
  {
    key: 'manage',
    label: '管理',
    icon: <UserOutlined />,
    children: [
      { key: 'manage1', label: '管理列表', url: './manage', component: Management }
    ]
  }
];
