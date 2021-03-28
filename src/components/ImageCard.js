import PropTypes from 'prop-types'

function ImageCard(props) {
    return (
        <div className="card-container">
            <img className="card-image" src={props.source} alt="" />
            <p>{props.title}</p>
        </div>
    )
}

ImageCard.propTypes = {
    title: PropTypes.string,
    source: PropTypes.string
}

export default ImageCard;