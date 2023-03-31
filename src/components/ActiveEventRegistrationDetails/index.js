// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {initialRegistrationStatus} = props

  console.log(initialRegistrationStatus)
  const yetToReg = initialRegistrationStatus === 'YET_TO_REGISTER'
  const reGister = initialRegistrationStatus === 'REGISTERED'
  const closeRegistrations =
    initialRegistrationStatus === 'REGISTRATIONS_CLOSED'

  const initial = initialRegistrationStatus === 'Empty'

  const renderNoActiveEventView = () => (
    <>
      <p className="no-view-heading">
        Click on an event, to view its registration details
      </p>
    </>
  )

  const renderYetToRegisteredView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-reg-image"
      />
      <p>A live performance brings so much to your relationship with dance.</p>
      <button type="button">Register Here</button>
    </>
  )

  const renderRegisteredView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </>
  )

  const renderRegistrationsClosedView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-view-image"
      />
      <h1>Registrations Are Closed Now!</h1>

      <p>Stay tuned. We will reopen</p>
    </>
  )

  return (
    <div>
      {initial ? renderNoActiveEventView() : ''}
      {yetToReg ? renderYetToRegisteredView() : ''}
      {reGister ? renderRegisteredView() : ''}
      {closeRegistrations ? renderRegistrationsClosedView() : ''}
    </div>
  )
}

export default ActiveEventRegistrationDetails
