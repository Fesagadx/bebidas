const BeveragesData =({ data })=>{

    return(
        <div className="character-card">
            <img src={data.strDrinkThumb} alt="" />
            <h2>{data.strDrink}</h2>
            <span>{data.strInstructions}</span>
        </div>

    )
}

export default BeveragesData