import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import PokemonCard from './components/PokemonCard';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';

const color = 'yellow';

const App = () => {
  return (
    <>
      <Header
        title = "Pokemon-game"
        descr = "card game"
      />
      <Layout
                id = "cards"
                title = "Cards"
              >
                <div className="flex">
                  {
                    POKEMONS.map(item => < PokemonCard
                      name = {item.name}
                      img = {item.img}
                      key = {item.id}
                      type = {item.type}
                      values = {item.values}
                    />)
                  }
        
                </div>
      </Layout>      
      <Layout
        id='002'
        title="This is title"
        descr="This is description"
        colorBg={{ color }} />
      
      <Layout
        id='003'
        urlBg={bg2}
        title="This is title"
        descr="This is description"/>
      
      <Footer/>
     
    </>
  );
}

export default App;
