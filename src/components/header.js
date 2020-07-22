function Header({ title }) {
  return (
    <div className="bg-home">
      <div className="container">
        <div className="d-flex justify-content-between ">
          <div className=" p-2 ">
            <img src="/logo-stator.JPG" alt="logo" width={120} />
          </div>
          <div className="p-2 text-center my-auto text-home">
            <span>{title}</span>
          </div>
          <div className="p-2">
            <img src="/logo-itera.JPG" alt="logo" width={120} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
