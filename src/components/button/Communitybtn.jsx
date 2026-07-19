import { Link } from 'react-router-dom'

const Communitybtn = () => {
  return (
    <div>
      <Link to="/signup">
              {/* Smaller padding on mobile, larger on desktop */}
              <button className="cursor-pointer bg-primary text-white px-3 py-3 text-sm rounded-full active:scale-95 md:px-4 md:py-2 md:font-meduim md:text-base ">
                Join The Community
              </button>
            </Link>
    </div>
  )
}

export default Communitybtn
