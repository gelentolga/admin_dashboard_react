import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  const percentage = 67;
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>
          Total revenue
        </h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={percentage} text={`% ${percentage}`} strokeWidth={7}
            styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 1,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(100, 30, 190, ${percentage / 100})`,
    textColor: 'purple',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
          />
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>$420</p>
        <p className='desc'>Previous transactions are processing. Last payment may not be include.</p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>
              Target
              
            </div>
            <div className='itemResult positive'>
              <ArrowUpwardIcon style={{fontSize:'18px'}} />
              <div className='resultAmount'>
              $34.4
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>
              Last week
            </div>
            <div className='itemResult negative'>
              <ArrowDownwardIcon style={{fontSize:'18px'}} />
              <div className='resultAmount'>
              $34.4
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>
              Last month
            </div>
            <div className='itemResult positive'>
              <ArrowUpwardIcon style={{fontSize:'18px'}} />
              <div className='resultAmount'>
              $34.4
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>  
  )
}
export default Featured;