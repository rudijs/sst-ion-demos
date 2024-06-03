/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    MyApi: {
      type: "sst.aws.ApiGatewayV2"
      url: string
    }
    MySecret: {
      type: "sst.sst.Secret"
      value: string
    }
  }
}
export {}