import React, { useState } from 'react';
import Button from "@mui/material/Button";

function Character({ name, details }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="character">
      {name}
      <Button variant="contained" onClick={() => setShowDetails(!showDetails)}>{showDetails ? "hide details" : "show details"}</Button>
      {showDetails && <p>{details}</p>}
    </div>
  )
}

export default Character