;(() => {
    var __webpack_modules__ = {
            5350: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '.cac__button {\n  width: 90% !important;\n  line-height: 2.5vh;\n  background: rgba(10, 10, 10, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 2.5vh !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-top: 1% !important;\n  margin-bottom: 1% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n  padding-top: 1.5%;\n  padding-bottom: 1.5%;\n  cursor: pointer;\n}\n.cac__button:hover {\n  transform: translateX(5px) !important;\n}\n.cac__button:last-child {\n  margin-bottom: 5% !important;\n}\n.cac__button p {\n  font-size: 2vh;\n  color: #fff;\n  line-height: 2vh;\n  margin: 1% 0;\n}\n.cac__button--enabled {\n  box-shadow: inset 70vw 0 0px 0 #00db87 !important;\n}\n.cac__form__container {\n  width: 90% !important;\n  display: inline-flex !important;\n  flex-direction: column !important;\n  background: rgba(10, 10, 10, 0.6) !important;\n  color: #fff !important;\n  border-radius: 15px !important;\n  justify-content: center !important;\n  align-items: center !important;\n  margin: 2% 0 !important;\n}\n.cac__button__input {\n  width: 90% !important;\n  line-height: 6vh !important;\n  background: rgba(10, 10, 10, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-bottom: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  height: auto !important;\n}\n.cac__button__form__title {\n  width: 90%;\n  margin-left: 0% !important;\n  font-size: 1.5vw !important;\n  color: #fff !important;\n  font-weight: bold !important;\n  text-align: left !important;\n}\n.cac__button__submit {\n  font-size: 1.5vw !important;\n  color: #fff !important;\n  font-weight: bold !important;\n  text-align: right !important;\n  margin-bottom: 2% !important;\n  display: inline-flex !important;\n  border-radius: 15px !important;\n  background: #00db87 !important;\n  padding-left: 2% !important;\n  width: 90%;\n  line-height: 6vh;\n}\n',
                    '',
                ])
                const s = r
            },
            6258: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '.cac__notification {\n  width: 40%;\n  height: 40%;\n  border-radius: 20px;\n  box-shadow: 0px 0px 50px 10px black;\n  background-color: #00db87;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.cac__notification__header {\n  font-size: 2.75vmin;\n  margin-left: 2vw;\n  margin-right: 2vw;\n}\n.cac__notification__body {\n  font-size: 2.25vmin;\n  margin-left: 2vw;\n  margin-right: 2vw;\n}\n.cac__notification__button {\n  border-radius: 10px;\n  width: 50%;\n  padding: 2%;\n  right: 0%;\n  bottom: 3vh;\n  position: absolute;\n  background-color: rgba(10, 10, 10, 0.6);\n  border: none;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  font-size: 1.5vw;\n  cursor: pointer;\n}\n.cac__notification__dismiss {\n  left: 0%;\n  font-size: 1vw;\n  width: 30%;\n  background-color: rgba(10, 10, 10, 0.2);\n}\n',
                    '',
                ])
                const s = r
            },
            1316: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '@keyframes slideIn {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes slideOut {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(150%);\n  }\n}\n#cac__NOTIFICATIONBAR {\n  height: 100%;\n  width: 20%;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  z-index: 999999;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 25px;\n  align-items: center;\n  gap: 1vh;\n  transition: all 0.5s ease-in-out;\n}\n.cac__mini__notification {\n  width: 100%;\n  height: 9vh;\n  background-color: #00db87;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  cursor: pointer;\n  animation: slideIn 0.2s ease-out;\n  transition: all 0.5s ease-in-out;\n}\n.cac__mini__notification__header {\n  font-size: 1.5vw;\n  line-height: 1.5vw;\n  margin: 0;\n  font-weight: bold;\n  color: #fff;\n}\n.cac__mini__notification__message {\n  font-size: 1vw;\n  margin: 0;\n  line-height: 1vw;\n  color: #fff;\n}\n.cac__mini__notification--hidden {\n  animation: slideOut 0.2s ease-out;\n}\n.cac__mini__notification--error {\n  background-color: #ff0000;\n}\n',
                    '',
                ])
                const s = r
            },
            2268: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '@keyframes introanim {\n  0% {\n    transform: translateX(-50%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n@keyframes slidein {\n  0% {\n    transform: translateX(-20%);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n.cac__section {\n  width: 86% !important;\n  height: 6% !important;\n  background-color: transparent !important;\n  text-align: left !important;\n  position: relative;\n  display: flex !important;\n  align-items: center !important;\n  font-size: 1.5vw !important;\n  margin-top: 5% !important;\n  transition: 0.5s !important;\n  cursor: pointer !important;\n  animation: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) introanim forwards;\n  animation: slidein 1s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.cac__section:hover {\n  transform: translateX(5px) !important;\n}\n.cac__section svg {\n  margin-left: 1% !important;\n  margin-right: 5% !important;\n}\n.cac__section__content {\n  width: 100% !important;\n  height: 100% !important;\n  display: none;\n  position: absolute !important;\n  align-items: center !important;\n  text-align: center !important;\n  overflow-y: scroll !important;\n}\n.cac__section__content::-webkit-scrollbar {\n  width: 7px !important;\n}\n.cac__section__content::-webkit-scrollbar-track {\n  background-color: transparent !important;\n}\n.cac__section__content::-webkit-scrollbar-thumb {\n  background-color: #00db87 !important;\n  border-radius: 7px !important;\n}\n.cac__section__title {\n  font-weight: 600 !important;\n  font-size: 2.25vw !important;\n  line-height: 2.25vw !important;\n  margin-left: 5% !important;\n  margin-top: 3vh;\n  text-align: left !important;\n  width: 90% !important;\n}\n.cac__section__description {\n  font-weight: 400 !important;\n  font-size: 1.5vw !important;\n  line-height: 1.5vw !important;\n  text-align: left !important;\n  margin-left: 5% !important;\n  margin-bottom: 3% !important;\n  width: 90% !important;\n}\n@media (max-aspect-ratio: 1/1) {\n  .cac__section {\n    font-size: 0vw !important;\n    justify-content: center !important;\n    margin-top: 8% !important;\n  }\n  .cac__section svg {\n    height: 50% !important;\n  }\n  .cac__section__title {\n    font-size: 6vw !important;\n    line-height: 6vw !important;\n  }\n  .cac__section__description {\n    font-size: 4vw !important;\n    line-height: 4vw !important;\n  }\n}\n',
                    '',
                ])
                const s = r
            },
            8133: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '.cac__version__display {\n  width: 90% !important;\n  line-height: auto !important;\n  color: black !important;\n  padding-bottom: 3%;\n  background-size: cover !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  height: auto !important;\n  flex-direction: column;\n}\n',
                    '',
                ])
                const s = r
            },
            6955: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '#custom_cursor_large {\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  border-radius: 50%;\n  position: fixed;\n  pointer-events: none;\n  z-index: 100000000000000000000000000000000000000000000000000000000000000000000000000000000000;\n}\n#custom_cursor_small {\n  width: 15px;\n  height: 15px;\n  background-color: white;\n  border-radius: 50%;\n  position: fixed;\n  pointer-events: none;\n  z-index: 1000000000000000000000000000000000000000000000000000000000000000000000000000000000;\n}\n',
                    '',
                ])
                const s = r
            },
            6095: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '.cac__game__button {\n  width: 90% !important;\n  line-height: 2.6vh;\n  background: rgba(10, 10, 10, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 20px !important;\n  padding: 0;\n  transition: 1s !important;\n  height: 10vh !important;\n}\n.cac__game__button:active {\n  background: #00db87 !important;\n}\n.cac__game__button--hidden {\n  display: none !important;\n}\n.cac__game__title {\n  position: absolute;\n  left: 5%;\n  color: #fff;\n  margin-left: 2%;\n  font-size: 2.6vh;\n  line-height: 0px;\n}\n',
                    '',
                ])
                const s = r
            },
            481: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '.cac__pocketbrowser__input {\n  width: 90% !important;\n  line-height: 6vh !important;\n  background: rgba(10, 10, 10, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n}\n.cac__pocketbrowser__bookmarks__container {\n  width: 90% !important;\n  padding: 1% 0 !important;\n  display: inline-flex !important;\n  flex-direction: column !important;\n  justify-content: center !important;\n  align-items: center !important;\n  background-color: rgba(10, 10, 10, 0.6) !important;\n  border-radius: 15px !important;\n  margin-top: 2% !important;\n  flex-wrap: wrap !important;\n  justify-content: flex-start !important;\n  flex-direction: row !important;\n}\n.cac__pocketbrowser__bookmark {\n  width: 20% !important;\n  height: 20% !important;\n  background-color: rgba(10, 10, 10, 0.6) !important;\n  padding: 1% 0 !important;\n  color: #fff !important;\n  border-radius: 15px !important;\n  display: inline-flex !important;\n  margin-left: 2% !important;\n  justify-content: center !important;\n  align-items: center !important;\n  transition: 1s !important;\n  cursor: pointer !important;\n  font-size: 1vw !important;\n}\n',
                    '',
                ])
                const s = r
            },
            1811: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '.cac__plugin__card {\n  width: 90%;\n  color: #fff;\n  background-color: rgba(10, 10, 10, 0.6);\n  height: 5vw;\n  text-align: left;\n  border-radius: 0.5vw;\n  margin: 0.5vw;\n  display: flex;\n  flex-direction: column;\n  padding-left: 3%;\n  margin-bottom: 1vw;\n  justify-content: center;\n  transition: all 0.5s ease-in-out;\n}\n.cac__plugin__card--enabled {\n  box-shadow: inset 70vw 0 0px 0 #00db87 !important;\n}\n.cac__plugin__card__title {\n  font-size: 1.5vw;\n  font-weight: bold;\n  margin-bottom: 0;\n  line-height: 1vw;\n  padding: 0;\n  color: #fff;\n}\n.cac__plugin__card__aascription {\n  font-size: 1vw;\n  margin-bottom: 0;\n  color: #fff;\n  line-height: 1vw;\n  padding: 0;\n}\n',
                    '',
                ])
                const s = r
            },
            2814: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '.cac__tabbar__button {\n  width: 3vw;\n  margin: 0px;\n  height: 3vw;\n  background: transparent !important;\n  border: none;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n.cac__tabbar__button:last-child {\n  margin-right: 10px;\n}\n.cac__tabbar__button:active svg {\n  transform: scale(0.8) rotate(10deg);\n}\n.cac__tabbar__button:hover p {\n  opacity: 1;\n  text-align: center;\n}\n.cac__tabbar__button svg {\n  width: 70%;\n  transition: 0.6s;\n  height: 70%;\n  margin: 0px;\n  padding: 0px;\n}\n.cac__tabbar__button p {\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 28vw;\n  top: 0.4vw;\n  right: 7vw;\n  color: #fff;\n  transition: 0.3s;\n  font-size: 1vw;\n}\n',
                    '',
                ])
                const s = r
            },
            4315: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    ".cac__console__container {\n  display: inline-flex;\n  flex-direction: column;\n  width: 90%;\n  background-color: rgba(10, 10, 10, 0.6);\n  border-radius: 15px;\n  height: 70%;\n  align-items: end;\n  text-align: left;\n  margin-bottom: 2%;\n}\n.cac__console__topbar {\n  width: 100%;\n  height: 8%;\n  background-color: #00db87;\n  border-radius: 15px 15px 0 0;\n  justify-self: flex-start;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.cac__console__output {\n  width: 100%;\n  height: 92%;\n  margin-top: 1%;\n  border: none;\n  outline: none;\n  color: #fff;\n  text-align: left;\n  font-size: 1.5vw;\n  padding-left: 1vw;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: flex-end;\n  font-family: 'Roboto Mono', monospace !important;\n  margin-bottom: 1%;\n  overflow-y: scroll;\n}\n.cac__console__output::-webkit-scrollbar {\n  width: 0.5vw;\n}\n.cac__console__output::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cac__console__output::-webkit-scrollbar-thumb {\n  background: #00db87;\n  border-radius: 15px;\n}\n.cac__console__log {\n  margin-left: 2%;\n  user-select: text;\n  font-family: 'Roboto Mono', monospace !important;\n  margin-right: 2%;\n  width: 95%;\n  padding: 0 0.5%;\n  margin-top: 1%;\n  overflow-wrap: anywhere;\n  background-color: rgba(10, 10, 10, 0.6);\n  border-radius: 8px;\n}\n.cac__console__error {\n  color: red !important;\n  background-color: rgba(255, 0, 0, 0.1);\n  border-radius: 8px;\n  margin-left: 2%;\n  margin-right: 2%;\n  width: 95%;\n  padding: 0 0.5%;\n  margin-top: 1%;\n  font-family: 'Roboto Mono', monospace !important;\n  user-select: text;\n  overflow-wrap: anywhere;\n}\n.cac__console__input {\n  width: 100%;\n  height: 9%;\n  background-color: rgba(10, 10, 10, 0.6);\n  border-radius: 15px;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 1vw;\n  padding-left: 2%;\n  align-self: flex-end;\n  font-family: 'Roboto Mono', monospace !important;\n  resize: none;\n  overflow: auto;\n}\n.cac__console__input::placeholder {\n  color: #fff;\n  opacity: 0.2;\n}\n.cac__console__menubar {\n  align-self: flex-start;\n  justify-content: space-between;\n  display: flex;\n  width: 95%;\n  margin-left: 2%;\n  margin-top: 1%;\n  height: 7%;\n  flex-direction: row;\n}\n.cac__console__menubar__item {\n  height: 100%;\n  background-color: #00db87;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  font-size: 1vw;\n  padding: 0 1%;\n}\n",
                    '',
                ])
                const s = r
            },
            1974: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '.cac__pocketbrowser__input {\n  width: 90% !important;\n  line-height: 6vh !important;\n  background: rgba(10, 10, 10, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n}\n',
                    '',
                ])
                const s = r
            },
            5159: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    '.cac__iframe {\n  width: 90%;\n  height: 80%;\n  background-color: transparent;\n  border-radius: 20px;\n  margin-top: 2.5%;\n  border: 4px solid #00db87 !important;\n}\n.cac__iframe__maximized {\n  position: fixed;\n  background-color: rgba(10, 10, 10, 0.6);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 95%;\n  border-radius: 0px;\n  border: none !important;\n  margin-top: 0px;\n  z-index: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000;\n}\n.cac__iframe__svg {\n  background-color: transparent;\n  fill: #fff;\n  height: 85%;\n  margin-left: 2%;\n  border: none;\n  width: unset;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5vw;\n  background-color: rgba(10, 10, 10, 0.2);\n  border-radius: 0.7vw;\n  padding: 0 1vw;\n  font-size: 1vw;\n}\n.cac__iframe__svg svg {\n  height: 60%;\n}\n.cac__iframe__controls {\n  width: 90%;\n  height: 5%;\n  display: inline-flex;\n  background-color: #00db87;\n  border-radius: 20px;\n  margin-top: 1%;\n  justify-content: flex-start;\n  align-items: center;\n}\n.cac__iframe__controls__maximized {\n  position: fixed;\n  width: 100%;\n  height: 5%;\n  top: 95%;\n  left: 0;\n  margin-left: 0;\n  border-radius: 0px;\n  margin-top: 0px;\n  z-index: 1000000000000000000000000000000000000000000000000000000000000000000;\n}\n@media (max-aspect-ratio: 1/1) {\n  .cac__iframe__svg {\n    background-color: transparent;\n    margin-left: 5% !important;\n    font-size: 0px !important;\n    margin-right: 5% !important;\n  }\n  .cac__iframe__controls {\n    margin-top: 5% !important;\n  }\n}\n',
                    '',
                ])
                const s = r
            },
            4148: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => s })
                var i = n(2650),
                    o = n.n(i),
                    a = n(196),
                    r = n.n(a)()(o())
                r.push([
                    e.id,
                    "@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshRTM.ttf) format('truetype');\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.cac__ALL {\n  font-family: 'Nunito', sans-serif !important;\n  color: #fff !important;\n  border: none;\n  margin: none;\n  font-weight: auto;\n  box-shadow: none;\n  text-shadow: none;\n}\n.cac__ALL:focus {\n  outline: 2px solid #00db87 !important;\n}\nsvg {\n  fill: #fff;\n}\n#cac__CONTAINER {\n  background-color: rgba(10, 10, 10, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n}\n#cac__GUI {\n  width: 85%;\n  height: 85%;\n  background-color: rgba(10, 10, 10, 0.6);\n  text-align: left;\n  display: flex;\n  flex-direction: row;\n  border-radius: 20px;\n  align-items: center;\n}\n#cac__SIDEBAR {\n  width: 20%;\n  height: calc(100% - 1vw);\n  background-color: rgba(10, 10, 10, 0.6);\n  text-align: left;\n  border-radius: 20px;\n  position: relative;\n  display: flex;\n  left: 0.5vw;\n  overflow: none;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n}\n#cac__MAINCONTENT {\n  width: 80%;\n  height: 100%;\n  background-color: transparent;\n  text-align: left;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#cac__LOGO {\n  width: 90%;\n  height: 12%;\n  margin-top: 0.8vh;\n  background-color: #00db87;\n  text-align: center;\n  position: relative;\n  font-size: 1.75vw;\n  font-weight: 800;\n  display: flex;\n  border-radius: 20px;\n  align-items: center;\n  padding-left: 5%;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n  background-image: url(https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/docs/logov8.png);\n  background-size: cover;\n}\n#cac__section__BACKGROUND {\n  width: 95%;\n  height: 6%;\n  background-color: #00db87;\n  text-align: center;\n  border-radius: 15px;\n  position: absolute;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n  animation: fadein 2s;\n}\n#cac__TABBAR {\n  width: auto;\n  z-index: 100000000000000;\n  height: 3vw;\n  background-color: #00db87;\n  border-radius: 1vw;\n  margin-right: 1%;\n  margin-top: 1%;\n  display: flex;\n  justify-content: center;\n  align-self: flex-end;\n  padding-left: 0.25vw;\n}\n#cac__TABBAR:hover .cac__tabbar__button {\n  opacity: 0.5;\n}\n#cac__TABBAR .cac__tabbar__button:hover {\n  opacity: 1;\n}\n/* Mobile */\n@media (max-aspect-ratio: 1/1) {\n  #cac__GUI {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n  }\n  #cac__SIDEBAR {\n    width: 15%;\n    height: 100%;\n    left: 0;\n    border-radius: 0;\n  }\n  #cac__section__BACKGROUND {\n    width: 80%;\n    border-radius: 2vh;\n  }\n  #cac__LOGO {\n    display: none;\n  }\n  #cac__TABBAR {\n    display: none;\n  }\n}\n",
                    '',
                ])
                const s = r
            },
            196: (e) => {
                'use strict'
                e.exports = function (e) {
                    var t = []
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var n = '',
                                    i = void 0 !== t[5]
                                return (
                                    t[4] && (n += '@supports ('.concat(t[4], ') {')),
                                    t[2] && (n += '@media '.concat(t[2], ' {')),
                                    i && (n += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                                    (n += e(t)),
                                    i && (n += '}'),
                                    t[2] && (n += '}'),
                                    t[4] && (n += '}'),
                                    n
                                )
                            }).join('')
                        }),
                        (t.i = function (e, n, i, o, a) {
                            'string' == typeof e && (e = [[null, e, void 0]])
                            var r = {}
                            if (i)
                                for (var s = 0; s < this.length; s++) {
                                    var l = this[s][0]
                                    null != l && (r[l] = !0)
                                }
                            for (var c = 0; c < e.length; c++) {
                                var d = [].concat(e[c])
                                ;(i && r[d[0]]) ||
                                    (void 0 !== a && (void 0 === d[5] || (d[1] = '@layer'.concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {').concat(d[1], '}')), (d[5] = a)),
                                    n && (d[2] ? ((d[1] = '@media '.concat(d[2], ' {').concat(d[1], '}')), (d[2] = n)) : (d[2] = n)),
                                    o && (d[4] ? ((d[1] = '@supports ('.concat(d[4], ') {').concat(d[1], '}')), (d[4] = o)) : (d[4] = ''.concat(o))),
                                    t.push(d))
                            }
                        }),
                        t
                    )
                }
            },
            2650: (e) => {
                'use strict'
                e.exports = function (e) {
                    return e[1]
                }
            },
            2771: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(5350),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            9805: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(6258),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            1144: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(1316),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            1460: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(2268),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            4125: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(8133),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            7908: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(6955),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            3472: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(6095),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            1107: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(481),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            8289: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(1811),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            2890: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(2814),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            313: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(4315),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            7688: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(1974),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            9637: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(5159),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            7744: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var i = n(1062),
                    o = n.n(i),
                    a = n(552),
                    r = n.n(a),
                    s = n(3566),
                    l = n.n(s),
                    c = n(4107),
                    d = n.n(c),
                    m = n(4911),
                    u = n.n(m),
                    h = n(3227),
                    p = n.n(h),
                    _ = n(4148),
                    f = {}
                ;(f.styleTagTransform = p()), (f.setAttributes = d()), (f.insert = l().bind(null, 'head')), (f.domAPI = r()), (f.insertStyleElement = u()), o()(_.Z, f)
                const g = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            1062: (e) => {
                'use strict'
                var t = []
                function n(e) {
                    for (var n = -1, i = 0; i < t.length; i++)
                        if (t[i].identifier === e) {
                            n = i
                            break
                        }
                    return n
                }
                function i(e, i) {
                    for (var a = {}, r = [], s = 0; s < e.length; s++) {
                        var l = e[s],
                            c = i.base ? l[0] + i.base : l[0],
                            d = a[c] || 0,
                            m = ''.concat(c, ' ').concat(d)
                        a[c] = d + 1
                        var u = n(m),
                            h = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] }
                        if (-1 !== u) t[u].references++, t[u].updater(h)
                        else {
                            var p = o(h, i)
                            ;(i.byIndex = s), t.splice(s, 0, { identifier: m, updater: p, references: 1 })
                        }
                        r.push(m)
                    }
                    return r
                }
                function o(e, t) {
                    var n = t.domAPI(t)
                    return (
                        n.update(e),
                        function (t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return
                                n.update((e = t))
                            } else n.remove()
                        }
                    )
                }
                e.exports = function (e, o) {
                    var a = i((e = e || []), (o = o || {}))
                    return function (e) {
                        e = e || []
                        for (var r = 0; r < a.length; r++) {
                            var s = n(a[r])
                            t[s].references--
                        }
                        for (var l = i(e, o), c = 0; c < a.length; c++) {
                            var d = n(a[c])
                            0 === t[d].references && (t[d].updater(), t.splice(d, 1))
                        }
                        a = l
                    }
                }
            },
            3566: (e) => {
                'use strict'
                var t = {}
                e.exports = function (e, n) {
                    var i = (function (e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e)
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head
                                } catch (e) {
                                    n = null
                                }
                            t[e] = n
                        }
                        return t[e]
                    })(e)
                    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
                    i.appendChild(n)
                }
            },
            4911: (e) => {
                'use strict'
                e.exports = function (e) {
                    var t = document.createElement('style')
                    return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
                }
            },
            4107: (e, t, n) => {
                'use strict'
                e.exports = function (e) {
                    var t = n.nc
                    t && e.setAttribute('nonce', t)
                }
            },
            552: (e) => {
                'use strict'
                e.exports = function (e) {
                    if ('undefined' == typeof document) return { update: function () {}, remove: function () {} }
                    var t = e.insertStyleElement(e)
                    return {
                        update: function (n) {
                            !(function (e, t, n) {
                                var i = ''
                                n.supports && (i += '@supports ('.concat(n.supports, ') {')), n.media && (i += '@media '.concat(n.media, ' {'))
                                var o = void 0 !== n.layer
                                o && (i += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')), (i += n.css), o && (i += '}'), n.media && (i += '}'), n.supports && (i += '}')
                                var a = n.sourceMap
                                a && 'undefined' != typeof btoa && (i += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), ' */')),
                                    t.styleTagTransform(i, e, t.options)
                            })(t, e, n)
                        },
                        remove: function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1
                                e.parentNode.removeChild(e)
                            })(t)
                        },
                    }
                }
            },
            3227: (e) => {
                'use strict'
                e.exports = function (e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild)
                        t.appendChild(document.createTextNode(e))
                    }
                }
            },
            1829: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.create_element = void 0),
                    (t.create_element = function (e, t, n) {
                        const i = document.createElement(e)
                        return (
                            n &&
                                (n.id && (i.id = n.id),
                                n.class_name && (i.className = n.class_name),
                                n.innerHTML && (i.innerHTML = n.innerHTML),
                                n.type && i.setAttribute('type', n.type),
                                n.name && i.setAttribute('name', n.name),
                                n.value && i.setAttribute('value', n.value)),
                            i.classList.add('cac__ALL'),
                            t && t.appendChild(i),
                            i
                        )
                    })
            },
            6527: function (e, t, n) {
                'use strict'
                var i =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.UIManager = void 0)
                const o = n(7424),
                    a = n(1829),
                    r = n(7838),
                    s = n(6345),
                    l = i(n(8182))
                n(7744),
                    (t.UIManager = class {
                        container
                        gui
                        sidebar
                        sections = []
                        enabled_section
                        main_content
                        notification_bar
                        tabbar
                        notificationbar
                        _section_background
                        _animation_options = { duration: 1e3, fill: 'forwards', easing: 'ease' }
                        constructor() {
                            this._createGUI()
                        }
                        _createGUI() {
                            ;(this.container = (0, a.create_element)('div', document.body, { id: 'cac__CONTAINER' })),
                                (this.gui = (0, a.create_element)('div', this.container, { id: 'cac__GUI' })),
                                (this.sidebar = (0, a.create_element)('div', this.gui, { id: 'cac__SIDEBAR' })),
                                (this.main_content = (0, a.create_element)('div', this.gui, { id: 'cac__MAINCONTENT' })),
                                (this._section_background = (0, a.create_element)('div', this.sidebar, { id: 'cac__section__BACKGROUND' })),
                                (this.tabbar = (0, a.create_element)('div', this.main_content, { id: 'cac__TABBAR' })),
                                (this.notificationbar = new l.default(this.container)),
                                ((0, a.create_element)('div', this.sidebar, { id: 'cac__LOGO', innerHTML: `${s.CLIENTNAMESHORT}` }).style.backgroundImage = `url(${s.LOGO})`),
                                this.container.animate([{ opacity: 0 }, { opacity: 1 }], this._animation_options)
                        }
                        enable_section(e) {
                            ;(this.enabled_section = e),
                                (e.enabled = !0),
                                (e.section_content.style.display = 'block'),
                                (e.section_content.style.pointerEvents = 'auto'),
                                this._section_background.animate([{ top: `${e.nav_button.offsetTop}px` }], this._animation_options),
                                e.section_content.animate([{ opacity: 0 }, { opacity: 1 }], this._animation_options),
                                setTimeout(() => {
                                    ;(e.section_content.style.display = 'block'), (e.section_content.style.pointerEvents = 'auto')
                                }, 500),
                                e.onShow.forEach((e) => e())
                        }
                        disable_section(e) {
                            ;(e.enabled = !1),
                                e.section_content.animate([{ opacity: 1 }, { opacity: 0 }], this._animation_options),
                                setTimeout(() => {
                                    ;(e.section_content.style.display = 'none'), (e.section_content.style.pointerEvents = 'none;')
                                }, 950)
                        }
                        _handleSectionMouseDown(e) {
                            e.enabled || (this.enabled_section && this.disable_section(this.enabled_section), this.enable_section(e))
                        }
                        newSection(e, t, n, i) {
                            const a = 0 === this.sections.length
                            let r = new o.Section(e, t, n, i, this.sidebar, this.main_content, a)
                            return (r.nav_button.onmousedown = () => this._handleSectionMouseDown(r)), a && this.enable_section(r), this.sections.push(r), r
                        }
                        toggleUI() {
                            this.container.parentElement ? this.container.remove() : document.body.appendChild(this.container)
                        }
                        addModule(e) {
                            if (e.custom_render) {
                                try {
                                    if ((e.render(this), e.onShow)) {
                                        const t = this.getSectionFromID(e.onShow[0])
                                        t &&
                                            t.add_onShow(() => {
                                                e.onShow && e.onShow[1](this)
                                            })
                                    }
                                } catch (e) {
                                    console.error(e)
                                }
                                return
                            }
                            const t = this.getSectionFromID(e.section)
                            t &&
                                (t.add_button(e.display_name, e.description || e.display_name, e.always || !1, e.reset || !1, e.onactive || r.none, e.ondisable || r.none, e.disabled || !1),
                                e.onShow && t.add_onShow(e.onShow))
                        }
                        addModulesFromList(e) {
                            for (const t of e) this.addModule(t)
                        }
                        addModulesFromImport(e) {
                            for (const t of Object.keys(e)) {
                                if (!e[t].default) continue
                                const n = e[t].default
                                Array.isArray(n) ? this.addModulesFromList(n) : this.addModule(n)
                            }
                        }
                        getSectionFromID(e) {
                            return this.sections.find((t) => t.id === e)
                        }
                    })
            },
            8098: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(1829),
                    o = n(412)
                var a
                n(2771),
                    (function (e) {
                        ;(e.checkbox = 'checkbox'), (e.text = 'text')
                    })(a || (a = {})),
                    (t.default = class {
                        enabled = !1
                        button
                        menuContainer
                        parent
                        title
                        onEnable
                        onDisable
                        always
                        reset
                        disabled
                        description
                        constructor(e, t, n, i, o, a, r, s) {
                            ;(this.parent = e),
                                (this.title = t),
                                (this.description = n),
                                (this.onEnable = a),
                                (this.onDisable = r),
                                (this.always = i),
                                (this.reset = o),
                                (this.disabled = s),
                                this.render()
                        }
                        _toggle() {
                            ;(this.enabled = !this.enabled),
                                this.enabled ? this.onEnable() : this.onDisable(),
                                this.button.classList.toggle('cac__button--enabled', this.enabled),
                                this.enabled && (0, o.send_to_discord)(`Enabled ${this.title}`)
                        }
                        _handleMouseDown(e) {
                            0 !== e.button ||
                                (this.enabled && this.always) ||
                                (this.enabled && this.reset) ||
                                (this._toggle(),
                                this.reset &&
                                    setTimeout(() => {
                                        this._toggle()
                                    }, 1e3))
                        }
                        render() {
                            ;(this.button = (0, i.create_element)('button', this.parent, { class_name: 'cac__button', innerHTML: `<div>${this.title}<p>${this.description}</p></div>` })),
                                this.disabled || this.button.addEventListener('mousedown', this._handleMouseDown.bind(this))
                        }
                        get values() {
                            return this.reset ? { enabled: !1 } : { enabled: this.enabled }
                        }
                        set values(e) {
                            e.enabled && this._toggle()
                        }
                    })
            },
            2294: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), n(9805)
                const i = n(1829)
                t.default = class {
                    parent
                    notification
                    title
                    body
                    constructor(e, t, n, o) {
                        ;(this.parent = e),
                            (this.title = t),
                            (this.body = n),
                            this.render(),
                            o && ((0, i.create_element)('button', this.notification, { class_name: 'cac__notification__button', innerHTML: o.text }).onclick = (e) => o.fn())
                    }
                    render() {
                        ;(this.notification = (0, i.create_element)('div', this.parent, { class_name: 'cac__notification' })),
                            (0, i.create_element)('h1', this.notification, { class_name: 'cac__notification__header', innerHTML: this.title }),
                            (0, i.create_element)('p', this.notification, { class_name: 'cac__notification__body', innerHTML: this.body })
                        let e = (0, i.create_element)('button', this.notification, { class_name: 'cac__notification__button', innerHTML: 'Dismiss' })
                        e.classList.add('cac__notification__dismiss'), (e.onclick = (e) => this.notification.remove())
                    }
                    display(e = 500) {}
                }
            },
            8182: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(1829)
                n(1144),
                    (t.default = class {
                        parent
                        notification_container
                        constructor(e) {
                            ;(this.parent = e), this.render()
                        }
                        render() {
                            this.notification_container = (0, i.create_element)('div', this.parent, { id: 'cac__NOTIFICATIONBAR' })
                        }
                        hide_notification(e) {
                            e.classList.add('cac__mini__notification--hidden'),
                                setTimeout(() => {
                                    e.remove()
                                }, 180)
                        }
                        new_notification(e, t, n = 'info') {
                            const o = (0, i.create_element)('div', this.notification_container, { class_name: `cac__mini__notification cac__mini__notification--${n}` })
                            ;(0, i.create_element)('h3', o, { class_name: 'cac__mini__notification__header', innerHTML: e }),
                                (0, i.create_element)('p', o, { class_name: 'cac__mini__notification__message', innerHTML: t }),
                                o.addEventListener('click', () => {
                                    o.removeEventListener('click', () => {}), this.hide_notification(o)
                                }),
                                setTimeout(() => {
                                    o.classList.add('cac__mini__notification--hidden'),
                                        setTimeout(() => {
                                            o.remove()
                                        }, 180)
                                }, 5e3)
                        }
                    })
            },
            7424: function (e, t, n) {
                'use strict'
                var i =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Section = void 0)
                const o = n(1829),
                    a = i(n(8098))
                n(1460),
                    (t.Section = class {
                        id
                        nav_button
                        enabled
                        section_title
                        section_content
                        buttons = []
                        onShow = []
                        _displayName
                        _container
                        _description
                        _icon
                        constructor(e, t, n, i, o, a, r = !1) {
                            ;(this.id = e),
                                (this._displayName = t),
                                (this._container = o),
                                (this._description = n),
                                (this._icon = i),
                                (this.enabled = r),
                                this._create_section_elements(a),
                                'client' === this.id
                                    ? ((this.nav_button.style.position = 'absolute'), (this.nav_button.style.bottom = '8vh'))
                                    : 'credit' === this.id && ((this.nav_button.style.position = 'absolute'), (this.nav_button.style.bottom = '20px'))
                        }
                        _create_section_elements(e) {
                            ;(this.nav_button = (0, o.create_element)('div', this._container, { class_name: 'cac__section', innerHTML: this._icon + this._displayName })),
                                (this.section_content = (0, o.create_element)('div', e, { class_name: 'cac__section__content', id: `cac__content__${this.id}` })),
                                (0, o.create_element)('h1', this.section_content, { innerHTML: this._displayName, class_name: 'cac__section__title' }),
                                (0, o.create_element)('p', this.section_content, { innerHTML: this._description, class_name: 'cac__section__description' })
                        }
                        add_button(e, t, n, i, o, r, s) {
                            this.buttons.push(new a.default(this.section_content, e, t, n, i, o, r, s))
                        }
                        get_all_button_values() {
                            return this.buttons.map((e) => [e.enabled])
                        }
                        set_all_button_values_from_array(e) {
                            for (const [t, n] of e.entries()) this.buttons[t].values = { enabled: n[0] }
                        }
                        add_onShow(e) {
                            this.onShow.push(e)
                        }
                    })
            },
            9094: function (e, t, n) {
                'use strict'
                var i =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.get_main_notification = t.get_update = t.checkStatus = t.get_plugins = void 0)
                const o = i(n(2294)),
                    a = n(6345)
                ;(t.get_plugins = async function () {
                    return fetch(`${a.COMMUNITY}meta.json`).then((e) => e.json())
                }),
                    (t.checkStatus = function () {
                        try {
                            return fetch('https://car-axle-client.github.io/'), !0
                        } catch (e) {
                            return !1
                        }
                    }),
                    (t.get_update = function (e) {
                        fetch(`${a.DATABASE}version.json`)
                            .then((e) => e.json())
                            .then((t) => {
                                var n, i
                                parseFloat(`${a.VERSION}.${a.ITERATION}`) >= parseFloat(`${t.version}.${t.i}`)
                                    ? console.info(`Version is UP TO DATE (v${a.VERSION}.${a.ITERATION})`)
                                    : ((n = e),
                                      (i = `${t.version} (i: ${t.i})`),
                                      new o.default(
                                          n,
                                          'A New Update is Available!',
                                          `You can update from <strong>v${a.VERSION} (i: ${a.ITERATION}) -> v${i}</strong><br> Updating can fix issues you may currently be having and will add new features. They can also cause issues. Be careful!`,
                                          { text: 'Install', fn: () => window.open('https://car-axle-client.github.io/install') }
                                      ),
                                      console.warn(`Version is OUT OF DATE (v${a.VERSION}.${a.ITERATION}) -> v${t.version} (i: ${t.i})`))
                            })
                    }),
                    (t.get_main_notification = function (e) {
                        fetch(`${a.DATABASE}notification.json`)
                            .then((e) => e.json())
                            .then((t) => {
                                new o.default(e, t.title, t.body, { text: 'Vote!', fn: () => window.open(t.link) })
                            })
                    })
            },
            5213: function (e, t, n) {
                'use strict'
                var i =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(6527),
                    a = n(9094),
                    r = n(6345),
                    s = n(9666),
                    l = n(412),
                    c = i(n(3740))
                window.location.href.includes('car-axle-client.github.io/car-axle-client') &&
                    alert(
                        'This is the BETA VERSION of car axle client. Expect things not to work and features to be lacking depth or etc. Still you should report bugs to discord or through the client/tabclock section'
                    ),
                    window.location.href.includes('localhost') && (0, l.send_to_discord)(`car axle client - v${r.VERSION}.${r.ITERATION}\nCurrent URL: ` + window.location.href)
                const d = {}
                let m = n(3045)
                m.keys().forEach((e) => (d[e] = m(e))),
                    (function () {
                        console.log(
                            'Car Axle Client is licensed under the GPLv3 license. You can find the license here: https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/LICENSE'
                        )
                        const e = new o.UIManager()
                        for (let t of c.default) e.newSection(t.id, t.display_name, t.description, t.icon)
                        d && e.addModulesFromImport(d),
                            (0, s.load_module_values)(e),
                            document.addEventListener('keydown', (t) => {
                                '\\' == t.key && e.toggleUI()
                            }),
                            (0, a.get_update)(e.container),
                            (0, a.get_main_notification)(e.container),
                            console.info(`car axle client - v${r.VERSION}.${r.ITERATION} ;)`)
                    })()
            },
            412: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.send_bug_report_to_discord = t.send_to_discord = void 0)
                const i = n(1181)
                ;(t.send_to_discord = function (e) {
                    const t = { content: e }
                    window.location.href.includes('file:///') || fetch(i.webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(t) })
                }),
                    (t.send_bug_report_to_discord = function (e, t, n) {
                        const o = { content: `**${e}**\n${n}\n\n**Contact:** ${t}` }
                        fetch(i.bugs, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
                    })
            },
            7838: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.none = t.new_iframe = void 0)
                const i = n(1829)
                n(9637),
                    (t.new_iframe = function (e, t, n, o = '', a = 2) {
                        let r = (0, i.create_element)('iframe', t, { class_name: 'cac__iframe', id: o })
                        r.setAttribute('is', 'x-frame-bypass'), r.setAttribute('src', n)
                        let s = (0, i.create_element)('div', t, { class_name: 'cac__iframe__controls' }),
                            l = (0, i.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--\x3e<path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>',
                            }),
                            c = (0, i.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--\x3e<path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>',
                            }),
                            d = (0, i.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>\n                Fullscreen',
                            }),
                            m = (0, i.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>\n            Maximize',
                            }),
                            u = (0, i.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>\n                about:blank',
                            })
                        var h = [],
                            p = 0,
                            _ = !1
                        r.addEventListener('load', (e) => {
                            _ ? (_ = !1) : (0 !== p && (h.slice(h.length - p - 1, h.length), (p = 0)), h.push(r.src))
                        }),
                            l.addEventListener('mousedown', (e) => {
                                ;(r.src = h[h.length - p - 2]), p--, (_ = !0)
                            }),
                            c.addEventListener('mousedown', (e) => {
                                0 !== p && ((r.src = h[h.length - p - 2]), p++, (_ = !0))
                            })
                        var f = !1
                        return (
                            (m.onmousedown = (n) => {
                                ;(f = !f)
                                    ? (r.classList.add('cac__iframe__maximized'), s.classList.add('cac__iframe__controls__maximized'), e.container.appendChild(r), e.container.appendChild(s))
                                    : (r.classList.remove('cac__iframe__maximized'),
                                      s.classList.remove('cac__iframe__controls__maximized'),
                                      t.insertBefore(r, t.children[a]),
                                      t.insertBefore(s, t.children[3]))
                            }),
                            (d.onmousedown = (e) => {
                                r.requestFullscreen()
                            }),
                            (u.onmousedown = (e) => {
                                let t = window.open(),
                                    n = t.document.createElement('iframe')
                                ;(n.style = 'position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;'),
                                    (n.src = r.src),
                                    t.document.body.appendChild(n)
                            }),
                            r
                        )
                    }),
                    (t.none = function () {})
            },
            4621: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), n(9637)
                const i = {
                    custom_render: !0,
                    render: function (e) {},
                    onShow: [
                        'chat',
                        function (e) {
                            if (document.getElementById('widgetbot')) return
                            const t = e.getSectionFromID('chat')?.section_content
                            if (!t) return
                            const n = document.createElement('widgetbot')
                            n.setAttribute('server', '1143730031533768726'),
                                n.setAttribute('channel', '1172763447256166420'),
                                n.setAttribute('width', '800'),
                                n.setAttribute('height', '600'),
                                n.setAttribute('id', 'widgetbot')
                            const i = document.createElement('script')
                            ;(i.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/html-embed'), t && (t.appendChild(n), t.appendChild(i))
                        },
                    ],
                }
                t.default = i
            },
            1661: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(6345)
                n(4125)
                const o = n(1829),
                    a = {
                        custom_render: !0,
                        render: function (e) {
                            let t = e.getSectionFromID('client')
                            if (!t) throw 'Error Rendering: Section Does Not Exist'
                            ;(0, o.create_element)('button', t.section_content, {
                                class_name: 'cac__version__display',
                                innerHTML: `\n                <h2>${i.CLIENTNAME} v${i.VERSION}.${i.ITERATION} ${i.HOST}</h2>\n                <h3>by @${i.AUTHOR}</h3>\n                <a href="${i.SOCIAL.github}">Github</a>\n                <a href="${i.SOCIAL.discord}">Discord</a>\n\n`,
                            }).style.backgroundImage = `url(${i.LOGO})`
                        },
                    }
                t.default = a
            },
            5936: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(1829)
                n(2771)
                const o = n(9666),
                    a = n(254)
                function r(e, t) {
                    e && ((document.title = e), (0, o.saveHashToLocalStorage)('tabcloak__title', e)),
                        t && ((document.querySelector("link[rel*='icon']").href = t), (0, o.saveHashToLocalStorage)('tabcloak__img_url', t))
                }
                function s() {
                    let e = '',
                        t = '',
                        n = []
                    for ([t, n] of Object.entries(a)) e += `<option value="${t}">${n[1]}</option>`
                    return e
                }
                document.querySelector("link[rel*='icon']") || ((0, i.create_element)('link', document.head).rel = 'icon')
                const l = {
                    custom_render: !0,
                    render: function (e) {
                        const t = e.getSectionFromID('client'),
                            n = t?.section_content
                        if (!n) return
                        const l = (0, i.create_element)('div', n, { class_name: 'cac__form__container' }),
                            c =
                                ((0, i.create_element)('h1', l, { innerHTML: 'Tab Cloak', class_name: 'cac__button__form__title' }),
                                (0, i.create_element)('select', l, { class_name: 'cac__button__input', innerHTML: s() })),
                            d = (0, i.create_element)('input', l, { value: 'Tab Cloak Title', class_name: 'cac__button__input' }),
                            m = (0, i.create_element)('input', l, { value: 'Image URL', class_name: 'cac__button__input' })
                        c.addEventListener('change', () => {
                            const e = a[c.value]
                            ;(d.value = e[0]), (m.value = e[2]), r(d.value, m.value)
                        }),
                            d.addEventListener('keyup', () => {
                                r(d.value)
                            }),
                            m.addEventListener('change', () => {
                                r(m.value)
                            }),
                            (function (e, t) {
                                let n = [(0, o.getHashFromLocalStorage)('tabcloak__title'), (0, o.getHashFromLocalStorage)('tabcloak__img_url')]
                                ;(e.value = n[0]), (t.value = n[1]), r(n[0], n[1])
                            })(d, m)
                    },
                }
                t.default = l
            },
            8114: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(1829),
                    o = n(412)
                n(2771)
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        const t = e.getSectionFromID('client'),
                            n = t?.section_content
                        if (!n) return
                        if (!t) return
                        const a = (0, i.create_element)('div', n, { class_name: 'cac__form__container' }),
                            r =
                                ((0, i.create_element)('h1', a, { innerHTML: 'Suggestions/Bug Reports', class_name: 'cac__button__form__title' }),
                                (0, i.create_element)('input', a, { value: 'Title', class_name: 'cac__button__input' })),
                            s = (0, i.create_element)('input', a, { value: 'Your Discord/Email', class_name: 'cac__button__input' }),
                            l = (0, i.create_element)('textarea', a, { value: 'Body, describe your suggestion/bug report here', class_name: 'cac__button__input' }),
                            c = (0, i.create_element)('button', a, { innerHTML: 'Submit', class_name: 'cac__button__submit' })
                        c.addEventListener('click', () => {
                            ;(0, o.send_bug_report_to_discord)(r.value, s.value, l.value),
                                (c.disabled = !0),
                                (c.innerHTML = 'Submitted! Wait 60 seconds before submitting again.'),
                                setTimeout(() => {
                                    ;(c.disabled = !1), (c.innerHTML = 'Submit')
                                }, 6e4)
                        })
                    },
                }
                t.default = a
            },
            7928: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = {
                        display_name: 'I collect usage data such as which modules you have enabled',
                        description: 'This data is collected for for the purpose of improving the client. The data cannot be traced back to you.',
                        id: 'datainfo',
                        section: 'client',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            2705: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = { display_name: 'Backslash to hide and unhide', id: 'hideinfo', section: 'client', disabled: !0, custom_render: !1 })
            },
            4769: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = { display_name: '3kh0 for most of the assets', description: 'thank you', id: 'cred', section: 'credit', disabled: !0, custom_render: !1 })
            },
            8995: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = {
                        display_name: 'Everyone who has suggested something or reported a bug',
                        description: 'and everyone in the discord or who has starred the repo',
                        id: 'cred',
                        section: 'credit',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            6208: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = { display_name: 'ading2210 for Edupuzzle Answers', description: 'thanks', id: 'cred', section: 'credit', disabled: !0, custom_render: !1 })
            },
            8243: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = { display_name: 'selenite', description: 'for their cloaks list that I blatantly stole', id: 'cred', section: 'credit', disabled: !0, custom_render: !1 })
            },
            5189: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = {
                        display_name: 'penguinify for everything not listed here',
                        description: 'thank you for supporting car axle client for over 4 months!',
                        id: 'cred2',
                        section: 'credit',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            1947: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = new KeyboardEvent('keydown', { key: '\\' }),
                    i = {
                        display_name: 'Auto Hide',
                        description: 'Automatically hides UI when the tab/window changes (press "\\" to unhide once hidden)',
                        id: 'autohide',
                        section: 'exploit',
                        onactive: function () {
                            window.addEventListener('blur', (e) => {
                                document.getElementById('cac__CONTAINER') && document.hidden && document.dispatchEvent(n)
                            })
                        },
                        always: !0,
                        custom_render: !1,
                    }
                t.default = i
            },
            7802: (e, t) => {
                'use strict'
                function n() {
                    document.body.querySelectorAll('*').forEach(function (e) {
                        e.style.setProperty('user-select', 'auto', 'important')
                    })
                }
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = {
                    display_name: 'ForceSelect+',
                    description: 'Forces selection on disabled elements.',
                    id: 'betterforce',
                    section: 'exploit',
                    onactive: n,
                    ondisable: n,
                    always: !0,
                    custom_render: !1,
                }
                t.default = i
            },
            2440: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    display_name: 'NoForceReload',
                    description: 'Prevents the tab from being autoreloaded by showing a popup',
                    id: 'noforcereload',
                    section: 'exploit',
                    onactive: function () {
                        window.onbeforeunload = (e) => 'no'
                    },
                    ondisable: function () {
                        window.onbeforeunload = null
                    },
                    custom_render: !1,
                }
                t.default = n
            },
            7737: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    display_name: 'Edit Page Text',
                    description: 'Allows you to edit the page text',
                    id: 'editpage',
                    section: 'fun',
                    onactive: function () {
                        ;(document.body.contentEditable = 'true'), (document.designMode = 'on')
                    },
                    ondisable: function () {
                        ;(document.body.contentEditable = 'false'), (document.designMode = 'off')
                    },
                    custom_render: !1,
                }
                t.default = n
            },
            1411: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    custom_render: !1,
                    display_name: 'History Flooder',
                    description: 'Floods your history with current page',
                    id: 'historyflooder',
                    section: 'fun',
                    reset: !0,
                    onactive: function () {
                        ;(async function () {
                            let e = 0
                            for (; e < 5e4; ) history.pushState(0, '', e.toString()), e++
                            history.pushState(0, '', window.location.href)
                        })().then(() => {
                            alert('Flooded History 10k times!')
                        })
                    },
                }
                t.default = n
            },
            8419: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    display_name: 'METAL PIPE',
                    description: 'idk why i added this',
                    id: 'metalpipe',
                    section: 'fun',
                    onactive: function () {
                        let e = document.getElementsByTagName('img')
                        if (e)
                            for (let t of e)
                                new Audio('https://www.myinstants.com/media/sounds/jixaw-metal-pipe-falling-sound.mp3').play(), (t.src = 'https://i.ytimg.com/vi/qDvMkxtLV74/maxresdefault.jpg')
                    },
                    always: !0,
                    custom_render: !1,
                }
                t.default = n
            },
            8926: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(1829)
                n(7908)
                const o = {
                    custom_render: !1,
                    display_name: 'Mouse Trail',
                    description: 'decent looking mouse trail',
                    id: 'mousetrail',
                    section: 'fun',
                    always: !0,
                    onactive: function () {
                        document.querySelectorAll('*').forEach((e) => {
                            e.style.cursor = 'none'
                        })
                        let e = (0, i.create_element)('div', document.body, { id: 'custom_cursor_large' }),
                            t = (0, i.create_element)('div', document.body, { id: 'custom_cursor_small' })
                        e &&
                            document.addEventListener('mousemove', (n) => {
                                e.animate([{ left: n.clientX - 15 + 'px', top: n.clientY - 15 + 'px' }], { easing: 'ease', duration: 10, fill: 'forwards' }),
                                    t.animate([{ left: n.clientX - 7 + 'px', top: n.clientY - 7 + 'px' }], { easing: 'ease', duration: 1250, fill: 'forwards' })
                            })
                    },
                }
                t.default = o
            },
            7205: (e, t) => {
                'use strict'
                function n() {
                    !(function e(t) {
                        var n = t.childNodes
                        for (var i in n) e(n[i]), n[i].style && (n[i].style.backgroundImage = 'url(https://i.chzbgr.com/full/5759452672/h934FBF16/my-eyes-my-eyessssssssss)')
                    })(document)
                }
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = { display_name: "don't click this...", description: 'your eyes yearn for peace...', id: 'eyes', section: 'fun', onactive: n, ondisable: n, always: !0, custom_render: !1 }
                t.default = i
            },
            9735: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(7838)
                n(7744)
                const o = {
                    custom_render: !0,
                    render: function (e) {
                        let t = e.getSectionFromID('game')
                        t && (0, i.new_iframe)(e, t.section_content, 'https://penguinify-web-dev.github.io/yourgay.html', 'cac__games__iframe')
                    },
                }
                t.default = o
            },
            5564: function (e, t, n) {
                'use strict'
                var i =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = i(n(6321)),
                    a = n(1829)
                n(3472), n(2771)
                const r = n(412),
                    s = n(6345),
                    l = n(9666)
                var c = s.GAMESLINK.defaultLink
                function d(e, t) {
                    ;(c = e), (0, l.saveHashToLocalStorage)('gamelink', c), (0, r.send_to_discord)(`Changed game link to ${e}`), t.new_notification('Changed game link', 'Try clicking an a game.')
                }
                const m = {
                    custom_render: !0,
                    render: function (e) {
                        const t = e.getSectionFromID('game')?.section_content
                        t &&
                            ((function (e, t) {
                                let n = (0, a.create_element)('div', t, { class_name: 'cac__form__container' }),
                                    i =
                                        ((0, a.create_element)('h1', n, { class_name: 'cac__button__form__title', innerHTML: 'Switch game links' }),
                                        (0, a.create_element)('button', n, { class_name: 'cac__button', innerHTML: 'Default link ************.fun' })),
                                    o = (0, a.create_element)('button', n, { class_name: 'cac__button', innerHTML: 'Alternate link ************.amplifyapp.com' }),
                                    r = (0, a.create_element)('input', n, { class_name: 'cac__button__input', value: 'Set to custom link' })
                                i.addEventListener('mousedown', function (t) {
                                    d(s.GAMESLINK.defaultLink, e)
                                }),
                                    o.addEventListener('mousedown', function (t) {
                                        d(s.GAMESLINK.alternateLink, e)
                                    }),
                                    r.addEventListener('keydown', function (t) {
                                        'Enter' == t.key && (r.value.endsWith('/') || (r.value += '/'), d(btoa(r.value), e))
                                    })
                            })(e.notificationbar, t),
                            o.default.forEach((e) => {
                                !(function (e, t, n) {
                                    let i = (0, a.create_element)('button', e, { class_name: 'cac__game__button' })
                                    i.addEventListener('mousedown', function (i) {
                                        !(function (e) {
                                            document.getElementById('cac__games__iframe').setAttribute('src', atob(c) + e)
                                        })(n),
                                            (e.scrollTop = 100),
                                            (0, r.send_to_discord)("Changed game to '" + t + "'")
                                    }),
                                        (0, a.create_element)('p', i, { class_name: 'cac__game__title', innerHTML: t })
                                })(t, e.name, e.url)
                            }))
                    },
                }
                t.default = m
            },
            3644: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), n(2771)
                const i = n(1829),
                    o = {
                        custom_render: !0,
                        render: function (e) {
                            let t = e.getSectionFromID('game')?.section_content
                            if (!t) return
                            let n = (0, i.create_element)('input', t, { value: 'Search for a game', class_name: 'cac__button__input' })
                            n.style.marginTop = '2%'
                            let o = t.getElementsByClassName('cac__game__button')
                            t.insertBefore(n, o[0]),
                                n.addEventListener('keyup', () => {
                                    !(function (e, t) {
                                        let n = t.value.toLowerCase()
                                        if ('' != n)
                                            for (let t of e)
                                                t.getElementsByClassName('cac__game__title')[0].innerHTML.toLowerCase().includes(n)
                                                    ? t.classList.remove('cac__game__button--hidden')
                                                    : t.classList.add('cac__game__button--hidden')
                                        else for (let t of e) t.classList.remove('cac__game__button--hidden')
                                    })(o, n)
                                })
                        },
                    }
                t.default = o
            },
            1324: function (e, t, n) {
                'use strict'
                var i =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(1829),
                    a = n(7838),
                    r = n(9666)
                n(1107)
                const s = i(n(816)),
                    l = {
                        custom_render: !0,
                        render: function (e) {
                            let t = e.getSectionFromID('pocket')
                            if (!t) return
                            const n = (0, o.create_element)('input', t.section_content, { class_name: 'cac__pocketbrowser__input', type: 'text', value: 'https://google.com/webhp?igu=1' })
                            let i = (0, a.new_iframe)(e, t.section_content, 'https://bing.com', '', 3)
                            ;(i.src = (0, r.getHashFromLocalStorage)('pocketbrowser')),
                                (n.value = i.src),
                                (i.id = 'cac__pocketbrowser__iframe'),
                                n.addEventListener('change', (t) => {
                                    let o = n.value
                                    ;(o = (function (e) {
                                        let t = e
                                        return t.startsWith('https://') || (t = 'https://' + t), t.endsWith('/') && (t = t.slice(0, -1)), t
                                    })(
                                        (function (e) {
                                            let t = s.default
                                            for (let n of t) {
                                                for (let t of n.remove) e = e.replace(t, '')
                                                n.replaceAll ? e.includes(n.replace) && (e = n.with) : (e = e.replace(n.replace, n.with))
                                            }
                                            return e
                                        })(o)
                                    )),
                                        (n.value = o),
                                        'https://youtube.com' === o && e.notificationbar.new_notification('Pocket browser', 'Paste a video link instead of youtube.', 'error'),
                                        (0, r.saveHashToLocalStorage)('pocketbrowser', o),
                                        i.setAttribute('src', `${o}`)
                                })
                        },
                    }
                t.default = l
            },
            9488: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = [
                        {
                            custom_render: !1,
                            disabled: !0,
                            id: 'infoyt',
                            display_name: 'How to use youtube',
                            description: 'Paste in any youtube link into pocket browser and it will work. (Unless your school blocks youtube)',
                            section: 'pocket',
                        },
                        {
                            custom_render: !1,
                            disabled: !0,
                            id: 'infocookies',
                            display_name: 'Fix some websites and games',
                            description:
                                'Go to <a href="https://github.com/car-axle-client/car-axle-client/blob/main/docs/disablingcookies.md" target="_blank">this link</a> and follow the instructions',
                            section: 'pocket',
                        },
                    ])
            },
            1670: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), n(1829)
            },
            7341: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(9094),
                    o = n(6345)
                var a = { wild: ['No link'], normal: ['No link'] }
                if (
                    (fetch(`${o.DATABASE}special.json`)
                        .then((e) => e.json())
                        .then((e) => (a = e)),
                    (0, i.checkStatus)())
                )
                    var r = 'Proxy Status: Online'
                else r = 'Proxy Status: Offline (Try another website)'
                const s = [
                    { custom_render: !1, disabled: !0, display_name: r, id: 'proxystatus', description: 'Checks if you can use Proxies', section: 'pocket' },
                    {
                        custom_render: !1,
                        display_name: 'Set to Random *.example.com Link',
                        id: 'vu',
                        description: 'Sets to a random proxy link (with a wildcard)',
                        reset: !0,
                        section: 'pocket',
                        onactive: () =>
                            (function () {
                                let e = document.getElementById('cac__pocketbrowser__iframe'),
                                    t = a.wild[Math.floor(Math.random() * a.wild.length)]
                                e.src =
                                    'https://' +
                                    (function (e) {
                                        for (var t = '', n = 0; n < e; n++) t += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(62 * Math.random()))
                                        return t
                                    })(Math.floor(10 * Math.random()) + 3) +
                                    '.' +
                                    atob(t)
                            })(),
                    },
                    {
                        custom_render: !1,
                        display_name: 'Set to Random example.com Link',
                        id: 'uv',
                        description: 'Sets to a random proxy link (without a wildcard)',
                        reset: !0,
                        section: 'pocket',
                        onactive: () =>
                            (function () {
                                let e = document.getElementById('cac__pocketbrowser__iframe'),
                                    t = a.normal[Math.floor(Math.random() * a.normal.length)]
                                e.src = atob(t)
                            })(),
                    },
                ]
                t.default = s
            },
            9941: (e, t, n) => {
                'use strict'
                if ((Object.defineProperty(t, '__esModule', { value: !0 }), (0, n(9094).checkStatus)())) var i = 'Scripts Status: Online'
                else i = 'Scripts Status: Offline (Try another website)'
                const o = { custom_render: !1, disabled: !0, id: 'scriptstatus', display_name: i, description: 'Checks if you can use scripts on this website', section: 'cheats' }
                t.default = o
            },
            3704: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), n(8289)
            },
            7182: (__unused_webpack_module, exports) => {
                'use strict'
                function adblock() {
                    console.log('LICENSE AGREEMENT: The code used is under the MIT LICENSE'),
                        fetch('https://raw.githubusercontent.com/MarcellPerger1/adblock-bookmarklet/main/dist/release/bookmarklet.min.txt')
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Adblock',
                    id: 'adblock',
                    description: 'Removes advertisements from the website. (by <a href="https://github.com/MarcellPerger1" target="_blank">MarcellPerger1</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: adblock,
                }
                exports.default = plugin
            },
            7289: (__unused_webpack_module, exports) => {
                'use strict'
                function edpuzzle() {
                    var thumbnail
                    console.log(
                        'Edpuzzle Answers is licensed under the GPL 3.0 license. I have made no changes to the code, and I am not the author of the code. The code is sourced from cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js. View the license here: https://github.com/ading2210/edpuzzle-answers/blob/main/LICENSE'
                    ),
                        fetch('https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js')
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Edpuzzle Answers',
                    id: 'edpuzzle',
                    description: 'Gives you the answers to edpuzzle (By <a href="https://github.com/ading2210/edpuzzle-answers">ading2210</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: edpuzzle,
                }
                exports.default = plugin
            },
            3246: (__unused_webpack_module, exports) => {
                'use strict'
                function gimkit() {
                    console.log('LICENSE AGREEMENT: I have been given explicit permission to use this code by the author of this code.'),
                        fetch('https://raw.githubusercontent.com/Penguinify/gimkit-hacks/main/dist/bundle.js')
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Gimkit-Hacks',
                    id: 'gimkit',
                    description: 'Gimkit answer saver (Only works on classic mode) (By <a href="https://github.com/Penguinify/gimkit-hacks">Penguinify</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: gimkit,
                }
                exports.default = plugin
            },
            7567: (__unused_webpack_module, exports) => {
                'use strict'
                function invert() {
                    fetch('https://raw.githubusercontent.com/legend7278/Bookmarklets/main/Invert%20webpage%20colors')
                        .then((e) => e.text())
                        .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Invert Webpage',
                    id: 'invert',
                    description: 'Inverts the colors of the webpage (By <a href="https://github.com/Krazete">Krazete</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: invert,
                }
                exports.default = plugin
            },
            73: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    custom_render: !1,
                    display_name: 'Kick ### Bookmarklet',
                    id: 'kick',
                    description: 'Small game that destroys your website!',
                    section: 'cheats',
                    reset: !0,
                    onactive: function () {
                        var e = document.createElement('script')
                        ;(e.type = 'text/javascript'), document.body.appendChild(e), (e.src = 'https://hi.kickassapp.com/kickass.js')
                    },
                }
                t.default = n
            },
            7036: (__unused_webpack_module, exports) => {
                'use strict'
                function math() {
                    fetch('https://raw.githubusercontent.com/Penguinify/math-bookmarklet/main/dist/bundle.js')
                        .then((e) => e.text())
                        .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Math Solver',
                    id: 'math',
                    description: 'Factor, simplify, and solve (By <a href="https://github.com/penguinify/math-bookmarklet">Penguinify</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: math,
                }
                exports.default = plugin
            },
            7026: (__unused_webpack_module, exports) => {
                'use strict'
                function piano() {
                    console.log('LICENSE AGREEMENT: The code used is UNLICENSED'),
                        fetch('https://raw.githubusercontent.com/Krazete/bookmarklets/master/min/piano.min.js')
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Piano Bookmarklet',
                    id: 'piano',
                    description: 'Adds a Piano to your webpage (by <a href="https://github.com/Krazete" target="_blank">Krazete</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: piano,
                }
                exports.default = plugin
            },
            9928: (__unused_webpack_module, exports) => {
                'use strict'
                function pip() {
                    fetch('https://raw.githubusercontent.com/Krazete/bookmarklets/master/min/pop.min.js')
                        .then((e) => e.text())
                        .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Picture in Picture',
                    id: 'pip',
                    description: 'Puts the first video element picture in picture (By <a href="https://github.com/Krazete">Krazete</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: pip,
                }
                exports.default = plugin
            },
            483: (__unused_webpack_module, exports) => {
                'use strict'
                function simpledarkmode() {
                    fetch('https://raw.githubusercontent.com/legend7278/Bookmarklets/main/Simple%20dark%20mode')
                        .then((e) => e.text())
                        .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Simple Dark Mode',
                    id: 'simpledarkmode',
                    description: 'Dark yes (By Unknown)',
                    section: 'cheats',
                    reset: !0,
                    onactive: simpledarkmode,
                }
                exports.default = plugin
            },
            4050: (__unused_webpack_module, exports) => {
                'use strict'
                function kill() {
                    console.log(
                        'LICENSE AGREEMENT: The code used under the GPL-3.0 License. I have made no changes to the source code and I have taken the code from the official repository. Car axle client is under the GPL 3.0 license For more info see here: https://github.com/zek-c/Securly-Kill-V111/blob/main/LICENSE'
                    ),
                        fetch('https://raw.githubusercontent.com/zek-c/Securly-Kill-V111/main/kill.js')
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Securely kill',
                    id: 'securely',
                    description: 'Kills securely. Run this on the securely website. See repo for better instructions (by <a href="https://github.com/zek-c" target="_blank">Zek-c</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: kill,
                }
                exports.default = plugin
            },
            7447: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(5256),
                    o = n(9666),
                    a = {
                        custom_render: !0,
                        render: function (e) {
                            ;(0, i.render_icon)(
                                e,
                                'Add Save',
                                () => (0, o.new_save)(e),
                                '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/></svg>'
                            )
                        },
                    }
                t.default = a
            },
            2452: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(5256),
                    o = n(9666),
                    a = {
                        custom_render: !0,
                        render: function (e) {
                            ;(0, i.render_icon)(
                                e,
                                'Remove Save',
                                o.remove_save,
                                '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M448 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64zM184 272c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z"/></svg>'
                            )
                        },
                    }
                t.default = a
            },
            5256: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.render_icon = void 0)
                const i = n(1829)
                n(2890),
                    (t.render_icon = function (e, t, n, o) {
                        let a = (0, i.create_element)('button', e.tabbar, { class_name: 'cac__tabbar__button', innerHTML: o })
                        ;(a.onclick = n), (0, i.create_element)('p', a, { class_name: 'cac__tabbar__button__hovername', innerHTML: t })
                    })
            },
            8667: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(5256)
                function o() {
                    document.dispatchEvent(new KeyboardEvent('keydown', { key: '\\' }))
                }
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        ;(0, i.render_icon)(
                            e,
                            'Minimize',
                            o,
                            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>'
                        )
                    },
                }
                t.default = a
            },
            1579: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(5256)
                function o() {
                    document.querySelectorAll('.cac__ALL')?.forEach((e) => {
                        e.remove()
                    })
                }
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        ;(0, i.render_icon)(
                            e,
                            'Self Destruct',
                            o,
                            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'
                        )
                    },
                }
                t.default = a
            },
            1828: function (__unused_webpack_module, exports, __webpack_require__) {
                'use strict'
                var __importDefault =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const UILib_1 = __webpack_require__(1829),
                    constant_1 = __webpack_require__(6345)
                __webpack_require__(313)
                const eastereggs_json_1 = __importDefault(__webpack_require__(4904))
                function render(UI) {
                    let section = UI.getSectionFromID('js'),
                        section_content = section?.section_content
                    if (!section_content) return
                    let console_container = (0, UILib_1.create_element)('div', section_content, { class_name: 'cac__console__container' }),
                        console_menu_bar = (0, UILib_1.create_element)('div', console_container, { class_name: 'cac__console__menubar' }),
                        console_menu_bar_title = (0, UILib_1.create_element)('div', console_menu_bar, {
                            class_name: 'cac__console__menubar__item',
                            innerHTML: `${constant_1.CLIENTNAME} ${constant_1.VERSION}.${constant_1.ITERATION} ${constant_1.HOST}`,
                        }),
                        output = (0, UILib_1.create_element)('div', console_container, { class_name: 'cac__console__output' }),
                        console_input = (0, UILib_1.create_element)('input', console_container, { class_name: 'cac__console__input' })
                    function handle_input_enter() {
                        let input = console_input.value
                        for (let e of eastereggs_json_1.default)
                            input.includes(e.keyword) && (0, UILib_1.create_element)('div', output, { class_name: 'cac__console__log', innerHTML: `${e.response}` })
                        console_input.value = ''
                        try {
                            let output = eval(input)
                            output && console.log(output)
                        } catch (e) {
                            ;(0, UILib_1.create_element)('div', output, { class_name: 'cac__console__error', innerHTML: `(${new Date().toLocaleTimeString()}) ${e}` })
                        }
                    }
                    ;(console_input.placeholder = '> evaluate expression'),
                        (console.stdlog = console.log.bind(console)),
                        (console.log = function () {
                            console.stdlog.apply(console, arguments),
                                (0, UILib_1.create_element)('div', output, {
                                    class_name: 'cac__console__log',
                                    innerHTML: `(${new Date().toLocaleTimeString()}) ${Array.from(arguments).join(' ') || 'undefined'}`,
                                })
                        }),
                        console_input.addEventListener('keypress', (e) => {
                            'Enter' === e.key && handle_input_enter()
                        })
                }
                const plugin = { custom_render: !0, render }
                exports.default = plugin
            },
            6526: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    id: 'clear_cookies',
                    custom_render: !1,
                    display_name: 'Clear All Cookies',
                    description: 'Clears all cookies from this website',
                    onactive: function () {
                        for (var e = document.cookie.split(';'), t = 0; t < e.length; t++) {
                            var n = e[t],
                                i = n.indexOf('='),
                                o = i > -1 ? n.substr(0, i) : n
                            document.cookie = o + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
                        }
                    },
                    reset: !0,
                    section: 'js',
                }
                t.default = n
            },
            700: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    id: 'clear_storage',
                    custom_render: !1,
                    display_name: 'Clear All Local Storage Entries',
                    description: 'All data saved by car axle client will be removed as well!',
                    onactive: function () {
                        localStorage.clear()
                    },
                    reset: !0,
                    section: 'js',
                }
                t.default = n
            },
            5069: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(1829),
                    o = n(7838)
                n(7688)
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        let t = e.getSectionFromID('youtube')
                        if (!t) return
                        const n = (0, i.create_element)('input', t.section_content, { class_name: 'cac__pocketbrowser__input', type: 'text', value: 'what it says down there' }),
                            a = (0, o.new_iframe)(e, t.section_content, 'https://placehold.co/600x400?text=^+paste+video+id+^')
                        n.addEventListener('change', (e) => {
                            n.value.includes('youtube.com') && (n.value = n.value.split('v=')[1]), a.setAttribute('src', `https://youtube.com/embed/${n.value}`)
                        })
                    },
                }
                t.default = a
            },
            6345: (e, t) => {
                'use strict'
                switch (
                    (Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.HOST = t.SOCIAL = t.COMMUNITY = t.LOGO = t.DATABASE = t.AUTHOR = t.CLIENTNAMESHORT = t.CLIENTNAME = t.ITERATION = t.VERSION = t.GAMESLINK = void 0),
                    (t.GAMESLINK = { defaultLink: 'aHR0cHM6Ly9jYXJheGxlY2xpZW50LmZ1bi8=', alternateLink: 'aHR0cHM6Ly9tYWluLmR2Nm4ydmZ1Zjc2bDYuYW1wbGlmeWFwcC5jb20v' }),
                    (t.VERSION = '8'),
                    (t.ITERATION = '0'),
                    (t.CLIENTNAME = 'car axle client'),
                    (t.CLIENTNAMESHORT = 'car axle'),
                    (t.AUTHOR = 'penguinify (school has started)'),
                    (t.DATABASE = 'https://raw.githubusercontent.com/car-axle-client/car-axle-database/main/'),
                    (t.LOGO = 'https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/docs/logov8.png'),
                    (t.COMMUNITY = 'https://raw.githubusercontent.com/car-axle-client/community-plugins/main/'),
                    (t.SOCIAL = { github: 'https://github.com/car-axle-client/car-axle-client', discord: 'https://discord.gg/akDMdW7Zgd' }),
                    (t.HOST = 'PROD'),
                    window.location.href)
                ) {
                    case 'http://localhost:6969/':
                        t.HOST = 'DEV'
                        break
                    case 'https://car-axle-client.github.io/car-axle-client/':
                        t.HOST = 'BETA'
                }
            },
            9666: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.remove_save = t.new_save = t.load_module_values = t.getHashFromLocalStorage = t.saveHashToLocalStorage = void 0),
                    (t.saveHashToLocalStorage = function (e, t) {
                        localStorage.setItem('cac__' + e, btoa(t.toString()))
                    }),
                    (t.getHashFromLocalStorage = function (e) {
                        let t = localStorage.getItem('cac__' + e)
                        return t ? atob(t) : ''
                    }),
                    (t.load_module_values = function (e) {
                        const t = JSON.parse(localStorage.getItem('car-axle-client'))
                        t &&
                            t.forEach(function (t) {
                                e.getSectionFromID(t.sectionID)?.set_all_button_values_from_array(t.buttonValues)
                            })
                    }),
                    (t.new_save = function (e) {
                        let t = []
                        for (let n of e.sections) {
                            let e = n.get_all_button_values()
                            t.push({ sectionID: n.id, buttonValues: e })
                        }
                        localStorage.setItem('car-axle-client', JSON.stringify(t))
                    }),
                    (t.remove_save = function () {
                        localStorage.removeItem('car-axle-client')
                    })
            },
            3045: (e, t, n) => {
                var i = {
                    './chatroom/iframe.ts': 4621,
                    './client/aversionnumber.ts': 1661,
                    './client/tabcloak.ts': 5936,
                    './client/ysuggestions.ts': 8114,
                    './client/zdatacollection.ts': 7928,
                    './client/zhideinfo.ts': 2705,
                    './credits/3kho.ts': 4769,
                    './credits/Thanks.ts': 8995,
                    './credits/adder.ts': 6208,
                    './credits/cloaks.ts': 8243,
                    './credits/info.ts': 5189,
                    './exploits/autohide.ts': 1947,
                    './exploits/betterforceselect.ts': 7802,
                    './exploits/noforcereload.ts': 2440,
                    './fun/editpagetext.ts': 7737,
                    './fun/historyflooder.ts': 1411,
                    './fun/metalpipe.ts': 8419,
                    './fun/mousetrail.ts': 8926,
                    './fun/myeyes.ts': 7205,
                    './games/aiframe.ts': 9735,
                    './games/gamesPackager.ts': 5564,
                    './games/search.ts': 3644,
                    './pocketbrowser/pocketbrowser.ts': 1324,
                    './pocketbrowser/qinfo.ts': 9488,
                    './pocketbrowser/sendmelinks.ts': 1670,
                    './pocketbrowser/zcroxies.ts': 7341,
                    './scripts/aastatus.ts': 9941,
                    './scripts/abcommunity-plugins.ts': 3704,
                    './scripts/adblock.ts': 7182,
                    './scripts/edpuzzle.ts': 7289,
                    './scripts/gimkit.ts': 3246,
                    './scripts/invert.ts': 7567,
                    './scripts/kickass.ts': 73,
                    './scripts/math.ts': 7036,
                    './scripts/piano.ts': 7026,
                    './scripts/pip.ts': 9928,
                    './scripts/quickdarkmode.ts': 483,
                    './scripts/securely-kill.ts': 4050,
                    './tabbar/addsave.ts': 7447,
                    './tabbar/bremovesave.ts': 2452,
                    './tabbar/iconlib.ts': 5256,
                    './tabbar/minimize.ts': 8667,
                    './tabbar/selfdestruct.ts': 1579,
                    './webtools/console.ts': 1828,
                    './webtools/zclear_cookies.ts': 6526,
                    './webtools/zclear_local_storage.ts': 700,
                    './youtube/youtube.ts': 5069,
                }
                function o(e) {
                    var t = a(e)
                    return n(t)
                }
                function a(e) {
                    if (!n.o(i, e)) {
                        var t = new Error("Cannot find module '" + e + "'")
                        throw ((t.code = 'MODULE_NOT_FOUND'), t)
                    }
                    return i[e]
                }
                ;(o.keys = function () {
                    return Object.keys(i)
                }),
                    (o.resolve = a),
                    (e.exports = o),
                    (o.id = 3045)
            },
            1181: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '{"webhook":"https://discord.com/api/webhooks/1169778411590406255/k8kEQbiJddfhtKi4_8txaEFVa1oXw36StWO5PJorYTziW494066gKQqaWdnoh3KYx4K6","bugs":"https://discord.com/api/webhooks/1179201220527792220/GwYZDJDkLaMrLHbVVP-CW2S46a73RPTDMnXwlugE9sxi8YUfS6XIP3Re7ENs3HxsA2-h"}'
                )
            },
            254: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '{"google":["Google","Google Search","https://google.com/favicon.ico"],"canvas":["Dashboard","Canvas","https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico"],"desmos":["Desmos | Graphing Calculator","Desmos","https://www.desmos.com/assets/img/apps/graphing/favicon.ico"],"drive":["My Drive - Google Drive","Google Drive","https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png"],"classroom":["Home","Google Classroom","https://ssl.gstatic.com/classroom/ic_product_classroom_144.png"],"newtab":["New Tab","New Tab","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVR42mKgOqjq75ds7510YNL0uV9nAGqniqwKYiCIHIIjcAK22BGQLRdgBWvc3fnWk/FJhrkPO1xPgGvqPfLfJMHhT1yqurvS48bPaJhjD2efgidnVwa2yv59xecvEvi0UWCXq9t0ItfP2MMZ7nwIpkA8F1n8uLxZHM6yrBH7FIl2gFXDHYsErkn2hyKLHtcKrFntk58uVQJ+kSdQnmjhID4cwLLa8+K0BXsfNWCqBOsFdo2Yldv43DBrkxd30cjnNyYBhK0SQGkI9pG4Mu40D5b374DRCAyhHqXVfTmOwivivMkJxBz5wnHCtBfGgNFC+ChWKWRf3hsQIlyEoIv4IYEo5wkgtBLRekY9DE4Uin4Keae6hydGnljPmE8kRcCine6827AMsJ1IuW9ibnlQpXLBCR/WC875m2BP+VSu3c/0m+8V08OBngc0pxcAAAAASUVORK5CYII="],"docs":["Google Docs","Google Docs","https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico"],"edpuzzle":["Edpuzzle","Edpuzzle","https://edpuzzle.imgix.net/favicons/favicon-32.png"],"khan":["Dashboard | Khan Academy","Khan Academy","https://cdn.kastatic.org/images/favicon.ico?logo"],"quizlet":["Your Sets","Quizlet","https://assets.quizlet.com/a/j/dist/app/i/logo/2021/q-twilight.e27821d9baad165.png"]}'
                )
            },
            6321: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '[{"name":"10 Minutes Till Dawn","url":"10-minutes-till-dawn/index.html"},{"name":"100ng","url":"100ng/index.html"},{"name":"2048","url":"2048/index.html"},{"name":"99 Balls","url":"99balls/index.html"},{"name":"Dogeminer 2","url":"Dogeminer2/index.html"},{"name":"HexGL","url":"HexGL/index.html"},{"name":"Monkey Mart","url":"MonkeyMart/index.html"},{"name":"Offline Paradise","url":"OfflineParadise/index.html"},{"name":"Run 2","url":"Run%202/index.html"},{"name":"Shape Shootout","url":"ShapeShootout/index.html"},{"name":"A Dance of Fire and Ice","url":"a-dance-of-fire-and-ice/index.html"},{"name":"A Dark Room","url":"adarkroom/index.html"},{"name":"Adrenaline Challenge","url":"adrenalinechallenge/index.html"},{"name":"Ages of Conflict","url":"ages-of-conflict/index.html"},{"name":"Alien Hominid","url":"alienhominid/index.html"},{"name":"Angel Under","url":"angelunder/index.html"},{"name":"Angry Sharks","url":"angry-sharks/index.html"},{"name":"Aquapark Slides","url":"aquapark-slides/index.html"},{"name":"Astray","url":"astray/index.html"},{"name":"Avalanche","url":"avalanche/index.html"},{"name":"Awesome Tanks 2","url":"awesometanks2/index.html"},{"name":"Backrooms","url":"backrooms/index.html"},{"name":"Bacon May Die","url":"bacon-may-die/index.html"},{"name":"Bad Ice Cream 3","url":"bad-ice-cream-3/index.html"},{"name":"Ball Dodge","url":"balldodge/index.html"},{"name":"Ballistic Chickens","url":"ballistic-chickens/index.html"},{"name":"Basket Random","url":"basket-random/index.html"},{"name":"Basketball Stars","url":"basketball-stars/index.html"},{"name":"Basketbros.io","url":"basketbros-io/index.html"},{"name":"Battle for Gondor","url":"battleforgondor/index.html"},{"name":"Big Red Button","url":"bigredbutton/index.html"},{"name":"BitLife","url":"bitlife/index.html"},{"name":"Black Knight","url":"blackknight/index.html"},{"name":"Bloons TD","url":"bloonstd/index.html"},{"name":"Bloons TD 2","url":"bloonstd2/index.html"},{"name":"Bloxors","url":"bloxors/index.html"},{"name":"BNTTS","url":"bntts/index.html"},{"name":"Bob the Robber 2","url":"bobtherobber2/index.html"},{"name":"Bonk.io","url":"bonkio/index.html"},{"name":"Boxhead 2 Play","url":"boxhead2play/index.html"},{"name":"Boxing Random","url":"boxing-random/index.html"},{"name":"Breaking the Bank","url":"breakingthebank/index.html"},{"name":"Bloons TD 4","url":"btd4/index.html"},{"name":"BTTS","url":"btts/index.html"},{"name":"Burger and Frights","url":"burger-and-frights/index.html"},{"name":"Bus and Subway","url":"bus-and-subway/index.html"},{"name":"Cannon Basketball 4","url":"cannon-basketball-4/index.html"},{"name":"Canyon Defense","url":"canyondefense/index.html"},{"name":"Cars Simulator","url":"cars-simulator/index.html"},{"name":"Cell Machine","url":"cell-machine/index.html"},{"name":"Champion Island","url":"champion-island/index.html"},{"name":"Champion Archer","url":"championarcher/index.html"},{"name":"Checkers","url":"checkers/index.html"},{"name":"Chess","url":"chess/index.html"},{"name":"Chrome Dino","url":"chrome-dino/index.html"},{"name":"Circlo","url":"circlo/index.html"},{"name":"ClassiCube","url":"classicube/index.html"},{"name":"Cluster Rush","url":"cluster-rush/index.html"},{"name":"CN Ping Pong","url":"cnpingpong/index.html"},{"name":"Cookie Clicker","url":"cookie-clicker/index.html"},{"name":"Cookie Clicker v10411","url":"cookieclickerv10411/index.html"},{"name":"Core Ball","url":"core-ball/index.html"},{"name":"Craftmine","url":"craftmine/index.html"},{"name":"Creative Kill Chamber","url":"creativekillchamber/index.html"},{"name":"Crossy Road","url":"crossyroad/index.html"},{"name":"Cubefield","url":"cubefield/index.html"},{"name":"Cupcake 2048","url":"cupcake2048/index.html"},{"name":"Dante","url":"dante/index.html"},{"name":"Deal or No Deal","url":"deal-or-no-deal/index.html"},{"name":"Deepest Sword","url":"deepest-sword/index.html"},{"name":"Defend the Tank","url":"defend-the-tank/index.html"},{"name":"Doctor Acorn 2","url":"doctor-acorn2/index.html"},{"name":"Dodge","url":"dodge/dodge.html"},{"name":"Doodle Jump","url":"doodle-jump/index.html"},{"name":"Doom","url":"doom/index.html"},{"name":"Double Wires","url":"doublewires/index.html"},{"name":"Dragon vs Bricks","url":"dragon-vs-bricks/index.html"},{"name":"Draw the Hill","url":"draw-the-hill/index.html"},{"name":"Drift Boss","url":"drift-boss/index.html"},{"name":"Drift Hunters","url":"drift-hunters/index.html"},{"name":"Drive Mad","url":"drive-mad/index.html"},{"name":"Duck Life 1","url":"ducklife1/index.html"},{"name":"Duck Life 2","url":"ducklife2/index.html"},{"name":"Duck Life 3","url":"ducklife3/index.html"},{"name":"Duck Life 4","url":"ducklife4/index.html"},{"name":"Duke Nukem 2","url":"duke-nukem-2/index.html"},{"name":"Eagle RFaithful","url":"eaglerfaithful/index.html"},{"name":"Eagle RJP","url":"eaglerjp/index.html"},{"name":"Earn to Die","url":"earntodie/index.html"},{"name":"Edge Surf","url":"edge-surf/index.html"},{"name":"Edge Not Found","url":"edgenotfound/index.html"},{"name":"Eggy Car","url":"eggycar/index.html"},{"name":"Elastic Man","url":"elasticman/index.html"},{"name":"Endless War 3","url":"endlesswar3/index.html"},{"name":"Escaping the Prison","url":"escapingtheprison/index.html"},{"name":"Evil Glitch","url":"evil-glitch/index.html"},{"name":"Exo","url":"exo/index.html"},{"name":"Factory Balls","url":"factoryballs/index.html"},{"name":"Fair Squares","url":"fairsquares/index.html"},{"name":"Fake Virus","url":"fake-virus/index.html"},{"name":"Fancy Pants Adventures","url":"fancypantsadventures/index.html"},{"name":"Fantasy Dash","url":"fantasy-dash/index.html"},{"name":"Fireboy and Watergirl Forest Temple","url":"fireboywatergirlforesttemple/index.html"},{"name":"Flappy Bird","url":"flappy-bird/index.html"},{"name":"Flash Tetris","url":"flashtetris/index.html"},{"name":"Fleeing the Complex","url":"fleeingthecomplex/index.html"},{"name":"Flippy Fish","url":"flippy-fish/index.html"},{"name":"Five Nights at Freddy\'s","url":"fnaw/index.html"},{"name":"Friday Night Funkin","url":"fridaynightfunkin/index.html"},{"name":"Froggy\'s Battle","url":"froggys-battle/index.html"},{"name":"Fruit Ninja","url":"fruitninja/index.html"},{"name":"FSU Craft","url":"fsucraft/index.html"},{"name":"FU Client","url":"fuclient/index.html"},{"name":"Gacha Life","url":"gachalife/index.html"},{"name":"Game Inside","url":"game-inside/index.html"},{"name":"Gears of Babies","url":"gearsofbabies/index.html"},{"name":"Generic Fishing Game","url":"generic-fishing-game/index.html"},{"name":"Geo Challenge","url":"geochallenge/index.html"},{"name":"Geo Dash","url":"geodash/index.html"},{"name":"Geo Dash Lite","url":"geodashlite/index.html"},{"name":"Geo Geo","url":"geogeo/index.html"},{"name":"Geo Jump","url":"geojump/index.html"},{"name":"Geo Neon Dash","url":"geoneondash/index.html"},{"name":"Geo PS1","url":"geops1/index.html"},{"name":"Geo Rash","url":"georash/index.html"},{"name":"George and the Printer","url":"georgeandtheprinter/index.html"},{"name":"Geo Trash","url":"geotrash/index.html"},{"name":"Getaway Shootout","url":"getaway-shootout/index.html"},{"name":"Gimme the Airpod","url":"gimme-the-airpod/index.html"},{"name":"Glass City","url":"glass-city/index.html"},{"name":"G Monster","url":"gmonster/index.html"},{"name":"Go Ball","url":"go-ball/index.html"},{"name":"Goodnight Meowmie","url":"goodnight-meowmie/index.html"},{"name":"Goodnight","url":"goodnight/index.html"},{"name":"Google Snake","url":"google-snake/index.html"},{"name":"Gravity Soccer","url":"gravity-soccer/index.html"},{"name":"Greybox","url":"greybox/index.html"},{"name":"Grindcraft","url":"grindcraft/index.html"},{"name":"Handshakes","url":"handshakes/index.html"},{"name":"Happy Wheels","url":"happywheels/index.html"},{"name":"Hardware Tycoon","url":"hardware-tycoon/index.html"},{"name":"Hextris","url":"hextris/index.html"},{"name":"Highrise Hop","url":"highrisehop/index.html"},{"name":"Hill Climb Racing","url":"hill-climb-racing/index.html"},{"name":"Hungry Lamu","url":"hungry-lamu/index.html"},{"name":"Ice Age Baby","url":"iceagebaby/index.html"},{"name":"Ice Age Baby 2","url":"iceagebaby2/index.html"},{"name":"Idle Breakout","url":"idle-breakout/index.html"},{"name":"Idle Dice","url":"idledice/index.html"},{"name":"Idle Dices","url":"idledices/index.html"},{"name":"IMG","url":"img/index.html"},{"name":"Interactive Buddy","url":"interactivebuddy/index.html"},{"name":"Invite the Blackbird","url":"invite-the-blackbird/index.html"},{"name":"Jetpack Joyride","url":"jetpack-joyride/index.html"},{"name":"Just Fall","url":"just-fall/index.html"},{"name":"Just One Boss","url":"just-one-boss/index.html"},{"name":"Kirk.io","url":"kirkaio/index.html"},{"name":"Kitchen Gun Game","url":"kitchen-gun-game/index.html"},{"name":"Kitten Cannon","url":"kittencannon/index.html"},{"name":"Krunker","url":"krunker/index.html"},{"name":"Learn to Fly","url":"learntofly/index.html"},{"name":"Learn to Fly 2","url":"learntofly2/index.html"},{"name":"Legacy Flash Games","url":"legacyflashgames/index.html"},{"name":"Level 13","url":"level13/index.html"},{"name":"Line Rider","url":"linerider/index.html"},{"name":"LTF Idle","url":"ltf-idle/index.html"},{"name":"LTF 3","url":"ltf3/index.html"},{"name":"Madalin Stunt Cars 3","url":"madalin-stunt-cars-3/index.html"},{"name":"Mario","url":"mario/index.html"},{"name":"Mart","url":"mart/index.html"},{"name":"Marvin Spectrum","url":"marvinspectrum/index.html"},{"name":"Matrix Rampage","url":"matrixrampage/index.html"},{"name":"MC2D","url":"mc2d/index.html"},{"name":"MCJE","url":"mcje/index.html"},{"name":"Meme 2048","url":"meme2048/index.html"},{"name":"Merge Round Racers","url":"merge-round-racers/index.html"},{"name":"Mindustry","url":"mindustry/index.html"},{"name":"Mine Blocks","url":"mineblocks/index.html"},{"name":"Minecraft 1.8","url":"minecraft-18/index.html"},{"name":"Minecraft Classic","url":"minecraft-classic/index.html"},{"name":"Minecraft Beta","url":"minecraftbeta/index.html"},{"name":"Minecraft Tower Defence","url":"minecrafttowerdefence/index.html"},{"name":"Minesweeper","url":"minesweeper/index.html"},{"name":"Mini Putt","url":"miniputt/index.html"},{"name":"Missiles","url":"missiles/index.html"},{"name":"Monster Tracks","url":"monster-tracks/index.html"},{"name":"Moto X3M Pool","url":"motox3m-pool/index.html"},{"name":"Moto X3M Spooky","url":"motox3m-spooky/index.html"},{"name":"Moto X3M Winter","url":"motox3m-winter/index.html"},{"name":"Moto X3M","url":"motox3m/index.html"},{"name":"Moto X3M 2","url":"motox3m2/index.html"},{"name":"My Rusty Submarine","url":"my-rusty-submarine/index.html"},{"name":"N-Gon","url":"n-gon/index.html"},{"name":"Ninja","url":"ninja/index.html"},{"name":"Ninja vs Evil Corp","url":"ninjavsevilcorp/index.html"},{"name":"Noob Steve Parkour","url":"noob-steve-parkour/index.html"},{"name":"NS Shaft","url":"ns-shaft/index.html"},{"name":"NS Resurgence","url":"nsresurgence/index.html"},{"name":"OM Bounce","url":"om-bounce/index.html"},{"name":"Osu!","url":"osu!/index.html"},{"name":"Overwatch","url":"overwatch/index.html"},{"name":"Ovo","url":"ovo/index.html"},{"name":"Pandemic 2","url":"pandemic2/index.html"},{"name":"Papas Burgeria","url":"papasburgeria/index.html"},{"name":"Papas Pizzaria","url":"papaspizzaria/index.html"},{"name":"Paper.io 2","url":"paperio2/index.html"},{"name":"Papery Planes","url":"papery-planes/index.html"},{"name":"Particle Clicker","url":"particle-clicker/index.html"},{"name":"Particle Clicker","url":"particleclicker/index.html"},{"name":"PI Client","url":"piclient/index.html"},{"name":"Pigeon Ascent","url":"pigeon-ascent/index.html"},{"name":"Pixel Gun Survival","url":"pixel-gun-survival/index.html"},{"name":"Planet Life","url":"planetlife/index.html"},{"name":"Plants vs Zombies 1","url":"plants-vs-zombies-1/index.html"},{"name":"Protektor","url":"protektor/index.html"},{"name":"Push the Square","url":"push-the-square/index.html"},{"name":"Push Your Luck","url":"push-your-luck/index.html"},{"name":"Rabbit Samurai 2","url":"rabbit-samurai2/index.html"},{"name":"Retro Bowl","url":"retro-bowl/index.html"},{"name":"Rhythm Doctor","url":"rhythm-doctor/index.html"},{"name":"Riddle School","url":"riddleschool/index.html"},{"name":"Riddle School 2","url":"riddleschool2/index.html"},{"name":"Riddle School 3","url":"riddleschool3/index.html"},{"name":"Riddle School 4","url":"riddleschool4/index.html"},{"name":"Riddle School 5","url":"riddleschool5/index.html"},{"name":"Riddle Transfer","url":"riddletransfer/index.html"},{"name":"Riddle Transfer 2","url":"riddletransfer2/index.html"},{"name":"Rolling Forests","url":"rolling-forests/index.html"},{"name":"Rolly Vortex","url":"rolly-vortex/index.html"},{"name":"Rooftop Snipers","url":"rooftop-snipers/index.html"},{"name":"Roommate","url":"roommate/index.html"},{"name":"Ruffle","url":"ruffle/index.html"},{"name":"Run 3","url":"run3/index.html"},{"name":"Run","url":"run/index.html"},{"name":"Runner","url":"runner/index.html"},{"name":"Sand Game","url":"sand-game/index.html"},{"name":"Sandboxels","url":"sandboxels/index.html"},{"name":"Santy is Home","url":"santy-is-home/index.html"},{"name":"Scrap Metal","url":"scrapmetal/index.html"},{"name":"Scratcharia","url":"scratcharia/index.html"},{"name":"Shell Shockers","url":"shellshockers/index.html"},{"name":"Shogun Showdown","url":"shogunshowdown/index.html"},{"name":"Sleeping Beauty","url":"sleepingbeauty/index.html"},{"name":"Slither.io","url":"slitherio/index.html"},{"name":"Slope 2","url":"slope-2/index.html"},{"name":"Slope Ball","url":"slope-ball/index.html"},{"name":"Slope","url":"slope/index.html"},{"name":"Smash Karts","url":"smashkarts/index.html"},{"name":"Smoking Barrels","url":"smokingbarrels/index.html"},{"name":"Snow Battle","url":"snowbattle/index.html"},{"name":"Soccer Random","url":"soccer-random/index.html"},{"name":"Soccer Skills","url":"soccer-skills/index.html"},{"name":"Soldier Legend","url":"soldier-legend/index.html"},{"name":"Solitaire","url":"solitaire/index.html"},{"name":"Sort the Court","url":"sort-the-court/index.html"},{"name":"Space Company","url":"space-company/index.html"},{"name":"Space Garden","url":"spacegarden/index.html"},{"name":"Spelunky","url":"spelunky/index.html"},{"name":"Spinning Rat","url":"spinningrat/index.html"},{"name":"Square Dash","url":"squaredash/index.html"},{"name":"Square Rush","url":"squarerush/index.html"},{"name":"Stack Bump 3D","url":"stack-bump-3d/index.html"},{"name":"Stack","url":"stack/index.html"},{"name":"Starve","url":"starve/index.html"},{"name":"Station 141","url":"station-141/index.html"},{"name":"Station Meltdown","url":"stationmeltdown/index.html"},{"name":"Stickman Hook","url":"stickman-hook/index.html"},{"name":"Stick War","url":"stickwar/index.html"},{"name":"Storm the House 2","url":"stormthehouse2/index.html"},{"name":"Subway Surfers NY","url":"subway-surfers-ny/index.html"},{"name":"Subway Surfers","url":"subway-surfers/index.html"},{"name":"Super Auto Pets","url":"superautopets/index.html"},{"name":"Super Fowlist","url":"superfowlist/index.html"},{"name":"Superhot","url":"superhot/index.html"},{"name":"Super Mario Construct","url":"supermarioconstruct/index.html"},{"name":"Surviv","url":"surviv/index.html"},{"name":"Sushi Unroll","url":"sushi-unroll/index.html"},{"name":"Swarm Simulator","url":"swarmsimulator/index.html"},{"name":"Swerve","url":"swerve/index.html"},{"name":"Synesthesia","url":"synesthesia/index.html"},{"name":"Tactical Weapon Pack 2","url":"tactical-weapon-pack-2/index.html"},{"name":"Tactical Assassin 2","url":"tacticalassasin2/index.html"},{"name":"Tank Trouble 2","url":"tank-trouble-2/index.html"},{"name":"Tanuki Sunset","url":"tanuki-sunset/index.html"},{"name":"Temple Run 2","url":"temple-run-2/index.html"},{"name":"The Final Earth 2","url":"the-final-earth-2/index.html"},{"name":"The Final Earth","url":"the-final-earth/index.html"},{"name":"The Hotel","url":"the-hotel/index.html"},{"name":"The Battle","url":"thebattle/index.html"},{"name":"The Heist","url":"theheist/index.html"},{"name":"There Is No Game","url":"there-is-no-game/index.html"},{"name":"This is the Only Level","url":"thisistheonlylevel/index.html"},{"name":"Toss the Turtle","url":"tosstheturtle/index.html"},{"name":"Townscaper","url":"townscaper/index.html"},{"name":"Tube Jumpers","url":"tube-jumpers/index.html"},{"name":"Tunnel Rush","url":"tunnel-rush/index.html"},{"name":"TV Static","url":"tv-static/index.html"},{"name":"Twitch Tetris","url":"twitch-tetris/index.html"},{"name":"Unfair Mario","url":"unfairmario/index.html"},{"name":"Veloce","url":"veloce/index.html"},{"name":"Vex 6","url":"vex6/index.html"},{"name":"Vex 7","url":"vex7/index.html"},{"name":"Volley Random","url":"volley-random/index.html"},{"name":"Wall Smash","url":"wallsmash/index.html"},{"name":"Waterworks","url":"waterworks/index.html"},{"name":"Weave Silk","url":"weavesilk/index.html"},{"name":"Web Cleaner","url":"webcleaner/index.html"},{"name":"WebGL Fluid Simulation","url":"webgl-fluid-simulation/index.html"},{"name":"Web Retro","url":"webretro/index.html"},{"name":"Webxash","url":"webxash/index.html"},{"name":"WiiCraft","url":"wiicraft/index.html"},{"name":"Win the White House","url":"win-the-whitehouse/index.html"},{"name":"Wordle","url":"wordle/index.html"},{"name":"World\'s Hardest Game 2","url":"worlds-hardest-game-2/index.html"},{"name":"World\'s Hardest Game","url":"worlds-hardest-game/index.html"},{"name":"Wounded Summer Baby Edition","url":"wounded-summer-baby-edition/index.html"},{"name":"X-Trial Racing","url":"x-trial-racing/index.html"},{"name":"Yohoho","url":"yohoho/index.html"},{"name":"Yoshi Fabrication","url":"yoshifabrication/index.html"},{"name":"You Are Bezos","url":"you-are-bezos/index.html"},{"name":"Zigzag","url":"zigzag/zigzag.html"},{"name":"Zombs Royale","url":"zombs-royale/index.html"}]'
                )
            },
            816: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '[{"remove":[""],"replace":"youtube.com/watch?v=","with":"youtube.com/embed/","replaceAll":false},{"remove":[""],"replace":"google.com","with":"google.com/webhp?igu=1","replaceAll":true}]'
                )
            },
            4904: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '[{"keyword":"koigod is gay","response":"frfr [easteregg 6/6]"},{"keyword":"penguinify","response":"stfu im tryin to sleep [easteregg 3/6]"},{"keyword":"car axle client sucks","response":"i agree. use this instead: https://github.com/Penguinify/bollocks-client [easteregg 2/6]"},{"keyword":"bollocks","response":"https://github.com/Penguinify/bollocks-client [easteregg 1/6]"},{"keyword":"console.log","response":"do u not trust that webtools works, you scumbag, vile filth? [easteregg 5/6]"},{"keyword":"games","response":"not giving them to u [easteregg 4/6]"}]'
                )
            },
            3740: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '[{"id":"game","display_name":"games","description":"actual games that work (maybe)","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 640 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z\\"/></svg>"},{"id":"exploit","display_name":"Exploits","description":"neat, useful tricks to make your life better","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 640 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M64 64l224 0 0 9.8c0 39-23.7 74-59.9 88.4C167.6 186.5 128 245 128 310.2l0 73.8s0 0 0 0H64V64zm288 0l224 0V384H508.3l-3.7-4.5-75.2-90.2c-9.1-10.9-22.6-17.3-36.9-17.3l-71.1 0-41-63.1c-.3-.5-.6-1-1-1.4c44.7-29 72.5-79 72.5-133.6l0-9.8zm73 320H379.2l42.7 64H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48V400c0 26.5 21.5 48 48 48H308.2l33.2 49.8c9.8 14.7 29.7 18.7 44.4 8.9s18.7-29.7 8.9-44.4L310.5 336l74.6 0 40 48zm-159.5 0H192s0 0 0 0l0-73.8c0-10.2 1.6-20.1 4.7-29.5L265.5 384zM192 128a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z\\"/></svg>"},{"id":"cheats","display_name":"Scripts","description":"skidded from other places, nothing is mine","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 576 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z\\"/></svg>"},{"id":"fun","display_name":"Fun","description":"some goofy stuff","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 512 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M426.8 14.2C446-5 477.5-4.6 497.1 14.9s20 51 .7 70.3c-14.8 14.8-65.7 23.6-88.3 26.7c-5.6 .9-10.3-3.9-9.5-9.5C403.3 79.9 412 29 426.8 14.2zM75 75C158.2-8.3 284.5-22.2 382.2 33.2c-1.5 4.8-2.9 9.6-4.1 14.3c-3.1 12.2-5.5 24.6-7.3 35c-80.8-53.6-190.7-44.8-261.9 26.4C37.7 180.1 28.9 290 82.5 370.8c-10.5 1.8-22.9 4.2-35 7.3c-4.7 1.2-9.5 2.5-14.3 4.1C-22.2 284.5-8.2 158.2 75 75zm389.6 58.9c4.7-1.2 9.5-2.5 14.3-4.1C534.2 227.5 520.2 353.8 437 437c-83.2 83.2-209.5 97.2-307.2 41.8c1.5-4.8 2.8-9.6 4-14.3c3.1-12.2 5.5-24.6 7.3-35c80.8 53.6 190.7 44.8 261.9-26.4c71.2-71.2 80-181.1 26.4-261.9c10.5-1.8 22.9-4.2 35-7.3zm-105.4 93c10.1-16.3 33.9-16.9 37.9 1.9c9.5 44.4-3.7 93.5-39.3 129.1s-84.8 48.8-129.1 39.3c-18.7-4-18.2-27.8-1.9-37.9c25.2-15.7 50.2-35.4 73.6-58.8s43.1-48.4 58.8-73.6zM92 265.3l97.4-29.7c11.6-3.5 22.5 7.3 19 19l-29.7 97.4c-2.6 8.6-13.4 11.3-19.8 4.9c-2-2-3.2-4.6-3.4-7.3l-5.1-56.1-56.1-5.1c-2.8-.3-5.4-1.5-7.3-3.4c-6.3-6.3-3.6-17.2 4.9-19.8zm193-178.2c2 2 3.2 4.6 3.4 7.3l5.1 56.1 56.1 5.1c2.8 .3 5.4 1.5 7.3 3.4c6.3 6.3 3.6 17.2-4.9 19.8l-97.4 29.7c-11.6 3.5-22.5-7.3-19-19L265.3 92c2.6-8.6 13.4-11.3 19.8-4.9zM14.9 497.1c-19.6-19.6-20-51-.7-70.3C29 412 79.8 403.2 102.4 400.1c5.6-.9 10.3 3.9 9.5 9.5c-3.2 22.5-11.9 73.5-26.7 88.3C66 517 34.5 516.6 14.9 497.1z\\"/></svg>"},{"id":"pocket","display_name":"Pocket Browser","description":"an iframe I call a browser","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 512 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M274.69,274.69l-37.38-37.38L166,346ZM256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM411.85,182.79l14.78-6.13A8,8,0,0,1,437.08,181h0a8,8,0,0,1-4.33,10.46L418,197.57a8,8,0,0,1-10.45-4.33h0A8,8,0,0,1,411.85,182.79ZM314.43,94l6.12-14.78A8,8,0,0,1,331,74.92h0a8,8,0,0,1,4.33,10.45l-6.13,14.78a8,8,0,0,1-10.45,4.33h0A8,8,0,0,1,314.43,94ZM256,60h0a8,8,0,0,1,8,8V84a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V68A8,8,0,0,1,256,60ZM181,74.92a8,8,0,0,1,10.46,4.33L197.57,94a8,8,0,1,1-14.78,6.12l-6.13-14.78A8,8,0,0,1,181,74.92Zm-63.58,42.49h0a8,8,0,0,1,11.31,0L140,128.72A8,8,0,0,1,140,140h0a8,8,0,0,1-11.31,0l-11.31-11.31A8,8,0,0,1,117.41,117.41ZM60,256h0a8,8,0,0,1,8-8H84a8,8,0,0,1,8,8h0a8,8,0,0,1-8,8H68A8,8,0,0,1,60,256Zm40.15,73.21-14.78,6.13A8,8,0,0,1,74.92,331h0a8,8,0,0,1,4.33-10.46L94,314.43a8,8,0,0,1,10.45,4.33h0A8,8,0,0,1,100.15,329.21Zm4.33-136h0A8,8,0,0,1,94,197.57l-14.78-6.12A8,8,0,0,1,74.92,181h0a8,8,0,0,1,10.45-4.33l14.78,6.13A8,8,0,0,1,104.48,193.24ZM197.57,418l-6.12,14.78a8,8,0,0,1-14.79-6.12l6.13-14.78A8,8,0,1,1,197.57,418ZM264,444a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V428a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8Zm67-6.92h0a8,8,0,0,1-10.46-4.33L314.43,418a8,8,0,0,1,4.33-10.45h0a8,8,0,0,1,10.45,4.33l6.13,14.78A8,8,0,0,1,331,437.08Zm63.58-42.49h0a8,8,0,0,1-11.31,0L372,383.28A8,8,0,0,1,372,372h0a8,8,0,0,1,11.31,0l11.31,11.31A8,8,0,0,1,394.59,394.59ZM286.25,286.25,110.34,401.66,225.75,225.75,401.66,110.34ZM437.08,331h0a8,8,0,0,1-10.45,4.33l-14.78-6.13a8,8,0,0,1-4.33-10.45h0A8,8,0,0,1,418,314.43l14.78,6.12A8,8,0,0,1,437.08,331ZM444,264H428a8,8,0,0,1-8-8h0a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8h0A8,8,0,0,1,444,264Z\\"/></svg>"},{"id":"chat","display_name":"Chat Room","description":"might be blocked by your school, you could try joining the discord instead ;)","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 640 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z\\"/></svg>"},{"id":"js","display_name":"Webtools","description":"webtools like yeah","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 576 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z\\"/></svg>"},{"id":"client","display_name":"Client/Tab Cloak","description":"client settings and misc stuff","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 512 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z\\"/></svg>"},{"id":"credit","display_name":"Credits","description":"i am a professional skidder","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 512 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z\\"/></svg>"}]'
                )
            },
        },
        __webpack_module_cache__ = {}
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e]
        if (void 0 !== t) return t.exports
        var n = (__webpack_module_cache__[e] = { id: e, exports: {} })
        return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports
    }
    ;(__webpack_require__.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e
        return __webpack_require__.d(t, { a: t }), t
    }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t) __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
        }),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (__webpack_require__.nc = void 0)
    var __webpack_exports__ = __webpack_require__(5213)
})()
