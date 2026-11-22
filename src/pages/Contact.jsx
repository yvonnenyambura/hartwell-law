import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

function Contact() {

    const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="bg-midnight px-6 py-14 md:px-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
            WE'RE HERE TO HELP
          </p>

          <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
            Get in Touch
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300">
            Have a legal question or need guidance on your next steps?
            Reach out to our team to start a conversation.
          </p>
        </div>
      </section>

{/* Consultation Form */}
      <section className="bg-[#EFEAE0] px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
              START A CONVERSATION
            </p>

            <h2 className="font-heading text-3xl leading-tight text-midnight md:text-4xl">
              How Can We Help You?
            </h2>

            <p className="mt-5 max-w-md text-sm leading-8 text-slate">
              Tell us a little about what you're looking for. Our team will
              review your enquiry and get back to you.
            </p>
          </div>
<form
  onSubmit={(e) => {
    e.preventDefault();
    e.target.reset();
    setSubmitted(true);
  }}
  className="bg-white p-5 shadow-sm md:p-8"
>
      
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-midnight">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-antique-gold"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-midnight">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-antique-gold"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-midnight">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-antique-gold"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-midnight">
                  Practice Area
                </label>
                <select
                required
                  className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-antique-gold"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  <option>Personal Injury</option>
                  <option>Family Law</option>
                  <option>Estate Planning</option>
                  <option>Business Law</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-midnight">
                  How Can We Help?
                </label>
                <textarea
                required
                  rows="5"
                  placeholder="Briefly describe how we can assist you..."
                  className="w-full resize-none border border-gray-300 px-4 py-3 text-sm outline-none focus:border-antique-gold"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 w-full bg-midnight px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-antique-gold hover:text-midnight"
            >
              Submit Enquiry
            </button>
           
            <p className="mt-4 text-center text-xs leading-6 text-slate">
              Your information will be treated with care and kept confidential.
              Submitting this form does not establish an attorney-client relationship.
            </p>
          </form>
        </div>
      </section>

{/* Closing Message & Contact Information */}
<section className="bg-ivory px-6 py-12 md:px-12 md:py-16">
  <div className="mx-auto max-w-7xl">

    {/* Closing Message */}
    <div className="mb-10 border-b border-antique-gold/30 pb-10 text-center">
      <h2 className="font-heading text-2xl text-midnight md:text-3xl">
        We Look Forward to Hearing From You
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate">
        Thoughtful guidance begins with a conversation.
      </p>
    </div>

    {/* Contact Information */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <MapPin className="h-7 w-7 text-antique-gold" />
        </div>
        <h2 className="font-heading text-xl text-midnight">
          Visit Our Office
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate">
          123 Trade Street, Suite 400
          <br />
          Charlotte, NC 28202
        </p>
      </div>

      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <Phone className="h-7 w-7 text-antique-gold" />
        </div>
        <h2 className="font-heading text-xl text-midnight">
          Call Our Office
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate">
          (704) 555-0182
        </p>
      </div>

      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <Mail className="h-7 w-7 text-antique-gold" />
        </div>
        <h2 className="font-heading text-xl text-midnight">
          Email Us
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate">
          contact@hartwelllaw.com
        </p>
      </div>
    </div>

  </div>
</section>

{submitted && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="w-full max-w-md bg-ivory p-8 text-center shadow-xl">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8DFD0] text-2xl text-antique-gold">
        ✓
      </div>

      <h2 className="font-heading text-2xl text-midnight">
        Thank You!
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate">
        Thank you for contacting Hartwell Law. Your enquiry has been received.
      </p>

      <button
        onClick={() => setSubmitted(false)}
        className="mt-7 bg-midnight px-10 py-3 text-sm font-semibold text-white transition-colors hover:bg-antique-gold hover:text-midnight"
      >
        OK
      </button>
    </div>
  </div>
)}
    
    </>
  );
}

export default Contact;