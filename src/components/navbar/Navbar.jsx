import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='search' />
          <SearchIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon' />
            English
          </div>
          <div className='item'>
            <NightsStayIcon className='icon'/>
          </div>
          <div className='item'>
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className='item'>
            <NotificationsNoneIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListIcon className='icon'/>
          </div>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/11410332/pexels-photo-11410332.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
              alt='avatar img'
              className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
