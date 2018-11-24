import React from 'react';

const User = props =>{

    return(
        
            
            <div className="col-md-3" >
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h4 className="text-center lead ">
                     {props.user.name.toUpperCase()}
                  </h4>
                </div>
                <div className="panel-body text-center">
                  <div className="card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><strong>ID: </strong> {props.user.id}</li>
                      <li className="list-group-item"><strong>Age: </strong>{props.user.age}</li>
                      <li className="list-group-item"></li>
                    </ul>
                  </div>
                </div>         
                <div className="panel-footer">
                  <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-3">
                      <button class="btn btn-primary" >Edit</button>
                    </div>
                    <div className="col-md-3">
                      <button class="btn btn-danger" >Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
            </div>
      
        
    
        )
}

export default User;