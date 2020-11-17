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
      <h2>{document.data.certification.title}</h2>
      <h2>{document.data.certification.designation}</h2>
      <h2>{document.data.certification.invoiceNo}</h2>
      <h2>{document.data.certification.date}</h2>
      <h2>{document.data.certification.sumRMB}</h2>
      <h2>{document.signature}</h2>
    </div>
  );
};
