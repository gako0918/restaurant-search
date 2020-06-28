import React from 'react';
import {Media,Container,Button,Row,Col,Image} from 'react-bootstrap';
import './App.css'

function ShopImage(props){
  if(props.image_url) {
    return(
      <Image width={150} height={150} src={props.image_url} />
    )
  } else {
    return(
      '画像がありません。'
    )
  }
}

function List (props) {
  const list = props.list.map((item, key) => {
    return(
      <Container className='shadow' key={key}>
        <Media className="media">
        <ShopImage image_url={item.image_url.shop_image1} />
          {/* <Image width={150} height={150} src={item.image_url.shop_image1} /> */}
          <Media.Body className="media-body ml-5">
            <h3 className="title"><a href="#">{item.name}</a></h3>
            <p>{`${item.access.line} ${item.access.station} ${item.access.station_exit}`}</p>
            <p>予算:{item.budget}円</p>
          </Media.Body>
        </Media>
        <div className="footer">
          <div className="footer-right">
            <div className="text">
              <p>おすすめの</p>
              <p>ネット予約コース</p>
              <p><a className="blue"href="#">全て見る</a></p>
            </div>
          </div>
          <div className="footer-center">
            <p>{item.pr.pr_short}</p>
          </div>
          <div className="footer-left">
            <button className="button1">空席確認・予約</button>
          </div>
        </div>
      </Container>
    );
  })
  return(
    <div>
      <Row>
        <Col>
          {list}
        </Col>
      </Row>
    </div>
  );
}

export default List;