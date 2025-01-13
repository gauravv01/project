import { lazy,Suspense } from "react";
import { Route,Routes } from "react-router-dom";

import Loader from "../components/Loader";
const Dashboard=lazy(()=>import('../pages/Home'));
const Buyer=lazy(()=>import('../pages/Buyer'));
const BuyerListings=lazy(()=>import('../pages/Buyer/Listings'));
const CreateListing=lazy(()=>import('../pages/Buyer/CreateListing'));
const BuyerDeals=lazy(()=>import('../pages/Buyer/Deals'));
const Supplier=lazy(()=>import('../pages/Supplier'));
const SupplierCatalogue=lazy(()=>import('../pages/Supplier/Catalogue'));
const SupplierListing=lazy(()=>import('../pages/Supplier/Listing'));
const SupplierDeals=lazy(()=>import('../pages/Supplier/SupplierDeals'));
const SupplierUploadCatalogue=lazy(()=>import('../pages/Supplier/UploadCatalogue'));
const SupplierViewCatalogue=lazy(()=>import('../pages/Supplier/ViewCatalogue'));



const Router=()=>{
    return (
        <Suspense fallback={<Loader/>}>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/buyer" element={<Buyer/>}/>
            <Route path="/buyer/listings" element={<BuyerListings/>}/>
            <Route path="/buyer/createlisting" element={<CreateListing/>}/>
            <Route path="/buyer/deals" element={<BuyerDeals/>}/>
            <Route path="/supplier" element={<Supplier/>}/>
            <Route path="/supplier/catalogue" element={<SupplierCatalogue/>}/>
            <Route path="/supplier/listings" element={<SupplierListing/>}/>
            <Route path="/supplier/upload" element={<SupplierUploadCatalogue/>}/>
            <Route path="/supplier/view" element={<SupplierViewCatalogue/>}/>
            <Route path="/supplier/deals" element={<SupplierDeals/>}/>
        </Routes>
        </Suspense>
    )
}

export default Router