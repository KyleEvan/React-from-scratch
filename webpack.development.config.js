const path = require('path');

module.exports = [
  {
    name: 'client',
    target:'web',
    entry: './src/client/client.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'client.bundle.js',
      publicPath: '/public/'
    },
    resolve:{
      extensions: ['.js','.jsx']
    },
    devtool: 'source-map',
    module:{
      rules:[
        {
          test: /\.js$/,
          exclude:/(node_modules\/)/,
          use:[
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    }
  },
  {
      name:'server',
      target: 'node',
      entry: './src/server/server.js',
      output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs2',
        publicPath: '/public/'
      },
      devtool: 'source-map',
      resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules\/)/,
            use: [
              {
                loader: 'babel-loader'
              }
            ]
          }
        ]
      }
    }
]
