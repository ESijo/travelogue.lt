import PropTypes from 'prop-types'
import ImageCard from './ImageCard'

function ImageList(props) {
    return (
        <div className="image-list">{props.data.map(item => <ImageCard source={item.source} title={item.title}/>)}</div>
    );
}

ImageList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            source: PropTypes.string, 
            title: PropTypes.string
        })
    )
}

export default ImageList;