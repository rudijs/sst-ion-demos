/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "aws-queue",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "ap-southeast-1",
        },
      },
    }
  },

  async run() {
    const queue = new sst.aws.Queue("MyQueue")

    queue.subscribe("subscriber.handler")

    const app = new sst.aws.Function("MyApp", {
      handler: "publisher.handler",
      link: [queue],
      url: true,
    })

    return {
      app: app.url,
      queue: queue.url,
    }
  },
})
