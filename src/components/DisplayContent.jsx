const DisplayContent = (props) => {
    const {isSelected, content} = props;

    return(
        <div style = {{width:"600px", height:"400px", margin:"0 auto",border:"1px solid black", marginTop:"10px"}}>
            {isSelected ? `${content}` : ``}
        </div>
    )
}

export default DisplayContent;