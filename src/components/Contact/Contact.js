import React from "react";
import location from "../../assets/images/location.png";
const Contact = () => {
  const handleSubmit = () => {
    alert("Thanks for your message! We will reach out to you soon.");
  };
  return (
    <div>
      <div class="container-fluid bg-light py-5">
        <div class="col-md-6 m-auto text-center">
          <h1 class="h1">Contact Us</h1>
          <p>Feel free to drop a message. Our executives will hear you !</p>
        </div>
      </div>

      <div
        id="mapid"
        style={{ width: "100%", height: "300px", alignSelf: "center" }}
      >
        <center>
          <img src={location} height="400px" width="100%" />
        </center>
      </div>
      <br />
      <br />
      <div class="container py-5">
        <div class="row py-5">
          <form
            class="col-md-9 m-auto"
            role="form"
            style={{ backgroundColor: "#e5e5e5", padding: "50px" }}
            onSubmit={handleSubmit}
          >
            <div class="row">
              <div class="form-group col-md-6 mb-3">
                <label for="inputname">Name</label>
                <input
                  type="text"
                  class="form-control mt-1"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="form-group col-md-6 mb-3">
                <label for="inputemail">Email</label>
                <input
                  type="email"
                  class="form-control mt-1"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="inputsubject">Subject</label>
              <input
                type="text"
                class="form-control mt-1"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div class="mb-3">
              <label for="inputmessage">Message</label>
              <textarea
                class="form-control mt-1"
                id="message"
                name="message"
                placeholder="Message"
                rows="8"
                required
              ></textarea>
            </div>
            <div class="row">
              <div class="col text-end mt-2">
                <button type="submit" class="btn btn-success btn-lg px-3">
                  Let’s Talk
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
