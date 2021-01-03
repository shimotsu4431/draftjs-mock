import React, { useState } from "react";
import { Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './App.css'

function EditorApp() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const myBlockRenderer = (block) => {
    if (block.getType() === "blockquote") {
      return {
        editable: false,
      }
    }

    return null
  }

  return (
    <div className="wrapper">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        blockRendererFn={myBlockRenderer}
      />
    </div>
  );
}

export default EditorApp;
