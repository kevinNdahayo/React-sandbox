import React, { Component } from 'react'
import { ReactComponent as ContactUser } from '../Design-images/Add-contact/contact-user.svg'
import { ReactComponent as DeleteUser } from '../Design-images/Add-contact/delete.svg'
import { ReactComponent as UpdateUser } from '../Design-images/Add-contact/update.svg'

class AddContact extends Component {
  render() {
    return (
      <div className="add-contact">
        <h1 className="add-contact-title">Add Contact</h1>
        <form className="add-contact-form">
          <div className="input-field">
            <label>Name</label>
            <input type="text" placeholder="Name" required />
          </div>

          <div className="input-field">
            <label>Email</label>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="add-button">
            <input type="submit" value="Add" />
          </div>
        </form>
        <div className="list-of-contacts">
          <div className="contact-details">
            <div className="contact-img">
              <ContactUser />
            </div>
            <div className="contact-info">
              <span className="contact-name">Sam smith</span>
              <span className="contact-gmail">SamSmith@gmail.com</span>
            </div>
          </div>

          <div className="contact-action">
            <div className="contact-update">
              <UpdateUser />
            </div>
            <div className="contact-delete">
              <DeleteUser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddContact
