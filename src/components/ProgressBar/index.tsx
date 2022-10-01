import React from "react";
import CircularProgressIcon from "../icons/CircularProgressIcon";

const styles = {
    container: 'bg-violet-700 p-4 mt-5 w-full rounded-lg',
    button: 'flex flex-row items-center',
    icon: 'mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
};

const ProgressBar = (): React.ReactElement => {
    return (<div className="flex justify-center">
        <div className={styles.container}>
            <button type="button" className={styles.button} disabled>
                <div role="status">
                    <CircularProgressIcon classes={styles.icon} />
                </div>
                <div className="text-white">Processing...</div>
            </button>
        </div>
    </div>)
};

export default ProgressBar;