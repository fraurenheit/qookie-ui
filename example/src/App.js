import React from 'react';

import { ExampleComponent, Button } from 'qookie-ui';
import 'qookie-ui/dist/index.css';

const App = () => {
  return (
  
  <div style={{textAlign:'center'}  }>
  <ExampleComponent text="Create React Library Example 😄" />
  <Button type="primary" text="Primary Button"></Button> <br/>
  <br></br>
  <Button type="default" text="Default Button"></Button> <br/>
  <br></br>
  <Button type="dashed" text="Dashed Button"></Button> <br/>
  <br></br>
  <Button type="texty" text="Text Button"></Button> <br/>
  <br></br>
  <Button type="link" text="Link Button"></Button> <br/>
  </div>

)}

export default App
