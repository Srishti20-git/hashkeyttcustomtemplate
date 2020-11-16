import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as customTemplate } from "./coc";
import styled from "@emotion/styled";
import { CocTemplate } from "./coc/customTemplate";
import { CocTemplateCertificate } from "./samples";

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
