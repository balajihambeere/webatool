import { useRouter } from "next/router";
import React, { useState } from "react";
import ProgressBar from "src/components/ProgressBar";
import useScans from "src/features/scans/useScans";

const styles = {
    container: "relative container mt-20 mx-auto px-20",
    heading: "text-5xl  tracking-tight text-gray-900",
    para: "text-xl mt-4 text-gray-500",
    form: "flex mt-4 justify-center",
    formInput: "flex basis-1/2 font-medium text-base px-8 py-3 border border-violet-500  focus:outline-none focus:border-violet-700 focus:ring-1 focus:ring-violet-700 rounded",
    formButton: "flex w-24 font-medium text-base px-8 ml-3 rounded py-3 bg-indigo-100 bg-violet-500 text-white"
};

const Hero = () => {
    const router = useRouter();
    const [url, setUrl] = useState<string>('');
    const { data, loading, newScan } = useScans();

    if (data?.id) {
        router.push(`/dashboard/scans/${data?.id}`)
    }
    return (<div className={styles.container}>
        <div className="text-center">
            <h1 className={styles.heading}>
                <span className="block">Check Accessibility </span>
                <span className="block text-violet-700">of your web application here.</span>
            </h1>
            <p className={styles.para}>
                Webatool is an Web Accessibility Evaluation Tool for testing applications like websites
                and other HTML-based user interfaces, designed using an Axe Core Engine.
            </p>
            <div className={styles.form}>
                <input className={styles.formInput}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="URL goes here.." />
                <button className={styles.formButton}
                    onClick={() => newScan(url)}>Test
                </button>
            </div>
            {loading && (<ProgressBar />)}
        </div>
    </div>);
}
export default Hero;