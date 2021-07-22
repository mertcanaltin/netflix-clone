export default function Footer() {
    return (
        <footer>
          <div className="container">
            <ul>
              <li className="ps-2 pb-3">Sorularınız mı var?  <a href="#"> 0850-390-7444 numaralı telefonu arayın</a></li>
            </ul>
            <div className="row">
              <div className="col-md-3 col-6">
                <ul>
                  <li><a href="#">SSS</a></li>
                  <li><a href="#">Yatırımcı İlişkileri</a></li>
                  <li><a href="#">Kullanım Koşulları</a></li>
                  <li><a href="#">Bize Ulaşın</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-6">
                <ul>
                  <li>Yardım Merkezi</li>
                  <li><a href="#">İş İmkanları</a></li>
                  <li><a href="#">Gizlilik</a></li>
                  <li><a href="#">Hız Testi</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-6">
                <ul>
                  <li><a href="#">Hesap</a></li>
                  <li><a href="#">Hediye Kartı Kullan</a></li>
                  <li><a href="#">Çerez Tercihleri</a></li>
                  <li><a href="#">Yasal Hükümler</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-6">
                <ul>
                  <li><a href="#">Medya Merkezi</a></li>
                  <li><a href="#">İzleme Yolları</a></li>
                  <li><a href="#">Kurumsal Bilgiler</a></li>
                  <li><a href="#">Sadece Netflix'te</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row ps-4 pb-4">
              <div className="col-lg-2 col-md-4 col-6">
                <select className="form-select" aria-label="Default select example">
                <option selected className="text-white">Türkçe</option>
                  <option value={2}className="text-white">English</option>
                  <option value={1} className="text-white">Español</option>
                </select>
              </div>
            </div>
            <p class="footer-country">Netflix Türkiye</p>
          </div>
        </footer>
    )
}
