
const faker = require('faker');

module.exports = {
    "title": "Article",
    "status": "wip",
    "context": {
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "primaryNavModifiers": ["--plum"],
        "logoModifiers": ["--plum"],
        "mastheadTitle": "UX Design and Service Design are growing ever closer",
        "mastheadSub": "Process, Featured",
        "mastheadSecondary": true,
        "mastheadBreadcrumb": true,
        "mastheadModifier": "--arrows Masthead--chimney",
        "mastheadImage": true,

        /*Intro*/
        "textBlockModifier": "--author Lead Bar Bar--lightBlue",
        "textBlockProse": `
        <p>The agile manifesto was born out of a frustration with traditionally managed projects.
        But I don’t think it solved the problem. It actually created another one. I’ve seen teams and
        organisations go from waterfall, which reduces their ability to compete in the market and
        deliver value, to dysfunction and paralysis when implementing agile.</p>
        `,
        "authorImage": "@author.authorImage",
        "authorName": "@author.authorName",

        /*Footer*/
        "footerLinks": "@site-footer.footerLinks",
        "socialLinks": "@site-footer.socialLinks",
        "inputGroupLabel": "@site-footer.inputGroupLabel",
        "inputGroupSubmit": "@site-footer.inputGroupSubmit",
        "inputGroupID": "@site-footer.inputGroupID",
        "inputGroupPlaceholder": "@site-footer.inputGroupPlaceholder",
        "inputGroupMicrocopy": "@site-footer.inputGroupMicrocopy",
        "inputGroupModifiers": "@site-footer.inputGroupModifiers",
        "siteFooterSmall": "@site-footer.siteFooterSmall",

        "indexCardModifier": "--profile",
        "imageSrc": "/assets/img/team/james-g.jpg",
        "indexCardName": faker.name.firstName() + ' ' + faker.name.lastName(),
        "indexCardInfo": false,

        "pageLeadModifier": "--image",
        "pageLeadAlt": "Ideas",
        "pageLeadSrc": "/assets/img/blog-header.jpg",

        "blogContent": `

<p>‘Tone of voice’ is not just language. &#8216;Brand&#8217; is not just imagery. And that grey corporate, strategic language is always in terrible danger of leaking through into the final product. Binding these elements together to tell an evocative story is the ultimate challenge for any website.</p>
<p>To discover those alchemical reactions between visual language, brand language and strategic intent, we put a UXer, a designer and a content strategist in a room together for a day.</p>


<h2>A tiny lesson: The ripping exercise</h2>

<p>Here’s a step by step account&nbsp;of one of&nbsp;the activities we used during the day.</p>
<p><strong>1. Gather up a set of magazines, some of which you feel have affinity with your brand, some of which are total wild cards.</strong></p>
<p>We used National Geographic, Wired, New Scientist, Womankind, Monocle and Better Health.</p>
<p><strong>2. Establish a question that you’re hoping to answer with this exercise.</strong></p>
<p>Our question was &#8220;How do we show individuals solving problems?&#8221;.</p>
<p><strong>3. Allow your team to spend time ripping out anything and everything&nbsp;that sparks their imagination, from the profound to the downright silly.</strong></p>
<p>Bearing the question in mind, we made notes on the images with post-it notes.</p>
<p><strong>4. Ask the team to group the images according to relevance. Do it out loud.</strong></p>
<p>Everyone grouped their&nbsp;ripped up pieces into people and processes, with a grey area in between. We spoke about our groupings out loud.</p>
<p><strong>5. Harvest their language as you go.</strong></p>
<p>As we spoke about our choices, wild and wonderful language emerged -&nbsp;almost by accident. This language serves as an authentic starting point for the tone of voice.</p>

<figure>
    <img src="http://clearleft.com.s3.amazonaws.com/uploads/blog/creating-a-tone-of-voice/Slack-for-iOS-Upload-1.jpg?mtime=20160811105135" alt="">
</figure>


<h2>Show, don’t tell</h2>

<p>In almost every project I’ve worked on as a content strategist, there has been a strong temptation to &#8216;tell’ the brand strategy on the website (or whatever&nbsp;service it is). Your strategy is fundamental, yes,&nbsp;but utterly&nbsp;lacking in ability to engage an audience. You need to paint the picture. Evoke the concept. Bring it alive. This is something magazines do brilliantly.</p>

<figure>
    <img src="http://clearleft.com.s3.amazonaws.com/uploads/blog/creating-a-tone-of-voice/Slack-for-iOS-Upload-2.jpg?mtime=20160811105128" alt="">
</figure>


<h2>Transposing reality onto the ideas</h2>

<p>It’s all very well to develop wonderful visuals, and to think of language that hits readers between the eyes.&nbsp;</p>
<p>But&nbsp;once you’ve done the wild creativity, you need to think of your resources, the reality of your story. What are the facts that you&nbsp;have you got to work with?</p>
<p>We began to transpose the real stories, with real people, and real problems onto the ripped up concepts we had gathered to see how they worked.</p>
<p>To keep the storytelling fresh&nbsp;we also&nbsp;asked each other these questions:</p>
<p>1. What do you really love about this?</p>
<p>2. What is the finest, most lovable detail?</p>


<h2>Outputs from the day</h2>

<p>By the end of the day we were exhausted, but we made a concerted effort to finish the day with some convergence.</p>
<p>We&nbsp;brought&nbsp;the results together so that we could use them in the next stages of the site design:</p>
<p>1. We&nbsp;discovered a set of <strong class="redactor-inline-converted">design and content principles</strong></p>
<p>2. We&nbsp;harvested a <strong class="redactor-inline-converted">healthy set of tone of voice&nbsp;phrases</strong> that form the starting point for tone of voice development</p>
<p>3. We had a set of <strong class="redactor-inline-converted">sketched out concepts</strong> which gave the designer something to play with</p>
<p>4. We had <strong>shared investment</strong> in several story elements that form ingredients for the website</p>


<h2>And you?</h2>

<p>Have you worked on your tone of voice? Have you got suggestions for activities? Or questions to ask?&nbsp;</p>
<p>If you’re interested in hearing more about the process, drop me a line: ellen@clearleft.com.</p>
`
    }
}
