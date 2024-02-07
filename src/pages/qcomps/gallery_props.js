const baseUrl = 'https://i.imgur.com/';
const person1 = {
  name: 'Maria Skłodowska-Curie',
  imageId: 'szV5sdG',
  imageSize: 's',
  profession:'physicist and chemist',
  awards:"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
  discovery:"polonium (element)"

};

export default function Profile(){
  return (<div>
    <Gallery person={person1}/>
  </div>)
}
export  function Gallery(person) {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie{person.name}</h2>
        <img
          className="avatar"
          src={baseUrl +person.imageId  +person.imageSize +".jpg"}
          alt={person.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist{person.profession}
          </li>
          <li>
            <b>Awards: 4{person.awards} </b>
            {person.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovery}
          </li>
        </ul>
      {/* </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/YfeOqp2s.jpg'
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>*/}
      </section>
    </div>
  );
}
