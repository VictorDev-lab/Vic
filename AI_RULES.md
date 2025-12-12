# AI Rules for Entrepreneur Site

This document outlines the technical stack and specific library usage guidelines for developing the Entrepreneur Site application.

## Tech Stack Description

*   **Frontend Framework**: React for building dynamic and interactive user interfaces.
*   **Language**: TypeScript for enhanced type safety, code quality, and developer experience.
*   **Styling**: Tailwind CSS for a utility-first approach to styling, enabling rapid and consistent responsive designs.
*   **UI Components**: shadcn/ui, a collection of re-usable components built with Radix UI and styled with Tailwind CSS.
*   **Routing**: React Router for declarative navigation and managing application routes.
*   **Icons**: Lucide React for a comprehensive and customizable set of SVG icons.
*   **Project Structure**: Components are organized in `src/components/` and pages in `src/pages/`.
*   **Package Management**: npm for managing project dependencies.

## Library Usage Rules

*   **React**: All new UI features and components must be developed using React.
*   **TypeScript**: All new files and modifications to existing files should utilize TypeScript (`.tsx` or `.ts` extensions).
*   **Tailwind CSS**: All styling should be implemented using Tailwind CSS utility classes. Custom CSS should be avoided unless absolutely necessary for global styles not achievable with Tailwind.
*   **shadcn/ui**: Prioritize the use of pre-built components from shadcn/ui for common UI elements (e.g., buttons, cards, forms, dialogs). If a specific component is not available or requires significant customization, create a new component leveraging shadcn/ui primitives or pure Tailwind CSS.
*   **Radix UI**: As shadcn/ui components are built on Radix UI, refer to Radix UI documentation for advanced accessibility and component primitive usage when extending or creating complex UI elements.
*   **React Router**: Use `react-router-dom` for all client-side routing. Application routes should be defined and managed within `src/App.tsx`.
*   **Lucide React**: All icons used throughout the application should come from the `lucide-react` library.
*   **No Other UI Frameworks**: Do not introduce other UI frameworks (e.g., Bootstrap, Material UI) or component libraries unless explicitly requested by the user.