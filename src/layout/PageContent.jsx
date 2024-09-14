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
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/rooms" exact component={RoomPage} />
        <Route path="/rooms/reservation" exact component={RoomReservationPage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>

    </>
  )
}
