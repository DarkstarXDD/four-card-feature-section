import Card from "./components/Card"
import cardData from "./data/data.js"

export default function App() {
  const cards = cardData.map(function (currentCard) {
    return (
      <Card
        key={currentCard.id}
        cardTitle={currentCard.title}
        cardText={currentCard.text}
        cardImg={currentCard.img}
        cardColor={currentCard.color}
      />
    )
  })

  return (
    <main>
      <div className="top-section">
        <h1 className="top-section__title">
          <span className="light">Reliable, efficient delivery</span>
          <br />
          Powered by Technology
        </h1>
        <p className="top-section__text">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <div className="card-section">{cards}</div>
    </main>
  )
}
