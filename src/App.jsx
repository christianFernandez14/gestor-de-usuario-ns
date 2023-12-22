import { useState } from "react";
import styled from "@emotion/styled";

const App = () => {

  return (
    <div>
      <form>
        <div>
          <label htmlFor="">nombre</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">apellido</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input type="email" />
        </div>
      </form>
    </div>
  )
}

export default App;
