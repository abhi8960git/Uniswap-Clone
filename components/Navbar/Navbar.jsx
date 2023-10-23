import React from 'react'
import coin from '../../public/currency.png'
import Link from 'next/link'
import Image from 'next/image'
import TokenList from '../TokenList'
import {SwapTokenContext} from '../../context/SwapContext';
import { useContext } from 'react'
import { connectWallet } from '@/utils/appFeature'
function Navbar() {
const {ether, account, networkConnect, tokenData } = useContext(SwapTokenContext);
console.log(ether, account, networkConnect);
console.log(tokenData);

const oddIndexElements = tokenData.filter((item, index) => {
  return index === tokenData.findIndex(obj => obj.name === item.name);
});


console.log(oddIndexElements);
console.log( "this is real token data",tokenData);

function trimString(str) {
  return str.slice(0, 10);
}

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
          {
            networkConnect ? (
                 <h1>{networkConnect.name}</h1>
            ):(
                  <h1>Name</h1>
            )
          }
        </div>

        {
          account ? (
            <div className='connectButton'>
            {trimString(account)}
          </div>
          ):(
            <div className='connectButton' onClick={connectWallet}>
            Connect
          </div>

          )
        }
       
        <TokenList tokenDate={oddIndexElements}/>
      </div>
    </header>
  )
}

export default Navbar