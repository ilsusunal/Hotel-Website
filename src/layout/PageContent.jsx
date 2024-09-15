import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import RoomPage from '../pages/RoomPage'
import ContactPage from '../pages/ContactPage'
import RoomReservationPage from '../pages/RoomReservationPage'

export default function PageContent() {
  return (
    <>
      <Switch>
        <Route exact path="/"  component={HomePage} />
        <Route exact path="/about"  component={AboutPage} />
        <Route exact path="/rooms"  component={RoomPage} />
        <Route exact path="/rooms/reservation"  component={RoomReservationPage} />
        <Route exact path="/contact"  component={ContactPage} />
      </Switch>

    </>
  )
}
