import './Banner';
import Row from "./Row"
import request from "./request"
import Banner from "./Banner"
import Navbar from './Navbar';
function App() {
  return (
 <>
 <Navbar/>
 <Banner/>
 <Row
  title="Netflix original"
  fetchurl={request.netflixoriginal}
  isLargerow
/>
<Row title="Trending now"
fetchurl={request.trending}
/>
<Row
  title="Top rated"
  fetchurl={request.toprated}
/>
<Row
  title="Action movies"
  fetchurl={request.action}
/>
<Row
  title="Comedy"
  fetchurl={request.comedy}
/>
<Row
  title="Horror"
  fetchurl={request.horror}
/>
<Row
  title="Romance"
  fetchurl={request.romance}
/>
<Row
  title="Documentary"
  fetchurl={request.documentary}
/>
</>
  )
}

export default App;
