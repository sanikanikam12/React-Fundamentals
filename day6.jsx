function App() {
  const students = ["Sanika", "Rahul", "Priya", "Amit"];

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        Student List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {students.map((student, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow"
          >
            <h2 className="text-xl font-semibold">
              {student}
            </h2>

            <p>Course: BCA</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
