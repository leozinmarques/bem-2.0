import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../styles/css/Home.css';
import $ from 'jquery';

export default class Home extends Component {

  render(){
    return(
      <Grid fluid className="menu">
        <Row className="middle">
          <Col className="menu-item btn-sobre"></Col>
          <Col className="menu-item btn-questionario"></Col>
          <Col className="menu-item btn-estresse"></Col>
          <Col className="menu-item btn-depressao"></Col>
          <Col className="menu-item btn-ansiedade"></Col>
        </Row>
      </Grid>
    );

    $(document).ready(function() {
      $("btn-sobre").hover(function() {
        $("menu").css("background-color", "red");
      });
    });
  }
}
