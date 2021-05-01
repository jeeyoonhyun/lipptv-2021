import v from './v.svg';

function Logo() {
    return (
        <div className='logo'>
            <div className="text-big logo-lipp">LIPP</div>
            <div className="text-big logo-tv">T<img src={v}></img></div>
        </div>
    );
  }
  
  export default Logo;
  