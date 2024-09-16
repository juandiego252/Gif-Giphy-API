import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const Gifgrid = ({ category: category }) => {

    const { images, isLoading } = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2> Cargando...</h2>)
                
            }
            <div className="card-grid">
                {
                    images.map(({ id, title, images }) => ((
                        <GifItem key={id} title={title} images={images} />
                    )))
                }
            </div>
        </>
    )
}
