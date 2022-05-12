module.exports = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/loin',
            permanent: true,
          },
          {
            source: '/bruker',
            destination: '/bruker/feed',
            permanent: true,
          },
        ]
      },
}