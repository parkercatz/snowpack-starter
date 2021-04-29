module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: '/',
  },
  plugins: [
    ['@marlonmarcello/snowpack-plugin-pug'],
    ['snowpack-sass-compiler'],
  ],
}
