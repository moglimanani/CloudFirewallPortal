import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import './navigation.scss';
import { useHistory } from 'react-router-dom';
import { HomeOutlined, DatabaseOutlined, SettingOutlined, WalletOutlined } from '@ant-design/icons';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const history = useHistory();
  const [collapsed, seCollapsed] = useState(false);
  const navigate = (item, key, keyPath) => {
    const path = { '1': '/', '3': '/support' };
    history.push(path[key]);
  };
  const navigateSubMenu = (key, domEvent) => {
    const path = { metrics: '/metrics' };
    history.push(path[key.key]);
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={currentCollapse => seCollapsed(currentCollapse)}
      className="mainSidebar"
    >
      <div className="logo">
        <img src="./assets/images/logoBig.png" alt="logo" className="bigLogo" />
        <img src="./assets/images/Shift_MaxisBusiness_Logo_Vertical_RGB.png" alt="home icon" className="smallLogo" />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        onClick={({ item, key, keyPath }) => navigate(item, key, keyPath)}
      >
        <Menu.Item key="1">
          <div className="imgBlock">
            {/* <img src="./assets/images/menu_home.png" alt="home icon" /> */}
            <HomeOutlined />
          </div>
          <span>Home</span>
        </Menu.Item>

        <SubMenu
          key="metrics"
          onTitleClick={(key, domEvent) => navigateSubMenu(key, domEvent)}
          title={
            <div>
              <div className="imgBlock">
                {/* <img src="./assets/images/menu_firewall_metrics.png" alt="firewall icon" /> */}
                <DatabaseOutlined />
              </div>
              <span>Firewall Metrics</span>
            </div>
          }
        >
          <Menu.Item key="21">
            <span>Firewall Throughput</span>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="3">
          <div className="imgBlock">
            {/* <img src="./assets/images/menu_support.png" alt="firewall icon" /> */}
            <SettingOutlined />
          </div>
          <span>Support and CR</span>
        </Menu.Item>
      </Menu>
      <Header className="menuTrigger">
        <div className="trigger" onClick={() => seCollapsed(!collapsed)} role="presentation">
          <div className="imgBlock">
            {/* <img src="./assets/images/menu_toggle.png" alt="trigger icon" /> */}
            <WalletOutlined />
          </div>

          <span>Toggle Sidebar</span>
        </div>
      </Header>
    </Sider>
  );
}

export default Navigation;
