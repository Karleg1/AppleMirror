const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file name
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // File extensions to resolve
    fallback: {
      path: require.resolve("path-browserify"), // Polyfill for 'path' module
      child_process: false, // No polyfill needed for 'child_process'
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Match TypeScript files
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/, // Match JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use babel-loader for JavaScript and JSX files
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Babel presets
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader for CSS files
      },
      {
        test: /\.scss$/, // Match SCSS files
        use: ["style-loader", "css-loader", "sass-loader"], // Use style-loader, css-loader, and sass-loader for SCSS files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your index.html file
      filename: "index.html", // Output HTML filename
      inject: "body", // Inject scripts into body or head
    }),
  ],
};
