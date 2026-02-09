import { Title1 } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";

import { AllRoutesInfo } from "../components/AllRoutesInfo";

export default function LineSearch() {
  const { t } = useTranslation();
  return (
    <main className="linePage">
      <Title1>{t("nav.label.lines")}</Title1>
      <AllRoutesInfo />
    </main>
  );
}
