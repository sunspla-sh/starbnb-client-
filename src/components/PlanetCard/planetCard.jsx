

function PlanetCard(props) {

return (

<div>
    <div className="planetCard-image" style={{
        backgroundImage: `url(${props.planetData.image})`
    }}></div>
<p> { props.planetData.name } </p>
<p> $ { props.planetData.pricePerNight } GCS per night</p>
{/* <p> { props.planetData.terrain } </p>
<p> { props.planetData.climate } </p> */}
</div>







)
}


export default PlanetCard;