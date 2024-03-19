import { Outlet } from "react-router-dom";

import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

const DefaultLayout = () => {
    return (
        <>
            <PageHeader />
            <div className='container mx-auto px-4'>
                <Outlet />
            </div>
            <PageFooter />
        </>
    );
};

export default DefaultLayout;
