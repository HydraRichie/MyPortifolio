import React from 'react'
import "./About.css"
function About() {
  return (
    <div>
     

<h2 className='about'>About me</h2>
<div class="row">
  <div class="column">
    <div class="card">
    
      <div class="container">
        <h2>Base Info:</h2>
        <p class="title">Iam an Web Developer && Blockchain Enthusiast</p>
        <p>I Enjoy the Entire Development Process </p>
        <p>My love Towards Blockchain Technology is undefined</p>
       
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">

      <div class="container">
        <h2>Education Details:</h2>
        <p class="title">I have Completed my primary from Bright Future English Medium school</p>
        <p>I have Compelted my Highschool From sandeepan English Medium school</p>

        <p>I have Completed My pre university Education From Bhandarkars pu college</p>

      </div>
    </div>
  </div>


</div>
<h1 className='skil'>Skills:</h1>
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Web Development</th>
      <th scope="col">Blockchain Development</th>
      <th scope="col">Others</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Html</td>
      <td>Bitcoin</td>
      <td>C Programming</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Css</td>
      <td>Ethereum</td>
      <td>C++ Programming</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Javascript</td>
      <td>Solidity</td>
      <td>Python Programming</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>MongoDB</td>
      <td>Web3.js</td>
      <td>Data Structures</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Express</td>
      <td>NFT</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>React</td>
      <td>Hardhat</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Node.js</td>
      <td>Truffle</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Bootstrap</td>
      <td>IPFS</td>
      <td></td>
    </tr>
   
  </tbody>
</table>
    </div>

  )
}

export default About
