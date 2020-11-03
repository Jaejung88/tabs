const DisplayTab = (props) => {
    const {height, width, idx, isSelected, toggleTab, content} = props;

    return(
        <div>
            <div style = { isSelected ? {backgroundColor: "black", color:"white", height:`${height}px`, width:`${width}px`, border:"1px solid black"} : {height:`${height}px`, width:`${width}px`, border:"1px solid black"}} onClick= {() => toggleTab(idx)}>
                Tab {idx + 1} 
            </div>
            {/* <div style = {isSelected ? { border:"1px solid black", height: "300px", width: "500px"}:{}}>
                {isSelected ? `${content}`: null}
            </div> */}
        </div>
    );
}

export default DisplayTab;