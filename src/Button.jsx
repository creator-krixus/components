import PropTypes from 'prop-types';
import useCount from './store';
import "./Button.css"

export default function Button({ title = "Click Me" }) {
  const [state, setState] = useCount();
  return (
    <div>
      <button
        className='shared-btn'
        onClick={() => setState((s) => s + 1)}
      >
        {title} {state}
      </button>
    </div>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired
};
