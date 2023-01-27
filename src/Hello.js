// export default means by default export this function from this file
// if we export this function then we can import this in a another file
// let try to add resuability here
// in context to react argument to a functional component is a prop

export default function HelloComponent({ name }) {
  return <h1>Hello {name}</h1>;
}
