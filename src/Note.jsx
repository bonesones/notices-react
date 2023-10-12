import { createReactEditorJS } from "react-editor-js"
import { useCallback, useRef } from "react"

export default function Note({ data, handleSavedData, handleRemove, editableNote }) {
    const ReactEditorJs = createReactEditorJS()
    const editorJs = useRef(null)
    const removeBtnRef = useRef(null)
    const divRef = useRef(null)

    const handleInitialize = useCallback((instance) => {
        editorJs.current = instance
    }, [])

    const handleSave = useCallback(async () => {
        const saveData = await editorJs.current.save()
        handleSavedData(saveData)
        alert("Заметка успешно сохранена!")
        
    })

    return (
        <div className="note" >
            <div className="editorjs" ref={divRef} onClick={(e) => {
                editableNote(data)
            }}>
                <ReactEditorJs onInitialize={handleInitialize} defaultValue={data} onReady={() => {
                    divRef.current.querySelector('.codex-editor__redactor').style.paddingBottom = "0"
                }}/>
            </div>
            <button 
                className="deleteButton callbackBtn" 
                onClick={() => handleRemove(data)} 
                ref={removeBtnRef}>
                Удалить
            </button>
            <button className="saveBtn callbackBtn" onClick={handleSave}>
                Сохранить
            </button>
        </div>
    )
    
}