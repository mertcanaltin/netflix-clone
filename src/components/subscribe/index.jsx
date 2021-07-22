export default function Subscribe() {
    return (
        <section>
          <div className="bottom-search">
            <p className="text-center">İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.</p>
            <div className="row">
              <div className="col-md-2 col-1" />
              <div className="col-md-8 col-10 p-0 main-search">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="E-posta Adresi" />
                  <span className="input-group-text" id="basic-addon2">Başlayın<i className="bi bi-chevron-right text-white" /></span>
                </div>
              </div>
              <div className="col-md-2 col-1" />
            </div>
          </div>
        </section>
    )
}
