import React from 'react'
import {Link} from 'react-router-dom'

export default function ShowItem({ show: { name, premiered, summary,
officialSite,
status,
type
}}){

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Name: { name }</h4>
          <p>Premiered: { premiered }</p>
        </div>
        <div className="col-md-3">
         <button className="btn btn-secondary">Show Details</button>
        </div>
      </div>
    </div>
  )
}
