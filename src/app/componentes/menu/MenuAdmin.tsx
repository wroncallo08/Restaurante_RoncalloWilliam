export const MenuAdmin = () => {
    return (
      <>
        <div className="pt-5 d-flex justify-content-center">
          <div className="col-md-6">
            <table className="table table-strip">
              <thead>
                <tr>
                  <th style={{ width: "5%" }}>No</th>
                  <th style={{ width: "25%" }}>Nombre plato</th>
                  <th style={{ width: "25%" }}>Acompañamiento</th>
                  <th style={{ width: "15%" }} className="text-center">
                    Precio
                  </th>
                  <th style={{ width: "20%" }}>Region</th>
                  <th style={{ width: "10%" }}>Opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Banadeja paisa</td>
                  <td>Con aguacate</td>
                  <td className="text-center">35.000</td>
                  <td>Paisa</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square" style={{ color: "#2596be" }}></i>
                    &nbsp;
                    <i className="fa-solid fa-eraser" style={{ color: "#2596be" }}></i>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ajiaco</td>
                  <td>Con Arroz</td>
                  <td className="text-center">20.000</td>
                  <td>Caribe</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square" style={{ color: "#2596be" }}></i>
                    &nbsp;
                    <i className="fa-solid fa-eraser" style={{ color: "#2596be" }}></i>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Pescao Frito</td>
                  <td>Con Arroz de Coco</td>
                  <td className="text-center">18.000</td>
                  <td>Caribe</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square" style={{ color: "#2596be" }}></i>
                    &nbsp;
                    <i className="fa-solid fa-eraser" style={{ color: "#2596be" }}></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };