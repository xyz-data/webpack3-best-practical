# CSS3


## background


https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin

https://css-tricks.com/almanac/properties/b/background-image/


## image


https://developer.mozilla.org/en-US/docs/Web/CSS/image

> border-image

https://developer.mozilla.org/en-US/docs/Web/CSS/border-image

> background-image

https://developer.mozilla.org/en-US/docs/Web/CSS/background-image






## gradient


https://developer.mozilla.org/en-US/docs/Web/CSS/gradient

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients

> linear-gradient 线性渐变

https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient

> radial-gradient 径向渐变

https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient




```css

[data-img="gear-png"] {
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    background: border-box #000 url("./imgs/gear_x64.png") border-box 100px 100px center no-repeat 64px 64px fixed;
    /* background: url("./imgs/gear_x64.png") #000 no-repeat 100px 100px, url("./imgs/gear_x64.svg") #000 no-repeat 100px 100px; */
    /* multi & group */
}


/*

shorthand:

background-clip: border-box/padding-box/content-box/text;
background-color,
background-image,
background-origin: border-box/padding-box/content-box;
background-position: top/bottom/left/right/center/(values|multi values);
background-repeat: no-repeat/repeat/repeat-x/repeat-y/space/round;
background-size: contain/cover/auto/(value|values);
background-attachment: fixed/scroll/local;


*/

```








