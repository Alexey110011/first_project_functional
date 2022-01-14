import {arrayEmp, remDiv1} from './Map.js'
import {Link} from 'react-router-dom'



export function Tablo() {
        for (let i = 0;i<6;i++) {
        let front = document.createElement('div')
        front.className='front'
        front.id='front'
        document.body.appendChild(front)
      }
      
      let tran = document.getElementsByClassName('front')
        for (let i=0;i<tran.length;i++) {
          tran[i].setAttribute('id',i)
          tran[i].style.opacity='0'
          tran[i].style.transitionProperty ='opacity'
          tran[i].style.transitionProperty ='transform'
          tran[i].style.transitionDelay =`0.5s`   
          tran[i].style.transitionDuration ='1s'
          let arrayVokrug = ['В','О','К','Р','У','Г']
          tran[i].innerHTML=arrayVokrug[i]
        }
      
           window.addEventListener('load', function() {
          for (let i =0;i<tran.length;i++) {
            tran[i].style.opacity = '1'
            tran[i].style.transform = 'rotateY(-360deg)'
            tran[i].style.transitionDelay =`${2*i}s`
            console.log(i);
          }})
      
        for (let i = 0;i<5;i++) {
        let front1 = document.createElement('div')
        front1.className='front1'
        front1.id='front1'
        document.body.appendChild(front1)
      }
        let tran1 = document.getElementsByClassName('front1')
        for (let i=0;i<tran1.length;i++) {
          tran1[i].setAttribute('id',i)
          tran1[i].style.opacity='0'
          tran1[i].style.transitionProperty ='opacity'
          tran1[i].style.transitionProperty ='transform'
          tran1[i].style.transitionDelay =`0.5s`   
          tran1[i].style.transitionDuration ='1s'
          let arrayVokrug1 = ['С', 'В','Е','Т','А']
          tran1[i].innerHTML=arrayVokrug1[i]
        }
       
                 
              window.addEventListener('load', function() {
          for (let i =0;i<tran1.length;i++) {
            tran1[i].style.opacity = '1'
            tran1[i].style.transform = 'translateX(50px)'
            tran1[i].style.transitionDelay  ='12s'
          }
      })
      
        let calendar1;
        for (let i = 0;i<arrayEmp.length; i++) {
            calendar1=arrayEmp.map((i, index)=>i)
        }
    
    return (
      <>
      <div id='fon'>
      <nav>
    <Link to="/map">Map</Link>
  </nav>
  
        <div id = "markers1"> 
            <div className ='marker_red'></div> 
            <div className ='marker_black'></div> 
            <div className ='marker_blue'></div>
            <div className ='marker_yellow'></div>   
            <div className ='marker_green'></div>   
        </div>    
        <div id ="slider">
                <div className ="slideZeroMinus3 slide7a"></div>
                <div className ="slideZeroMinus2 slide7b"></div>
                <div className ="slideZeroMinus1 slide6"></div>
                <div className ="slideZeroMinus slide5"></div>
                <div className ="slideZero slide4"></div>
                <div className ="slideOne slide3"></div>
                <div className ="slideTwo slide2"></div>
                <div className ="slideThree slide1"></div>
        </div>
    </div>
    </>
    )
}
