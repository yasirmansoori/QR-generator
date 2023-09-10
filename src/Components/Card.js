import React, { useState } from 'react'
import '../styles/card.css'
import qr from 'qr-image';

export default function Card() {
    const [url, setUrl] = useState('');
    const [qrCode, setQrCode] = useState(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACP0lEQVR42u3aQY7CMBAEQP7/6d0bhxWYbmcSYFU5IRSIK4eRZ9q3n/903WhoaGhoaGhoaGhoaGhoaI5qbq+v7iH3Xzz9gz/fba6AhoZmUhOsbb3ApzdXn6r10dDQjGse1ZH1M6u1Pa1V6QpoaGg+ShPse9bLoqGh+V7No1vWTcn6TdDQ0HyKZnNmEfysGnpc0q3R0ND0k8aTP108uaWhodmIGV9vVqpVvjfFpaGhCfqbPrZc49Y392AaGppxTbq2FHxk6DF0+oGGhqavaYdLUhB+pvujF+MPGhqaGU1aR9aVZ/1/6Qyz2t7Q0NBMatLilIaf1Tw1eGM0NDRna3ajx3CfEmyX1q+XhobmRE11Bio4Hh3Uqj50paGhOVGzCalmG/2/7CYeNDQ0h3PPYOQQLKGKTDZfEQ0NzaSmP+6wGZKmmykaGpq3adIENJ1/Bv1NP+akoaGZ1GyGlcERiDTs2Bx10NDQTGqq1ibYnaQ9zyW5Jw0NTd/f9DFocKoh6Ii6VJSGhmZQExSstFEJqlb1tOOJBw0NTaqphh5rQ9o0pTsqGhqaSzRB8rB5UDodegz1NzQ0NJuzzmASmjwkfCdBALLR39DQ0AxOOTYPQ6QVbzNlpaGhOUeTVrLNRQdhRz93paGhGddUhxarQUh/5mGyW6OhoRnUVNPMansz2d/Q0NCcXNPSkpQmI8GboKGhuUTTp6JpCrJedDoJpaGhOVFzpNnotiNHSyENDc245msvGhoaGhoaGhoaGhoaGhqa5voF4eU4qI525xQAAAAASUVORK5CYII=`);
    const generateQRCode = () => {
        const qr_png = qr.imageSync(url, { type: 'png' });
        const dataURL = `data:image/png;base64,${qr_png.toString('base64')}`;
        if (url.includes('https://www') && ('.com')) {
            document.getElementsByClassName('input')[0].style.border = '2px solid #8707ff';
            document.getElementsByClassName('input')[0].style.color = '#8707ff';
            var x = document.getElementById("generate");
            x.style.display = "none";
            var y = document.getElementById("social");
            y.style.display = "block";
            setQrCode(dataURL);

        }
        else {
            setUrl('Enter a valid url!!!!')
            document.getElementsByClassName('input')[0].style.border = '2px solid red';
            document.getElementsByClassName('input')[0].style.color = 'red';

        }
    }
    const generateQRCodei = () => {
        const dataURL = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACO0lEQVR42u3aS3LCMBAFQO5/6WSdFIj3pDGBVHsViLHVWkxpPrev/3TdaGhoaGhoaGhoaGhoaGhoTjW359eTp/68L3jAr+82V0BDQzOpWS/14YvX3917SoBL/0tDQzOuWS8rMKS4h8L0tzQ0NH+muedaR63gxEJDQ/NBmoqUnlhoaGjeRZO+My1wvHO2RkND01caL/7rxZVbGhqajTbjo7wlOOgEge3FXVwaGpogv0kzmC4ped4yifutNDQ005o+pm3uThUeJ7M1GhqaapVBYAuKHlWPpCuW0tDQzGiq3CONS9WhprqFhoZmXFNVGtPsp4+WVWpDQ0MzqanakVX1YnPH0kBJQ0Mzrql6kulB57jquRvTaGhoTmqdQVMz2InN7RjveNDQ0Jxokqc2o4/BfPV4/4aGhqaqclRViapqkvZCJ+c6aWho0vwmmGCoPgazESeHKRoamklNP9qQZjDr0ud5JZSGhmZQU62yn1aIy5dVdYWGhmZQkwadzQNR0EbZCLI0NDTTmqD3kUatNPatt/Iov6GhoZnRVLcEx5bAP9T3pKGh2dT05YogyaneMZTf0NDQnHQ8NvOgNI2pDjU0NDRXa3b7DWFIStulQZmEhobmQk1VvqzmG45PSueVWxoams38Jog3vasPijQ0NG+l2Rxy6KshQ31PGhqaSzTpRFMVFK/ueNDQ0BznN5ut0bQQsg6KNDQ0V2v6ZCMdbN4ch0zeQUNDM6P52IuGhoaGhoaGhoaGhoaGhqa5vgGukTio9e2pkAAAAABJRU5ErkJggg==`;
        setQrCode(dataURL);
    }
    const generateQRCodel = () => {
        const dataURL = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACQUlEQVR42u3aSW7DMBAEQP3/08k9sKRuLrIdlE42HDEsHgac5fj5T89BQ0NDQ0NDQ0NDQ0NDQ0Mzqznun9O/O13v+o0/76Y7oKGh2ag5DxwvthB8erXf9Gu6PxoamuWaIPy82u/pG8EqgzugoaF5h6YKRAGThobm2zRBmDpdJU13aGho3qtJf70WBjWQD8jWaGhoBmud+z69o3JLQ0PTtRkvaxvX26quRo90cWloaK4vJmmi0lurBshU35OGhqa/2QzmKP2URHUSNDQ0uzWD6U4akmbKnDQ0NI9o+j5Hn7ykM5YrbzY0NDR9TEuDTtUQHRy3nq/Z0NDQVJoqsAWtzCAjqnIeGhqajZpgVjmdjpzpffStEBoamkWaShiMLASLBoeVjFvT0NDs01ThLCiCpi3UKsmhoaFZqam6EX1tshqLmO/f0NDQzEw/DF5b0kZJkAfNVzloaGhm7gLB17ST0V+IqoInDQ3NSk2wYDXqVNVPgnsUDQ3NRk3fvwjU1RBVENhoaGg2agbD1HRdpDoiGhqa3Zp04iBIi6poWa1CQ0OzRxMMKN7ElvsaSFUciTMiGhqaNZo+fqX3lOvDCuasbjZEQ0OzRlN1LeI6ZDMl0Y9C09DQLNdUlY++U5pWL7oTo6GhWa0Jqo9pQtPvt49zNDQ0D2uCxkYVzqbTHRoamg/QpIXRfmwymb6moaFZrQl+Tf9nOhYRdFX2ZGs0NDQzGUda/kjD42DVk4aGZpHmax8aGhoaGhoaGhoaGhoaGprm+QVaws4SQbjcBwAAAABJRU5ErkJggg==`;
        setQrCode(dataURL);
    }
    const generateQRCodeg = () => {
        const dataURL = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAC5CAAAAABRxsGAAAAB1ElEQVR42u3cwa6CQAwFUP//p3nLlxgc7x0IZuCw0ojMYWFpO42vbdXjRU5OTk5OTk5OTk5OTn4X+ev78Xbe3nf/3+5dtF+NnJx8e1tu/Oneq/HbvSunq5GTk29BQPi4+sdYkF4vXY2cnHxipckAQ05OfklsSb9LTk5+kjz9dLxcWmRfV1mQky8vT3tc57z6RXeOnHxRebxVM4wZaRf6Fztc5OQryz/m032LanxfaUFNTk6exIwgmFTbucGTnpycPMnPxzdSzV9UQWzi6U9O/gR5396qNovSJ/1J3Tly8hvJ+3y6n5Dq1yUnJ9+CfDrYvw1y8aA1dlLtT05+S3maAkzm4kHNTU5OHo/2jy9dUasAM5u3kJPfXD6ukdO+1/i8Q2NS5OTkVfEcNJaD8JPOZJCTP1aezlqkk0/JBH/dECMnf6y8fx6n6DhwkJOTH9knCvLu9JRq0p+cnLxL1ycjRTq2MdGFJie/uTz93QeTi1VKcbzHRU7+GHm6gRTcdRVv0lqanJw8+UeVOJ9uMvrT5xXJyR8oDx781TDidbGFnPwx8mqvp98nIicnn83PgzX7VtYlFTQ5+fLyIz2uFN0X6OTk5Gsc5OTk5OTk5OTk5OTk5Csef6xujnFVSqB3AAAAAElFTkSuQmCC`;
        setQrCode(dataURL);
    }
    const toggle = () => {
        var x = document.getElementById("social");
        x.style.display = "none";
        var y = document.getElementById("generate");
        y.style.display = "block";
    }
    return (
        <>
            <h1 className="text-center">Create your own QR!</h1>
            <div className="container">
                <div className="card">
                    <img src={qrCode} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <div className="card-inner-body">
                            <div id='generate'>
                                <h5 className="card-title"><em style={{ fontSize: '18px' }}>"Paste your url here"</em></h5>
                                <input
                                    type="text"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            generateQRCode();
                                        }
                                    }}
                                    name="url"
                                    className="input"
                                    placeholder="https://www.google.com">
                                </input>
                                <button className="btn-12" onClick={generateQRCode}><span>Generate QR!</span></button>
                            </div>

                            <div className="social" id='social'>
                                <em>"Isn't it stunning&#128525;? Send me some&#128151; by connecting with me on social media."</em>
                                <div className='flex-container'>
                                    <button className="Btn btni" onClick={generateQRCodei}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px" y="0px" width="100" height="100"
                                            viewBox="0 0 48 48"
                                            className="svgIcon">
                                            <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
                                        </svg>
                                        <span className="text">Instagram</span>
                                    </button>
                                    <button className="Btn btnl" onClick={generateQRCodel}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" className="svgIcon">
                                            <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                                        </svg>
                                        <span className="text">LinkedIn</span>
                                    </button>
                                    <button className="Btn btng" onClick={generateQRCodeg}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24" className="svgIcon">
                                            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                        </svg>

                                        <span className="text">Github</span>
                                    </button>
                                </div>
                                <button className="ui-btn" onClick={toggle} ><span>Generate More!</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
