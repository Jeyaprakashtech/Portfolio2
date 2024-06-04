import Link from "next/link";
import React from "react";

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);

    formData.append("access_key", "eac83351-bc5c-45dc-84e1-ae51cd4734f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
    
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
     
      event.target.reset();
    }
  };

  return (
    // <div className="contact">
    //   <div className="contact-col">
    //     <h3>
    //       Send us a message
    //     </h3>
    //     <p>
    //       Connect with us effortlessly as you navigate your academic journey.
    //       Whether you have questions, need assistance, or wish to share your
    //       thoughts, our contact channels are open.
    //     </p>
    //     <ul>
    //       <li>
    //         {/* <img src={mail_img} alt="" /> */}
    //         Contact@avichi.com
    //       </li>
    //       <li>
    //         {/* <img src={phone_img} alt="" /> */}
    //         +1234667363
    //       </li>
    //       <li>
    //         {/* <img src={location_img} alt="" /> */}
    //         no.24,abc street,xyz nagar, chennai-89
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="contact-col">
    //     <form onSubmit={onSubmit}>
    //       <label>Your Name</label>
    //       <input
    //         type="text"
    //         name="Name"
    //         placeholder="Enter your name"
    //         required
    //       />
    //       <label>Phone Number</label>
    //       <input
    //         type="tel"
    //         name="phone"
    //         placeholder="Enter your phone number"
    //         required
    //       />
    //       <label> Write your Message here</label>
    //       <textarea
    //         name="message"
    //         rows="6"
    //         placeholder="Enter your message"
    //         required
    //       ></textarea>
    //       <button type="submit" className="btn dark_btn">
    //         Submit
    //       </button>
    //     </form>
    //     <span>{result}</span>
    //   </div>
    // </div>
    <section className="grid md:grid-cols-2 mt-12 mb-0 md:mt-12 py-24 gap-4 relative" id="Contact">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 visible z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-6">
        <h5 className="text-xl font-bold text-white my-2">let' Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          {""}
          I'm currently looking for new opportunities, my inbox is always open.
          whether you have a questions or want to say hi, I'll try my best to
          get back to you!
        </p>
        <div className="socials flex flex-row gap-4 px-0">
          <Link href={"https://www.linkedin.com/in/jeyaprakash-s-884b14216/"}>
          <img width={"40px"} height={"40px "}
          src="https://oneresource.s3.amazonaws.com/20hSo2iqCYGJsepowm0KsW8-oT4tqm-9sj-rG2wPC3A.svg" alt="Linkedin" />
          </Link>
          <Link href={"https://www.instagram.com/royal_prince_jp/"}>
          <img width={"40px"} height={"40px "}
          src="https://www.pikpng.com/pngl/b/112-1124492_instagram-instagram-new-logo-png-white-clipart.png" alt="Linkedin" />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={onSubmit} className="flex flex-col ">
        <input type="hidden" name="from_name" value="Portfolio contact"></input>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              required
              placeholder="example@mail.com"
              className="bg-[#18191e] py-3 px-2 outline-none border border-[#33353f] placeholder-[9ca2a9] text-gray-100 text-sm rounded block w-full"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="Subject"
              required
              placeholder="Enter your Subject"
              className="bg-[#18191e] py-3 px-2 outline-none border border-[#33353f] placeholder-[9ca2a9] text-gray-100 text-sm rounded block w-full"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              
              className="bg-[#18191e] py-3 px-2 h-36 resize-none outline-none border border-[#33353f] placeholder-[9ca2a9] text-gray-100 text-sm rounded block w-full"
              placeholder="Leave your message here...."
            ></textarea>
          </div>
          <button
            type="sumbit"
            className="bg-[#952599c5] hover:bg-[#952599] text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
        <span className="mt-2 items-center text-center textlg">{result}</span>
      </div>
    </section>
  );
};
export default Contact;
