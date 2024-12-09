how to run:
1.Clone the repository:

git clone <repository url>  (https://github.com/jajy05/reactValidation-main)
cd <project folder>
2.npm install
3.npm run dev

Design choices:

1. Vite for Development
Vite was chosen for its fast startup time and optimized build processes, making development efficient.
2. Formik and Yup
Formik simplifies form state management, and Yup provides robust schema-based validation. Together, they make the forms clean and easy to maintain.
3. React Router DOM v6
The application uses useNavigate() for programmatic navigation and <Routes> for routing, which are features of React Router DOM v6.
4. Local Storage for Simulated Backend
Local storage is used to simulate backend storage of user credentials. While it's not secure for production, it serves demonstration purposes.
5. Styled Components
Component-level styling ensures that styles are scoped and reusable, making the UI consistent and easy to modify.
