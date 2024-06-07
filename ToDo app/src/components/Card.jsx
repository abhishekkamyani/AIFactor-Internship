export default function Card({heading, text, isCompleted}) {
  return (
    <div className="card bg-card">
      <h3 className="font-bold">{heading}</h3>
      <p className="pt-2">{text}</p>
    </div>
  );
}