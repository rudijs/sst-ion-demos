/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "my-ts-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "ap-southeast-1",
          // region: "us-east-1",
        },
      },
    }
  },
  // async run() {},
  async run() {
    const api = new sst.aws.ApiGatewayV2("MyApi")

    const secret = new sst.Secret("MySecret")

    api.route("GET /", {
      link: [secret],
      handler: "index.upload",
    })
    // api.route("GET /latest", {
    //   handler: "index.latest",
    // })
  },
})
