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
  text-align: center;
`;

export const CocTemplate: FunctionComponent<
  TemplateProps<CocTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <h1>{document.name}</h1>
      <h2>Title: "New"</h2>
      <h2>Designation: {"INVOICE"}</h2>
      <h2>InvoiceNo: {"10"}</h2>
      <h2>Date: {"2020-11-17T02:17:58.499Z"}</h2>
      <h2>SumRMB: {"222"}</h2>
      <h2>Signature: {""}</h2>
    </div>
  );
};
