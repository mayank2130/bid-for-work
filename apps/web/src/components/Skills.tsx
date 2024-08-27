import React, { useState, useEffect, useRef } from 'react';
import { X, Search, Plus } from 'lucide-react';

interface Skill {
  name: string;
}

const initialSkills: Skill[] = [
  { name: 'Infographic' },
  { name: 'Social Media Imagery' },
  { name: 'Photo Editing' },
  { name: 'Sketch' },
  { name: '3D Modeling' },
  { name: 'Banner Ad Design' },
  { name: 'Autodesk AutoCAD' },
  { name: 'Brand Identity & Guidelines' },
  { name: 'WordPress' },
  { name: 'Mobile App Design' },
  { name: 'Adobe After Effects' },
];

const SkillSelector: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedSkills.includes(skill.name)
  );

  const handleSkillToggle = (e: React.MouseEvent, skillName: string) => {
    e.preventDefault();
    if (selectedSkills.includes(skillName)) {
      setSelectedSkills(prevSelected => prevSelected.filter(name => name !== skillName));
    } else {
      setSelectedSkills(prevSelected => [...prevSelected, skillName]);
    }
    setSearchTerm('');
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(true);
  };

  const addCustomSkill = (e: React.MouseEvent) => {
    e.preventDefault();
    if (searchTerm && !skills.some(skill => skill.name.toLowerCase() === searchTerm.toLowerCase())) {
      const newSkill = { name: searchTerm };
      setSkills(prevSkills => [...prevSkills, newSkill]);
      handleSkillToggle(e, searchTerm);
    }
  };

  const clearSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchTerm('');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (

    <div className=" text-white w-full mt-4 rounded-lg mb-4">
      <h2 className="text-xl mb-4">Search skills or add your own</h2>
      <div className="relative mb-4" ref={dropdownRef}>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full bg-gray-800 text-white px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search skills..."
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-10 top-2.5 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          )}
        </div>
        {isDropdownOpen && (searchTerm || filteredSkills.length > 0) && (
          <div className="absolute z-10 w-full mt-1 bg-gray-800 rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredSkills.map(skill => (
              <button
                key={skill.name}
                onClick={(e) => handleSkillToggle(e, skill.name)}
                className="w-full text-left px-4 py-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                {skill.name}
              </button>
            ))}
            {filteredSkills.length === 0 && (
              <button
                onClick={addCustomSkill}
                className="w-full text-left px-4 py-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 flex items-center"
              >
                <Plus size={16} className="mr-2" />
                Add "{searchTerm}"
              </button>
            )}
          </div>
        )}
      </div>
      <p className="text-sm text-gray-400 mb-4">For the best results, add 3-5 skills</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {selectedSkills.map(skill => (
          <button
            key={skill}
            onClick={(e) => handleSkillToggle(e, skill)}
            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center"
          >
            {skill}
            <X size={16} className="ml-2" />
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {skills.slice(0, 9).map(skill => (
          <button
            key={skill.name}
            onClick={(e) => handleSkillToggle(e, skill.name)}
            className={`px-3 py-1 rounded-full text-sm flex items-center justify-between ${
              selectedSkills.includes(skill.name) ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            {skill.name}
            {selectedSkills.includes(skill.name) ? <X size={16} /> : <Plus size={16} />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillSelector;