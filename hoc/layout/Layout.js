  
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
    return (
        <div className="app_container">
                {children} {/*TODO: add real layout logic*/}
        </div>)
}

export default Layout;