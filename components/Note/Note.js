export default function Note ({ note, toggleImportance }) {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
        <li>
            <div>
                {note.content}
            </div>
            <button onClick={toggleImportance}>{label}</button>
        </li>
  )
}
