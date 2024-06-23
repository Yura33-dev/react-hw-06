import PropTypes from 'prop-types';

import styles from './SearchBox.module.css';

function SearchBox({ filter, onFilter }) {
  return (
    <>
      <p className={styles.title}> Find contacts by name</p>
      <input
        type="text"
        name="search"
        className={styles['search-box']}
        value={filter}
        onInput={e => onFilter(e.target.value)}
      />
    </>
  );
}

SearchBox.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

export default SearchBox;
