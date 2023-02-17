import React, { useState } from "react"

const ReadMore = ({ children, limit }) => {
  const [readMore, setReadMore] = useState(false)

  const toggleBtn = () => {
    setReadMore(prevState => !prevState)
  }

  return (
    <div className="read-more" dir="rtl">
      {readMore ? children : children.substr(0, limit)}
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#BC2649",
        }}
        onClick={toggleBtn}
      >
        {readMore ? "بستن" : "..ادامه"}
      </button>
    </div>
  )
}

export default ReadMore
