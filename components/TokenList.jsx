import React,{useState} from 'react'
import { Input, Popover, Radio, Modal, message, Button } from 'antd';
import { ArrowDownOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons';
import tokenList from '../utils/tokenList.json';
import { Switch } from 'antd';


const TokenList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <Modal
      open={isOpen}
      footer={null}
      onCancel={() => setIsOpen(false)}
      title="Select a token"
    >
      <div className='modalContent'>
        {tokenList?.map((e, i) => {
          return (
            <div
              className='tokenChoice'
              key={i}
              onClick={() => {}}>
              <img src={e.img} alt={e.ticker} className='tokenLogo' />
              <div className='tokenChoiceNames'>
                <div className='tokenName'>{e.name}</div>
                <div className='tokenTicker'>{e.ticker}</div>
              </div>
            </div>
          )
        })}

      </div></Modal>
      <div>
        <button onClick={()=> setIsOpen(true)}><SettingOutlined/></button>
      </div>
    </div>
  )
}

export default TokenList