# Fresh Finds - Grocery Landing Page

A modern, responsive grocery e-commerce landing page built with HTML, CSS, and JavaScript.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Dynamic Product Display**: 16 grocery items with add-to-cart functionality
- **Shopping Cart**: Visual cart counter with item management
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Form Validation**: Newsletter subscription and contact forms with validation
- **Smooth Animations**: Hover effects and smooth scrolling navigation
- **Accessibility**: ARIA-friendly design with reduced motion support

## 📱 Pages

- **Home** (`index.html`) - Landing page with hero section and product grid
- **About** (`about.html`) - Company story and values
- **Contact** (`contact.html`) - Contact form and business information
- **FAQ** (`faq.html`) - Frequently asked questions
- **Checkout** (`checkout.html`) - Order summary and payment form
- **Privacy Policy** (`privacy.html`) - Privacy policy page
- **Terms & Conditions** (`terms.html`) - Terms of service

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Unsplash API** - High-quality product images

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fresh-finds.git
   cd fresh-finds
   ```

2. **Open in your browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for development

3. **For development with a local server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## 📁 Project Structure

```
fresh-finds/
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── faq.html           # FAQ page
├── checkout.html      # Checkout page
├── privacy.html       # Privacy policy
├── terms.html         # Terms & conditions
├── style.css          # Main stylesheet
├── script.js          # Product and cart functionality
├── navigation.js      # Navigation and form handling
├── README.md          # Project documentation
└── .gitignore         # Git ignore file
```

## 🎨 Design Features

- **Color Scheme**: Professional blue (#007bff) theme
- **Typography**: Clean, readable sans-serif fonts
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Animations**: Smooth transitions and hover effects
- **Images**: High-quality Unsplash images for products

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Customization

### Adding Products
Edit the `products` array in `script.js`:
```javascript
const products = [
    {
        id: 1,
        name: 'Product Name',
        price: 9.99,
        image: 'image-url.jpg'
    }
    // Add more products...
];
```

### Styling
Modify `style.css` to customize colors, fonts, and layout:
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #0056b3;
    --text-color: #333;
    --background-color: #f9f9f9;
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: hello@freshfinds.com
- **Phone**: (555) 123-4567
- **Address**: 123 Fresh Street, Grocery District, Food City, FC 12345

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com/)
- Icons from [Feather Icons](https://feathericons.com/)
- Fonts from system fonts

---

**Fresh Finds** - Your trusted partner for fresh, quality groceries. 🥬🍎🥩 