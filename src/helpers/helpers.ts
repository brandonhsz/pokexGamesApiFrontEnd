class Helpers {
  
  static getArandomNumber = (min = 1, max = 898):string => {
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }
}

export default Helpers;
