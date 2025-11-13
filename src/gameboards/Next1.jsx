import React from 'react'
import { Link } from 'react-router-dom';


const Next1 = () => {
  return (
    <div className="settingsContainer">

      <Link to="/playfruits">
      <button className="backToStartBtn">
        Repeat
      </button>
      </Link>

        <Link to="/playmoods">
      <button className="startBtn2">
        Play Next
      </button>
      </Link>

    </div>
  )
}

export default Next1