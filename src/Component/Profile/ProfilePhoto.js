import image from './MootezZemmel.jpg';

function ProfilePhoto() {
    return (
    <div className='imageClass'>
        <img src={image} className="profile-image" alt="image" />
    </div>
    );
}

export default ProfilePhoto;