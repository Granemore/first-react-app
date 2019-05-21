import React from "react"

const NoteList = (props) => {
    return(
        <div>
            <div className="noteList">
                <h3>{props.noteTitle}</h3>
                <p>{props.noteParagraph}</p>
                <p>{props.id}</p>
            </div>
            <textarea 
                id={props.id}
                onChange={props.handleTitleChange}
                value={props.noteTitle}
            />
        </div>
    )
}

export default NoteList