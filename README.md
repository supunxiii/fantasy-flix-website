## Overview

This is a website made for all-things movies and TV series, developed as part of the 4COSC011C - Web Design & Development course. Fantasy Flix is a comprehensive platform providing users with information about the latest releases, interactive quizzes, an image gallery, and an online store for entertainment merchandise.

Designed and developed by Supun Wijesooriya, Shuaib Feroze, Kishoritha Suthagar, and Thashi Maleesha in April 2021.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript (ES5+)](https://img.shields.io/badge/JavaScript-ES5%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=000000)
![Font Awesome 4.7.0](https://img.shields.io/badge/Font%20Awesome-4.7.0-528DD7?style=flat-square&logo=fontawesome&logoColor=white)
![W3.CSS 4](https://img.shields.io/badge/W3.CSS-4-04AA6D?style=flat-square&logo=w3c&logoColor=white)
![CDN Resources](https://img.shields.io/badge/CDN-Resources-6C757D?style=flat-square&logo=cloudflare&logoColor=white)

## Features

The Fantasy Flix website offers the following features:

1. **Homepage**

   - Dynamic image carousel showcasing featured movies and TV series
   - Quick access to trending movies and popular TV series
   - Categorised content display with movies and TV series sections
   - Newsletter subscription functionality

2. **Movies Section**

   - Comprehensive collection of movie information
   - Movie posters and detailed descriptions
   - Latest releases including Fear Street trilogy, Luca, A Quiet Place 2, and more
   - Easy navigation and search functionality

3. **TV Series Section**

   - Curated list of popular TV series
   - Information about shows like Loki, The Witcher, Lucifer, Stranger Things, and more
   - Series descriptions and visual content

4. **Interactive Quiz**

   - Timed entertainment knowledge quiz (1 minute)
   - 10 questions covering movies and TV series
   - Real-time score calculation
   - Prize opportunity for high scorers (free movie tickets)
   - Dynamic feedback with color-coded answers

5. **Gallery**

   - Visual collection of entertainment content
   - Movie and TV series posters
   - High-quality images and artwork

6. **Buy Products Page**

   - E-commerce functionality for entertainment merchandise
   - Product browsing and selection
   - Shopping cart implementation
   - Interactive product catalog

7. **Contact Form**

   - User query submission
   - Form validation
   - Contact information collection

8. **Additional Features**
   - Social media integration (Facebook, Twitter, LinkedIn, Instagram)
   - Sitemap for easy navigation
   - Cookie policy and privacy information
   - Student details and page editor information
   - Responsive navigation bar with search functionality

## Technologies Used

- **HTML5**: Markup language for structuring web content
- **CSS3**: Styling language for visual presentation
  - External stylesheets (`ExternalStyleSheet.css`, `Quiz.css`, `BuyProductsCSS.css`, `Studentdetailsstylesheet.css`)
  - Inline and embedded styles for component-specific styling
- **JavaScript (ES5+)**: Client-side scripting for interactive features
  - Quiz functionality (`script.js` - 51KB)
  - Shopping cart functionality (`BuyProductsJS.js` - 12KB)
  - Image carousel and dynamic content loading
- **Font Awesome 4.7.0**: Icon library for social media and UI elements
- **W3.CSS 4**: CSS framework for responsive design components
- **CDN Resources**: External libraries loaded via CDN for optimal performance

## Project Specifications

- **Course**: 4COSC011C - Web Design & Development
- **Theme**: Entertainment (Movies & TV Series)
- **Implementation**: Desktop-only (not mobile responsive)
- **Compliance**: Adheres to JANET regulations regarding accessibility, legality, and acceptable use
- **Development Year**: 2021

## User Interfaces

### UIs

![Homepage Screenshot](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/fantasy-flix/fantasy-flix-ui-1.png)

### UIs

![Movies and TV Series Section](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/fantasy-flix/fantasy-flix-ui-2.png)

## Getting Started

To run the Fantasy Flix website locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/fantasy-flix-website.git
   ```

2. Navigate to the project directory:

   ```shell
   cd fantasy-flix-website
   ```

3. Open `main.html` in your web browser:

   ```shell
   open main.html
   ```

   Or simply double-click the `main.html` file in your file explorer.

4. Explore the various pages:
   - **Home**: `main.html`
   - **Gallery**: `Gallery.html`
   - **Quiz**: `Quiz.html`
   - **Shop**: `BuyProductsPage.html`
   - **Contact**: `QueryForm.html`

## Project Structure

```
fantasy-flix-website/
├── main.html                          # Homepage
├── Gallery.html                       # Image gallery page
├── Quiz.html                          # Interactive quiz page
├── BuyProductsPage.html              # E-commerce page
├── QueryForm.html                    # Contact form
├── QueryDetail.html                  # Query details page
├── Movies.html                       # Movies section
├── Tv-Series.html                    # TV series section
├── Sitemap.html                      # Site navigation map
├── PageEditor.html                   # Page editor information
├── PresentationPage.html             # Project presentation
├── studentdetails.html               # Student information
├── ExternalStyleSheet.css            # Main stylesheet
├── Quiz.css                          # Quiz page styles
├── BuyProductsCSS.css               # Shop page styles
├── Studentdetailsstylesheet.css     # Student details styles
├── script.js                         # Quiz functionality
├── BuyProductsJS.js                 # Shopping cart logic
├── Items/                           # Product images directory
├── images/                          # General images directory
└── *.jpg, *.png, *.jfif            # Media assets
```

## Contributors

This project was collaboratively developed in **April 2021** by:

- **Supun Wijesooriya** - Developer (developed Buy Products Page & Presentation Page)
- **Shuaib Feroze** - Developer
- **Kishoritha Suthagar** - Developer
- **Thashi Maleesha** - Developer

## Live Demo

The website is currently live at: [https://supunxiii.github.io/fantasy-flix-website/PresentationPage.html](https://supunxiii.github.io/fantasy-flix-website/PresentationPage.html)

## Contributing

Contributions to the Fantasy Flix website are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```shell
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```shell
   git commit -m "Add your commit message"
   ```

4. Push your changes to your forked repository:

   ```shell
   git push origin feature/your-feature-name
   ```

5. Open a pull request to the main repository, describing your changes and the purpose of the pull request.

## Important Notes

- This website is **not mobile responsive** and is optimised for desktop viewing only
- The website was developed as an academic project and follows educational standards
- All content is for demonstration and educational purposes

## Contact

For any inquiries or feedback, please contact the development team:

- **Supun Wijesooriya**: [GitHub Profile](https://github.com/supunxiii)
- **Project Repository**: [fantasy-flix-website](https://github.com/supunxiii/fantasy-flix-website)

---

_Designed and developed in April 2021_
