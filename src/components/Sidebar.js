import { Accordion, Nav, NavDropdown, NavLink } from "react-bootstrap";

import sidebarData from "../data/sidebarData.js";
import SidebarItem from "./SidebarItem.js";

function Sidebar() {
  return (
    <Accordion>
      {sidebarData.map((item, id) => {
        return (
          <Accordion.Item key={id} eventKey={id}>
            <Accordion.Header>
              {item.title}
              <Accordion.Body>
                <SidebarItem services={item.services} />
              </Accordion.Body>
            </Accordion.Header>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default Sidebar;

// <Accordion
//   defaultActiveKey="/home"
//   className="flex-column h-50 sidebar text-white"
//   dafaultActiveKey="0"
// >
//   {sidebarData.map((item, index) => {
//     return (
//       <AccordionItem eventKey={item.id} key={index}>
//         <AccordionHeader> {item.title} </AccordionHeader>
//         {item.services.map((service, index) => {
//           return <p key={index}> {service.service} </p>;
//         })}
//       </AccordionItem>
//     );
//   })}
// </Accordion>
