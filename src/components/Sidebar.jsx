import { Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => setShow(!show);

  return (
    <>
      {/* Toggle Button */}
      <Button variant="light" onClick={toggleSidebar} className="mx-4 my-3 ">
        ☰
      </Button>

      {/* Sidebar */}
      <Offcanvas show={show} onHide={toggleSidebar} className="className=' bg-amber-50'">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            <li><Link to="/about" className="text-decoration-none">About Us</Link></li>
            <li><Link to="/community" className="text-decoration-none">Community</Link></li>
            {/* <li><Link href="#signin" className="text-decoration-none">Sign In</Link></li> */}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;