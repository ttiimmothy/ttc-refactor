import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Badge,
  Button,
} from "@fluentui/react-components";
import { VehicleBus16Filled } from "@fluentui/react-icons";
import { t } from "i18next";
import { useCallback } from "react";
import { Link } from "react-router-dom";

import { StopAccordionsParams } from "../../models/route";
import { fluentStyles } from "../../styles/fluent";
import { removeSpecialChars } from "../utils/routeName";

export function StopAccordions(props: StopAccordionsParams) {
  const fluentStyle = fluentStyles();

  const Stops = useCallback(() => {
    const stops = props.processedStopList.map((stop) => {
      return (
        <li key={`${props.lineNum}-${props.direction}-${stop.id}`}>
          <AccordionPanel className={`${fluentStyle.accordionPanel} accordion`}>
            <div className="lineDetails">
              <Link to={stop.stopUrl} title={t("buttons.busIcon") ?? ""}>
                <Button icon={<VehicleBus16Filled />} />
              </Link>
            </div>
            <div className="lineDetails">{stop.title}</div>
          </AccordionPanel>
        </li>
      );
    });

    return <ul>{stops}</ul>;
  }, [props]);

  return (
    <AccordionItem value={props.tag}>
      <AccordionHeader className={fluentStyle.accordionHeader}>
        <Badge className={fluentStyle.badge}>{props.direction}</Badge>
        <Badge className={fluentStyle.badge}>{props.lineNum}</Badge>
        {removeSpecialChars(props.title)}
      </AccordionHeader>
      <Stops />
    </AccordionItem>
  );
}
