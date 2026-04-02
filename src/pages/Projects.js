import React from "react";

function Projects() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Projects</h2>
      <div className="row">
        {[1,2,3,4,5,6].map((img) => (
          <div className="col-md-4 col-sm-6 mb-4" key={img}>
            <img 
              src="https://via.placeholder.com/400x300"
              className="img-fluid rounded shadow"
              alt="Project"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;