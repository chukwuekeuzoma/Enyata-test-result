import React from 'react';
import "./LoginLayout.css"
import Loginsidebar from '../../Components/Loginsidebar/Loginsidebar';

export default function LoginLayout({children}) {
    return (
        <div className="login-layout-container">
             <div className="login_dashboardnav_container">
               <Loginsidebar/>
           </div>
           <div className="login_children_container">
              {children}
           </div>
        </div>
    );
}
