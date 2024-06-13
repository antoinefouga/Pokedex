import PropTypes from 'prop-types';

function NavBar({ pokemonList, setPokemonIndex }) {

    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => setPokemonIndex(index)}>
                    {pokemon.name}
                </button>
            ))}

        </div>
    );
};

NavBar.propTypes = {
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        })
    ).isRequired,
    setPokemonIndex: PropTypes.func.isRequired,

};

export default NavBar;

// {canGoPrevious && (
//     <button onClick={onPrevious}>Précédent</button>
// )}
// {canGoNext && (
//     <button onClick={onNext}>Suivant</button>
// )}