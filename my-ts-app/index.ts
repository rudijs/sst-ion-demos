import { Resource } from "sst"

export async function upload() {
  // const command = new PutObjectCommand({
  //   Key: crypto.randomUUID(),
  //   Bucket: Resource.MyBucket.name,
  // });

  return {
    statusCode: 200,
    // body: "Hello, World 2! " + new Date().toISOString(),
    body: "Secret: " + Resource.MySecret.value,
  }
}
