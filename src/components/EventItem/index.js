// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, registrationView} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails

  const onEventImageClick = () => {
    registrationView(registrationStatus)
  }
  return (
    <li>
      <button type="button" onClick={onEventImageClick}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
