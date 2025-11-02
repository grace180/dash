import React, { useState } from "react";
import { User, Lock, Save, Camera, Mail, Phone, Building2, Briefcase } from "lucide-react";

function Settings() {
  const [activeSection, setActiveSection] = useState("profile");
  const [profileData, setProfileData] = useState({
    fullName: "User",
    email: "User@gmail.com",
    phone: "+62 812-234-567-891",
    position: "Officer Adm dan Mum",
    department: "Department"
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSecurityChange = (field, value) => {
    setSecurityData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    console.log("Saving profile:", profileData);
    alert("Profile updated successfully!");
  };

  const handleChangePassword = () => {
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    if (!securityData.currentPassword || !securityData.newPassword) {
      alert("Please fill in all password fields!");
      return;
    }
    console.log("Changing password");
    alert("Password changed successfully!");
    setSecurityData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="space-y-6">
      {/* Navigation Tabs */}
      <div className="flex space-x-2 bg-white rounded-2xl border border-blue-100 p-2 shadow-sm">
        <button
          onClick={() => setActiveSection("profile")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 font-medium rounded-xl transition-all ${
            activeSection === "profile"
              ? "bg-blue-600 text-white shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-blue-50"
          }`}
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </button>
        <button
          onClick={() => setActiveSection("security")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 font-medium rounded-xl transition-all ${
            activeSection === "security"
              ? "bg-blue-600 text-white shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-blue-50"
          }`}
        >
          <Lock className="w-5 h-5" />
          <span>Security</span>
        </button>
      </div>

    
      {activeSection === "profile" && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-32"></div>

            <div className="px-8 pb-8">
   
              <div className="flex items-end space-x-6 -mt-16 mb-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-white border-4 border-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {profileData.fullName.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  </div>
                  <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
                    <Camera className="w-5 h-5" />
                  </button>
                </div>
                <div className="pb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{profileData.fullName}</h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <Briefcase className="w-4 h-4" />
                    {profileData.position}
                  </p>
                </div>
              </div>

        
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 text-blue-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profileData.fullName}
                    onChange={(e) => handleProfileChange("fullName", e.target.value)}
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleProfileChange("email", e.target.value)}
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleProfileChange("phone", e.target.value)}
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    Position
                  </label>
                  <input
                    type="text"
                    value={profileData.position}
                    onChange={(e) => handleProfileChange("position", e.target.value)}
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
                    placeholder="Your position"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    Department
                  </label>
                  <input
                    type="text"
                    value={profileData.department}
                    onChange={(e) => handleProfileChange("department", e.target.value)}
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
                    placeholder="Your department"
                  />
                </div>
              </div>

         
              <div className="mt-8 pt-6 border-t border-blue-100 flex justify-end">
                <button
                  onClick={handleSaveProfile}
                  className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

   
      {activeSection === "security" && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-blue-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Change Password</h3>
                <p className="text-sm text-gray-600">Update your password to keep your account secure</p>
              </div>
            </div>
            
            <div className="space-y-5 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={securityData.currentPassword}
                  onChange={(e) => handleSecurityChange("currentPassword", e.target.value)}
                  className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
                  placeholder="Enter current password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={securityData.newPassword}
                  onChange={(e) => handleSecurityChange("newPassword", e.target.value)}
                  className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={securityData.confirmPassword}
                  onChange={(e) => handleSecurityChange("confirmPassword", e.target.value)}
                  className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
                  placeholder="Confirm new password"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={handleChangePassword}
                  className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;