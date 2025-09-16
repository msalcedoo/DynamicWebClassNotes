import {useState} from 'react'
import {ReactComponent as Favorite} from '@material-design-icons/svg/filled/favorite.svg'
import './UserRating.css'

export const UserRating = () => {
  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
    if (count >= 5) {
      return
    }
    setCount(count + 1)
  }

  const handleMinusClick = () => {
    if (count <= 0) {
      return
    }
    setCount(count - 1)
  }

  return (
    <div>
      {count > 0 && <button onClick={handleMinusClick}>[-]</button>}

      {[...Array(count)].map((i, index) => {
        return (
          <span key={index}>
            <Favorite className='icon' />
          </span>
        )
      })}
      {/* https://legacy.reactjs.org/docs/conditional-rendering.html */}
      {count < 5 && <button onClick={handlePlusClick}>[+]</button>}
    </div>
  )
}

export default UserRating