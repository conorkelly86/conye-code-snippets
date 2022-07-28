import { AdminLayout } from "@layout";
import Clipboard from "@layout/AdminLayout/Clipboard/Clipboard";
import type { NextPage } from "next";
import React from "react";
import {
  Card
} from "react-bootstrap";
import snips from "../data/environment.json";



const Environment: NextPage = () => (
  <AdminLayout>
    <div className="row">
      <div className="col-sm-12 col-lg-8">
        <Card
          className="mb-4"
          style={{ "--bs-card-cap-bg": "#3b5998" } as React.CSSProperties}
        >
          <Card.Body>{snips.map((snip, key) => ( 
            <Clipboard text={snip.command} description={snip.description}/>))}
          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
);

export default Environment;
