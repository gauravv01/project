import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const CreateListing = () => {
  const [formData, setFormData] = useState({
    title: '',
    projectDescription: '',
    location: '',
    dealDeadline: '',
    productDetails: '',
    deliveryLeadTime: '',
    quantity: '',
    qualityRequirements: '',
    deliveryLocation: '',
    packagingRequirements: '',
    transportConditions: '',
    certifications: '',
    pastExperience: '',
    insurance: '',
    sustainability: '',
    pricingFormat: '',
    paymentTerms: '',
    contractTerms: '',
    rebateOption: '',
    healthSafety: '',
    innovation: '',
    contactInfo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const FormSection = ({ title, children }) => (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );

  const FormField = ({ label, name, placeholder, type = "text", textarea }) => {
    const inputClasses = 
      "w-full p-2 sm:p-3 border border-gray-200 rounded-md text-sm placeholder-gray-400 " +
      "focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent";
    
    return (
      <div className="space-y-1">
        <label className="block text-sm text-gray-600">
          {label}
        </label>
        {textarea ? (
          <textarea
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            className={inputClasses}
            rows={3}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            className={inputClasses}
            placeholder={placeholder}
          />
        )}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 py-4">
          <div className="flex items-center space-x-2">
            <span>Connect</span>
            <span>›</span>
            <span>My Listings</span>
            <span>›</span>
            <span>Create Listing</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pb-8">
          {/* Left Column - Upload Area */}
          <div className="lg:col-span-5">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Create your listing now
            </h1>
            <div className="bg-gray-100 rounded-lg aspect-square flex flex-col items-center justify-center p-4">
              <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mb-3" />
              <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
                Drop your tender here
              </p>
              <button className="bg-black text-white px-4 sm:px-6 py-2 rounded text-sm hover:bg-gray-800 transition-colors">
                Upload
              </button>
            </div>
          </div>

          {/* Right Column - Form Fields */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* General Information */}
              <FormSection title="General Information">
                <FormField
                  label="Title"
                  name="title"
                  placeholder="E.g. Supply of structural steel beams for residential project"
                />
                <FormField
                  label="Project Description"
                  name="projectDescription"
                  placeholder="Overview of the project, it's purpose, scope"
                  textarea
                />
                <FormField
                  label="Location"
                  name="location"
                  placeholder="The site or delivery address"
                />
                <FormField
                  label="Deal deadline"
                  name="dealDeadline"
                  type="date"
                />
              </FormSection>

              {/* Product Specs */}
              <FormSection title="Product Specs">
                <FormField
                  label="Product details"
                  name="productDetails"
                  placeholder="Name or type of product (Reinforced concrete panels) Dimensions, weight or size, compliance requirement"
                  textarea
                />
                <FormField
                  label="Delivery lead time"
                  name="deliveryLeadTime"
                  placeholder="Maximum acceptable lead time"
                />
                <FormField
                  label="Quantity"
                  name="quantity"
                  placeholder="Exact or estimated quantity need"
                />
                <FormField
                  label="Quality requirements"
                  name="qualityRequirements"
                  placeholder="Any certifications or quality marks (e.g. CE Marking and ISO standards)"
                  textarea
                />
              </FormSection>

              {/* Delivery */}
              <FormSection title="Delivery">
                <FormField
                  label="Delivery Location"
                  name="deliveryLocation"
                  placeholder="Site locations or exact address"
                />
                <FormField
                  label="Packaging requirements"
                  name="packagingRequirements"
                  placeholder="Any specific packaging or labelling needs for materials"
                  textarea
                />
                <FormField
                  label="Transport Conditions"
                  name="transportConditions"
                  placeholder="Exceptions for transportation (pallets)"
                  textarea
                />
              </FormSection>

              {/* Supplier Requirements */}
              <FormSection title="Supplier Requirements">
                <FormField
                  label="Certifications"
                  name="certifications"
                  placeholder="E.g. Minimum certification required such as ISO 9001 for quality management"
                  textarea
                />
                <FormField
                  label="Past experience"
                  name="pastExperience"
                  placeholder="Overview of previous projects"
                  textarea
                />
                <FormField
                  label="Insurance"
                  name="insurance"
                  placeholder="Proof of liability or product insurance"
                  textarea
                />
                <FormField
                  label="Deal Sustainability requirements"
                  name="sustainability"
                  placeholder="Evidence of environmentally friendly practices"
                  textarea
                />
              </FormSection>

              {/* Additional Info */}
              <FormSection title="Additional Info">
                <FormField
                  label="Health & Safety compliance"
                  name="healthSafety"
                  placeholder="Requirements related to health and safety"
                  textarea
                />
                <FormField
                  label="Innovation Opportunities"
                  name="innovation"
                  placeholder="Invitation for suppliers to propose innovative solutions"
                  textarea
                />
                <FormField
                  label="Contact Information"
                  name="contactInfo"
                  placeholder="Developer's point of contact for queries"
                />
              </FormSection>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium 
                    hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;