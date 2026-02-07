# Biyer Resume 💍

Welcome to **Biyer Resume**, a specialized resume builder designed to create beautiful, professional resumes with a touch of fun. Whether you're applying for a job or looking for a life partner, this tool helps you present your best self.

## ✨ Features

- **🎬 Animated Welcome**: A fancy "Welcome to Biyer Resume" popup with word-by-word animation on visit.
- **📄 Multi-Page PDF**: Automatically splits content into a clean two-page PDF layout.
  - **Page 1**: Biographical Data, Family Details, and Present Address.
  - **Page 2**: Permanent Address, Academic Background, and Working Place.
- **🎨 Design Selection**: Choose between three distinct border designs:
  - **None**: Simple and clean.
  - **Original (Orange)**: Vibrant dashed orange border with 15px inset.
  - **Black**: Professional dashed black border with 15px inset.
- **💾 Persistent Data**: Your data is safe! Integration with `redux-persist` ensures your progress stays even after a page reload.
- **🛠 Dynamic Form**:
  - Add multiple Education qualifications (MBBS, HSC, SSC, etc.).
  - Add multiple Work Experiences with Designation, Unit/Section, and Institution.
- **🔍 Live Preview**: Real-time preview that perfectly matches the PDF design, including the two-page split visualization.
- **🧹 Data Management**: Easily clear all information with a single click to start fresh.

## 📁 Project Structure

```text
cv-maker/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Main page integration
│   │   └── StoreProvider.tsx # Redux & Persistence setup
│   ├── components/         # React Components
│   │   ├── ResumeForm.tsx      # Main data entry form
│   │   ├── ResumePreview.tsx   # Live design preview (2-page layout)
│   │   ├── PDFDocument.tsx     # @react-pdf/renderer structure
│   │   ├── WelcomePopup.tsx    # Animated intro
│   │   ├── PDFDownloadButton.tsx # PDF generation trigger
│   │   ├── ClearDataButton.tsx # State reset logic
│   │   └── ui/                 # Shadcn UI base components
│   ├── store/              # Redux State Management
│   │   ├── resumeSlice.ts      # Main resume state & reducers
│   │   ├── store.ts            # Store config with redux-persist
│   │   └── hooks.ts            # Typed Redux hooks
│   └── lib/                # Utility functions
├── tailwind.config.ts      # Styling configuration
└── package.json            # Dependencies & Scripts
```

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & [Redux Persist](https://github.com/rt2zz/redux-persist)
- **PDF Generation**: [@react-pdf/renderer](https://react-pdf.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons/Animation**: Custom Tailwind Animations

## 📖 How to Use

1. **Visit**: Experience the "Welcome to Biyer Resume" intro.
2. **Edit**: Fill in your details in the "Edit Information" panels. The data is saved automatically as you type.
3. **Design**: Use the radio buttons above the preview to select your preferred border style.
4. **Download**: Click "Download PDF" to get your two-page professionally formatted resume.

---
Built with ❤️ by [Olivensu](https://github.com/Olivensu)
