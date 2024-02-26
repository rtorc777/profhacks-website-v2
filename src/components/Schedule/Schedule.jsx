import React from 'react'
import styles from "./Schedule.module.css";
import { getImageUrl } from "../../utils";
import Table from 'react-bootstrap/Table';

export const Schedule = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>-Schedule-</h2>

        <div className={styles.aboutItem}>
          <h3>Saturday</h3>
          <Table striped bordered variant='info'>
          <thead>
            <tr>
              <th><u>Time</u></th>
              <th><u>Event</u></th>
              <th><u>Location</u></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:30 AM</td>
              <td>Doors Open</td>
              <td>ENGR Building</td>
            </tr>
            <tr>
              <td>12:00 PM</td>
              <td>Opening Ceremony</td>
              <td>ENGR Building</td>
            </tr>
            <tr>
              <td>12:45 PM</td>
              <td>Hacking Begins</td>
              <td>ENGR Building</td>
            </tr>
            <tr>
              <td>1:15 PM</td>
              <td>Lunch & Team Building</td>
              <td>ENGR Atrium</td>
            </tr>
            <tr>
              <td>2:00 PM</td>
              <td>3D Printing Workshop</td>
              <td>ENGR 107</td>
            </tr>
            <tr>
              <td>3:00 PM</td>
              <td>Mathematica Workshop</td>
              <td>ENGR 107</td>
            </tr>
            <tr>
              <td>4:00 PM</td>
              <td>Arduino Workshop</td>
              <td>ENGR 107</td>
            </tr>
            <tr>
              <td>6:00 PM</td>
              <td>Dinner</td>
              <td>ENGR Atrium</td>
            </tr>
            <tr>
              <td>7:00 PM</td>
              <td>Cup Stacking (Hosted by RAS)</td>
              <td>ENGR Atrium</td>
            </tr>
            <tr>
              <td>8:30 PM</td>
              <td>Planetarium Show</td>
              <td>Science Hall</td>
            </tr>
            <tr>
              <td>11:30 PM</td>
              <td>Gaming</td>
              <td>ENGR Atrium</td>
            </tr>
          
          </tbody>
        </Table>
        </div>


        <div className={styles.aboutItem}>
        <h3>Sunday</h3>
        <Table striped bordered variant='info'>
        <thead>
          <tr>
            <th><u>Time</u></th>
            <th><u>Event</u></th>
            <th><u>Location</u></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:00 AM</td>
            <td>Breakfast</td>
            <td>ENGR Atrium</td>
          </tr>
          <tr>
            <td>9:00 AM</td>
            <td>Git Workshop</td>
            <td>ENGR 107</td>
          </tr>
          <tr>
            <td>12:00 PM</td>
            <td>Hacking concludes, judging starts</td>
            <td>ENGR Building</td>
          </tr>
          <tr>
            <td>1:30 PM</td>
            <td>Closing Ceremony & Prizes</td>
            <td>ENGR Building</td>
          </tr>
        </tbody>
      </Table>
      </div>

    </section>
  )
}
