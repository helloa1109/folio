module.exports = {
    'process.env.BACKEND_URL':
      process.env.NODE_ENV === 'production'
        ? 'https://helloa1109.github.io/folio'
        : '',
  };