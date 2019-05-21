import React from "react"
import NoteList from "./NoteList"

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            NoteList: [
                {
                    id: "0",
                    noteTitle: "Title 1",
                    noteParagraph : "Paragraph 1"
                },

                {
                    id: "1",
                    noteTitle: "Title 2",
                    noteParagraph : "Paragraph 2"
                }
            ]
        }

        this.handleAddNote = this.handleAddNote.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
    }

    handleAddNote() {
        this.setState({
            NoteList: this.state.NoteList.concat(<NoteList />)
        })
        console.log(this.state.NoteList)
    }

    handleTitleChange(event) {
        const {value} = event.target
        let noteListData = JSON.parse(
            JSON.stringify(this.state.NoteList)
        )
        let noteListId = event.target.getAttribute("id")
        noteListData[noteListId].noteTitle = value
        this.setState({
            NoteList: noteListData
        })
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    placeholder="Enter search term here..."
                />
                <button
                    onClick={this.handleAddNote}
                >Add note</button>

                {
                    this.state.NoteList.map((note) => 
                        <NoteList 
                            id={note.id}
                            key={note.id}
                            noteTitle={note.noteTitle}
                            noteParagraph={note.noteParagraph}
                            handleTitleChange={this.handleTitleChange}
                        >
                        </NoteList>
                    )
                }
            </div>
        )
    }
}

export default Search 