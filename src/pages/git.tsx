import type { NextPage } from "next";
import Image from "next/image";
import { AdminLayout } from "@layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  ButtonGroup,
  Card,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Clipboard from "@layout/AdminLayout/Clipboard/Clipboard";
import ClipboardProps from "@layout/AdminLayout/Clipboard/Clipboard";
import snips from '../data/git.json'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const Git: NextPage = () => (
  <AdminLayout>
    <div className="row">
      <div className="col-sm-12 col-lg-8">
        <Card
          className="mb-4"
          style={{ "--bs-card-cap-bg": "#3b5998" } as React.CSSProperties}
        >
          <Card.Body>{snips.map((snip, key) => ( 
            <Clipboard text={snip.name} />))}
          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
);

export default Git;
