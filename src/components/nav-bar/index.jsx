export default function NavBar() {
    return (
        <div>
            <title>1000 Kitap</title>
        <nav className="navbar navbar-light p-0">
          <div className="container-fluid px-5">
          <div className="logo">
          <img src="https://i.ibb.co/r5krrdz/logo.png" />
        </div>
            <form className="d-flex">
              <select className="form-select mx-4 text-white" aria-label="Default select example">
                <option selected>Türkçe</option>
                <option value={2}>English</option>
                <option value={1}>Español</option>
              </select>
              <a href="/sign">
              <button  type="button" className="btn btn-danger top-sign-in">Giriş </button>
              </a>
            </form>
          </div>
        </nav>
        </div>
    )
}
