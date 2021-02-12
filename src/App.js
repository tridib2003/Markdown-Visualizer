/* 
  ~ author: @tridib_2003 
*/
import ReactMarkdown from 'react-markdown';
import react, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.css';


export default function App() {

    const [input, setInput] = useState();

    return (

        <div className="App">

            <textarea className="textarea" value={input} onChange={
                (e) => setInput(e.target.value)
            }/>

            <ReactMarkdown source={input} className="markdown" renderers={{
                code: Component,
            }} />

        </div>

    );
}


const Component = ({value, language}) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};
