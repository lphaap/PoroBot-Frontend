import DonutChart from "./donutchart"
import WrChart from "./wrchart"
import ChampWrChart from "./champwrchart"

const divStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const tittleStyle = {
  };

const Player = (props) => {
    return(
        <div >
            <p >---------------------------------</p>
            <div style={divStyle}>
                 <h2 style={tittleStyle}> {props.name} - MainRole: {props.role} </h2>
            </div>
            <div style={divStyle}>
                <WrChart
                    wrvalue={props.wr}
                />
                <DonutChart
                    c1name={props.c1.name}
                    c1games={props.c1.games}
                    c2name={props.c2.name}
                    c1wr={props.c1.wr}
                    c2wr={props.c2.wr}
                    c3wr={props.c3.wr}
                    c2games={props.c2.games}
                    c3name={props.c3.name}
                    c3games={props.c3.games}
                    othergames={props.games-props.c1.games-props.c2.games-props.c3.games}
                    donutname={'Games'}
                />
                <ChampWrChart
                    c1name={props.c1.name}
                    c2name={props.c2.name}
                    c1wr={props.c1.wr}
                    c2wr={props.c2.wr}
                    c3wr={props.c3.wr}
                    
                    c3name={props.c3.name}
                    
                />
            </div>
            <p > WARNINGS: </p>
            <p > Griefer: {props.griefer.toString()}</p>
            <p > Toxic: {props.toxic.toString()}</p>
            <p > OTP: {props.otp.toString()}</p>
            <p > Negative WR: {props.negwr.toString()}</p>

        </div>
    )
  }

  export default Player