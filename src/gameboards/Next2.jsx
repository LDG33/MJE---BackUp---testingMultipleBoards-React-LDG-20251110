import React from 'react'
import { Link } from 'react-router-dom';


const Next2 = () => {
  return (
    <div className="settingsContainer">

      <Link to="/">
      <button className="backToStartBtn">
        Back To Start
      </button>
      </Link>

        <Link to="/playVegetables">
      <button className="startBtn2">
        Play Next
      </button>
      </Link>

    </div>
  )
}

export default Next2