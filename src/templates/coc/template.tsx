import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../samples/customTemplateSample";

const containerStyle = css`
  background-color: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: left;
`;
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
export const CocTemplate: FunctionComponent<
  TemplateProps<CocTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <h1>{document.name}</h1>
      <h2>Title: {document.certification.title}</h2>
      <h2>Designation: {document.certification.designation}</h2>
      //<h2>Date: {document.certification.date}</h2>
      <h2>InvoiceNo.: {document.certification.invoiceno}</h2>
      <h2>SumRMB: {document.certification.sumRMB}</h2>
      <h2>Signature: {""}</h2>
    </div>
  );
};
