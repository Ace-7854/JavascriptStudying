//************************************************************
// 👩‍💻👨‍💻 WEEK 3 LAB — Advanced JSX
//************************************************************
// 🌟 GOAL: Understand JSX, attributes, .map(), and conditional rendering.
//************************************************************

//************************************************************
// STEP 1 — YOUR FIRST JSX
//************************************************************
// Inside the App() function below, return a <div> that says:
// "Hello Software Engineers!"
// HINT: return (<div>Hello Software Engineers!</div>)


//************************************************************
// STEP 2 — ADD ELEMENTS AND ATTRIBUTES
//************************************************************
// Still inside App(), add:
// - an <h2> with your name
// - a <p> that says your favourite programming language
// - a <p> with className="fun-fact" containing a fun fact about yourself
// Remember: in JSX we use className instead of class.

//************************************************************
// STEP 3 — CREATE A DATA ARRAY
//************************************************************
// Create an array of objects called "students".
// Each student should have: name, age, and course.
// Example: { name: "Alice", age: 20, course: "Computing" }

const students = [
  { name: "Alice", age: 20, course: "Computing" },
  { name: "Edi", age: 19, course: "Software Engineering" },
  { name: "Tom", age: 21, course: "Cyber Security" },
  { name: "Sophie", age: 22, course: "Data Science" },
  { name: "Liam", age: 18, course: "Artificial Intelligence" },
  { name: "Chloe", age: 20, course: "Information Technology" },
  { name: "James", age: 23, course: "Computer Science" },
  { name: "Mia", age: 19, course: "Software Engineering" },
  { name: "Ethan", age: 21, course: "Games Development" },
  { name: "Olivia", age: 22, course: "Business Information Systems" },
  { name: "Noah", age: 20, course: "Computing" },
  { name: "Grace", age: 18, course: "Web Technologies" },
  { name: "Lucas", age: 24, course: "Network Engineering" },
  { name: "Ava", age: 21, course: "Data Analytics" },
  { name: "Leo", age: 19, course: "Computer Science" }
];

//************************************************************
// STEP 4 — DISPLAY DATA USING .map()
//************************************************************
// Inside App(), create a <ul> list where each <li> displays the student's name and course.
// HINT: students.map(student => (<li>...</li>))
const studentsOver21 = students
  .filter(student => student.age === 21) // only 21-year-olds
  .map(student => (                      // then map to <li> elements
    <li key={student.name}>
      {student.name} - {student.course} ({student.age})
    </li>
  ))
//************************************************************
// STEP 5 — ADD CONDITIONAL RENDERING
//************************************************************
// Only show students OVER 21.
// HINT: students.filter(s => s.age > 21).map(...)
//DONE
//************************************************************
// STEP 6 — REUSABLE JSX BLOCK (Like Props, But Simple)
//************************************************************
// Create a small helper function inside App:
// function renderStudent(student) { return (<div>...</div>); }
// Call it inside .map() to render each student's details (name, age, course).

//************************************************************
// STEP 7 — BONUS CHALLENGE: SURF FORECAST
//************************************************************
// Create an object called surfForecast with a "location" and "forecast" array.
// Each forecast entry should have a "date" and "conditions" array of { time, height, wind }.
// Use nested .map() to display the forecast nicely.

const surfForecast = {
	location:"Bournemouth",
	forcast: [
		{
			time:"8:00",
			height:"12m",
			wind:"10mps"
		},
		{
			time:"12:00",
			height:"5m",
			wind:"12mps"
		},
		{
			time:"17:00",
			height:"3m",
			wind:"6mps"
		}
	]
};

//************************************************************
// STEP 8 — BRING IT ALL TOGETHER
//************************************************************
// Inside App(), render:
// - Your greeting & intro info
// - Your <ul> of students (21+ only)
// - Your surf forecast
//************************************************************

function App() {
	function renderStudent(student) {
		return (
		<div>
			{student.name}, {student.course}, {student.age}		
		</div>
		)
	}
	return (
		<main style={{ fontFamily: "system-ui", lineHeight: 1.5, padding: "1rem" }}>
			<h1>🌊 Week 3 — JSX Rendering Workbook</h1>
				<div> 
					Hello Software Engineer
					<ul>
						{studentsOver21}
					</ul>
					{students.map(student => renderStudent(student))}
				</div>
		</main>
	);
}

//************************************************************
// STEP 9 — RENDER TO THE PAGE (React 18)
//************************************************************

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
