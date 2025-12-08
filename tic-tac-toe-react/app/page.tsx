
export default function Home() {

  // Declare some variables
  let x = 125;

  // list of fruits
  let fruits = ['apple', 'orange', 'banana'];
  let fruitsLis = fruits.map(f => (<li key={f}>{f}</li>));


  return (
    <>
    <h1 className="font-bold text-2xl">This is a React app!</h1>
    <p>Hello world!</p>
    <p>x is {x}</p>
    <ul className="list-disc">
      {fruitsLis}
    </ul>
    </>
  );
}
