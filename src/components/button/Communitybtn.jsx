import { Link } from 'react-router-dom'

const Communitybtn = () => {
  return (
    <div>
      <Link to="/signup">
              <button className="cursor-pointer bg-primary text-white px-4 py-2 rounded-full active:scale-95">
                Join The Community
              </button>
            </Link>
    </div>
  )
}

export default Communitybtn
