let mix = require('laravel-mix')

mix.webpackConfig({
   resolve: {
       alias: {
           '@': path.resolve('resources/js')
       }
   }
})

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
