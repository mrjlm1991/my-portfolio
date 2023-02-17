import React, { useState } from "react"

const ReadMoreEn = ({ children, limit }) => {
  const [readMore, setReadMore] = useState(false)

  const toggleBtn = () => {
    setReadMore(prevState => !prevState)
  }

  return (
    <div dir="ltr">
      {readMore ? children : children.substr(0, limit)}
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#BC2649",
        }}
        onClick={toggleBtn}
      >
        {readMore ? "close" : "..more"}
      </button>
    </div>
  )
}

export default ReadMoreEn
