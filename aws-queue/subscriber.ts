export const handler = async (event) => {
  console.log("event :>> ", event.Records[0].body)
  // console.log(event)
  return "ok!!!!"
}
