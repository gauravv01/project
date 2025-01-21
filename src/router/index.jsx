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
const SupplierCreateDeal=lazy(()=>import('../pages/Supplier/CreateLiveDeal'));

// buyer settings

// se=upplier settings
const SupplierSeetingsProfile=lazy(()=>import('../pages/Supplier/settings/Profile'));
const SupplierSettingsBilling=lazy(()=>import('../pages/Supplier/settings/Billings'));
const SupplierSettingsAccount=lazy(()=>import('../pages/Supplier/settings/Accounts'));
const SupplierSettingsNotifications=lazy(()=>import('../pages/Supplier/settings/Notifications'));
const SupplierSettingsSecurity=lazy(()=>import('../pages/Supplier/settings/Security'));
const SupplierSettingsPrivacy=lazy(()=>import('../pages/Supplier/settings/Privacy'));

// buyer settings
const BuyerSettingsProfile=lazy(()=>import('../pages/Buyer/settings/Profile'));
const BuyerSettingsSecurity=lazy(()=>import('../pages/Buyer/settings/Security'));
const BuyerSettingsAccount=lazy(()=>import('../pages/Buyer/settings/Accounts'));
const BuyerSettingsNotifications=lazy(()=>import('../pages/Buyer/settings/Notifications'));

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
            <Route path="/supplier/createdeal" element={<SupplierCreateDeal/>}/>

            {/* supplier settings */}
            <Route path='/supplier/settings/profile' element={<SupplierSeetingsProfile/>}/>
            <Route path='/supplier/settings/privacy' element={<SupplierSettingsPrivacy/>}/>
            <Route path='/supplier/settings/security' element={<SupplierSettingsSecurity/>}/>
            <Route path='/supplier/settings/notifications' element={<SupplierSettingsNotifications/>}/>
            <Route path='/supplier/settings/billing' element={<SupplierSettingsBilling/>}/>
            <Route path='/supplier/settings/account' element={<SupplierSettingsAccount/>}/>

            {/* buyer settings */}
            <Route path='/buyer/settings/profile' element={<BuyerSettingsProfile/>}/>
            <Route path='/buyer/settings/account' element={<BuyerSettingsAccount/>}/>
            <Route path='/buyer/settings/security' element={<BuyerSettingsSecurity/>}/>
            <Route path='/buyer/settings/notifications' element={<BuyerSettingsNotifications/>}/>
        </Routes>
        </Suspense>
    )
}

export default Router