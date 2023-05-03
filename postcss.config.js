module.exports = {
   content: [
      "./node_modules/flowbite/**/*.js"
      ],
   plugins: {
      tailwindcss: { config: "./tailwindcss-config.js" },
      autoprefixer: {},
      
   },
   plugins: [
      require('flowbite/plugin')
  ],
  
};
