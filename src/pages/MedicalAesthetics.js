import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Treatment from "../components/Treatment";
import React, { useState } from 'react';

function MedicalAesthetics() {

  const [body, setBody] = useState([]);
  const [face, setFace] = useState([]);
  const [wellness, setWellness] = useState([]);

  const demoData = [
    {
      "id": 1,
      "title": "SilkPeel Microdermabrasion",
      "type": "body",
      "category": "hand rejuvenation",
      "link": "/silkpeel-microdermabrasion"
    },
    {
      "id": 2,
      "title": "Fire and Ice Facial",
      "type": "body",
      "category": "hand rejuvenation",
      "link": "/fire-and-ice-facial"
    },
    {
      "id": 3,
      "title": "Platelet Rich Plasma (PRP)",
      "type": "body",
      "category": "hand rejuvenation",
      "link": "/platelet-rich-plasma"
    },
    {
      "id": 4,
      "title": "Thermage CPT",
      "type": "body",
      "category": "hand rejuvenation",
      "link": "/thermage-cpt"
    },
    {
      "id": 5,
      "title": "Thermage CPT",
      "type": "body",
      "category": "skin tightenning & firming",
      "link": "/thermage-cpt"
    },
    {
      "id": 6,
      "title": "EXILIS",
      "type": "body",
      "category": "skin tightenning & firming",
      "link": "/exilis"
    },
    {
      "id": 7,
      "title": "Excel V",
      "type": "body",
      "category": "skin tightenning & firming",
      "link": "/excel-v"
    },
    {
      "id": 8,
      "title": "Platelet Rich Plasma (PRP)",
      "type": "body",
      "category": "skin tightenning & firming",
      "link": "/platelet-rich-plasma"
    }
  ];
  
  function fetchData() {
    fetch("http://localhost:3000/treatments").then(res => res.json()).then(result =>{
      
      result.forEach(treatment => {
        if(treatment.type == 'body'){
          let newArr = body;
          newArr.push(treatment);
          setBody(newArr)
        }
        else if(treatment.type == 'face'){
          let newArr = face;
          newArr.push(treatment);
          setFace(newArr)
        }
        else if(treatment.type == 'wellness'){
          let newArr = wellness;
          newArr.push(treatment);
          setWellness(newArr)
        }
      });

      return;
    } 
    ).catch(console.log);
  }

  fetchData();

  function readResults(){
    console.log('this.body je: ', body, ', this.face je: ', face, ', this.wellness je: ', wellness);
    return 
  }

  return (
    <Row>
      <Col xs={3}>
        <Sidebar />
      </Col>
      <Col>
        <Container>
          Body
          <p>Hand Rejuvenation</p>
          <p>Body Skin Tightening & Firming</p>
          <p>Butt & Breast Lift</p>
          <p>Scar Treatment</p>
          <p>Neck/ Decollete Rejuvenation</p>
          <p>Skin Lightening</p>
          <p>Invasive Body Sculpting</p>
          <p>Labia Tightening & Lightening</p>
          <p>Vein Removal</p>
          <p>Hair Removal</p>
          <p>Cellulite</p>
          <p>Massage</p>
          <p>Massage</p>
        </Container>
        <Container>
          Face
          <p>Skin Rejuvenation</p>
          <p>Skin Tightening</p>
          <p>Pigmentation</p>
          <p>Acne</p>
          <p>Acne Scars</p>
          <p>Wrinkles & Lines</p>
          <p>Axillary Hyperhidrosis or Palmer Hyperhidrosis</p>
          <p>Lip Rejuvenation</p>
          <p>Eye Bags</p>
          <p>Face V-shaping</p>
          <p>Pore Reduction</p>
          <p>Facials</p>
          <p>Non-Surgical Nose Augmentation</p>
          <p>Volumisation</p>
        </Container>
        <Container>
          Wellness
          <p>Diet Programmes</p>
          <p>Bio-Identical Hormone Replacement Therapy</p>
        </Container>
        <Container>
            <p onClick={readResults}>Rezultati na klik</p>
            <Treatment treatments={demoData} />
        </Container>
      </Col>
    </Row>
  );
}

export default MedicalAesthetics;
