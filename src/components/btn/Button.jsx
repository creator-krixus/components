import "./Button.css"

export default function Button() {
  const saludar = () => {
    console.log(saludar);
  }
  return (
    <div>
      <button
        className='shared-btn'
        onClick={saludar}
      >
        Hola desde React
      </button>
    </div>
  )
}
