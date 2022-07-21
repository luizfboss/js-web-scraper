const PORT = 8000 // variable for test

// Importing packages
const axios = require('axios') 
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express') 
// End of Importing packages

const app = express() // Initiating the application

const url = 'https://g1.globo.com/' // URL where all the data is going to be scraped


// Run this line before any other line of code. This is a test to check wether the application is working properly
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))


axios(url)
.then(response => {
  const html = response.data // getting raw HTML (it is all going to be a mess :) )
  const $ = cheerio.load(html) // load HTML
  const articles = [] // where all titles and url's are going to be stored


  $('._evt', html).each(function(){ // '_evt' = class name of the div where the title and url is located
    const title = $(this).text() // get title 
    const url = $(this).find('a').attr('href') // get url from the "href" attribute inside an anchor
    articles.push({
      title, 
      url
    }) // adding both variables to an array
  }) // the title's class name
  console.log(articles) // showing the output
})

console.log('Hello,world!')