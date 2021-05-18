import React from 'react';
import axios from 'axios';
import Player from './player';
import DonutChart from './donutchart'
import { useParams } from 'react-router';
/*import ReactDOM from 'react-dom';*/

class Game extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            url: `http://localhost:8080/api/games/${this.props.match.params.id}`,
            players: [],
        }
    /*this.handleFormName = this.handleFormName.bind(this);*/
    }

    componentDidMount() {
       
        console.log(this.state.url)
        axios.get(this.state.url).then(
            response => {
                console.log('Response received')
                var parsedArray = []
                response.data.forEach((item) => {
                    var player = {
                        id: item.id,
                        name: item.name,
                        role: item.role,
                        games: item.games,
                        wr: item.wr,
                        championOne: {
                            name: item.c1.champ,
                            wr: item.c1.wr,
                            games: item.c1.games
                        },
                        championTwo: {
                            name: item.c2.champ,
                            wr: item.c2.wr,
                            games: item.c2.games
                        },
                        championThree: {
                            name: item.c3.champ,
                            wr: item.c3.wr,
                            games: item.c3.games
                        },
                        griefer: item.griefer,
                        toxic: item.toxic,
                        negativeWr: item.negativeWr,
                        otp: item.otp
                    }
                    parsedArray.push(player)
                })
                console.log("Mount parse:")
                console.log(parsedArray)
                this.setState({ players: parsedArray })
            }
        )
    }

    renderPlayers = () => this.state.players.map(
        p =>
          <Player
          id={p.id} 
          name={p.name}
          role={p.role}
          games={p.games}
          wr={p.wr}
          c1={p.championOne}
          c2={p.championTwo}
          c3={p.championThree}
          negwr={p.negativeWr}
          otp={p.otp}
          griefer={p.griefer}
          toxic={p.toxic}
          />
      )

    render() {
        console.log("Render parse:")
        console.log(this.state.players)

        this.state.players.forEach((player) => {
            console.log(player.id)
            console.log(player.championThree)
            
        })
        
        return (
            <div>
                <h2>PORO GAME</h2>
                <div>
                    {this.renderPlayers()}
                </div>
            </div>
        )
    }

}




export default Game;


