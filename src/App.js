import React, { useState } from "react";
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './App.css'

function EditorApp() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div className="wrapper"><Editor editorState={editorState} onChange={setEditorState} readOnly={true}/></div>
  );
}

export default EditorApp;
