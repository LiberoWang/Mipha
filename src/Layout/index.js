import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu }  from 'antd';

const { Content, Sider } = Layout;

const MainLayout = ({ menus, children }) => {
  const history = useHistory();

  const handleSelect = useCallback(({ item }) => {
    const dataItem = item.props['data-item'];
    handleGoUrl(dataItem);
  }, []);

  const handleGoUrl = useCallback(item => {
    const { url } = item;
    history.push(url);
  }, []);

  return (
    <Layout>
      <Sider theme="dark">
        <Menu
          theme="dark"
          mode="inline"
          onSelect={handleSelect}
        >
          { renderMenus(menus) }
        </Menu>
      </Sider>
      <Layout>
        <Content>
          { children }
        </Content>
      </Layout>
    </Layout>
  );
};

function renderMenus(menus) {
  return menus.map(items => {
    const children = items.items;
    if (children?.length) {
      return (
        <Menu.SubMenu
          key={items.text}
          title={
            <span>
              {items.icon}
              <span>{items.text}</span>
            </span>
          }
        >
          { renderMenus(children) }
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item data-item={items} key={items.text}>
        <span>{items.text}</span>
      </Menu.Item>
    );
  });
}

export default MainLayout;
