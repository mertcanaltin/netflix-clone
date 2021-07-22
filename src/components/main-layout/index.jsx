import HomeTv from '../../assets/video-tv.m4v'

import HomeTvPng from '../../assets/home-tv.png'

import HomeMobile from '../../assets/home-mobile.jpeg'

import Homeİmac from '../../assets/home-imac.jpeg'

import Children from '../../assets/childrens.png'

import './index.scss'

export default function MainLayout() {
    return (
        <div>
            <section>
          <div className="container">
            <div className="row align-items-center reverse">
              <div className="col-lg-6">
                <h2>Televizyonunuzda izleyebilirsiniz.</h2>
                <p>Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.</p>
              </div>
              <div className="col-lg-6">
                <img src={HomeTvPng} />
                <video className="our-story-card-video" autoPlay playsInline muted loop><source src={HomeTv} type="video/mp4" /></video>

              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-6">
                <img src={HomeMobile} />
                <img className='download' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
              </div>
              <div className="col-lg-6">
                <h2>Çevrimdışı izlemek için içerikleri indirin.</h2>
                <p>En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center reverse">
              <div className="col-lg-6">
                <h2>İstediğiniz her yerde izleyin.</h2>
                <p>Ekstra ücret ödemeden telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.</p>
              </div>
              <div className="col-lg-6">
                <img src={Homeİmac} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center center">
            <div className="col-lg-6">
                <img src={Children} />
              </div>
              <div className="col-lg-6">
                <h2>Çocuklarınız için profiller oluşturun.</h2>
                <p>Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir.</p>
              </div>
              
            </div>
          </div>
        </section>
        </div>
    )
}
