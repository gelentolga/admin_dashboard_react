import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
          <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}>
           <span className='logo'>Tolga</span>
            </Link>
          </div>
          <hr/>
        <div className='center'>
              <ul>
                  <p className='title'>MAIN</p>
                  <li>                      
                      <DashboardIcon />
                      <span>
                          Dashboard
                      </span>
                  </li>
                  <p className='title'>LIST</p>
                  <Link to="/products" style={{textDecoration:"none"}}>
                  <li>                     
                      <ProductionQuantityLimitsIcon className='icon'/>
                      <span>
                          Products
                      </span>
                  </li>
                  </Link>
                  <Link to="/users" style={{textDecoration:"none"}}>
                  <li>                      
                      <PeopleAltIcon className='icon'/>
                      <span>
                          Users
                      </span>
                  </li>
                  </Link>
                  <li>
                      <BorderInnerIcon className='icon'/>
                      <span>
                          Orders
                      </span>
                  </li>
                  <li>
                      <LocalShippingIcon className='icon'/>
                      <span>
                          Delivery
                      </span>
                  </li>
                  <p className='title'>USEFUL</p>
                  <li>
                      
                      <EqualizerIcon className='icon'/>
                      <span>
                          Stats
                      </span>
                  </li>
                  <li>
                      <NotificationsIcon className='icon'/>
                      <span>
                          Notifications
                      </span>
                  </li>
                  <p className='title'>SERVICE</p>
                  <li>
                      
                      <SystemSecurityUpdateGoodIcon className='icon'/>
                      <span>
                          System healts
                      </span>
                  </li>
                  <li>
                      <VpnKeyIcon className='icon'/>
                      <span>
                          Logs
                      </span>
                  </li>
                  <li>
                      <SettingsIcon className='icon'/>
                      <span>
                          Settings
                      </span>
                  </li>
                  <p className='title'>USERS</p>
                  <li>
                      
                      <PersonIcon className='icon'/>
                      <span>
                          Profile
                      </span>
                  </li>
                  <li>
                      <LogoutIcon className='icon'/>
                      <span>
                          Log Out
                      </span>
                  </li>
           </ul>   
        </div>
        <div className='bottom'>
              <div className='colorOption'></div>
              <div className='colorOption'></div>
        </div>
    </div>
  )
}

export default Sidebar
