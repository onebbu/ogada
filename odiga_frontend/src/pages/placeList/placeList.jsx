import React, {useState , useEffect } from "react";
import Styled from "styled-components";
import './PL.css';
import Header from "../component/navbar/Header";
import Footer from '../component/footer/Footer';
import ListPlace from './Place';

// http://localhost:3000/placelist/show

const Body= Styled.div`
    margin: 0;
    padding: 0;
    background: #f3f4f6; /* 미미한 회색 */
`;
const Wrapper=Styled.div` display: flex; min-height: 100vh; padding-top:100px;`;
const Section=Styled.div` position: relative; width: 100%; gap: 20px;
   display: flex; flex-direction: column; padding: 16px;`;
const ItemsContainer = Styled.div`
    margin-top: ${(props) => (props.isDrawerOpen ? 320 : 0)}px;
    transition: margin-top 0.3s ease-in-out;
  `;

const areaList = [
    { areacode: '1', areaname: '서울' },
    { areacode: '2', areaname: '인천' },
    { areacode: '3', areaname: '대전' },
    { areacode: '4', areaname: '대구' },
    { areacode: '5', areaname: '광주' },
    { areacode: '6', areaname: '부산' },
    { areacode: '7', areaname: '울산' },
    { areacode: '8', areaname: '세종특별자치시' },
    { areacode: '31', areaname: '경기도' },
    { areacode: '32', areaname: '강원도' },
    { areacode: '33', areaname: '충청북도' },
    { areacode: '34', areaname: '충청남도' },
    { areacode: '35', areaname: '경상북도' },
    { areacode: '36', areaname: '경상남도' },
    { areacode: '37', areaname: '전라북도' },
    { areacode: '38', areaname: '전라남도' },
    { areacode: '39', areaname: '제주도' },
];

const PlaceList = () => {

  useEffect(() => {
    const startTime = performance.now();

    // 페이지가 완전히 로드된 후 시간 측정 종료 및 출력
    const handleLoad = () => {
      const endTime = performance.now();
      const totalTime = endTime - startTime;
      console.log("페이지 로딩 시간:", totalTime, "밀리초");
    };

    window.addEventListener("load", handleLoad);

      // cleanup 함수: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      return () => {
        window.removeEventListener("load", handleLoad);
    };

  }, []); 

  return(
    <Body>
      <Header />
      <Wrapper>
            <Section>  
              <ItemsWrapper/>
            </Section>
        </Wrapper>
        <Footer />
    </Body>
  );  
}


const ItemsWrapper = () => {
  const [order, setOrder] = useState('title'); //order defalt = 'title'
  // find 함수를 사용하여 areacode가 targetAreacode와 일치하는 요소를 찾기
  // const foundArea = areaList.find(area => area.areacode === targetAreacode);
  // const foundAreaName = foundArea ? foundArea.areaname : '없음';

  const Orderbtn = ({name, orderID }) => {
    return (
      <div  onClick={()=>setOrder(orderID)} style={{cursor:"pointer", display:"inline", padding:'7px'}}>
        {name}
      </ div>
    )
  }; 

  return(<>
    <ItemsContainer>
      <div className="item">
          <p> 너 오디가 ! </p>
          <h2> 꼭! 가봐야 할 여행지 </h2>
      </div>
      <div className="item"> <span> 
                <Orderbtn name={'조회순'} orderID={'travelviewcount'}/>|
                <Orderbtn name={'가나다순'} orderID={'title'}/>|
                <Orderbtn name={'별점순'} orderID={'likecount'}/> </span>    </div>
      <div className="item">
        <ListPlace order={order}/>
      </div>
    </ItemsContainer>
  
  </>)
}

export default PlaceList;