import arrow from './arrow.png'
// skeleton for landing page

function LandingPage() {
    return (
        <div className='flex-fill landing' >
            <div style={{opacity: "1"}}>

            
            <div style={{textAlign: "center", marginTop: "2rem", fontFamily: "Segoe UI", fontSize: "3.5vw", color: "#2D283E"}}>
                Welcome to <b>aiccountant.</b>
            </div>

            <hr
                style={{width: "90%", marginLeft: "auto", marginRight: "auto", marginTop: "1rem", marginBottom: "rem"}}
            >
            </hr>
            <div style={{padding: "0rem 8rem", marginTop: "2rem", fontFamily: "Segoe UI", fontSize: "18px", color: "#2D283E", textAlign: "justify"}}>
                aiccountant is platform to facilitate financial literacy and introduction to accounting concepts.
                <br></br><br></br>
                aiccountant. is a web platform that harnesses the capabilities of generative AI through OpenAI's API to facilitate financial literacy by introducing users to accounting! The platform offers an interactive experience where users can learn about various accounting topics, making even the most daunting financial concepts accessible. A key feature of our platform is the integration of a chatbot that provides one-click navigation, navigating users to relevant pages on the website with direct links. This makes it exceptionally easy for users to explore the content available on aiccountant. and learn about accounting.
            </div>
            <div style={{textAlign: "right", paddingRight: "2rem", fontFamily: "Segoe UI", fontSize: "18px", color: "#2D283E"}}>
                <b><i>Chat with your personal aiccountant!</i></b>
                <img src={arrow} style={{width: "12%", rotate:"-60deg"}}></img>
            </div>
            <div style={{textAlign: "left", paddingLeft: "2rem", fontFamily: "Segoe UI", fontSize: "18px", color: "#2D283E"}}>
                <img src={arrow} style={{width: "12%", rotate:"135deg"}}></img>
                <b><i>Navigate through accounting topics</i></b>
            </div>
            </div>
        </div>
        
    );
}

export default LandingPage;