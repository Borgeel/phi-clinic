import { NavDropdown, NavLink } from "react-bootstrap";

function SidebarItem({ services }) {
  return (
    <NavDropdown.Item>
      {services.map((service) => {
        return <NavLink> {service.service} </NavLink>;
      })}
    </NavDropdown.Item>
  );
}

export default SidebarItem;
