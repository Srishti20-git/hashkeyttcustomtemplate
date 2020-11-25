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

export const CocTemplate: FunctionComponent<
  TemplateProps<CocTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <h1>INVOICE DATA</h1>
      <h2>Title: NewInvoice</h2>
      <h2>Designation: Document Data</h2>
      <h2>Date: {new Date(Date.now()).toLocaleString()}</h2>
      <h2>InvoiceNo.: 20</h2>
      <h2>SumRMB: 222</h2>
    </div>
  );
};
