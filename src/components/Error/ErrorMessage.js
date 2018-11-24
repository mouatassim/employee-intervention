import React from 'react'

const ErrorMessage = ({ error })=>{
    return(
        <div>
            <div className="alert alert-danger" role="alert">
                Something went wrong
            </div>    
            <pre>
                {error.toString()}
            </pre>

        </div>
    )
}

export default ErrorMessage;