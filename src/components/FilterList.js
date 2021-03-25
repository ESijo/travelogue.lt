import PropTypes from 'prop-types'

function FilterList({ title, filters }) {
    const titleWords = title.split(' ');
    return (
      <div className="filter-list">
        <h1>{titleWords.map(word => <p key={word}>{word}</p>)}</h1>
        <div className="buttons">
            {filters.map(buttonText => <div key={buttonText} className="button">{buttonText}</div>)}
        </div>
      </div>
    );
  }

  FilterList.propTypes = {
      title: PropTypes.string,
      filters: PropTypes.arrayOf(PropTypes.string)
  }
  
  export default FilterList;