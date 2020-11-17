import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../samples/customTemplateSample";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const containerStyle = css`
  background-color: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: left;
`;
//const now = new Date();
export const CocTemplate: FunctionComponent<
  TemplateProps<CocTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <h1>{document.name}</h1>
      <h2>Title: {document.certification.title}</h2>
      <h2>Designation: {document.certification.designation}</h2>
      <h2>Invoice No.: {document.certification.invoiceno}</h2>
      <h2>Date: {return <Datetime />;}</h2>
      <h2>SumRMB: {document.certification.sumRMB}</h2>
      <h2>Signature: {""}</h2>
    </div>
  );
};
