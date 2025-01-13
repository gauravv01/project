import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const CreateListing = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const FormSection = ({ title, children }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );

  const FormField = ({ label, placeholder, type = "text", textarea }) => {
    const inputClasses = "w-full border border-gray-200 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-100";
    
    return (
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          {label}
        </label>
        {textarea ? (
          <textarea
            className={inputClasses}
            rows={3}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            className={inputClasses}
            placeholder={placeholder}
          />
        )}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-sm text-gray-500 py-4">
          Connect - My Listings - Create Listing
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Upload Area */}
          <div className="col-span-5">
            <h1 className="text-2xl font-semibold mb-6">Create your listing now</h1>
            <div className="bg-gray-100 rounded-lg aspect-square flex flex-col items-center justify-center">
              <Upload className="w-8 h-8 text-gray-400 mb-3" />
              <p className="text-gray-600 mb-6">Drop your tender here</p>
              <button className="bg-black text-white px-6 py-2 rounded text-sm">
                Upload
              </button>
            </div>
          </div>

          {/* Right Column - Form Fields */}
          <div className="col-span-7">
            <form className="space-y-8">
              {/* General Information */}
              <FormSection title="General Information">
                <FormField
                  label="Title"
                  placeholder="E.g. Supply of structural steel beams for residential project"
                />
                <FormField
                  label="Project Description"
                  placeholder="Overview of the project, it's purpose, scope"
                  textarea
                />
                <FormField
                  label="Location"
                  placeholder="The site or delivery address"
                />
                <FormField
                  label="Deal deadline"
                  type="date"
                />
              </FormSection>

              {/* Product Specs */}
              <FormSection title="Product Specs">
                <FormField
                  label="Product details"
                  placeholder="Name or type of product (Reinforced concrete panels) Dimensions, weight or size, compliance requirement (e.g. CE Marking, ISO Standards)"
                  textarea
                />
                <FormField
                  label="Delivery lead time"
                  placeholder="Maximum acceptable lead time"
                />
                <FormField
                  label="Quantity"
                  placeholder="Exact or estimated quantity need"
                />
                <FormField
                  label="Quality requirements"
                  placeholder="Any certifications or quality marks (e.g. CE Marking and ISO standards)"
                  textarea
                />
              </FormSection>

              {/* Delivery */}
              <FormSection title="Delivery">
                <FormField
                  label="Delivery Location"
                  placeholder="Site locations or exact address"
                />
                <FormField
                  label="Packaging requirements"
                  placeholder="Any specific packaging or labelling needs for materials"
                  textarea
                />
                <FormField
                  label="Transport Conditions"
                  placeholder="Exceptions for transportation (pallets)"
                  textarea
                />
              </FormSection>

              {/* Supplier Requirements */}
              <FormSection title="Supplier Requirements">
                <FormField
                  label="Certifications"
                  placeholder="E.g. Minimum certification required such as ISO 9001 for quality management"
                  textarea
                />
                <FormField
                  label="Past experience"
                  placeholder="Overview of previous projects"
                  textarea
                />
                <FormField
                  label="Insurance"
                  placeholder="Proof of liability or product insurance"
                  textarea
                />
                <FormField
                  label="Deal Sustainability requirements"
                  placeholder="Evidence of environmentally friendly practices"
                  textarea
                />
              </FormSection>

              {/* Pricing & Contract */}
              <FormSection title="Pricing & Contract">
                <FormField
                  label="Pricing format"
                  placeholder="Request itemised quotes (e.g. material costs, VAT and transport charges)"
                  textarea
                />
                <FormField
                  label="Payment terms"
                  placeholder="Indicate payment schedules and conditions"
                  textarea
                />
                <FormField
                  label="Contract terms"
                  placeholder="Indicate conditions for penalties, warranties and guarantees"
                  textarea
                />
                <FormField
                  label="Quality requirements"
                  placeholder="Any certifications or quality marks (e.g. CE Marking and ISO standards)"
                  textarea
                />
                <FormField
                  label="Rebate option"
                  placeholder="Yes or No"
                />
              </FormSection>

              {/* Additional Info */}
              <FormSection title="Additional Info">
                <FormField
                  label="Health & Safety compliance"
                  placeholder="Requirements related to UK health and safety"
                  textarea
                />
                <FormField
                  label="Innovation Opportunities"
                  placeholder="Invitation for suppliers to propose innovative or alternative solutions"
                  textarea
                />
                <FormField
                  label="Contact Information"
                  placeholder="Developer's point of contact for queries"
                />
              </FormSection>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-2 rounded text-sm font-medium mb-6"
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