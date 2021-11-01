import { useFetchGifs } from "../hooks/useFetchGifs";
import {GifGridItem} from './GifGridItem'
export const GifGrid = ({category}) => {
    const { loading, data } = useFetchGifs(category);
    console.log(loading);
    return (
        <div>
            <h3>{category}</h3>
            {loading && <h2>Loading </h2>}
            {
                data.map(img => <GifGridItem 
                    key={img.id}
                    {...img}  />)
            }
                
        </div>
    )
}
