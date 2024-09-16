
export const GifItem = ({ title, images }) => {
    return (
        <div className="card">
            <img src={images} alt={title} />
            <p>{title}</p>
        </div>
    )
}
