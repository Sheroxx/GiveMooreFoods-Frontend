import Figure from 'react-bootstrap/Figure';
import "./ProfileCart.css"
function ProfileCart() {
  return (
    <Figure>
      <img className='sidebar__img'
        width={100}
        height={100}
        alt="171x180"
        src="/img/profile.jpeg"
      />
      <Figure.Caption>
        Mehmet Akcan
      </Figure.Caption>
    </Figure>
  );
}

export default ProfileCart;