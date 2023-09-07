import React from 'react'
import coin from '../../public/currency.png'
import Link from 'next/link'
import Image from 'next/image'
import TokenList from '../TokenList'
function Navbar() {
  return (
    <header>
      <div className='leftH'>
        {/* <img ></img> */}
       {/* <Link to='/' className='link'> */}
       <div className='headerItem'>Swap</div>
       {/* </Link> */}
   {/* <Link to='/tokens' className='link'> */}
   <div className='headerItem'>Tokens</div>
   <div className='headerItem'>Pools</div>
   {/* </Link> */}
      </div>
      <div className='rightH'>
        <div className='headerItem'>
       <Image src={coin} alt='eth' width={20} height={20} className='mr-2'/>
          Ethereum
        </div>
        <div className='connectButton'>
          Connect
        </div>
        <TokenList/>
      </div>
    </header>
  )
}

export default Navbar