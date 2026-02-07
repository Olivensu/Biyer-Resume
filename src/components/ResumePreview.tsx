'use client';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { Card, CardContent } from '@/components/ui/card';
import { setDesign } from '@/store/resumeSlice';

export default function ResumePreview() {
    const dispatch = useAppDispatch();
    const { personalInfo, education, workExperience, languages, interests, selectedDesign } = useAppSelector((state) => state.resume);

    const LabelValue = ({ label, value }: { label: string; value?: string }) => {
        if (!value) return null;
        return (
            <div className="flex gap-2">
                <span className="font-bold whitespace-nowrap">{label}:</span>
                <span>{value}</span>
            </div>
        );
    };

    const CenteredText = ({ value }: { value?: string }) => {
        if (!value) return null;
        return <p className="text-center text-sm mb-1">{value}</p>;
    };

    const getBorderClasses = () => {
        switch (selectedDesign) {
            case 'none': return '';
            case 'black': return 'border-[3px] border-dashed border-black rounded-[15px]';
            case 'original': default: return 'border-[3px] border-dashed border-orange-500 rounded-[15px]';
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-6 justify-center print:hidden p-4 bg-slate-100 rounded-lg">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="design"
                        value="none"
                        checked={selectedDesign === 'none'}
                        onChange={() => dispatch(setDesign('none'))}
                        className="w-4 h-4"
                    />
                    <span>No Design</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="design"
                        value="original"
                        checked={selectedDesign === 'original'}
                        onChange={() => dispatch(setDesign('original'))}
                        className="w-4 h-4"
                    />
                    <span>Original (Orange)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="design"
                        value="black"
                        checked={selectedDesign === 'black'}
                        onChange={() => dispatch(setDesign('black'))}
                        className="w-4 h-4"
                    />
                    <span>Black Design</span>
                </label>
            </div>

            {/* PAGE 1: Biographical Data, Family Details, Present Address */}
            <Card className={`w-full bg-white shadow-lg print:shadow-none font-serif ${getBorderClasses()}`}>
                <CardContent className="p-14 space-y-5 text-sm">
                    <div className="text-center text-xs text-gray-400 mb-2">Page 1</div>

                    {/* BIOGRAPHICAL DATA */}
                    <div>
                        <h2 className="text-center text-base font-bold uppercase underline mb-3 mt-5">BIOGRAPHICAL DATA</h2>
                        <h3 className="text-left text-sm font-bold uppercase mb-2">PERSONAL DETAILS:</h3>
                        <div className="space-y-1.5">
                            <LabelValue label="Name" value={personalInfo.fullName} />
                            <LabelValue label="Date Of Birth" value={personalInfo.dateOfBirth} />
                            <LabelValue label="Nationality" value={personalInfo.nationality} />
                            <LabelValue label="Religion" value={personalInfo.religion} />
                            <LabelValue label="Sex" value={personalInfo.sex} />
                            <LabelValue label="Height" value={personalInfo.height} />
                            <LabelValue label="Blood Group" value={personalInfo.bloodGroup} />
                            <LabelValue label="Marital Status" value={personalInfo.maritalStatus} />
                            <LabelValue label="Phone" value={personalInfo.phone} />
                        </div>
                    </div>

                    {/* FAMILY DETAILS */}
                    {(personalInfo.fathersName || personalInfo.fathersOccupation || personalInfo.mothersName || personalInfo.mothersOccupation || personalInfo.siblings) && (
                        <div>
                            <h2 className="text-center text-base font-bold uppercase underline mb-3 mt-5">FAMILY DETAILS</h2>
                            <div className="space-y-1.5">
                                <LabelValue label="Father's Name" value={personalInfo.fathersName} />
                                <LabelValue label="Father's Occupation" value={personalInfo.fathersOccupation} />
                                <LabelValue label="Mother's Name" value={personalInfo.mothersName} />
                                <LabelValue label="Mother's Occupation" value={personalInfo.mothersOccupation} />
                                <LabelValue label="Sister Name" value={personalInfo.siblings} />
                            </div>
                        </div>
                    )}

                    {/* PRESENT ADDRESS */}
                    {personalInfo.address && (
                        <div>
                            <h2 className="text-center text-base font-bold uppercase underline mb-3 mt-5">PRESENT ADDRESS</h2>
                            <div className="space-y-1.5">
                                <LabelValue label="Holding" value={personalInfo.address} />
                            </div>
                        </div>
                    )}

                    {/* PERMANENT ADDRESS */}
                    {personalInfo.permanentAddress && (
                        <div>
                            <h2 className="text-center text-base font-bold uppercase underline mb-3 mt-5">PERMANENT ADDRESS</h2>
                            <div className="space-y-1.5">
                                <LabelValue label="Holding" value={personalInfo.permanentAddress} />
                            </div>
                        </div>
                    )}

                </CardContent>
            </Card>

            {/* PAGE 2: Permanent Address, Academic Background, Work, Language, Interests */}
            <Card className={`w-full bg-white shadow-lg print:shadow-none font-serif ${getBorderClasses()}`}>
                <CardContent className="p-14 space-y-5 text-sm">
                    <div className="text-center text-xs text-gray-400 mb-2">Page 2</div>

                    {/* ACADEMIC BACKGROUND */}
                    {education.length > 0 && (
                        <div>
                            <h2 className="text-center text-base font-bold uppercase underline mb-3 mt-5">ACADEMIC BACKGROUND</h2>
                            <div className="space-y-4">
                                {education.map((edu) => (
                                    <div key={edu.id} className="space-y-1.5">
                                        {edu.certificate && <p className="text-center font-bold text-[15px] underline mb-1.5">{edu.certificate}</p>}
                                        <LabelValue label="Institution" value={edu.institution} />
                                        <LabelValue label="Location" value={edu.location} />
                                        <LabelValue label="Board" value={edu.board} />
                                        <LabelValue label="Group" value={edu.group} />
                                        <LabelValue label="Session" value={edu.session} />
                                        <LabelValue label="Year" value={edu.passingYear} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* WORK EXPERIENCE "Working place" */}
                    {workExperience.length > 0 && (
                        <div>
                            <h2 className="text-center text-base font-bold uppercase underline mb-3 mt-5">Working place</h2>
                            <div className="space-y-4">
                                {workExperience.map((work) => (
                                    <div key={work.id} className="space-y-1">
                                        {work.designation && <p className="text-center font-bold text-sm mb-1">{work.designation}</p>}
                                        <CenteredText value={work.unit} />
                                        <CenteredText value={work.institution} />
                                        <CenteredText value={work.location} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* LANGUAGE */}
                    {languages && (
                        <div>
                            <h2 className="text-center text-base font-bold uppercase underline mb-3 mt-5">Language:</h2>
                            <p className="text-center text-sm">{languages}</p>
                        </div>
                    )}

                    {/* PERSONAL INTEREST */}
                    {interests && (
                        <div>
                            <h2 className="text-center text-base font-bold uppercase underline mb-3 mt-5">Personal Interest</h2>
                            <p className="text-center text-sm">{interests}</p>
                        </div>
                    )}

                </CardContent>
            </Card>
        </div>
    );
}
