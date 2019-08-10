const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')

const ShowType = new GraphQLObjectType({
  name: "Show",
  fields:() => ({
    id: { type: GraphQLString},
    name: { type: GraphQLString},
    summary: { type: GraphQLString}
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    show: {
      type: ShowType,
      args: {
        id: {type: GraphQLString}
      },
      resolve(parentValue, args){
        for (let i = 0; i < array.length; i++) {
          if(array[i].id === args.id){
            return array[i]
          }
        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
