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
//const now = new Date();
export const CocTemplate: FunctionComponent<
  TemplateProps<CocTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <h1>{document.name}</h1>
      <table class="center">
  <tr>
    <th>Title</th>
    <td>New</td>
  </tr>
  <tr>
    <th>Designation</th>
    <td>Invoice</td>
  </tr>
  <tr>
    <th>Invoice no.</th>
    <td>10</td>
  </tr>
  <tr>
    <th>Date</th>
    <td>19/11/2020</td>
  </tr>
  <tr>
    <th>SumRMB</th>
    <td>22</td>
  </tr>
  <tr>
    <th>Signature</th>
    <td></td>
  </tr>
</table>
      //<h2>Title: New</h2>
      //<h2>Designation: {"INVOICE"}</h2>
      //<h2>InvoiceNo: {"10"}</h2>
      //<h2>Date: {""}</h2>
      //<h2>SumRMB: {"222"}</h2>
      //<h2>Signature: {""}</h2>
    </div>
  );
};
