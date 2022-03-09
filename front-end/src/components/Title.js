import { Context } from "App";
import { dsWalletGetTrimedAccountName } from "ds-lib/ds-web3";
import { dsWalletConnectInjected } from "ds-lib/ds-web3";
import { useContext, useEffect, useState } from "react";
import { useWallet } from "use-wallet";

export default function Title({brand, title}) {
  const wallet = useWallet()
  const {TARGET_NET} = useContext(Context)
  const [walletButtonFace, setWalletButtonFace] = useState("Wallet Connect");

  // event on wallet 
  useEffect(() => {
    if (wallet.status === 'connecting')
      return;
    const btnName = wallet.account !== null 
      ? dsWalletGetTrimedAccountName(wallet.account)
      : "Wallet Connect" ;
    setWalletButtonFace(btnName);
  }, [wallet.status])

  // halder on clicking wallet connect button
  async function handleConnectWallet() {
    if (wallet.isConnected()) return;
    if (window.ethereum)
    {
      await dsWalletConnectInjected(TARGET_NET.chainId)
      wallet.connect()
    }
    else
      wallet.connect('walletconnect');
  }

  return(
    <div className="al-h main-title">
      <div style={{width:'20%'}}>
        <a href="https://camelotnodes.finance/" target="_blank">
          <img 
            alt='' 
            src={brand} 
            style={{width:"fit-content", height:"100px", margin:"0.5rem"}}/>
        </a>
      </div>
      <div className="al-v" style={{justifyContent:"center", width:"60%"}}>
        <h1 style={{textAlign:"center"}}>{title}</h1>
      </div>
      <div style={{width:"20%", height:"4rem", display:"flex", justifyContent:"right"}}>
        <button 
          className="raise"
          onClick={handleConnectWallet}
        >
            {walletButtonFace}
        </button>
      </div>
    </div>
  )
}