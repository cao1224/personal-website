import data from './data'
import Scrollspy from 'react-scrollspy'
import Nav from './Nav'
import './floating-nav.css'

const FloatingNav = () => {
    return (
      <ul id="floating_nav">
        <Scrollspy offset={-500} className='scrollspy' items={['about', 'education', 'skillset', 'experiences', 'projects', 'gallery']} currentClassName="active">
          {
            data.map(item => <Nav key={item.id} item={item} />)
          }
        </Scrollspy>
      </ul>
    )
  }
  
  export default FloatingNav