export default function HomeHeader() {
    return (
        <div className="bg-img">
          <div className="layer">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Sınırsız film, dizi ve çok <br />daha fazlası.</h1>
                <h3>İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</h3>
                <h5>İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.</h5>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-md-2 col-1" />
              <div className="col-md-8 col-10 p-0 main-search">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="E-posta adresi" />
                 
                  
                  <span to="/list" className="input-group-text" id="basic-addon2">Başlayın <i className="bi bi-chevron-right text-white" /></span>
                </div>
              </div>
              <div className="col-md-2 col-1" />
            </div>
          </div>
        </div>
    )
}
