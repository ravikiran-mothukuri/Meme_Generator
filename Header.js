import meme from '../../images/Meme.png'

function Header()
{
  return(
    <header className="header">
        <img className='header--image' src={meme} alt="meme-img" />
        <h2 className='header--title'>Meme Generator</h2>
        <p className='header--project'>React Course - Project 3</p>
    </header>
  )
}

export default Header;