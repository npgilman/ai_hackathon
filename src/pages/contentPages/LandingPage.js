// skeleton for landing page

function LandingPage() {
    return (
        <div className='flex-fill'>
            <div style={{textAlign: "center", marginTop: "4rem", fontFamily: "Segoe UI", fontSize: "3.5vw", color: "#2D283E"}}>
                <b>Welcome to Aiccountant!</b>
            </div>

            <hr
                style={{width: "90%", marginLeft: "auto", marginRight: "auto", marginTop: "2rem", marginBottom: "2rem"}}
            >
            </hr>
            <div style={{padding: "0rem 8rem", marginTop: "4rem", fontFamily: "Segoe UI", fontSize: "20px", color: "#2D283E"}}>
                Aiccountant is platform to facilitate financial literacy and introduction to accounting concepts.
            </div>
        </div>
    );
}

export default LandingPage;