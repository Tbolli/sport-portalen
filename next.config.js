module.exports = {
   redirects: async() =>{
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
}