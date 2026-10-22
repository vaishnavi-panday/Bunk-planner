import { useSelector } from 'react-redux';
import { getPercentage } from '../utils/getPercentage';

function AttendanceSummary() {
  const list = useSelector((state) => state.subjects.list);

  const attended = list.reduce((sum, s) => sum + s.attended, 0);
  const total = list.reduce((sum, s) => sum + s.total, 0);
  const overall = getPercentage(attended, total);

  return (
    <section className="summary">
      <div>
        <span className="summary-number">{list.length}</span>
        <span className="summary-label">subjects</span>
      </div>
      <div>
        <span className="summary-number">{overall.toFixed(1)}%</span>
        <span className="summary-label">overall attendance</span>
      </div>
    </section>
  );
}

export default AttendanceSummary;
