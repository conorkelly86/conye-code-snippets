import { AdminLayout } from "@layout";
import Clipboard from "@layout/AdminLayout/Clipboard/Clipboard";
import type { NextPage } from "next";
import React from "react";
import { Card } from "react-bootstrap";
import snips from "../data/steps.json";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Steps: NextPage = () => (
  <AdminLayout>
    <div className="row">
      <div className="col-sm-12 col-lg-8">
        <Card
          className="mb-4"
          style={{ "--bs-card-cap-bg": "#3b5998" } as React.CSSProperties}
        >
          <Card.Body>
            {snips.map((snip, key) => (
              <>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {snip.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Clipboard text={snip.step1} />
                      <Clipboard text={snip.step2} />
                      <Clipboard text={snip.step3} />
                      <Clipboard text={snip.step4} />
                      <Clipboard text={snip.step5} />
                      <Clipboard text={snip.step6} />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </>
            ))}
          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
);

export default Steps;
