import { useState } from "react"
import PropTypes from "prop-types"

NewGameForm.propTypes = {
    addGame: PropTypes.func
}

export default function NewGameForm({ addGame }) {
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({ title, cover })
        setTitle("")
        setCover("")
}

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Título:</label>
                <input type="text" id="title" value={title} onChange={(ev) => setTitle(ev.target.value)} />
            </div>
            <div>
                <label htmlFor="cover">Capa:</label>
                <input type="text" id="cover" value={cover} onChange={(ev) => setCover(ev.target.value)} />
            </div>
            <button>Adicionar</button>
        </form>
    )
}