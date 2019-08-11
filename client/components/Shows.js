import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Spinner from 'react-bootstrap/Spinner'
import ShowItem from './ShowItem'

const SHOWS_QUERY = gql `
query ShowsQuery{
  shows {
    name
    premiered
    summary
    officialSite
    status
    type
  }
}
`;


export class Shows extends Component{
  render(){
    return (
      <Fragment>
        <h1 className="display-4 my-3">Shows</h1>
        <Query query={SHOWS_QUERY}>
        {
          ({ loading, error, data}) => {
            if(loading) return <Spinner animation="grow" variant="info" />
            if(error) console.error(error, "something went wrong" )
            return <Fragment>
              {
                data.shows.map(show => (
                  <ShowItem key={show.premiered} show={show}/>
                ))
              }
            </Fragment>
          }
        }
        </Query>
      </Fragment>
    )
  }
}


export default Shows
