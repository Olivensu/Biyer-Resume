'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
    updatePersonalInfo,
    updateLanguages,
    updateInterests,
    addEducation,
    removeEducation,
    updateEducation,
    addWorkExperience,
    removeWorkExperience,
    updateWorkExperience,
    Education,
    WorkExperience
} from '@/store/resumeSlice';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { v4 as uuidv4 } from 'uuid';

export default function ResumeForm() {
    const dispatch = useAppDispatch();
    const { personalInfo, education, workExperience, languages, interests } = useAppSelector((state) => state.resume);

    const handleAddEducation = () => {
        dispatch(addEducation({
            id: uuidv4(),
            certificate: '',
            institution: '',
            passingYear: '',
            location: '',
            board: '',
            group: '',
            session: '',
        }));
    };

    const handleAddWork = () => {
        dispatch(addWorkExperience({
            id: uuidv4(),
            designation: '',
            institution: '',
            location: '',
        }));
    };

    return (
        <div className="space-y-6">
            {/* PERSONAL DETAILS */}
            <Card>
                <CardHeader>
                    <CardTitle>Biographical Data / Personal Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label>Full Name</Label>
                            <Input value={personalInfo.fullName} onChange={(e) => dispatch(updatePersonalInfo({ fullName: e.target.value }))} placeholder="Your Full Name" />
                        </div>
                        <div className="space-y-2">
                            <Label>Date Of Birth</Label>
                            <Input value={personalInfo.dateOfBirth} onChange={(e) => dispatch(updatePersonalInfo({ dateOfBirth: e.target.value }))} placeholder="Day Month, Year" />
                        </div>
                        <div className="space-y-2">
                            <Label>Nationality</Label>
                            <Input value={personalInfo.nationality} onChange={(e) => dispatch(updatePersonalInfo({ nationality: e.target.value }))} placeholder="Your Nationality" />
                        </div>
                        <div className="space-y-2">
                            <Label>Religion</Label>
                            <Input value={personalInfo.religion} onChange={(e) => dispatch(updatePersonalInfo({ religion: e.target.value }))} placeholder="Your Religion" />
                        </div>
                        <div className="space-y-2">
                            <Label>Sex</Label>
                            <Input value={personalInfo.sex} onChange={(e) => dispatch(updatePersonalInfo({ sex: e.target.value }))} placeholder="Male/Female" />
                        </div>
                        <div className="space-y-2">
                            <Label>Height</Label>
                            <Input value={personalInfo.height} onChange={(e) => dispatch(updatePersonalInfo({ height: e.target.value }))} placeholder="e.g. 5 Feet 8 Inch" />
                        </div>
                        <div className="space-y-2">
                            <Label>Blood Group</Label>
                            <Input value={personalInfo.bloodGroup} onChange={(e) => dispatch(updatePersonalInfo({ bloodGroup: e.target.value }))} placeholder="e.g. A(+)" />
                        </div>
                        <div className="space-y-2">
                            <Label>Marital Status</Label>
                            <Input value={personalInfo.maritalStatus} onChange={(e) => dispatch(updatePersonalInfo({ maritalStatus: e.target.value }))} placeholder="Single/Married" />
                        </div>
                        <div className="space-y-2">
                            <Label>Phone</Label>
                            <Input value={personalInfo.phone} onChange={(e) => dispatch(updatePersonalInfo({ phone: e.target.value }))} placeholder="+1234567890" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* FAMILY DETAILS */}
            <Card>
                <CardHeader>
                    <CardTitle>Family Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label>Father&apos;s Name</Label>
                            <Input value={personalInfo.fathersName} onChange={(e) => dispatch(updatePersonalInfo({ fathersName: e.target.value }))} placeholder="Father's Full Name" />
                        </div>
                        <div className="space-y-2">
                            <Label>Father&apos;s Occupation</Label>
                            <Input value={personalInfo.fathersOccupation} onChange={(e) => dispatch(updatePersonalInfo({ fathersOccupation: e.target.value }))} placeholder="Occupation" />
                        </div>
                        <div className="space-y-2">
                            <Label>Mother&apos;s Name</Label>
                            <Input value={personalInfo.mothersName} onChange={(e) => dispatch(updatePersonalInfo({ mothersName: e.target.value }))} placeholder="Mother's Full Name" />
                        </div>
                        <div className="space-y-2">
                            <Label>Mother&apos;s Occupation</Label>
                            <Input value={personalInfo.mothersOccupation} onChange={(e) => dispatch(updatePersonalInfo({ mothersOccupation: e.target.value }))} placeholder="Occupation" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label>Sister Name(s) / Siblings</Label>
                            <Input value={personalInfo.siblings} onChange={(e) => dispatch(updatePersonalInfo({ siblings: e.target.value }))} placeholder="Names of Siblings" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* PRESENT ADDRESS */}
            <Card>
                <CardHeader>
                    <CardTitle>Present Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Holding/Address</Label>
                        <Textarea value={personalInfo.address} onChange={(e) => dispatch(updatePersonalInfo({ address: e.target.value }))} placeholder="Full Present Address..." />
                    </div>
                </CardContent>
            </Card>

            {/* PERMANENT ADDRESS */}
            <Card>
                <CardHeader>
                    <CardTitle>Permanent Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Holding/Address</Label>
                        <Textarea value={personalInfo.permanentAddress} onChange={(e) => dispatch(updatePersonalInfo({ permanentAddress: e.target.value }))} placeholder="Full Permanent Address..." />
                    </div>
                </CardContent>
            </Card>

            {/* ACADEMIC BACKGROUND */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Academic Background</CardTitle>
                    <Button onClick={handleAddEducation} size="sm" variant="outline">+ Add Education</Button>
                </CardHeader>
                <CardContent className="space-y-6">
                    {education.map((edu, index) => (
                        <div key={edu.id} className="relative border rounded-lg p-4 bg-slate-50 dark:bg-slate-900/50">
                            <Button
                                variant="destructive"
                                size="sm"
                                className="absolute top-2 right-2 h-6 w-6 p-0"
                                onClick={() => dispatch(removeEducation(edu.id))}
                            >
                                X
                            </Button>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Certificate / Degree</Label>
                                    <Input value={edu.certificate} onChange={(e) => dispatch(updateEducation({ ...edu, certificate: e.target.value }))} placeholder="e.g. BSc, MSc, Diploma" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Institution</Label>
                                    <Input value={edu.institution} onChange={(e) => dispatch(updateEducation({ ...edu, institution: e.target.value }))} placeholder="Name of Institution" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Location (Optional)</Label>
                                    <Input value={edu.location || ''} onChange={(e) => dispatch(updateEducation({ ...edu, location: e.target.value }))} placeholder="City, Country" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Board (Optional)</Label>
                                    <Input value={edu.board || ''} onChange={(e) => dispatch(updateEducation({ ...edu, board: e.target.value }))} placeholder="Education Board" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Group (Optional)</Label>
                                    <Input value={edu.group || ''} onChange={(e) => dispatch(updateEducation({ ...edu, group: e.target.value }))} placeholder="Science/Arts/Commerce" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Session (Optional)</Label>
                                    <Input value={edu.session || ''} onChange={(e) => dispatch(updateEducation({ ...edu, session: e.target.value }))} placeholder="e.g. 2018-2019" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Passing Year / Year</Label>
                                    <Input value={edu.passingYear} onChange={(e) => dispatch(updateEducation({ ...edu, passingYear: e.target.value }))} placeholder="Year of Passing" />
                                </div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* WORKING PLACE */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Working Place</CardTitle>
                    <Button onClick={handleAddWork} size="sm" variant="outline">+ Add Work</Button>
                </CardHeader>
                <CardContent className="space-y-6">
                    {workExperience.map((work) => (
                        <div key={work.id} className="relative border rounded-lg p-4 bg-slate-50 dark:bg-slate-900/50">
                            <Button
                                variant="destructive"
                                size="sm"
                                className="absolute top-2 right-2 h-6 w-6 p-0"
                                onClick={() => dispatch(removeWorkExperience(work.id))}
                            >
                                X
                            </Button>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Designation</Label>
                                    <Input value={work.designation} onChange={(e) => dispatch(updateWorkExperience({ ...work, designation: e.target.value }))} placeholder="Job Title" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Unit / Section (Optional)</Label>
                                    <Input value={work.unit || ''} onChange={(e) => dispatch(updateWorkExperience({ ...work, unit: e.target.value }))} placeholder="Department or Unit" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Institution / Hospital</Label>
                                    <Input value={work.institution} onChange={(e) => dispatch(updateWorkExperience({ ...work, institution: e.target.value }))} placeholder="Company/Hospital Name" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Location</Label>
                                    <Input value={work.location} onChange={(e) => dispatch(updateWorkExperience({ ...work, location: e.target.value }))} placeholder="Office Location" />
                                </div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* OTHERS */}
            <Card>
                <CardHeader>
                    <CardTitle>Others</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Language</Label>
                        <Input value={languages} onChange={(e) => dispatch(updateLanguages(e.target.value))} placeholder="Languages Known" />
                    </div>
                    <div className="space-y-2">
                        <Label>Personal Interest</Label>
                        <Textarea value={interests} onChange={(e) => dispatch(updateInterests(e.target.value))} placeholder="Hobbies and Interests..." />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
