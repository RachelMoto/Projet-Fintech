

const Historique = () => {
  return (
    <div className="card" style={{ width: '67%' }}>
    <div className="card-body pb-0" style={{ width: '100%' }}>
      <h5 className="card-title">
        Historique <br /> <span>Historiques détails</span>
      </h5>

      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Profil</th>
            <th scope="col">Noms</th>
            <th scope="col">Montant</th>
            <th scope="col">Statuts</th>
            <th scope="col">N°Compte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <a href="#">
                <img
                  src="/product-1.jpg"
                  alt="Steve Balifa"
                  className="img-fluid"
                  style={{ width: '55px', height: '55px', borderRadius: '10%' }}
                />
              </a>
            </th>
            <td>
              <a href="#" className="text-primary fw-bold">Aimerance Biyenga</a>
            </td>
            <td>$80</td>
            <td className="fw-bold">Approuvé</td>
            <td>L845878</td>
          </tr>
          <tr>
            <th scope="row">
              <a href="#">
                <img
                  src="/product-1.jpg"
                  alt="Steve Balifa"
                  className="img-fluid"
                  style={{ width: '55px', height: '55px', borderRadius: '10%' }}
                />
              </a>
            </th>
            <td>
              <a href="#" className="text-primary fw-bold">Ken Kabuya</a>
            </td>
            <td>$70</td>
            <td className="fw-bold">Approuvé</td>
            <td>L845878</td>
          </tr>
          <tr>
            <th scope="row">
              <a href="#">
                <img
                  src="/product-1.jpg"
                  alt="Steve Balifa"
                  className="img-fluid"
                  style={{ width: '55px', height: '55px', borderRadius: '10%' }}
                />
              </a>
            </th>
            <td>
              <a href="#" className="text-primary fw-bold">Djo Kadima</a>
            </td>
            <td>$90</td>
            <td className="fw-bold">Approuvé</td>
            <td>L845878</td>
          </tr>
          <tr>
            <th scope="row">
              <a href="#">
                <img
                  src="/product-1.jpg"
                  alt="Steve Balifa"
                  className="img-fluid"
                  style={{ width: '55px', height: '55px', borderRadius: '10%' }}
                />
              </a>
            </th>
            <td>
              <a href="#" className="text-primary fw-bold">Benjamin Daima</a>
            </td>
            <td>$75</td>
            <td className="fw-bold">Approuvé</td>
            <td>L845878</td>
          </tr>
          <tr>
            <th scope="row">
              <a href="#">
                <img
                  src="/product-1.jpg"
                  alt="Steve Balifa"
                  className="img-fluid"
                  style={{ width: '50px', height: '60px', borderRadius: '10%' }}
                />
              </a>
            </th>
            <td>
              <a href="#" className="text-primary fw-bold">Winner Luyeye</a>
            </td>
            <td>$64</td>
            <td className="fw-bold">Approuvé</td>
            <td>L845878</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Historique;
