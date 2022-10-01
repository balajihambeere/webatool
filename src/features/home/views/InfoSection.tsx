import React from "react";
import Image from 'next/image';

const styles = {
    container: 'flex flex-row w-full py-20',
    box1: 'basis-1/2',
    boxText: 'text-6xl text-purple-700'
};

const InfoSection = (): React.ReactElement => {
    return (<section className={styles.container}>
        <div className='basis-1/2'>
            <div className={styles.boxText}>
                <div className='mt-5'>Visual</div>
                <div>Analytics Reports</div>
            </div>
        </div>
        <div className='basis-1/2 relative w-full'>
            <Image
                src="/images/reports.png"
                alt="Dashboard reports"
                width="1000"
                height="500"
            />
        </div>
    </section>)
}

export default InfoSection;