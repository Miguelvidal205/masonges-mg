import { useEffect, useState } from "react";
import AppBarComponent from "../components/AppBar";
import Banner from "../components/banner";
import LoaderGif from "../components/LoaderGif";

export default function HomePage() {
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
            <AppBarComponent />
            <Banner />
        </>
    )
}