var m=Object.defineProperty;var d=(i,t,s)=>t in i?m(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var n=(i,t,s)=>(d(i,typeof t!="symbol"?t+"":t,s),s);import{r as u,j as a,F as l,f as o,a as c}from"./index-CXcUMHoO.js";const y="_About_169tf_1",g="_Sloka_169tf_25",j="_AboutText_169tf_59",p="_GayathriMaa_169tf_81",x="_Swamiji_169tf_81",S="_Agastya_169tf_103",e={About:y,Sloka:g,AboutText:j,GayathriMaa:p,Swamiji:x,Agastya:S},b="/assets/Veda Gayathri Mata-CekmlIsE.jpg",k="/assets/Agastya-COgMcCTF.jpg",f="/assets/AboutUs Right-V7-czRAo.jpeg",A="/assets/Gayathri Mantra-kpEOja3k.mp3";class _ extends u.Component{constructor(){super(...arguments);n(this,"state",{mantraPlaying:!1});n(this,"pauseSloka",()=>{this.setState({mantraPlaying:!1});let s=document.getElementById("mantra");s.src=""});n(this,"playSloka",()=>{this.setState({mantraPlaying:!0});let s=document.getElementById("mantra");s.src=A,s.play()})}componentWillUnmount(){this.pauseSloka()}render(){let s=["ॐ भूर् भुवः स्वः |","तत्सवितुर्वरेण्यं |","भर्गो॑ देवस्य धीमहि ।","धियो यो नः प्रचोदयात् ॥"],h=["Om Bhur Bhuvaḥ Swaḥ ","Tat-savitur Vareñyaṃ ","Bhargo Devasya Dheemahi","Dhiyo Yonaḥ Prachodayāt"];return a.jsxs("div",{className:e.About,children:[a.jsx("img",{src:b,alt:"Gayathri Mata",title:"Gayathri Mata",className:e.GayathriMaa}),a.jsxs("p",{className:e.Sloka,children:[s.map(r=>a.jsxs("span",{children:[r,a.jsx("br",{})]},r))," ",a.jsx(l,{icon:this.state.mantraPlaying===!1?o:c,id:"playAndPauseMantra",onClick:this.state.mantraPlaying===!1?this.playSloka:this.pauseSloka})]}),a.jsx("div",{className:e.Agastya,children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Agastya",target:"_blank",rel:"noopener noreferrer",children:a.jsx("img",{src:k,alt:"Agastya Maha Muni",title:"Agastya Maha Muni"})})}),a.jsxs("p",{className:e.Sloka,children:[h.map(r=>a.jsxs("span",{children:[r,a.jsx("br",{})]},r))," ",a.jsx(l,{icon:this.state.mantraPlaying===!1?o:c,id:"playAndPauseMantra",onClick:this.state.mantraPlaying===!1?this.playSloka:this.pauseSloka})]}),a.jsx("img",{src:f,alt:"Swamiji",title:"Shri Swami Sugunananda Gayathri",className:e.Swamiji}),a.jsxs("p",{className:e.AboutText,children:[a.jsx("b",{children:"The Divine Beginning"}),a.jsx("br",{}),"Shri Agastya Peetam was founded on 22nd January 2018 on the auspicious day of Vasanta Panchami!",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Our Mission"}),a.jsx("br",{}),"Our mission is to bring Loka Shanthi and Kalyanam (universal peace and prosperity) by doing Gayathri Maha Purashcharana and Deergha Sathra Yagam.",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"The Sacred Rituals"}),a.jsx("br",{}),"Gayathri Maha Purascharana is a 24 year long ritual done under strict vedic rules by a Sadhaka following strict",a.jsx("i",{children:" Brahmacharya"}),". Deergha Sathra Yagam is a 12 year long ritual. Each of these rituals require complete dedication and devotion. Learn about these sacred rituals in detail by clicking the respective tabs above!"]}),a.jsx("audio",{id:"mantra",src:""})]})}}export{_ as default};