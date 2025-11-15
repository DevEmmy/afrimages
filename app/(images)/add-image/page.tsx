"use client";
import React, { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Gallery, 
  Image as ImageIcon, 
  CloseCircle, 
  Gallery as GalleryIcon, 
  Tag, 
  DollarCircle, 
  Location, 
  Camera, 
  Calendar,
  Star1,
  ArrowLeft,
  Save2,
  Eye,
  EyeSlash,
  InfoCircle
} from 'iconsax-react';
import { useUserStore } from '@/components/hooks/useUserStore';
import { useDropzone } from 'react-dropzone';
import axiosInstance from '@/app/utils/axiosConfig';

interface ImageUploadData {
  title: string;
  description: string;
  category: string;
  tags: string[];
  location: string;
  camera: string;
  dateTaken: string;
  license: 'free' | 'premium' | 'exclusive';
  price: number;
  isPublic: boolean;
  allowCommercialUse: boolean;
  requireAttribution: boolean;
  keywords: string[];
  modelRelease: boolean;
  propertyRelease: boolean;
  resolution: string;
  fileSize: string;
  format: string;
}

const categories = [
  { id: 'nature', name: 'Nature & Wildlife', icon: '🌿' },
  { id: 'portrait', name: 'Portraits', icon: '👤' },
  { id: 'landscape', name: 'Landscapes', icon: '🏔️' },
  { id: 'street', name: 'Street Photography', icon: '🏙️' },
  { id: 'architecture', name: 'Architecture', icon: '🏛️' },
  { id: 'abstract', name: 'Abstract', icon: '🎨' },
  { id: 'documentary', name: 'Documentary', icon: '📷' },
  { id: 'fashion', name: 'Fashion', icon: '👗' },
  { id: 'food', name: 'Food & Culinary', icon: '🍽️' },
  { id: 'travel', name: 'Travel', icon: '✈️' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'lifestyle', name: 'Lifestyle', icon: '🌟' },
];

const licenses = [
  {
    id: 'free',
    name: 'Free License',
    description: 'Free for personal and commercial use with attribution',
    price: 0,
    features: ['Personal use', 'Commercial use', 'Attribution required', 'No resale rights']
  },
  // {
  //   id: 'premium',
  //   name: 'Premium License',
  //   description: 'Enhanced commercial rights with flexible usage',
  //   price: 29.99,
  //   features: ['All free features', 'No attribution required', 'Extended commercial use', 'Resale rights']
  // },
  // {
  //   id: 'exclusive',
  //   name: 'Exclusive License',
  //   description: 'Exclusive rights for high-value commercial projects',
  //   price: 199.99,
  //   features: ['Exclusive usage rights', 'No attribution required', 'Unlimited commercial use', 'Transferable rights']
  // }
];

const AddImagePage = () => {
  const router = useRouter();
  const { user } = useUserStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState<ImageUploadData>({
    title: '',
    description: '',
    category: '',
    tags: [],
    location: '',
    camera: '',
    dateTaken: '',
    license: 'free',
    price: 0,
    isPublic: true,
    allowCommercialUse: true,
    requireAttribution: true,
    keywords: [],
    modelRelease: false,
    propertyRelease: false,
    resolution: '',
    fileSize: '',
    format: ''
  });

  const [newTag, setNewTag] = useState('');
  const [newKeyword, setNewKeyword] = useState('');

  // File upload handling
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles.find(file => file.type.startsWith('image/'));
    if (!file) return;
    setUploadedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp', '.tiff']
    },
    maxSize: 50 * 1024 * 1024, // 50MB
    multiple: false
  });

  const removeFile = () => {
    setUploadedFile(null);
    setPreviewUrl('');
  };

  // Form handling
  const handleChange = (field: keyof ImageUploadData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      handleChange('tags', [...formData.tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    handleChange('tags', formData.tags.filter(tag => tag !== tagToRemove));
  };

  const addKeyword = () => {
    if (newKeyword.trim() && !formData.keywords.includes(newKeyword.trim())) {
      handleChange('keywords', [...formData.keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    handleChange('keywords', formData.keywords.filter(keyword => keyword !== keywordToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile) {
      alert('Please upload an image');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Prepare FormData
    const formDataToSend = new FormData();
    formDataToSend.append('file', uploadedFile);
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
    });

    try {
      await axiosInstance.post('/assets', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            setUploadProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
          }
        },
      });
      setIsUploading(false);
      router.push('/profile');
    } catch (error) {
      setIsUploading(false);
      alert('Failed to upload image. Please try again.');
    }
  };

  const steps = [
    { id: 1, name: 'Upload Images', icon: Gallery },
    { id: 2, name: 'Basic Info', icon: ImageIcon },
    { id: 3, name: 'Categories & Tags', icon: Tag },
    { id: 4, name: 'Licensing & Pricing', icon: DollarCircle },
    { id: 5, name: 'Review & Publish', icon: Save2 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Add New Images</h1>
                <p className="text-sm text-gray-500">Share your creativity with the world</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                {user?.firstName} {user?.lastName}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center gap-3 ${
                    isActive ? 'text-orange-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      isActive ? 'border-orange-600 bg-orange-50' : 
                      isCompleted ? 'border-green-600 bg-green-50' : 
                      'border-gray-300 bg-gray-50'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <span className="hidden md:block font-medium">{step.name}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      isCompleted ? 'bg-green-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Step 1: Upload Images */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Your Images</h2>
                <p className="text-gray-600">Select high-quality images to showcase your work</p>
              </div>

              {/* Upload Area */}
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 cursor-pointer ${
                  isDragActive 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <input {...getInputProps()} />
                <Gallery size={48} className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {isDragActive ? 'Drop images here' : 'Drag & drop images here'}
                </h3>
                <p className="text-gray-600 mb-4">
                  or click to browse files
                </p>
                <p className="text-sm text-gray-500">
                  Supports: JPG, PNG, GIF, WebP, TIFF (Max 50MB each)
                </p>
              </div>

              {/* Uploaded Files Preview */}
              {uploadedFile && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Uploaded Image
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="relative group">
                      <img
                        src={previewUrl}
                        alt={uploadedFile.name}
                        className="w-full h-32 object-cover rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={removeFile}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <CloseCircle size={16} />
                      </button>
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {uploadedFile.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  disabled={!uploadedFile}
                  className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next: Basic Information
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Basic Information */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Basic Information</h2>
                <p className="text-gray-600">Tell us about your images</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Image Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter a descriptive title for your image"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Describe your image, the story behind it, or any relevant details..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <Location className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Where was this taken?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Camera/Equipment
                  </label>
                  <div className="relative">
                    <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={formData.camera}
                      onChange={(e) => handleChange('camera', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Camera model, lens, settings..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date Taken
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      value={formData.dateTaken}
                      onChange={(e) => handleChange('dateTaken', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Image Format
                  </label>
                  <input
                    type="text"
                    value={formData.format}
                    onChange={(e) => handleChange('format', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="JPEG, PNG, etc."
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  disabled={!formData.title || !formData.description}
                  className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next: Categories & Tags
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Categories & Tags */}
          {currentStep === 3 && (
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Categories & Tags</h2>
                <p className="text-gray-600">Help people discover your work</p>
              </div>

              <div className="space-y-8">
                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Primary Category *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => handleChange('category', category.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                          formData.category === category.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-2xl mb-2">{category.icon}</div>
                        <div className="text-sm font-medium text-gray-900">{category.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Add a tag and press Enter"
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="text-orange-600 hover:text-orange-800"
                        >
                          <CloseCircle size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Keywords */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Keywords (for SEO)
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={newKeyword}
                      onChange={(e) => setNewKeyword(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Add keywords for better search visibility"
                    />
                    <button
                      type="button"
                      onClick={addKeyword}
                      className="px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all duration-300"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {keyword}
                        <button
                          type="button"
                          onClick={() => removeKeyword(keyword)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <CloseCircle size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  disabled={!formData.category}
                  className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next: Licensing & Pricing
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Licensing & Pricing */}
          {currentStep === 4 && (
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Licensing & Pricing</h2>
                <p className="text-gray-600">Choose how your images can be used and set pricing</p>
              </div>

              <div className="space-y-8">
                {/* License Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    License Type *
                  </label>
                  <div className="space-y-4">
                    {licenses.map((license) => (
                      <div
                        key={license.id}
                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.license === license.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => {
                          handleChange('license', license.id);
                          handleChange('price', license.price);
                        }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{license.name}</h3>
                          <span className="text-2xl font-bold text-gray-900">
                            ${license.price}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{license.description}</p>
                        <ul className="space-y-2">
                          {license.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Pricing */}
                {formData.license !== 'free' && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Custom Price (USD)
                    </label>
                    <div className="relative">
                      <DollarCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => handleChange('price', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="0.01"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                )}

                {/* Usage Rights */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Usage Rights</h3>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={formData.isPublic}
                        onChange={(e) => handleChange('isPublic', e.target.checked)}
                        className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <div>
                        <label className="font-medium text-gray-900">Public Gallery</label>
                        <p className="text-sm text-gray-500">Make this image visible in public galleries</p>
                      </div>
                    </div>
                    <Eye size={20} className="text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={formData.allowCommercialUse}
                        onChange={(e) => handleChange('allowCommercialUse', e.target.checked)}
                        className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <div>
                        <label className="font-medium text-gray-900">Allow Commercial Use</label>
                        <p className="text-sm text-gray-500">Allow others to use this image for commercial purposes</p>
                      </div>
                    </div>
                    <DollarCircle size={20} className="text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={formData.requireAttribution}
                        onChange={(e) => handleChange('requireAttribution', e.target.checked)}
                        className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <div>
                        <label className="font-medium text-gray-900">Require Attribution</label>
                        <p className="text-sm text-gray-500">Require users to credit you when using this image</p>
                      </div>
                    </div>
                    <Star1 size={20} className="text-gray-400" />
                  </div>
                </div>

                {/* Legal Releases */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Legal Releases</h3>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={formData.modelRelease}
                        onChange={(e) => handleChange('modelRelease', e.target.checked)}
                        className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <div>
                        <label className="font-medium text-gray-900">Model Release</label>
                        <p className="text-sm text-gray-500">I have permission from identifiable people in this image</p>
                      </div>
                    </div>
                    <InfoCircle size={20} className="text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={formData.propertyRelease}
                        onChange={(e) => handleChange('propertyRelease', e.target.checked)}
                        className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <div>
                        <label className="font-medium text-gray-900">Property Release</label>
                        <p className="text-sm text-gray-500">I have permission for private property shown in this image</p>
                      </div>
                    </div>
                    <InfoCircle size={20} className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(5)}
                  className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300"
                >
                  Next: Review & Publish
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Review & Publish */}
          {currentStep === 5 && (
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Review & Publish</h2>
                <p className="text-gray-600">Review your information before publishing</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Preview */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Image Preview</h3>
                  <div className="space-y-4">
                    {previewUrl && (
                      <div className="relative">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-xl"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {uploadedFile?.name}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Information Summary */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Information Summary</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Title</label>
                        <p className="text-gray-900">{formData.title}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-600">Description</label>
                        <p className="text-gray-900">{formData.description}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-600">Category</label>
                        <p className="text-gray-900">
                          {categories.find(c => c.id === formData.category)?.name}
                        </p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-600">Tags</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {formData.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-600">License</label>
                        <p className="text-gray-900">
                          {licenses.find(l => l.id === formData.license)?.name} - ${formData.price}
                        </p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-600">Location</label>
                        <p className="text-gray-900">{formData.location || 'Not specified'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Upload Progress */}
                  {isUploading && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Uploading...</span>
                        <span className="text-sm text-gray-500">{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={isUploading}
                  className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isUploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <Save2 size={20} />
                      Publish Images
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddImagePage; 