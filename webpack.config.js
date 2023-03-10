const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports={
 entry:'./js/main.js',
 output:{
    // path:path.resolve(__dirname,'dist'),  //생략가능
    // filename:'main.js',                     //생략가능
    clean:true
 },
 module:{
    rules:[
        {
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: [
                          require('autoprefixer')
                        ]
                      }
                    }
                  },
                'sass-loader'
              ]
        },
        {
            test:/\.js/,
            use:[
                'babel-loader'
            ]
        }
    ]
 },
 plugins:[
    new HtmlPlugin({
        template:'./index.html'
    }),
    new CopyPlugin({
        patterns:[
            {from:'static'}
        ]
    })
 ],
 devServer:{
    host:'localhost'
 }
}
