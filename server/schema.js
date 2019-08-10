const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')
const axios = require('axios')

const ShowType = new GraphQLObjectType({
  name: "Show",
  fields:() => ({
    name: { type: GraphQLString},
    premiered: {type: GraphQLString},
    summary: {type: GraphQLString},
    officialSite: {type: GraphQLString},
    status: {type: GraphQLString},
    type: {type: GraphQLString}
  })
})




const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    shows: {
      type: new GraphQLList(ShowType),
      resolve(parentVal, args){
        return axios.get('http://api.tvmaze.com/shows')
          .then(res => res.data)
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery
})
