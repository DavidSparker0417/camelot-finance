import { useSelector } from "react-redux";
import { useWallet } from "use-wallet";
import IconText from "./common/IconText";

const LineDesc = ({title, value, icon}) => {
  return(
    <div className="line-desc">
      <IconText icon = {icon} title = {title} size="medium"/>
      <h3>{value}</h3>
    </div>
  )
}

export default function Statistics() {
  const wallet = useWallet()
  const tower = useSelector((state) => state.camelot.tower)
  const camelotStat = useSelector((state) => state.camelot.camelotStat)
  return(
    <div className="stat-area">
      <div className="user-panel meta-card">
        <div className="title">
          <IconText 
            icon= './images/tower.svg'
            title= 'My Tower'
            size= 'large'
            color= "var(--bs-main-color)"
          />
        </div>
        <div className="card-container">
          {/* {wallet.isConnected()
          ? <> */}
            <LineDesc title = "Nodes" value={tower.nodes} icon='./images/knight.svg'/>
            <LineDesc title = "Rewards" value={tower.rewards} icon='./images/rewards.svg'/>
            <LineDesc title = "Money" value={tower.money} icon='./images/money.svg'/>
          {/* </>
          : <h1 style={{textAlign:"center"}}>Wallet not connected!</h1>
          } */}
        </div>
      </div>

      <div className="global-panel meta-card">
        <div className="title">
          <IconText 
            icon = './images/camelot.svg'
            title="Our Camelot" 
            size="large" 
            style={{justifyContent:"center"}}
            color="var(--bs-main-color)"
          />
        </div>
        <div className="card-container">
          <LineDesc title = "Total Nodes" value={camelotStat.nodes} icon='./images/knight.svg'/>
          <LineDesc title = "Treasury" value={camelotStat.treasury} icon='./images/treasury.svg'/>
          <LineDesc title = "Reward Pool" value={camelotStat.tokensInRewardPool} icon='./images/rewards.svg'/>
          <LineDesc title = "Market Cap" value={camelotStat.marketCap} icon='./images/marketcap.svg'/>
        </div>
      </div>
    </div>
  )
}