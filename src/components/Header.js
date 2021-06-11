
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    let onClick = (e)=>{
        console.log('Click');
    }

    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color='green' text='Add' onClick = {onClick}/>
            {/* <Button color='blue' text='Hello 1'/>
            <Button color='red' text='Hello 2'/> */}
        </header>
    )
}

Header.defaultProps = {
    title:'Task Tracker'
  }

  Header.propTypes = {
      title : PropTypes.string.isRequired,
  }


//   style={headingStyle} // this goes in html tag
//   const headingStyle = {
//       color:'black',
//       backgroundColor:'coral'
//   }

export default Header
