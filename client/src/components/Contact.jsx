import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Contact = ({ listing }) => {
  const [landLord, setLandlord] = useState(null)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`)

        const data = await res.json()
        setLandlord(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchLandlord()
  }, [listing.userRef])

  const onChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div>
      {landLord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landLord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>

          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border rounded-lg p-3"
          ></textarea>

          <Link
            to={`mailto: ${landLord.email}? subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white  text-center p-3  rounded-lg uppercase hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </div>
  )
}

export default Contact
