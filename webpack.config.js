const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), //busca a pasta onde meu arquivo está.
  //↓↓ outuput: É qual arquivo que vai ser gerado depois de ser convertido ↓↓
  output: {
      path : path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
  },
  devServer:{
      contentBase: path.resolve(__dirname, 'public'),
  },
  //↓↓ Uma regra: para arquivos JS eu vou utilizar o babel, para outros tipos de arquivos eu vou usar outro loader! ↓↓
  module:{
    rules:[
      {
        //Basicamente aqui eu estou dizendo pro webpack, que ele direcione para o babel cuidar dos arquivos .js que estão fora da node_modules.
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use:[
          { loader: 'style-loader' },
          { loader: 'css-loader'}, 
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
      use: {
        loader: 'file-loader'
      }

      }
    ]
  }
};