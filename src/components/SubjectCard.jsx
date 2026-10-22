import { useDispatch } from 'react-redux';
import { markAttendance } from '../store/subjectsSlice';
import { getPercentage } from '../utils/getPercentage';
import { calculateBunks, classesToRecover } from '../utils/calculateBunks';

function SubjectCard({ subject }) {
  const dispatch = useDispatch();
  const { id, name, attended, total } = subject;

  const percentage = getPercentage(attended, total);
  const bunks = calculateBunks(attended, total);
  const needed = classesToRecover(attended, total);

  return (
    <article className="card">
      <div className="card-header">
        <h3>{name}</h3>
        <button className="delete-btn" title="Delete subject">
          🗑️
        </button>
      </div>

      <p className="percentage">{percentage.toFixed(1)}%</p>
      <p className="muted">
        Attended {attended} of {total} classes
      </p>

      <p className="bunks">
        Safe bunks: <strong>{bunks}</strong>
      </p>
      {needed > 0 && (
        <p className="warning">Attend the next {needed} classes to get back to 75%</p>
      )}

      <div className="actions">
        <button onClick={() => dispatch(markAttendance({ id, present: true }))}>
          Present
        </button>
        <button
          className="secondary"
          onClick={() => dispatch(markAttendance({ id, present: false }))}
        >
          Absent
        </button>
      </div>
    </article>
  );
}

export default SubjectCard;
