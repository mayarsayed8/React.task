import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';
import  './Layout.css'

const Example = (props) => {
  return (
    <CardDeck className ="card_container">
      <Card>
        <CardImg top width="100%" src="https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">Mobile Attribution</CardTitle>
          <CardText>
          Get visibility of customer acquisition channel and journey in the funnel, from the start all through to installation and conversion.
      </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://images.pexels.com/photos/7374/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">Mobile Deep Linking</CardTitle>
          <CardText>
              A short link that allows you to route the user to a specific page inside an app, even if the app was not installed when the user got the link,and trace LTV of each user 

          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top height="60%" width="100%" src="https://images.pexels.com/photos/1451447/pexels-photo-1451447.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">Mobile Deep Pages</CardTitle>
          <CardText>Get Your App Content discovered by Google, shared on social media and viewed by users to tease them to install your App. </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Example;