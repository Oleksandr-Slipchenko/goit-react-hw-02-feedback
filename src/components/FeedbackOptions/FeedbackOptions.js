import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import { v4 as uuidv4 } from 'uuid';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  const id = uuidv4();
  return (
    <button
      key={id}
      className={s.feedbackButton}
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option =>
    FeedbackButton({ feedback: option, onLeaveFeedback }),
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
