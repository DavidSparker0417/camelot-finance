import './css/button.scss';
import Title from './components/Title';
import { createContext, useCallback, useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';
import { TARGET_NET } from 'config';
import Statistics from './components/Statistics';
import Nodes from './components/Nodes';
import { useDispatch } from 'react-redux';
import { dsUtilGenerateRandomNumber } from 'ds-lib/ds-utils';
import { refreshTower } from 'store/camelotSlice';
import { refreshCamelotStat, refreshHolds } from './store/camelotSlice';
import { queryCamelotInfo } from './camelot-contract';

export const Context = createContext()
const REFRESH_INTERVAL = 2000;

function App() {
  // wallet
  const wallet = useWallet();
  // redux dispather
  const dispatch = useDispatch()
  
  // refresh function
  const refresh = useCallback(async () => {
    const cmlInfo = await queryCamelotInfo()
    dispatch(refreshTower(cmlInfo.tower))
    dispatch(refreshCamelotStat(cmlInfo.camelot))
    dispatch(refreshHolds(cmlInfo.holds))
  }, [wallet.account]);

  // refresh page every a certain period
  useEffect(() => {
    console.log("+++++++++++ Initial Loading ++++++++++++");
    let ac = new AbortController();

    const callRefresh = async () => {
      refresh().then(() => {
        if (ac.signal.aborted === false) {
          setTimeout(() => callRefresh(), REFRESH_INTERVAL);
        }
      })
    }

    callRefresh();
    return () => ac.abort();
  }, [refresh])

  // wallet balance event
  useEffect(() => {
  }, [wallet.balance])

  return (
    <Context.Provider value={{TARGET_NET}}>
      <div className="App">
        <Title 
          brand = '/images/brand.png'
          title = "WELCOME TO CAMELOT"
        />
        <div className='container'>
          <Statistics />
          <Nodes />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
