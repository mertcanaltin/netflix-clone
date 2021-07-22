import User1 from '../../assets/user1-profile.png'
import User2 from '../../assets/user2-profile.png'
import User3 from '../../assets/user3-profile.png'
import AddProfile from '../../assets/add-profile.png'

import './index.scss'

export default function Browse() {
    return (
        <div>
            <div className="logo">
                <img src="https://i.ibb.co/r5krrdz/logo.png" />
            </div>

            <div className='container mt-5'>
                <h3 className='text-center'>Kim izliycek?</h3>
                <div className='row vertical-center text-center'>
                    <div className='col-md-2'>
                        <img src={User1} alt="" />
                        <p>Mert Can Altın</p>
                    </div>
                    <div className='col-md-2'>
                        <img src={User2} alt="" />
                        <p>Sıla Barışık</p>
                    </div>
                    <div className='col-md-2'>
                        <img src={User3} alt="" />
                        <p>Ali Altın</p>
                    </div>
                    <div className='col-md-2'>
                    <img src={AddProfile} alt="" />
                    <p>Yeni Kullanıcı Ekle</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
