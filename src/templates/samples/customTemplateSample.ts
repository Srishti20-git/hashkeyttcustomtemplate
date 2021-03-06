import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
  };
  certification: {
    title: string;
    designation: string;
    invoice: string;
    sumRMB: string;
  }
}
export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "INVOICE",
  issuers: [
    {
      name: "Ananta Shakti",
      documentStore: "0xBBb55Bd1D709955241CAaCb327A765e2b6D69c8b",
      identityProof: {
        location: "few-green-cat.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt
      }
    }
  ],
  recipient: {
    name: "Srishti Marwah"
  },
  certification: {
    title: "TradeTrust",
    designation: "Document Data",
    invoice: "15",
    sumRMB: "222",
  },
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
