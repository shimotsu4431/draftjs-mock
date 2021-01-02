import React, { useState } from "react";
import {Editor, EditorState, convertFromRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './App.css'

const initData = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      key: "xxxxxx",
      text: "ここに初期テキストがはいります。",
      type: "unstyled",
      depth: 0,
      entityRanges: [],
      inlineStyleRanges: [],
      data: {},
    },
  ],
})

const emptyData = EditorState.createWithContent(
  initData,
)

function EditorApp() {
  const [editorState, setEditorState] = useState(emptyData);

  return (
    <div className="wrapper"><Editor editorState={editorState} onChange={setEditorState} /></div>
  );
}

export default EditorApp;
