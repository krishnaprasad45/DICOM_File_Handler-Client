# React + TypeScript + Vite

# <span style="color:#007bff;">DICOM File Handling App 🌟</span>

## <span style="color:#28a745;">Description</span>
Web application built with MERN technology. This app lets people upload DICOM files, which are used for medical images. Once uploaded, the app extracts important information from these files, like patient details and imaging parameters, and saves them in a database. Users can then easily retrieve and view this saved information whenever they need it. It's like a digital filing cabinet for medical images, making it simple for healthcare professionals to manage and access important data.
### <span style="color:#ffc107;">Instructions to Run the App</span>
1. Frontend and Backend in the differect repository (links are provided).
2. Clone the repository Client - git clone https://github.com/krishnaprasad45/DICOM_File_Handler-Client.git
3. Install dependencies using `npm install`
4. Start the development server using `npm run dev`.
5. Note: secret values are protected in .env file, it's not accessible for you, create your own .env and run the project.

### <span style="color:#dc3545;">Authentication</span>
The app uses JWT authentication for secure access to protected endpoints.

### <span style="color:#17a2b8;"> Client developement tools,libraries and technologies used</span>
1. React + Vite 
2. Tailwind CSS
3. TypeScript
4. react-toastify (For popups )
5. axios -Improved, efficienct and reliable in fetching data from APIs
6. lodash - For efficient debounce functionality, delaying function execution until after a specified time interval has elapsed.
7. JWT - (Authenticate users and securely transmit data between the client and server)
8. ESLint - (To maintain consistent coding standards and identifies potential errors)

### Optimization Techniques Used

- **React.memo:** Remembers the previous appearance of a component and skips updates if the props haven't changed.
- **useCallback:** Saves functions, avoiding recreation of functions on each render.
- **useMemo:** Saves computational resources by recalculating values only when needed.
- **React.lazy:** Enables efficient loading of components when they are needed.
- **Debounce:** Ensures efficient search functionality by delaying function execution until after a specified time interval has elapsed.
- **Component Separation:** Enhances reusability and facilitates easier loading by breaking down components into smaller, manageable pieces.



<a href="https://github.com/krishnaprasad45/DICOM_File_Handler-Server"><h2>CLICK HERE TO SEE THE SERVER SIDE CODE 🌟</h2></a>
---

[![Thumbnail](https://drive.google.com/uc?export=view&id=1yhOjVh1TkN3pu1f5-N6OXXJlqBXKAVtG)](https://drive.google.com/file/d/1ATUjrt2762PaMdyxfLyz6zc1XfcNVztJ/view?usp=drive_link)
