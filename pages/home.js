import Header from '../src/components/header'
import Nav from '../src/components/nav'
import Footers from '../src/components/footer'
function Home() {
  return (
    <>
      <Header title="STATOR WILITY" />
      <Nav head="home" />
      <main
        className="container mt-5 col-md-4 bg-white"
        style={{ borderRadius: 5 }}
      >
        <div className="text-center py-4">
          <span className="text-home">Data Input</span>
        </div>
        <form action="/bia">
          <div className="form-group">
            <label htmlFor="namalengkap">Nama Lengkap</label>
            <input
              type="text"
              className="form-control"
              id="namalengkap"
              placeholder="Masukkan Nama Kamu"
            />
          </div>
          <div className="form-group">
            <label htmlFor="umur">Umur</label>
            <input
              type="number"
              className="form-control"
              id="umur"
              placeholder="Masukkan Umur Kamu"
            />
          </div>

          <div className="form-group">
            <label htmlFor="jenis-kelamin">Jenis Kelamin</label>
            <select className="form-control" id="jenis-kelamin">
              <option value="laki-laki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary mb-4">
              Submit
            </button>
          </div>
        </form>
      </main>
      <Footers />
    </>
  )
}

export default Home
