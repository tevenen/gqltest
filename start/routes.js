// start/routes.js

'use strict'

const Route = use('Route')
const GraphqlAdonis = use('ApolloServer')
const schema = require('../app/data/schema');
const cloudinary = use('Cloudinary');

Route.get('/', ({ request, response }) => {
  return GraphqlAdonis.graphiql({ endpointURL: '/graphql' }, request, response)
});

Route.route('/graphql', ({ request, auth, response }) => {
  return GraphqlAdonis.graphql({
    schema,
    context: { auth }
  }, request, response)
}, ['GET', 'POST']);

Route.get('/graphiql', ({ request, response }) => {
  return GraphqlAdonis.graphiql({ endpointURL: '/graphql' }, request, response)
});

Route.post('api/upload-file', async ({request, response}) => {
  console.log(request.file('image'))
  try {
    const image = request.file('image', {types: ['image'], size: '2mb'});
    const cloudinaryResponse = await cloudinary.uploader.upload(image.tmpPath);
    return response.json(cloudinaryResponse);
  } catch (error) {
    return response.json({status: false, data: "Upload failed"})
  }
});
