import React, {useState, useRef} from "react";
import JoditEditor from "jodit-react"
import HTMLReactParser from "html-react-parser"; //parsování HTML

export default function TextEditor() {
    const editor = useRef(null)
    const [content, setContent] = useState("")

    //hodit do text komponenty bez outputu, pridelat hook z parenta a to zaobalit do handleru
    return(
        <>
            <JoditEditor ref={editor} value={content} toolbarAdaptive={false} onChange={(e) => setContent(e)}/>
            <div>{HTMLReactParser(content)}</div>
            <p>{content}</p>
        </>
    )
}