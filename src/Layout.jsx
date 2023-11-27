import { Outlet, Link } from "react-router-dom";
import logo from './assets/inTalentLogoWhite.png'


function Layout() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" height={100} style={{ marginRight: '10px' }} />
            </div>
            <Outlet />
        </>
    )
};

export default Layout;