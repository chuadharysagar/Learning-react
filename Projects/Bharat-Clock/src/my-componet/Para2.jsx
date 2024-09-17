function Para2(){
    let BHdate=new Date();
   
    return <p>This is the current time: <b>{BHdate.toLocaleDateString()}</b>&nbsp;-&nbsp;<b>{BHdate.toLocaleTimeString()}</b></p>
}

export default Para2;