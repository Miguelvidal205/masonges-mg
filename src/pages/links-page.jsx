import { Grid } from "@mui/material";
import CardsComponents from "../components/Cards";

export const LinksPage = () => {
return (
    <div className="App">
        <Grid container >
        <CardsComponents 
            title='Gran Logia de Libres y Aceptados Masones de la Argentina'
            link='https://www.masoneria-argentina.org.ar'
            description='Tte. Gral. Juan Domingo Perón 1242  -  CABA'
            img={require('../media/photos/masons.png')}
        />
        <CardsComponents 
            title='Hogar Bernardino Rivadavia'
            link='https://www.hogarbrivadavia.com/'
            description='Rivadavia 470 - Máximo Paz - Provincia de Buenos Aires'
            img={require('../media/photos/hbr.jpg')}
        />
</Grid>
<Grid container >
        <CardsComponents 
            title='Iluminatti Resto Bar'
            link='https://www.facebook.com/IlluminatiResto'
            description='Italia 1214 - San Antonio de Padua - Provincia de Buenos Aires'
            img={require('../media/photos/iluminati.png')}
        />

        <CardsComponents 
            title='Gafetes y Parches Para tu Agrupación o MC'
            link='Teléfono: +54 9 11 5658 5371'
            description='Walter "EL CAPO" - Parque Leloir - Provincia de Buenos Aires'
            img={require('../media/photos/gafetes.png')}
        />
        </Grid>
    </div>
    );
}
// export default LinksPage;