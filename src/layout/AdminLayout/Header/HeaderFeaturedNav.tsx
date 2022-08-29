import Link from "next/link";
import { Nav } from "react-bootstrap";

export default function HeaderFeaturedNav() {
  return (
    <Nav>
      <Nav.Item>
        <Link href="/environment" passHref>
          <Nav.Link className="p-2">Environment</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/git" passHref>
          <Nav.Link className="p-2">Git</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/rails" passHref>
          <Nav.Link className="p-2">Rails</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/codebase" passHref>
          <Nav.Link className="p-2">Codebase</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/steps" passHref>
          <Nav.Link className="p-2">Steps</Nav.Link>
        </Link>
      </Nav.Item>
    </Nav>
  );
}
