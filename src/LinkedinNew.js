import React from 'react'
import './LinkedinNews.css'
import InfoIcon from '@mui/icons-material/Info';
import { Icon } from '@mui/material';
import InputOption from './InputOption';
import HeaderOption from './HeaderOption';

function LinkedinNew() {
  return (
    <div className='news'>
        <div className="news__feed">
        <h3>LinkedIn News</h3>
        <HeaderOption Icon={InfoIcon}/>
        </div>
        <div className="news__news">
            
        <ul className='list' >
          <div className="indi__news">
          <li className='unordered'>Smaller cities et solar boost</li>
              <div className="perks"> <p>1d ago	
&#183; 748 readers</p></div>
          </div>

          <div className="indi__news">
       
          <li  className='unordered'>Quic commerce races ahed</li>
          <div className="perks"> <p>1d ago	
&#183; 654 readers</p></div>

          </div>
          <div className="indi__news">
          <li  className='unordered'>Balancin Gen Al risks and rewards</li>
          <div className="perks"> <p>1d ago	</p></div>
          </div>
          <div className="indi__news">
          <li  className='unordered'>Hos itali Has an occu anc issue</li>
          <div className="perks"> <p>23h ago	</p></div>
          </div>
          <div className="indi__news">
          <li  className='unordered'>Ke takeawa s from Bud et 2024</li>
          <div className="perks"> <p>22h ago	</p></div>
          </div>
           
           
           
           
           
           
           
        </ul> 

        </div>
      
      
    </div>
  )
}

export default LinkedinNew
