export function Nav(){
    const handleMouseOver = (event) =>{
        event.target.style.transform = 'scale(1.2)'; // Zoom de 20% au survol
        event.target.style.transition = 'transform 0.3s';
    }
    const handleMouseOut = (event) => {
        event.target.style.transform = 'scale(1)'; 
    }
    

    return (
        <div id="side-bar">
            <div id="logo"><a href=""><span>L</span></a></div>
            <div id="superNav">
                <ul id="nav">
                    <li id="navHome" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><a href="">home</a></li>
                    <li id="navAbout" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><a href="">about</a></li>
                    <li id="navPortefolio" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><a href="">portefolio</a></li>
                </ul>
            </div>
        </div>
    )
}