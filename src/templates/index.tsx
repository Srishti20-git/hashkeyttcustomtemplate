import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as customTemplate } from "./coc";
import styled from "@emotion/styled";
import { CocTemplate } from "./coc/template";
import { CocTemplateCertificate } from "./samples";
import React from 'react';
import logo from './logo.svg';
import './App.css';

export const registry: TemplateRegistry<CocTemplateCertificate> = {
  custom: customTemplate,
  red: [
    {
      id: "custom-red",
      label: "Red Custom Template",
      template: styled(CocTemplate)`
        color: red;
      `
    }
  ]
};
class App extends React.Component {
  state={
    curTime : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="App">
        <p>Date : {this.state.curTime}</p>
      </div>
    );
  }
}

export default App;

