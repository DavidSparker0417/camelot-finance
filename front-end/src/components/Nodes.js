import { useSelector } from "react-redux"
import { useWallet } from "use-wallet"
import IconText from "./common/IconText"

const nodes = [
  {
    id: 0,
    tier : "KING",
    price : 150,
    reward : 4.5,
    rewardRate : 3,
    roi : 33,
    image : "./images/king.png"
  },
  {
    id: 1,
    tier : "WIZARD",
    price : 100,
    reward : 2.25,
    rewardRate : 2.25,
    roi : 45,
    image : "./images/wizard.png"
  },
  {
    id: 2,
    tier : "KNIGHT",
    price : 50,
    reward : 0.9375,
    rewardRate : 1.88,
    roi : 53,
    image : "./images/knight.png"
  },
  {
    id: 3,
    tier : "ARCHER",
    price : 10,
    reward : 0.15,
    rewardRate : 1.15,
    roi : 66,
    image : "./images/archer.png"
  },
  {
    id: 4,
    tier : "SQUIRE",
    price : 2,
    reward : 0.0225,
    rewardRate : 1.13,
    roi : 89,
    image : "./images/squire.png"
  },
]

const ReclaimButton = ({handler}) => {
  return (
  <div className="al-v" style={{justifyContent:"center"}}>
    <div 
      className="animated-button11" 
      style={{height:"fit-content"}}
      onClick={handler}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        Reclaim!
    </div>
  </div>
  )
}

function NodeCard({node, hold}) {
  function handlePurchase() {
  }
  function handleReclaim() {
  }
  return(
    <div className="card-node">
      <div className="al-h" style={{justifyContent:"space-between"}}>
        <h1 style={{width:"50%"}}>
          {node.tier} {hold && `(${hold.count})`}
        </h1>
        { hold && hold.pending && 
          <ReclaimButton handler = {handleReclaim}/> 
        }
      </div>
      <div className="node-content">
        <div className="al-h" style={{width:"100%"}}>
          <img src={node.image} style = {{margin:"0px 10px", width:"100px", height:"100px"}}/>
          <div style={{display:"flex", flexDirection:"column"}}>
            <h3 style={{flexGrow:"1"}}>Cost : {node.price} </h3>
            <h3 style={{flexGrow:"1"}}>Daily Reward : {node.reward}</h3>
            <h3 style={{flexGrow:"1"}}>Reward Rate: {node.rewardRate} %</h3>
            <h3 style={{flexGrow:"1"}}>ROI : {node.roi} Days</h3>
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
          <button 
            className="glow-on-hover" 
            style={{width:"100px"}}
            onClick={handlePurchase}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Nodes() {
  const wallet = useWallet()
  const holds = useSelector((state) => state.camelot.holds)
  return (
    <div className="mint-panel meta-card">
      <div className="title">
        <IconText 
          icon = './images/mint.svg'
          title="Nodes" 
          size="large" 
          style={{justifyContent:"center"}}
          color="var(--bs-main-color)"
        />
      </div>
      {
        nodes.map((n, i) =>
          <div key={i}>
            <NodeCard 
              node = {n} 
              hold = {holds && holds[i]}/>
          </div>
        )
      }
    </div>
  )
}