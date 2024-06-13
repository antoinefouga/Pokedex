import PropTypes from 'prop-types';

function NavBar({ onPrevious, onNext, canGoPrevious, canGoNext }) {

    return (
        <div>
            {canGoPrevious && (
                <button onClick={onPrevious}>Précédent</button>
            )}
            {canGoNext && (
                <button onClick={onNext}>Suivant</button>
            )}
        </div>
    )
}

NavBar.propTypes = {
    onPrevious: PropTypes.func.isRequired,
    canGoPrevious: PropTypes.bool.isRequired,

    onNext: PropTypes.func.isRequired,
    canGoNext: PropTypes.bool.isRequired,

}

export default NavBar;