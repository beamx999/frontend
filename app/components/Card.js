
export default function Card() {
    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
                    <div className="card" style={{ width: '100%', maxWidth: '50rem'}}>
                        <img src="\images\maclaren zenna.webp" className="card-img-top img-responsive" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
                <div className="card" style={{ width: '100%', maxWidth: '50rem'}}>
                        <img src="\images\AMG GT.webp" className="card-img-top img-responsive" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
                <div className="card" style={{ width: '100%', maxWidth: '50rem'}}> 
                        <img src="\images\maclaren zenna.webp" className="card-img-top img-responsive" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
