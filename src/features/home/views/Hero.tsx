import { useRouter } from "next/router";
import React, { useState } from "react";
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
            {loading && (<div className="flex justify-center">
                <div className=" bg-violet-700 p-4 mt-5 w-full rounded-lg">
                    <button type="button" className="flex flex-row items-center" disabled>
                        <div role="status">
                            <span>
                                <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </span>
                        </div>
                        <div className="text-white">Processing...</div>
                    </button>
                </div>
            </div>)}
        </div>
    </div>);
}
export default Hero;