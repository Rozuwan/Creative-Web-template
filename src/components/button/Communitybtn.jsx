import { Link } from 'react-router-dom'

const Communitybtn = () => {
  return (
    <div>
      <Link to="/signup">
              <button className="cursor-pointer bg-primary text-white px-3 py-3 text-sm rounded-full active:scale-95 md:px-4 md:py-2 md:font-meduim md:text-base font-inter ">
                Join The Community
              </button>
            </Link>
    </div>
  )
}

export default Communitybtn
