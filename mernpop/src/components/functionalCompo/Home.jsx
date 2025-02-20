function Home(properties) {
  var styling=
  {
   textAlign:'center',
   backgroundColor:'palevioletred',
   color:'white'
  }
  return (
    <div>
    <h1 style={styling}>Home</h1>
    <h2>below tag is for props</h2>
    <h3>Props:{properties.properties}{properties.sjit}</h3>
    </div>
  )
}

export default Home;