const graphql = require('graphql')
const {GraphQLObjectType, GraphQLString, GraphQLSchema,
GraphQLID, GraphQLList, GraphQLInt, GraphQLNonNull} = graphql
const Movies = require('./models/movie')
const Directors = require('./models/director')

const movies = [
  {id: '1', name: 'Pulp Fiction', genre: 'Crime', directorId: 1},
  {id: 2, name: '1984', genre: 'Sky-fi', directorId: 2},
  {id: 3, name: 'Something', genre: 'Sky-fi', directorId: 1},
  {id: 4, name: 'Drim', genre: 'Sky-fi', directorId: 2},
];
const directors = [
  {id: '1', name: 'Quentin', age: 50},
    {id: 2, name: 'Mishael', age: 40},
]

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: new GraphQLNonNull(GraphQLString)},
    genre: {type: GraphQLString},
    refer: {type: GraphQLString},
    director: {
      type: DirectorType,
      resolve(parent, args) {
      //return directors.find(el => el.id == parent.directorId)
      return Directors.findById(parent.directorId)
      }
    },
  })
})
const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: new GraphQLNonNull(GraphQLString)},
    age: {type: GraphQLInt},
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
  //return movies.filter(movie => movie.directorId == parent.id)
  return Movies.find({directorId: parent.id})
     },
    },
  }),
})

   const Mutation = new GraphQLObjectType({
   name: 'Mutation',
   fields: {
    addDirector: {
    type:  DirectorType,
    args: {
      name: {type: new GraphQLNonNull(GraphQLString)},
      age: {type: GraphQLInt},
    },
    resolve(parent, args){
const director = new Directors({name: args.name,age: args.age});
     return director.save();
  //return Directors.save({name: args.name, age: args.age})
    }
  },
  addMovie: {
  type:  MovieType,
  args: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    genre: {type: GraphQLString},
    directorId: {type: new GraphQLNonNull(GraphQLID)},
    refer: {type: GraphQLString},
  },
  resolve(parent, args){
  const movie = new Movies({
    name: args.name, genre: args.genre,
    directorId: args.directorId, refer: args.refer
  }); return movie.save();
  }
},
deleteDirector: {
type:  DirectorType,
args: {id: {type: GraphQLID}},
resolve(parent, args){
  Movies.find({directorId: args.id}).then(
  (movies) => movies.forEach(movie => {movie.remove()})
)
  return Directors.findByIdAndRemove(args.id)}
},
updateDirector: {
type:  DirectorType,
args: { id: {type: GraphQLID},
name: {type: new GraphQLNonNull(GraphQLString)},
age: {type: GraphQLString},
},
resolve(parent, args){
  return Directors.findByIdAndUpdate(args.id,
    {$set: {name: args.name, age: args.age}}, {new: true}
    )}
},
deleteMovie: {
type:  MovieType,
args: {id: {type: GraphQLID}},
resolve(parent, args){
  return Movies.findByIdAndRemove(args.id)}
},
updateMovie: {
type:  MovieType,
args: {
id: {type: new GraphQLNonNull(GraphQLID)},
name: {type: new GraphQLNonNull(GraphQLString)},
genre: {type: GraphQLString},
directorId: {type: new GraphQLNonNull(GraphQLID)},
},
resolve(parent, args){
  return Movies.findByIdAndUpdate(args.id,
{$set: {name: args.name,genre: args.genre,
  directorId: args.directorId }}, {new: true}
    )}
},
}
})
const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
movie: {
  type: MovieType,
  args: {id: {type: GraphQLID}},
  resolve(parent, args) {return Movies.findById(args.id)
//return movies.find(movie => movie.id == args.id)
  }
},
director: {
  type: DirectorType,
  args: {id: {type: GraphQLID}},
  resolve(parent, args) {return Directors.findById(args.id)
  //  return directors.find(el => el.id == args.id)
  }
},
movies: {
  type: new GraphQLList(MovieType),
  args: {
  genre: {type: GraphQLString},
  name: {type: GraphQLString},//!1
  //refer: {type: GraphQLString},
  directorId: {type: GraphQLID}
},
  resolve(parent, args) {return Movies.find(args)
  //return movies
}
},
directors: {
  type: new GraphQLList(DirectorType),
  resolve(parent, args) {return Directors.find({})
  //return directors
  }
},
}
})
module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
