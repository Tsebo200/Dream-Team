import React from "react";


const leagueLeaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const leagueLeaders = [1,2,3]

const LandingContent =() => {
    return(
        <div className="mainContent">
        <div className="leagueLeadersContainer">
        <h2 className="leagueLeadersText">League Leaders</h2>
            <div className="cardScrollContainer">
                {leagueLeaders.map((number) => {
                    return (
                    <>
                    <div className="cardContainer">
                        <div className="cardNumber"></div>
                        <div className="playerIcon"></div>
                        <p>KD</p>
                        <p>29.4</p>
                    </div>
                    <div className="cardSpacer"></div>
                    </>
                    ); })}
            </div>
        </div>

        {/* Introduction */}
        <div className="introContainer">
            <h2 className="introHeading">Introduction</h2>
            <p className="introText">Lorem ipsum dolor sit amet consectetur. Fusce porttitor ut venenatis phasellus commodo sit <br></br> faucibus. In nulla enim faucibus aliquet quam pellentesque nunc neque. Urna morbi sed lectus 
            malesuada ac facilisis. 
            Risus purus sed vestibulum hendrerit duis malesuada scelerisque id fermentum.</p>
        </div>
        

        {/* Chart Section */}
        <div className="chartsContainer">
            <div className="chartOneContainer">
                <div className="chartOne"></div>
            </div>
            <div className="chartTwoContainer">
                <div className="chartTwo"></div>
            </div>
        </div>
      
    {/* Main Content Div Close */}
    </div> 
    )
}
export default LandingContent