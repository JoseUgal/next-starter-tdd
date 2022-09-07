import { useState } from 'react'

export default function Toggable ({ children, buttonLabel = 'Muestrame esto' }) {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>
                    {buttonLabel}
                </button>
            </div>

            <div style={showWhenVisible}>
                {children}
            </div>
        </div>
  )
}
