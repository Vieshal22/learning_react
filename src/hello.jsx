

function Hello() {
  let myname = "Vieshal";
  let number = 22;
  let fullname = () => {
    return `Vieshal Sahu`;
  }

  return <p>
    messageNo: {number} I am your master {fullname()}
  </p>
}




function Random() {
  return <div>
    <h1>{(Math.round(Math.random()*10))}</h1>
  </div>
}

export { Hello, Random };

