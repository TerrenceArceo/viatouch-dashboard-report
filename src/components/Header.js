import viatouch from '../images/viatouch_logo_white.png'

export default function Header() {
    return (
        <header>
            <img className='logo' src={viatouch} alt="viatouch logo"/>
        </header>
    )
}