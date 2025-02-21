# **README - Homework 1 Information Visualization**

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Demo Video](#demo-video)
4. [Technologies Used](#technologies-used)
5. [Project Structure](#project-structure)
6. [Installation & Setup](#installation--setup)
7. [Usage Guide](#usage-guide)
8. [Dependencies](#dependencies)
9. [Contributors](#contributors)

---

## **Project Overview**
This project is an interactive data visualization system developed as part of Homework 1. It allows users to dynamically explore a movie dataset using different visualization techniques. The application features a scatterplot visualization that updates in real-time based on user selections, along with a brushing feature for data point selection. The selected data points are displayed in a tabular format with full support for scrolling.

## **Purpose & Goals**
The objective of this project is to provide a user-friendly interface for exploring and analyzing movie data. The goal is to help users identify patterns and insights within the dataset through interactive visualizations.

## **Features**
- **Control Panel**: Users can map dataset attributes (X, Y, Color, Opacity, Size) using dropdowns with specific constraints.
- **Scatterplot Visualization**: Built using `D3.js`, dynamically updates based on user selections.
- **Brushing Interaction**: Users can select multiple data points using a rectangular selection tool to highlight multiple data points.
- **Table View**: Displays selected points dynamically and supports scrolling for larger datasets.
- **Responsive Design**: Ensures seamless experience across different screen sizes.
- **Smooth Transitions:** When users change attributes, the scatterplot updates with smooth animations for size and axis transitions.

---

## **Demo Video**
[🎥 Click here to watch the demo](https://drive.google.com/file/d/1wP96gk5dk55B2sBrRkuPMpkiqA_bMyK0/view?usp=sharing)

---

## **Technologies Used**
- **React.js**: UI framework
- **D3.js**: Data visualization library
- **React-Select**: Dropdown component for user selections
- **Material-UI (`@mui/x-data-grid`)**: Table implementation
- **CSS**: Styling for layout and responsiveness

## **Project Structure**
```
├── src
│   ├── components
│   │   ├── ControlPanel.js  # Dropdown selection interface
│   │   ├── Scatterplot.js   # D3.js scatterplot with brushing
│   │   ├── DataTable.js     # Table for displaying brushed data
│   ├── data
│   │   ├── movie.json       # Movie dataset
│   ├── App.js               # Main application logic
│   ├── App.css              # Styling
│   ├── index.js             # React entry point
├── package.json             # Dependencies and scripts
```


## **Installation & Setup**
### **Prerequisites**
Ensure you have **Node.js (v14 or higher)** and **npm** installed.

### **Steps to Run the Project**
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/jbhanuchai/information-visualization.git
   cd information-visualization
   ```
2. **Install Dependencies**:
   ```sh
   npm install
   ```
   - Alternatively, to ensure all dependencies match those in `package.json`:
   ```sh
   npm ci
   ```
3. **Start the Development Server**:
   ```sh
   npm start
   ```
4. **Open in Browser**:
   - Visit `http://localhost:3000/` to view the app.

## **Usage Guide**
1. **Select attributes** from the Control Panel.
2. **Scatterplot updates** dynamically based on your selections.
3. **Use mouse brushing** to select points on the scatterplot.
4. **To clear selection** Click outside the scatterplot or reselect attributes.
5. **Selected points appear** in the Table View.
6. **Scroll in the table** to view all selected rows if they exceed the visible area.

## **Contributors**
- **Bhanu Chaitanya Jasti** - Developer
---