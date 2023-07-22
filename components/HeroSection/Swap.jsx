import React, { useState } from 'react'
import { Input, Popover, Radio, Modal, message, Button } from 'antd';
import { ArrowDownOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons';
import TokenList from '../../utils/tokenList.json'
import { Switch } from 'antd';
function Swap() {
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState(null)
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null)
  const [tokenOne, setTokenOne] = useState(TokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(TokenList[1]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1)
  function handleSlippage(e) {
    setSlippage(e.target.value);
  }
  function changeAmount(e) {
    setTokenOneAmount(e.target.value);
  }

  function switchTokens() {
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two)
    setTokenTwo(one)
  }
  function openModal(asset) {
    setChangeToken(asset);
    setIsOpen(true)
  }
  function modifyToken(i) {
    if (changeToken === 1) {
      setTokenOne(TokenList[i])
    } else {
      setTokenTwo(TokenList[i])
    }
    setIsOpen(false);

  }


  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const setting = (
    <>
      <div>Slippage Tolerance</div>
      <div className='flex gap-2 my-3'>

        <Button type='button' className='text-white bg-[#3a4157]  py-1 ' >Auto</Button>
        <input className='border-2 border-[#3a4157] bg-transparent rounded-lg p-1 px-3 text-end' placeholder='0.10%' ></input>
      </div>
      <div className='flex gap-2 my-3'>

        <input className='border-2 border-[#3a4157] bg-transparent rounded-lg p-1 px-3 text-end w-[166px] ' placeholder='30' ></input>
        <Button type='button' className='text-white bg-[#3a4157]  py-1 ' >minutes</Button>

      </div>
      <div className='flex gap-2 my-3 items-center justify-between'>
        <p>Transaction Deadline</p>
        <Switch checkedChildren="Yes" unCheckedChildren="No" className=' bg-[#3a4157] hover:bg-[#3a4157] '/>
      </div>

    </>
  )
  return (<>
    <Modal
      open={isOpen}
      footer={null}
      onCancel={() => setIsOpen(false)}
      title="Select a token"
    >
      <div className='modalContent'>
        {TokenList?.map((e, i) => {
          return (
            <div
              className='tokenChoice'
              key={i}
              onClick={() => modifyToken(i)}>
              <img src={e.img} alt={e.ticker} className='tokenLogo' />
              <div className='tokenChoiceNames'>
                <div className='tokenName'>{e.name}</div>
                <div className='tokenTicker'>{e.ticker}</div>
              </div>
            </div>
          )
        })}

      </div></Modal>
    <div className='tradeBox '>
      <div className='tradeBoxHeader'>
        <h4>Swap</h4>
        <Popover
          content={setting}
          title="Settings"
          trigger="click"
          placement='bottomRight'
        >
          <SettingOutlined className='cog' />
        </Popover>
      </div>
      <div className='inputs'>
        <Input placeholder='0' value={tokenOneAmount} onChange={changeAmount} />
        <Input placeholder='0' value={tokenTwoAmount} disable={true} />
        <div className='switchButton' onClick={switchTokens}>
          <ArrowDownOutlined className='switchArrow' />
        </div>
        <div className='assetOne' onClick={() => openModal(1)}>
          <img className='assetLogo' alt='assetOneLogo' src={tokenOne.img} />
          {tokenOne.ticker}
          <DownOutlined />
        </div>
        <div className='assetTwo' onClick={() => openModal(2)}>
          <img className='assetLogo' alt='assetTwoLogo' src={tokenTwo.img} />
          {tokenTwo.ticker}
          <DownOutlined />
        </div>
      </div>
      <div className='swapButton' disabled={!tokenOneAmount}>Swap</div>
    </div>
  </>
  )
}

export default Swap