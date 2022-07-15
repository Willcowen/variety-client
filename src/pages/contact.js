import React from "react"
import NavBar from "../components/NavBar"
import { Link } from "gatsby"

export default function Contact() {
  return (
    <div>
    <NavBar />
      <div className="wrapper">
        <div className="container">
          <form
            action="https://formsubmit.co/1f3d26d30647e073aa8afd8c9dad0ae9"
            method="POST"
          >
            <h4>Name</h4>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              required
            />
            <h4>Email</h4>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
              required
            />
            <h4>Phone</h4>
            <input
              type="number"
              id="number"
              name="phone"
              placeholder="Your phone number.."
            />
            <h4>Enquiry Type</h4>
            <select name="enquiry-type" id="enquiry-type">
              <option value="Returns">Returns</option>
              <option value="Delivery">Delivery</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
            <h4>Enquiry</h4>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              required
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      </div>
  )
}
