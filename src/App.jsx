import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import AttendanceSummary from './components/AttendanceSummary';
import AddSubjectForm from './components/AddSubjectForm';
import SubjectCard from './components/SubjectCard';

function App() {
  const list = useSelector((state) => state.subjects.list);

  return (
    <div className="app">
      <Navbar />
      <main>
        <AttendanceSummary />
        <AddSubjectForm />
        {list.length === 0 ? (
          <p className="empty">No subjects yet. Add your first subject above.</p>
        ) : (
          <div className="grid">
            {list.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
