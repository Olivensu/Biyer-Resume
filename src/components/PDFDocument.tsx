import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { ResumeState } from '@/store/resumeSlice';

// Register a font that supports bold (Standard Helvetica supports it, but good to be explicit if using custom fonts eventually)
Font.register({
    family: 'Helvetica-Bold',
    src: 'https://fonts.gstatic.com/s/helveticaneue/v70/1Ptsg8zYS_SKggPNyC0IT4ttDfA.ttf',
});

const styles = StyleSheet.create({
    page: {
        padding: 55, // 15px margin + 40px content padding
        fontFamily: 'Helvetica',
        fontSize: 15,
        position: 'relative',
        lineHeight: 1.5,
    },
    pageBorder: {
        position: 'absolute',
        top: 15,
        left: 15,
        right: 15,
        bottom: 15,
        borderStyle: 'dashed',
        borderWidth: 3,
        borderRadius: 15,
        // borderColor will be set dynamically
    },
    h2: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        textDecoration: 'underline',
        marginTop: 18,
        marginBottom: 12,
        textTransform: 'uppercase',
    },
    h3: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 7,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    label: {
        fontFamily: 'Helvetica-Bold',
        marginRight: 5,
    },
    value: {
        fontFamily: 'Helvetica',
    },
    block: {
        marginBottom: 14,
    },
    certificateTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 15,
        textDecoration: 'underline',
        textAlign: 'center',
        marginBottom: 7,
    },
    centeredText: {
        textAlign: 'center',
        marginBottom: 7,
    },
    designationBold: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 7,
    }
});

interface ResumeDocumentProps {
    data: ResumeState;
}

const LabelValue = ({ label, value }: { label: string; value?: string }) => {
    if (!value) return null;
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}:</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const CenteredText = ({ value }: { value?: string }) => {
    if (!value) return null;
    return <Text style={styles.centeredText}>{value}</Text>;
};

export const ResumeDocument = ({ data }: ResumeDocumentProps) => {
    const getBorderColor = () => {
        switch (data.selectedDesign) {
            case 'none': return 'transparent';
            case 'black': return '#000000';
            case 'original': default: return '#f97316';
        }
    };

    return (
        <Document>
            {/* PAGE 1: Biographical Data, Family Details, Present Address */}
            <Page size="A4" style={styles.page}>
                {data.selectedDesign !== 'none' && (
                    <View style={[styles.pageBorder, { borderColor: getBorderColor() }]} fixed />
                )}

                {/* BIOGRAPHICAL DATA */}
                <Text style={styles.h2}>BIOGRAPHICAL DATA</Text>
                <Text style={styles.h3}>PERSONAL DETAILS:</Text>
                <LabelValue label="Name" value={data.personalInfo.fullName} />
                <LabelValue label="Date Of Birth" value={data.personalInfo.dateOfBirth} />
                <LabelValue label="Nationality" value={data.personalInfo.nationality} />
                <LabelValue label="Religion" value={data.personalInfo.religion} />
                <LabelValue label="Sex" value={data.personalInfo.sex} />
                <LabelValue label="Height" value={data.personalInfo.height} />
                <LabelValue label="Blood Group" value={data.personalInfo.bloodGroup} />
                <LabelValue label="Marital Status" value={data.personalInfo.maritalStatus} />
                <LabelValue label="Phone" value={data.personalInfo.phone} />

                {/* FAMILY DETAILS */}
                {(data.personalInfo.fathersName || data.personalInfo.fathersOccupation || data.personalInfo.mothersName || data.personalInfo.mothersOccupation || data.personalInfo.siblings) && (
                    <View>
                        <Text style={styles.h2}>FAMILY DETAILS</Text>
                        <LabelValue label="Father's Name" value={data.personalInfo.fathersName} />
                        <LabelValue label="Father's Occupation" value={data.personalInfo.fathersOccupation} />
                        <LabelValue label="Mother's Name" value={data.personalInfo.mothersName} />
                        <LabelValue label="Mother's Occupation" value={data.personalInfo.mothersOccupation} />
                        <LabelValue label="Sister Name" value={data.personalInfo.siblings} />
                    </View>
                )}

                {/* PRESENT ADDRESS */}
                {data.personalInfo.address && (
                    <View>
                        <Text style={styles.h2}>PRESENT ADDRESS</Text>
                        <LabelValue label="Holding" value={data.personalInfo.address} />
                    </View>
                )}

                {/* PERMANENT ADDRESS */}
                {data.personalInfo.permanentAddress && (
                    <View>
                        <Text style={styles.h2}>PERMANENT ADDRESS</Text>
                        <LabelValue label="Holding" value={data.personalInfo.permanentAddress} />
                    </View>
                )}
            </Page>

            {/* PAGE 2: Academic Background, Work, Language, Interests */}
            {(data.education.length > 0 || data.workExperience.length > 0 || data.languages || data.interests) && (
                <Page size="A4" style={styles.page}>
                    {data.selectedDesign !== 'none' && (
                        <View style={[styles.pageBorder, { borderColor: getBorderColor() }]} fixed />
                    )}

                    {/* ACADEMIC BACKGROUND */}
                    {data.education.length > 0 && (
                        <View>
                            <Text style={styles.h2}>ACADEMIC BACKGROUND</Text>
                            {data.education.map((edu, index) => (
                                <View key={edu.id || index} style={styles.block}>
                                    {edu.certificate && <Text style={styles.certificateTitle}>{edu.certificate}</Text>}
                                    <LabelValue label="Institution" value={edu.institution} />
                                    <LabelValue label="Location" value={edu.location} />
                                    <LabelValue label="Board" value={edu.board} />
                                    <LabelValue label="Group" value={data.education[index].group} />
                                    <LabelValue label="Session" value={edu.session} />
                                    <LabelValue label="Year" value={edu.passingYear} />
                                </View>
                            ))}
                        </View>
                    )}

                    {/* WORKING PLACE */}
                    {data.workExperience.length > 0 && (
                        <View>
                            <Text style={styles.h2}>Working Place</Text>
                            {data.workExperience.map((work, index) => (
                                <View key={work.id || index} style={styles.block}>
                                    {work.designation && <Text style={styles.designationBold}>{work.designation}</Text>}
                                    <CenteredText value={work.unit} />
                                    <CenteredText value={work.institution} />
                                    <CenteredText value={work.location} />
                                </View>
                            ))}
                        </View>
                    )}

                    {/* LANGUAGE */}
                    {data.languages && (
                        <View>
                            <Text style={styles.h2}>Language:</Text>
                            <Text style={{ textAlign: 'center' }}>{data.languages}</Text>
                        </View>
                    )}

                    {/* PERSONAL INTEREST */}
                    {data.interests && (
                        <View>
                            <Text style={styles.h2}>Personal Interest</Text>
                            <Text style={{ textAlign: 'center' }}>{data.interests}</Text>
                        </View>
                    )}

                </Page>
            )}
        </Document>
    );
};
