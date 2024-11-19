export const MenuCrear = () => {
    return (
        <>
            <div className="pt-5 d-flex justify-content-center">
                <div className="col-md-6">
                    <form className="row g-3 needs-validation" >

                        <div className="col-md-6">
                            <label htmlFor="nomb" className="form-label">
                                Nombre Platos
                            </label>
                            <input type="text" className="form-control borde-info" id="nomb" name="nomb" required />

                        </div>

                        <div className="col-md-6">
                            <label htmlFor="acomp" className="form-label">
                                Acompañamientos
                            </label>
                            <input type="text" className="form-control borde-info" id="acomp" name="acomp" required />

                        </div>

                        <div className="col-md-6">
                            <label htmlFor="prec" className="form-label">
                                Precio
                            </label>
                            <input type="text" className="form-control borde-info" id="prec" name="prec" required />

                        </div>

                        <div className="col-md-3">
                            <label htmlFor="regi" className="form-label">
                                Region
                            </label>
                            <select className="form-select" id="regi" name="regi" required>
                                <option selected disabled value="">Selecciona Region.</option>
                                <option>Caribe</option>
                                <option>Santander</option>
                                <option>Orinoquia</option>
                                <option>Bolivar</option>
                            </select>

                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">
                                Registrar plato
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};