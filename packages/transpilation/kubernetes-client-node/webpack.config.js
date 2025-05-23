import path from "path";

export default {
  entry: "./index.ts",
  output: {
    path: path.resolve("dist"),
    filename: "index.cjs",
    library: {
      type: "commonjs",
    },
    clean: true,
    asyncChunks: false, // This is required so that only one file is created
  },
  mode: "production",
  target: "electron-renderer",
  optimization: {
    concatenateModules: true,
    minimize: false,
  },
  async externals({ request }) {
    if (
      !request.startsWith(".") &&
      !request.startsWith("@kubernetes/client-node") &&
      !request.startsWith("jsonpath-plus")
    ) {
      if (request === "node-fetch") {
        return Promise.resolve(["node-commonjs @freelensapp/node-fetch", "default"]);
      }
      if (request === "openid-client") {
        return Promise.resolve(["node-commonjs @freelensapp/openid-client", "default"]);
      }
      return Promise.resolve(`node-commonjs ${request}`);
    }
    return Promise.resolve();
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        options: {
          compilerOptions: {
            declaration: true,
            sourceMap: false,
            outDir: path.resolve("./dist/"),
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".cjs"],
  },
};
