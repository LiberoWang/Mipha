import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConfigProvider, Layout, Menu } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
// import MainLayout from './Layout';
// import configs from './config/router.config';
import configs from './config/router';
import style from './index.scss';

const { Content, Sider } = Layout;

const Page = () => {
  // const { routes, menus } = configs;
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const defaultItem = configs[0]?.children?.[0] || configs[0];
    setCurrent(defaultItem);
  }, []);

  const handleClick = e => {
    const currentKey = e.key;
    const menus = configs.map(con => con.children);
    const currentItem = menus.flat().find(menu => menu.key === currentKey);
    setCurrent(currentItem);
  };

  if (!current) {
    return null;
  }

  const ComponentContent = current.component;

  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            items={configs}
            onClick={handleClick}
            selectedKeys={[current?.key]}
          />
        </Sider>
        <Layout>
          <Content>
            <ComponentContent />
          </Content>
        </Layout>
      </Layout>
      {/* <Router>
        <MainLayout menus={menus} routes={routes}>
          <Switch>
            { routes.map(({ key, path, component }) => {
                return (
                  <Route key={key} exact path={path} component={component} />
                );
            })}
          </Switch>
        </MainLayout>
      </Router> */}
    </ConfigProvider>
  );
};

ReactDOM.render(<Page />, document.getElementById('root'));
