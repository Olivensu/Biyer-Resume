import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Education {
    id: string;
    certificate: string;
    institution: string;
    location?: string;
    board?: string;
    group?: string; // Science, Arts, etc.
    session?: string;
    passingYear: string;
    result?: string;
}

export interface WorkExperience {
    id: string;
    designation: string;
    unit?: string; // Unit/Section within the company
    institution: string;
    location: string;
    startDate?: string;
    endDate?: string;
}

export interface ResumeState {
    personalInfo: {
        fullName: string;
        dateOfBirth: string;
        nationality: string;
        religion: string;
        sex: string;
        height: string;
        bloodGroup: string;
        maritalStatus: string;

        // Family Details
        fathersName: string;
        fathersOccupation: string;
        mothersName: string;
        mothersOccupation: string;
        siblings: string; // "Sister Name: ..."

        // Present Address
        address: string;

        // Permanent Address
        permanentAddress: string;

        // Contact (keeping existing)
        email: string;
        phone: string;
        summary?: string; // Optional now?
    };
    education: Education[];
    workExperience: WorkExperience[];
    profession?: string; // "FCPS Trainee (Neurology)" from example? or part of work? 
    // The example shows "Designation: FCPS Trainee..." under Academic Background. 
    // Wait, the user put "Designation: FCPS Trainee (Neurology)" under ACADEMIC BACKGROUND in the example text?
    // "ACADEMIC BACKGROUND ... Designation: FCPS Trainee ... Institution: NINH ... Bachelor of Medicine..."
    // It seems the user treats the current trainee position as part of academic background or maybe it's just mixed.
    // I will assume FCPS Trainee is an education/training entry.

    languages: string;
    interests: string;
    selectedDesign: 'none' | 'original' | 'black';
}

const initialState: ResumeState = {
    personalInfo: {
        fullName: '',
        dateOfBirth: '',
        nationality: '',
        religion: '',
        sex: '',
        height: '',
        bloodGroup: '',
        maritalStatus: '',
        fathersName: '',
        fathersOccupation: '',
        mothersName: '',
        mothersOccupation: '',
        siblings: '',
        address: '',
        permanentAddress: '',
        email: '',
        phone: '',
        summary: '',
    },
    education: [],
    workExperience: [],
    languages: '',
    interests: '',
    selectedDesign: 'original',
};

export const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        updatePersonalInfo: (state, action: PayloadAction<Partial<ResumeState['personalInfo']>>) => {
            state.personalInfo = { ...state.personalInfo, ...action.payload };
        },
        updateLanguages: (state, action: PayloadAction<string>) => {
            state.languages = action.payload;
        },
        updateInterests: (state, action: PayloadAction<string>) => {
            state.interests = action.payload;
        },

        // Education
        addEducation: (state, action: PayloadAction<Education>) => {
            state.education.push(action.payload);
        },
        updateEducation: (state, action: PayloadAction<Education>) => {
            const index = state.education.findIndex((edu) => edu.id === action.payload.id);
            if (index !== -1) {
                state.education[index] = action.payload;
            }
        },
        removeEducation: (state, action: PayloadAction<string>) => {
            state.education = state.education.filter((edu) => edu.id !== action.payload);
        },

        // Work Experience
        addWorkExperience: (state, action: PayloadAction<WorkExperience>) => {
            state.workExperience.push(action.payload);
        },
        updateWorkExperience: (state, action: PayloadAction<WorkExperience>) => {
            const index = state.workExperience.findIndex((exp) => exp.id === action.payload.id);
            if (index !== -1) {
                state.workExperience[index] = action.payload;
            }
        },
        removeWorkExperience: (state, action: PayloadAction<string>) => {
            state.workExperience = state.workExperience.filter((exp) => exp.id !== action.payload);
        },
        resetState: (state) => {
            return initialState;
        },
        setDesign: (state, action: PayloadAction<'none' | 'original' | 'black'>) => {
            state.selectedDesign = action.payload;
        }
    },
});

export const {
    updatePersonalInfo,
    updateLanguages,
    updateInterests,
    addEducation,
    updateEducation,
    removeEducation,
    addWorkExperience,
    updateWorkExperience,
    removeWorkExperience,
    resetState,
    setDesign,
} = resumeSlice.actions;

export default resumeSlice.reducer;
