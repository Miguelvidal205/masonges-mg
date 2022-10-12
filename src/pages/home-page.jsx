import { useEffect, useState } from "react";
import AppBarComponent from "../components/AppBar";
import Banner from "../components/Banner";
import LoaderGif from "../components/LoaderGif";

export const HomePage = () => {
    const [loader, setLoader] = useState(false);

    useEffect(() => {   
        setLoader(true);
        setTimeout(()=> {
            setLoader(false);
        },2000);
        
        
      }, []);
    return (
        <>
        {loader  ? <LoaderGif /> : null}
            <Banner />
        </>
    )
}