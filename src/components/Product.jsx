function Product(props){ //accepts a props from the parent and renders it immediately
    return<Card>
        <div className="Card">
            <h1>{props.title}</h1>
            <h2>{props.price}</h2>
        </div>
    </Card>
}
//added the attribute using a wrapper container

