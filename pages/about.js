import Header from '../src/components/header'
import Nav from '../src/components/nav'
import Footers from '../src/components/footer'
function About() {
  return (
    <>
      <Header title="About Us" />
      <Nav head="about" />
      <main className="container my-5 sty-font">
        <div className="mt-3">
          <h4>About this side</h4>
          <span>
            STATOR WILITY ini digunakan untuk mempermudah masyarakat untuk
            memantau keidealan berat badan serta mengetahui parameter lain
            seperti massa lemak tubuh, massa air tubuh dan massa tulang pada
            tubuh manusia.
          </span>
        </div>

        <div className="mt-5">
          <h4>About this product</h4>
          <span>
            Stability Detector for Weight Ideality adalah sebuah alat atau
            produk yang akan dibuat berupa sebuah timbangan badan mekanik dengan
            skala pengukuran maksimal 150 kg yang menggunakan sebuah sensor
            berat yang dipergunakan sebagai pengubah nilai penunjuk skala beban
            dalam bentuk tegangan, Dalam alat atau produk ini digunakan beberapa
            metode untuk pengukuran berat badan manusia diantaranya adalah
            pengukuran dengan metode Body Mass Index (BMI) dan pengukuran dengan
            metode Bioelectrical Impedance Analysis (BIA)
          </span>
        </div>
      </main>
      <Footers />
    </>
  )
}

export default About
