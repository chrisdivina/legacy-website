import './styles/styles.scss';

//Make sure this code is not included in production
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== "production" && module.hot) {
  var hotEmitter = require("webpack/hot/emitter");
  hotEmitter.on("webpackHotUpdate", function(currentHash) {
    document.querySelectorAll('link[href][rel=stylesheet]').forEach((link) => {
      const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`)
      link.href = nextStyleHref
    })
  });
}
