import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import Management from '../pages/Management';
import Demo from '../pages/Demo';

export default {
  menus: [
    {
      name: 'management',
      text: 'Management',
      icon: <UserOutlined />,
      items: [
        { text: '店铺装修', url: '/management' }
      ]
    },
    {
      name: 'demo',
      text: 'Demo',
      icon: <UserOutlined />,
      items: [
        { text: '示例', url: '/demo' }
      ]
    }
  ],
  routes: [
    {
      key: 'manage',
      path: '/management',
      component: Management
    },
    {
      key: 'demo',
      path: '/demo',
      component: Demo
    }
  ]
};
