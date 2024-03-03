import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'antd'
import { Link, Outlet } from 'react-router-dom';
import { logOut } from '../store/Features/UserSlice';
import './style.scss'
const { Content, Footer } = Layout

const CustomLayout = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  if (isAuth) {
    return (
      <Layout>
        <div className="header">
          <div className="header_logo"></div>
          <ul className='header_menu'>
            <li><Link to={'/'} onClick={() => dispatch(logOut())}>Logout</Link></li>
          </ul>
        </div>
        <Content>
          <Outlet />
        </Content>
        <Footer>
          CloudClient
        </Footer>
      </Layout>
    )
  }
};

export default CustomLayout;