import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashboardCard0 from '../partials/dashboard/DashboardCard0';
import Moralis from 'moralis/dist/moralis.min.js';

function Dashboard() {

  const navigate = useNavigate();

  const serverUrl="https://drww6jthgc1z.usemoralis.com:2053/server";
  const appId="TF33IR2fFIdZclNmTe4Xi0myM01dJiXqjSPvStI1";
  Moralis.start({ serverUrl, appId });


  async function signin() {
    
    let user = Moralis.User.current();
    if(!user) {
        try {
            user = await Moralis.authenticate({ signingMessage: "Authenticate"});
            await Moralis.enableWeb3();
            console.log(user);
            console.log(user.get('ethAddress'));

        }catch (error) {
        console.log(error);}
    }

    await Moralis.enableWeb3();
    const chainid = await Moralis.getChainId();
    const chainID = "0x89"; 
    const chainIdHex = await Moralis.switchNetwork(chainID); 
    
    navigate('/recents')
  }

  async function signup() {
    
    let user = Moralis.User.current();
    if(!user) {
        try {
            user = await Moralis.authenticate({ signingMessage: "Authenticate"});
            await Moralis.enableWeb3();
            console.log(user);
            console.log(user.get('ethAddress'));

        }catch (error) {
        console.log(error);}
    }

    const chainId = 137;
    const chainName = "Polygon Mainnet";
    const currencyName = "MATIC";
    const currencySymbol = "MATIC";
    const rpcUrl = "https://rpc-mainnet.maticvigil.com/";
    const blockExplorerUrl = "https://polygonscan.com/";
    

    await Moralis.addNetwork(
      chainId,
      chainName,
      currencyName,
      currencySymbol,
      rpcUrl,
      blockExplorerUrl
    );

    await Moralis.enableWeb3();
    const chainid = await Moralis.getChainId();

    const chainID = "0x89"; 
    const chainIdHex = await Moralis.switchNetwork(chainID); 

    let options = {
      contractAddress: "0x9D1B3375F5FD98F58C815a58CA4eAFAFA251a4Ab",
      functionName: "mint",
      abi: [{"inputs":[],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"}],
      params: {
          note: "We are happy that you are now with us!",
      },
      msgValue: Moralis.Units.ETH(0)
    }
    await Moralis.executeFunction(options);

    navigate('/recents')
  }


  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{background:'#0f172a'}} className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        

        <main>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div style={{marginTop:'290px', marginBottom:'100px'}}>
            <DashboardCard0/>
          </div>
          <div style={{display: 'flex'}}>
            <button onClick={signin} style={{display:'flex',margin:'auto', background:'#1c2b50',  borderColor:'#f9f9f9'}}className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <span className="hidden xs:block ml-2">Sign in</span>
            </button> 
            <button onClick={signup} style={{display:'flex',margin:'auto', background:'#1c2b50',  borderColor:'#f9f9f9'}}className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <span className="hidden xs:block ml-2">Sign up</span>
            </button> 
          </div>
          
        </main>
      </div>
    </div>
  );
}

export default Dashboard;