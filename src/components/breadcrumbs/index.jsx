import './styles.css'

const DOTS = [true, false, false]

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      {DOTS.map((isCurrent, index) => (
        <div key={index} className={`dot ${isCurrent ? 'current' : ''}`} />
      ))}
    </div>
  )
}

export default Breadcrumbs
