# Sidebar Website - React.js Tutorial Project

This is a modern sidebar website built with React.js, designed to help beginners understand React concepts through a practical example.

## 🚀 Features

- **Collapsible Sidebar**: Click on tabs to expand/collapse content
- **Profile Section**: User profile display with avatar
- **Interactive Tabs**: Dashboard, Pay, Learning, and Settings sections
- **Modern Design**: Clean, responsive UI with smooth animations
- **Detailed Comments**: Extensive code comments for learning purposes

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

You can check if you have them installed by running:
```bash
node --version
npm --version
```

## 🛠️ Installation & Setup

1. **Navigate to the project directory**:
   ```bash
   cd sidebar-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and go to:
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
sidebar-website/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx      # Main sidebar component
│   │   └── Sidebar.css      # Sidebar styles
│   ├── App.jsx              # Main app component
│   ├── App.css              # App-level styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── package.json             # Project dependencies
└── README.md               # This file
```

## 🎯 How It Works

### React Concepts Demonstrated

1. **Components**: The app is built using functional components
2. **State Management**: Uses React's `useState` hook to manage tab states
3. **Props**: Components can receive and pass data
4. **Event Handling**: Click events to toggle tab states
5. **Conditional Rendering**: Different content shown based on active tab
6. **CSS-in-JS**: Modern styling with CSS variables and flexbox

### Key Features Explained

#### Sidebar Component (`src/components/Sidebar.jsx`)
- **State Management**: Uses `useState` to track which tab is active
- **Event Handlers**: `handleTabClick` function manages tab interactions
- **Conditional Rendering**: Shows different content based on `activeTab` state
- **Component Structure**: Organized into profile section, navigation tabs, and content area

#### Styling (`src/components/Sidebar.css`)
- **CSS Variables**: Consistent theming with custom properties
- **Flexbox Layout**: Modern layout techniques
- **Responsive Design**: Works on different screen sizes
- **Animations**: Smooth transitions and hover effects

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `src/components/Sidebar.css`:
```css
:root {
  --primary-color: #6366f1;    /* Change this for main color */
  --primary-hover: #4f46e5;    /* Change this for hover color */
  --background-color: #ffffff; /* Change this for background */
}
```

### Adding New Tabs
1. Add a new button in the `nav-tabs` section of `Sidebar.jsx`
2. Add corresponding content in the `content-area` section
3. Update the `handleTabClick` function if needed

### Modifying Content
Each tab's content is in the `content-area` section. You can:
- Change text content
- Add new elements
- Modify styling in the CSS file

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📚 Learning Resources

This project demonstrates several React concepts:

1. **Functional Components**: Modern React uses function-based components
2. **Hooks**: `useState` for state management
3. **JSX**: JavaScript XML for component structure
4. **Event Handling**: Managing user interactions
5. **Conditional Rendering**: Showing content based on state
6. **Component Composition**: Building complex UIs from simple components

## 🤝 Contributing

Feel free to:
- Add new features
- Improve the design
- Fix bugs
- Add more comments for learning

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Port already in use**: Try `npm run dev -- --port 3001`
2. **Dependencies not installed**: Run `npm install` again
3. **Build errors**: Check console for specific error messages

### Getting Help

If you encounter any issues:
1. Check the browser console for error messages
2. Ensure all dependencies are installed
3. Try clearing the browser cache
4. Restart the development server

---

**Happy Coding! 🎉**
