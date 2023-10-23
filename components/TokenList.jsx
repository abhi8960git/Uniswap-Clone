import React, { useState } from "react";
import { Input, Popover, Radio, Modal, message, Button } from "antd";
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import tokenList from "../utils/tokenList.json";
import { Switch } from "antd";
import { SwapTokenContext } from "@/context/SwapContext";
import { useContext } from "react";
import img from "../public/token.png";
import Image from "next/image";

const TokenList = ({tokenDate}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { tokenData } = useContext(SwapTokenContext);


  console.log( "this is tokendate",tokenDate);

  let tokenList =[];

  

  

  return (
    <div>
      <Modal
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
        title="Select a token"
      >
        <div className="modalContent">
          {tokenDate?.map((e, i) => {
            return (
              <div className="tokenChoice" key={i} onClick={() => {}}>
                <div className="tokenChoiceNames flex gap-3 justify-center  items-center text-gray-500 font-[600]">
                  <Image src={img} alt="image" className="tokenLogo"></Image>
                  <div>
                    <div className="tokenName">{e.name}</div>
                    <div className="tokenTicker">{e.symbol}</div>
                  </div>
                  <div> {e.tokenBalance} </div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
      <div>
        <button onClick={() => setIsOpen(true)}>
          <SettingOutlined />
        </button>
      </div>
    </div>
  );
};

export default TokenList;
