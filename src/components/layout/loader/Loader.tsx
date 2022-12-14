export default function Loader() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m4 l2"></div>
        <div className="col s12 m4 l8 center-align">
          <div className="preloader-wrapper big active loading">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
