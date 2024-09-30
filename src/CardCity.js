import './CardCity.css'
export default function CardCity({region, city}){
    return(
        <div className="container">
 	        <div className="row">
		<div className="col-lg-12">
           <div className="box">
               
				<div className="box-title">{region}</div>
                
				<div className="box-text">
					<span>{city}</span>
				</div>
			</div>
		</div>	 
	</div>		
</div>
    )
}