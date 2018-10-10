import React, { Component } from 'react';

// Main CSS
import '../../index.css';


// Components
import Header from './components/Header'
import Prism from './components/Prism'
import ThreeColor from './components/ThreeColor'
import SixColor from './components/SixColor'

// Images

import VisibleSpectrum from './assets/images/visible_spectrum2.png'
import Marenfeld from './assets/images/marenfeld.jpeg'
import BayerFilter from './assets/images/bayer_filter.png'
import RGB from './assets/images/rgb.png'
import RGBColor from './assets/images/color_rgb_strip.jpg'
import FiltersUGRIZY from './assets/images/filters-ugrizy.jpg'
import GBandComp from './assets/images/hh_vis_ir_comp.jpg'
import BrownDwarf from './assets/images/brown_dwarf.jpeg'

class App extends Component {
  render() {
    return (
    <div>	
     <Header />
		<div className="container">	
			<br></br>
      		<h3>Introduction</h3>
      		<p>Nearly everything astronomers know about the stars and galaxies in the Universe comes from the light we receive from these objects. Fortunately, that light contains a wealth of information. In this investigation, you will learn how astronomers use light and filters to learn about things such as distant galaxies, dusty nebulae and types of stars.  </p>

      		<h2>Essential Questions</h2>
	        <ul>
		        <li>How do filters pass light of specific energies and wavelengths,</li>
		        <li>What types of filters are used in astronomical cameras?</li>
		        <li>What can astronomers can learn by using these filters? </li>
		        <li>How are color astronomy images made?</li>
	     	</ul>

	        <h2>Background</h2>
	        <b>Types of Light</b>
		    <p>
		    There are many types of electromagnetic radiation: radio waves, infrared, visible, ultraviolet (UV), X-rays, etc. Astronomers use all of these types of light to study objects in our universe. Each type of light has specific ranges of wavelengths and energies. The type of light we can see with our eyes is called “visible” light. Visible light consists of all of the colors of the rainbow, as shown below.  You may have learned the acronym “Roy G. Biv” to remember the seven colors of the rainbow. The different colors correspond to different wavelengths and energies.  Red light is the lowest energy of light we can see and has the longest wavelengths; violet is the highest energy of light we can see, and has the shortest wavelengths.
		     </p>

      		<img className="fig" src={VisibleSpectrum} />
      		<p className="credit">Figure1  (static): Source: <a href="http://www.daltonism.org.uk/2018/01/rainbows/">http://www.daltonism.org.uk/2018/01/rainbows/</a></p>

      		<b>How Filters Work</b>
		    <p>Digital cameras cannot see color. They can only measure the amount of light that falls on the photosensor. To build a color image, we use filters when we take pictures of an object.  A filter is designed to allow only certain wavelengths (or colors) of light to pass through it.  All other wavelengths (or colors) are blocked.  The image below on the left (Figure 2) shows an example of how an orange filter allows some wavelengths of light to pass through while blocking others.
		        There are filters like this inside a digital camera (e.g., the one on a smartphone.)  Tiny red, green, and blue filters are placed over the pixels of the photosensor as shown in the picture below (Figure 2) on the right.  When you take a picture, your camera measures light simultaneously through all three kinds of filters.
		    </p>

			<div className="img-container inline">
			    <img className="fig two-image" src={Marenfeld} />
			    <img className="fig two-image" src={BayerFilter} />
			</div>

      		<p className="credit">Figure 2:  Sources: P. Marenfeld (NOAO/AURA/NSF) and
        	<a href="https://en.wikipedia.org/wiki/Bayer_filter">https://en.wikipedia.org/wiki/Bayer_filter</a></p>


        	<p>To better understand how filters work, try out the filter tool below:</p>

        	<Prism />
    	
	        <ol>
	        	<li>What does the prism do to the white light?</li>

	        	<p>Choose the red filter.  </p>
	        	<li>What does the filter do to the red light?  What does it do to the other colors of light?</li>

	        	<p>Now choose the blue filter.  </p>
	        	<li> What does the filter do to the blue light?  What does it do to the other colors of light?</li>
	        </ol>

        	<b>Constructing an Image with Three Filters</b>
        	<p>Looking at a rainbow you might think that we need to use (at least) seven filters to produce a color image.  But you actually only need three.  This is because our eyes contain sensors called “cones” that are designed to detect red, green, and blue light.  Much like the electronics in a camera, the cones in our eyes only see in black and white, but our brain knows how to turn the relative amounts of red, green, and blue light measured by the cones into a color image.  This is known as the “three-color process.”  Remarkably, our eyes can see over a million different colors with this method.  Now let’s explore how the three-color process works.</p>
        	<p>Below is a color image made from red, green and blue filters.</p>
        	<p>Each of the three images of filtered light start out as black and white images.</p>
       		<p>A color (red, green, or blue) is assigned to each image, and then the three images are combined.</p>

        	<img className="fig wide" src={RGB} />
        	<p className="credit">Figure 3: Comparison of the light passed by filters.</p>

	        <ol start="4">
	        	<li>In which of the three filters is the red shirt the brightest?</li>
	        	<li>In which of the three filters is the green shirt the brightest?</li>
	        	<li>How does the red shirt appear in the green filter? Why is that?</li>
	        </ol>

        	<p>Here are the same images with the color assigned to each, resulting in a full color image:</p>

        	<img className="fig wide" src={RGBColor} />
        	<p className="credit">Figure 4: Assignment of colors to filters.</p>

        	<p>This full color image appears in the color-mixing tool below. Try turning off colors one-by-one, and watch how the image changes. Next, adjust the sliders to change the color intensity of the image.</p>
        	<p>Try to recreate the color image above.</p>


        	<ThreeColor />


        	<b>Constructing an Astronomical Image with Six Filters</b>
          	<p>People often wonder if astronomical images show an object “as it really looks”; that is, as it would appear to their eyes if they were close to it.  Note that telescopes not only magnify distant objects, they also collect so much more light than your eyes that they reveal objects too faint for you to see.  And often, telescope images are made from wavelengths of light that your eyes can’t see. These images therefore show us not what you would see, but what our telescopes can see. In a sense, telescopes give us superhuman vision.  Indeed that’s the reason we build them!</p>
          	<p>The LSST camera contains six filters, identified by the letters u, g, r, i, z and y.  Three of these filters (g, r, and i) pass the same wavelengths (or colors) of visible light that our eyes can see.  The u filter passes ultraviolet light. Two of the filters allow only infrared light.  These are kinds of light that our eyes cannot see. Ultraviolet literally means “above violet” and is too high in energy for our eyes to see. Infrared means “below red” and is too low in energy for our eyes to see.  Although our eyes cannot see these kinds of light, the LSST camera is able to detect them.  </p>

          	<img className="fig wide" src={FiltersUGRIZY} />
          	<p className="credit">Figure 5: Comparison of visible color wavelength ranges with LSST filters  (nm = nanometers)</p>


          	<p>Astronomers use these extra filters because each type of light reveals different information about the universe, so observing over all these wavelengths helps us to build a more complete story. For example, the u (ultraviolet) filter is especially useful in identifying quasars or tracing the gas released from comets, because both of these objects shine brightly at ultraviolet wavelengths.</p>
          	<p>Compare the images below to see (where a comet is giving off gas/which objects in this image are quasars.)</p>
          	<p>The filters i, z and y pass increasingly lower energies (longer wavelengths) of light to pass through them.  One of the uses of these filters is to see through dust, which scatters shorter wavelengths of light but passes the longer wavelengths of light. </p>
          	<ol start="7">
            	<li>Compare the details in the two images below. What differences do you notice?</li>
          	</ol>

          	<img className="fig" src={GBandComp} /> 
          	<p className="credit">Figure 6: Comparison of the Horsehead Nebula through a  visible light filter (g band) with an infrared filter (y band).</p>

          	<p>Some galaxies are so distant that their light is stretched out to longer wavelengths. They are therefore only visible when observed through infrared filters.
          	</p>
          	<p>Identify a distant galaxy in the images below.</p>
          	<p>Brown dwarf stars are very faint at visible wavelengths but appear bright  when imaged through the infrared filters. Locate a brown dwarf star in the images below.</p>

          	<img className="fig" src={BrownDwarf} />
          	<p className="credit">Figure 8: Comparison of stars through a  visible light filter (R) with an infrared filter IR).</p>

          	<p>We can use images taken through the six LSST filters to create a color image in a way similar to the three-color process.  Let’s explore how this works.</p>
          	<p>This tool works in the same way as the (three-filter) color mixing tool, but it has the ability to use six colors. We will build an image of M33, a spiral galaxy. </p>
          	<ul>
            	<li>Click on the u filter. You should see a greyscale image of M33. </li>
            	<li>Adjust the slider for the best combination of contrast and brightness.</li>
            	<li>Now click on the g filter, and adjust its slider.</li>
            	<li>Repeat this for the remaining four filters.</li>
          	</ul>

          <br></br>  
        	<SixColor />

            <b>Chromatic ordering and Representative color images</b>
          	<p>Before assigning colors to each filter, it’s important to understand that there is a deliberate method for how astronomers build a color image.  It is called <i>chromatic ordering</i>. Each color represents a specific type of wavelength information. The shortest wavelength of light used is assigned to the shortest wavelength of color, and so on. These images are not simply pretty pictures- they communicate information about specific aspects of the structure in the image. Professional astronomers know how to interpret the colors to gain scientific knowledge.  Images constructed by using chromatic ordering are known as <i>representative color images</i>. In <i>false color images</i>, the assignment of colors is not ordered according to wavelength.
          	</p>
          	<p>Since the u filter passes light with the shortest wavelengths, we will select violet as its color because violet has the shortest wavelengths of visible light. The g filter passes light with slightly longer wavelengths than u, so we will select blue, since it is the next shortest wavelength color. Continue on with these selections:
          	</p>

          	<ul>
            	<li>r = green</li>
            	<li>i = yellow</li>
            	<li>z = orange</li>
            	<li>y = red</li>
          	</ul>
          	<p>You will now see full color image of M33, made by combining the light from these six filters.</p>
          	<p>The blue areas show the locations of hot young stars. Pink and red clouds are active star-forming regions, while the yellow areas show where older stars reside.
          	</p>

          	<h3>Analysis </h3>
          	<p>Now it’s your turn to create a representative color image and use it to answer a question. Think about these points before you begin:</p>

          	<ul>
            	<li>What type of object would you like to investigate?</li>
            	<li>What question do you hope to answer by creating a color representation of this object?</li>
            	<li>What filters will be most appropriate for conducting your investigation? Why? <i>(Note: You do not need to use all six but you must use at least two filters OR one filter in at least two images.)</i></li>
          	</ul>
          	<p>Directions for using the Six Color Mixing Tool</p>

          	<ul>
            	<li>Select a type of object from the drop-down list.</li>
            	<li>Next, select a folder from the object list.</li>
            	<li>Open the folder and select the files that you wish to use.</li>
            	<li>For each of the filters you use, start by selecting each filter and adjusting the slider to enhance the image.</li>
            	<li>Assign colors to each filter.  Remember to use chromatic ordering.</li>
            	<li>If needed, you can open up additional windows to compare different filters or different objects in the same filter by clicking on the “add a window” sign in the upper right.</li>
            	<li>You may also use the drawing tool to mark a place on the image where you have identified an object, or where you wish to make a comment.</li>
            	<li>Save your completed image(s). </li>
          	</ul>


          	<h3>Discuss and Report</h3>
          	<h3>Summary</h3>
          	<ol start="8">
            	<li> Write a summary that includes:
	              	<ul>
	                	<li>the type of object(s) you selected to explore, </li>
	                	<li>the question that you wanted to answer,</li>
	                	<li>the filters and images you selected,  </li>
	                	<li>the procedure you followed to analyze the image(s), and  </li>
	                	<li>what you learned through this process (What was the answer to the question you posed?)</li>
	              	</ul>
            	</li>
          	</ol>
      </div>
    </div>
    );
  }
}

export default App;
