<script>
  import Footnote from '../../components/Footnote.svelte'
  const title = 'Metaproject: Stack'
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}
  a.footnote {
    font-variant-position: super;
  }

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article>
  <section>
    <h2>Description</h2>
    <p>
      My programming background is overwhelmingly self-taught
        <a id="footnote-ref-1" title="link to footnote" class="footnote" href="footnote-1">1</a>
      which in practice means I have an annoyingly large collection of un/half started projects,
      books, online courses that, for the most part, I still really want to do.
    </p>
  </section>
  <section>
    <h2>The Idea</h2>
    <ol>
      <li>Stack all the projects up</li>
      <li>Take a project off the top and complete or discard it</li>
      <li>Repeat until empty</li>
    </ol>
  </section>
  <section>
    <h2>Challenges</h2>
    <p>The stack project design is... idealistic. The assumption that these projects are correctly
      could easily be my downfall. I do not have a perfect log describing the original order so I
      will be constructing the stack in a an approachable order (to the best of my knowledge). If
      the project is at risk due to ordering I will reorder and document the change. I have ideas
      for rules regarding reordering but I would rather move forward with the assumption that it
      will not be necessary.
    </p>
  </section>
  <section class="footnotes">
    <h2>Footnotes</h2>
    <p>
      1. Okay okay, I took Programming I in Java and Statistical Science with Matlab in college,
      did a full-stack boot camp immersive with Ruby on Rails and a 10 week on-job training in
      Spring Boot and Angular. College taught fundamentals (loops, ifs, variables etc) and was a
      high-value jumpstart. The web-immersive and training helped cover a big 'hole' in my college
      education which was libraries/frameworks/build tools/deployment. The other big advantage the
      training provided was hour after hour of practice on languages and frameworks in demand. I
      would not have had the discipline to learn Angular/Spring/Rails on my own.
      <sup><a title="return to text" href="#footnote-ref-1">&#8617;</a></sup>
    </p>
  </section>
</article>
