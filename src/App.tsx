import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Animation from './components/StyledMainComponents/Animation';
const App = () => {

  return (
    <>
      <Header />
      <Animation>
        <CardList/>
        <Info/>
      </Animation>
    </>
  )
}

export default App
