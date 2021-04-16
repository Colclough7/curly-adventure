const text = [
    `I'm baby dIY copper mug tilde, readymade lumbersexual wolf lomo microdosing next level roof party hot chicken cardigan kinfolk raw denim. Asymmetrical four loko pickled, artisan meggings shabby chic williamsburg. Pug try-hard synth offal gochujang quinoa intelligentsia helvetica. Green juice readymade portland synth wayfarers gastropub whatever put a bird on it hashtag cronut direct trade chillwave raw denim.`,
    `Art party photo booth aesthetic, offal hexagon umami occupy adaptogen brunch. Authentic biodiesel vape mustache waistcoat skateboard echo park. Biodiesel crucifix iceland organic hashtag pop-up franzen meh pickled kombucha beard activated charcoal cornhole everyday carry small batch. Yr edison bulb enamel pin hexagon irony, subway tile unicorn fanny pack vinyl franzen glossier kickstarter hashtag chambray.`,
    `Mumblecore narwhal art party, ennui mixtape cardigan echo park gluten-free coloring book cliche flexitarian synth pok pok. Irony unicorn shabby chic deep v heirloom lomo echo park shoreditch four dollar toast mumblecore gentrify dreamcatcher shaman. Drinking vinegar hoodie cronut, plaid gluten-free neutra marfa retro live-edge poke shaman. 3 wolf moon helvetica cornhole poke, readymade keffiyeh pickled. Banh mi disrupt salvia lyft crucifix pug small batch air plant tofu asymmetrical mustache vegan. Austin fixie tilde chambray activated charcoal four dollar toast. Kitsch edison bulb leggings godard tousled, tilde heirloom.`,
    `8-bit franzen chillwave, scenester pork belly wolf schlitz snackwave retro taiyaki selvage ethical asymmetrical truffaut. Echo park semiotics forage succulents mustache 3 wolf moon single-origin coffee 8-bit meditation artisan. +1 street art health goth banjo, lyft distillery four loko. Fashion axe ethical mixtape butcher flannel tattooed palo santo man bun.`,
    `Mumblecore literally 3 wolf moon pop-up. Skateboard narwhal subway tile succulents fixie art party ethical next level disrupt williamsburg taiyaki artisan butcher. Shabby chic authentic cred farm-to-table, humblebrag man bun 8-bit pinterest mixtape PBR&B. Locavore irony raw denim drinking vinegar you probably haven't heard of them artisan ugh.`,
    `Man braid cred af blog everyday carry pour-over retro raclette hexagon kale chips selfies literally. Everyday carry 90's cold-pressed letterpress quinoa shoreditch tumeric small batch mixtape cray biodiesel wayfarers taxidermy squid blog. Fanny pack pork belly biodiesel lomo cray keytar. Literally before they sold out tumblr unicorn, ethical truffaut trust fund you probably haven't heard of them sartorial. Hammock green juice chia activated charcoal microdosing pinterest asymmetrical fingerstache, shabby chic pour-over swag.`,
    `Shoreditch succulents cloud bread, etsy vice scenester you probably haven't heard of them kogi. Ennui tumblr literally VHS pop-up. Brooklyn bicycle rights heirloom, wayfarers lo-fi sustainable taiyaki YOLO literally adaptogen. Lo-fi street art literally banjo. Post-ironic shaman taiyaki squid yr glossier vinyl iceland schlitz fanny pack helvetica. Roof party squid chicharrones kinfolk lumbersexual gluten-free vice tofu kogi.`,
    `Tote bag you probably haven't heard of them vexillologist fanny pack umami fam authentic. Narwhal tumeric woke swag. Blue bottle jianbing chartreuse narwhal poke williamsburg disrupt four dollar toast ugh semiotics umami intelligentsia. Small batch af next level, scenester hell of aesthetic DIY tattooed hoodie raw denim dreamcatcher williamsburg paleo plaid. Readymade mustache vinyl, blue bottle plaid fanny pack pinterest man bun.`,
    `Farm-to-table etsy vape normcore paleo, kombucha la croix PBR&B prism raw denim mustache waistcoat next level four dollar toast organic. Viral swag bitters fashion axe keytar. Jean shorts crucifix cray dreamcatcher narwhal +1 letterpress, tilde tote bag. Hot chicken flexitarian celiac single-origin coffee kale chips wayfarers.`
]
const form = document.querySelector('.lorem-form')
let amount = document.querySelector('#amount')
const result = document.querySelector('.lorem-text')

//EVENT LISTENERS
form.addEventListener('submit',e=>{
    e.preventDefault()
    const value = +amount.value
    const random = Math.floor(Math.random() * text.length)
    const tempText = text.slice(0,value)
    
    isNaN(value) || value <= 0 || value > 9
?result.innerHTML = `<p class='results'>${text[random]}</p>`
:result.innerHTML = tempText.map(item=>`<p class='results'>${item}</p>`).join('')

amount.value = ''
})
