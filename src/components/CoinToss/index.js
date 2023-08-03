import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    randomNo: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  TossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      const imgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      this.setState(prevState => ({
        randomNo: imgUrl,
        heads: prevState.heads + 1,
        total: prevState.total + 1,
      }))
    } else {
      const imgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      this.setState(prevState => ({
        randomNo: imgUrl,
        tails: prevState.tails + 1,
        total: prevState.total + 1,
      }))
    }
  }

  render() {
    const {randomNo, total, heads, tails} = this.state

    return (
      <div className="main-cont">
        <div className="sub-cont">
          <h1>Coin Toss Game</h1>
          <br />
          <p>Heads (or) Tails</p>
          <img className="image-prop" alt="toss result" src={randomNo} />
          <button className="button-prop" type="button" onClick={this.TossCoin}>
            Toss Coin
          </button>
          <div className="sub-cont2">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
