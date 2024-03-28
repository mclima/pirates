import '../assets/css/Pirate.css'
import avatar from '../assets/img/avatar.png'

function Pirate({ pirate: { name, year, weapon, vessel, desc }, tagline }) {
  return (
    <section>
      <summary>
        <img src={avatar} alt="pirate" />
        <h3>{name}</h3>
        <ul>
          <li>Died: {year}</li>
          <li>Weapon: {weapon}</li>
          <li>Vessel: {vessel}</li>
        </ul>
      </summary>
      <article>
        <h2>{tagline}</h2>
        <p>{desc}</p>
      </article>
    </section>
  )
}
//state is data at a particular point in time
export default Pirate
