export default function Card(props) {
  return (
    <div className={`card card--${props.cardColor}`}>
      <h2 className="card__title">{props.cardTitle}</h2>
      <p className="card__text">{props.cardText}</p>
      <img
        className="card__icon"
        src={props.cardImg}
        alt=""
        width="56px"
        height="56px"
      />
    </div>
  )
}
