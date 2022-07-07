import React from "react";
import "./style.css";
import { Card, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import MyVerticallyCenteredModal from "./Result";

const Kesehatan = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="Container">
      <Container className="card-body">
        <h1 className="header-content">Cek Kesehatan Anak</h1>
        <Container className="content">
          <Card.Img variant="top" src="images/pict.png" />
          <Form className="form-card">
            <Form.Group
              className="form-list mb-2"
              controlId="formBasicPassword"
            >
              <Form.Label>Tinggi Badan</Form.Label> <br />
              <Form.Control
                id="tb"
                type="int"
                placeholder="input tinggi badan"
              />
            </Form.Group>
            <Form.Group
              className="form-list mb-2"
              controlId="formBasicPassword"
            >
              <Form.Label>Berat Badan</Form.Label> <br />
              <Form.Control
                id="bb"
                type="int"
                placeholder="masukan berat badan"
              />
            </Form.Group>
            <Form.Group
              className="form-list mb-2"
              controlId="formBasicPassword"
            >
              <Form.Label>Usia Anak</Form.Label> <br />
              <Form.Control id="ua" type="int" placeholder="Masukan Usia" />
            </Form.Group>

            <Form.Label>Jenis Kelamin</Form.Label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Laki-Laki
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Perempuan
              </label>
            </div>

            <>
              <Button
                className="button-form shadow mb-5 "
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                Submit
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
          </Form>
        </Container>
      </Container>
    </div>
  );
};

export default Kesehatan;
