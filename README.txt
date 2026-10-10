# Aesthetic PHP Birthday Card

## Files
- `index.php` — birthday card and PHP personalization
- `style.css` — pastel aesthetic design and animations
- `script.js` — confetti, balloons, and music controls
- `music/` — put your birthday-song MP3 here

## Personalize it
Open `index.php` and change:
```php
$recipient = "Eunice";
$sender = "With love";
$birthdayMessage = "Your birthday message here.";
```

## Add music
Place a legally obtained/licensed MP3 named `birthday-song.mp3` in the `music` folder.
Browsers usually require a tap before music can play, so use **Play music** or the **Happy Birthday** button.

## Run locally with XAMPP
1. Copy the entire `birthday_card` folder into `C:\xampp\htdocs\`.
2. Start **Apache** in XAMPP.
3. Open `http://localhost/birthday_card/` in your browser.

## Share it online
PHP must run on a web host; opening the PHP file directly from your phone/computer will not execute it. Upload the folder to a PHP-enabled host, then share the resulting public URL. For music to work, upload the MP3 too. Do not upload copyrighted music unless you have permission to use it.
