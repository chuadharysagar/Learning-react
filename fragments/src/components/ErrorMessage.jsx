const ErrorMessage=({mainItem})=>{
    return <>{mainItem.length===0 && <h2>This list is empty</h2>}</>
}


export default ErrorMessage;