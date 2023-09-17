import React, { useState } from 'react'
import '../styles/card.css'
import qr from 'qr-image';

export default function Card() {
    const [url, setUrl] = useState('');// this is for url input, default value is empty.
    const [qrCode, setQrCode] = useState(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACP0lEQVR42u3aQY7CMBAEQP7/6d0bhxWYbmcSYFU5IRSIK4eRZ9q3n/903WhoaGhoaGhoaGhoaGhoaI5qbq+v7iH3Xzz9gz/fba6AhoZmUhOsbb3ApzdXn6r10dDQjGse1ZH1M6u1Pa1V6QpoaGg+ShPse9bLoqGh+V7No1vWTcn6TdDQ0HyKZnNmEfysGnpc0q3R0ND0k8aTP108uaWhodmIGV9vVqpVvjfFpaGhCfqbPrZc49Y392AaGppxTbq2FHxk6DF0+oGGhqavaYdLUhB+pvujF+MPGhqaGU1aR9aVZ/1/6Qyz2t7Q0NBMatLilIaf1Tw1eGM0NDRna3ajx3CfEmyX1q+XhobmRE11Bio4Hh3Uqj50paGhOVGzCalmG/2/7CYeNDQ0h3PPYOQQLKGKTDZfEQ0NzaSmP+6wGZKmmykaGpq3adIENJ1/Bv1NP+akoaGZ1GyGlcERiDTs2Bx10NDQTGqq1ibYnaQ9zyW5Jw0NTd/f9DFocKoh6Ii6VJSGhmZQExSstFEJqlb1tOOJBw0NTaqphh5rQ9o0pTsqGhqaSzRB8rB5UDodegz1NzQ0NJuzzmASmjwkfCdBALLR39DQ0AxOOTYPQ6QVbzNlpaGhOUeTVrLNRQdhRz93paGhGddUhxarQUh/5mGyW6OhoRnUVNPMansz2d/Q0NCcXNPSkpQmI8GboKGhuUTTp6JpCrJedDoJpaGhOVFzpNnotiNHSyENDc245msvGhoaGhoaGhoaGhoaGhqa5voF4eU4qI525xQAAAAASUVORK5CYII=`);
    //   below is main function for generating qr code.
    const generateQRCode = () => {
        const qr_png = qr.imageSync(url, { type: 'png' });
        const dataURL = `data:image/png;base64,${qr_png.toString('base64')}`;
        if (url.includes('https')) {
            document.getElementsByClassName('input')[0].style.border = '2px solid #8707ff';
            document.getElementsByClassName('input')[0].style.color = '#8707ff';
            var x = document.getElementById("generate");
            x.style.display = "none";
            var y = document.getElementById("social");
            y.style.display = "block";
            setQrCode(dataURL);
            document.getElementById("toast").style.display = "block";
        }
        else {
            setUrl('Enter a valid url!!!!')
            document.getElementsByClassName('input')[0].style.border = '2px solid red';
            document.getElementsByClassName('input')[0].style.color = 'red';

        }
    }
    // this toggle function is used to toggle between generate qr and social media buttons.
    const toggle = () => {
        var x = document.getElementById("social");
        x.style.display = "none";
        var y = document.getElementById("generate");
        y.style.display = "block";
        setUrl('');
        setQrCode(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACP0lEQVR42u3aQY7CMBAEQP7/6d0bhxWYbmcSYFU5IRSIK4eRZ9q3n/903WhoaGhoaGhoaGhoaGhoaI5qbq+v7iH3Xzz9gz/fba6AhoZmUhOsbb3ApzdXn6r10dDQjGse1ZH1M6u1Pa1V6QpoaGg+ShPse9bLoqGh+V7No1vWTcn6TdDQ0HyKZnNmEfysGnpc0q3R0ND0k8aTP108uaWhodmIGV9vVqpVvjfFpaGhCfqbPrZc49Y392AaGppxTbq2FHxk6DF0+oGGhqavaYdLUhB+pvujF+MPGhqaGU1aR9aVZ/1/6Qyz2t7Q0NBMatLilIaf1Tw1eGM0NDRna3ajx3CfEmyX1q+XhobmRE11Bio4Hh3Uqj50paGhOVGzCalmG/2/7CYeNDQ0h3PPYOQQLKGKTDZfEQ0NzaSmP+6wGZKmmykaGpq3adIENJ1/Bv1NP+akoaGZ1GyGlcERiDTs2Bx10NDQTGqq1ibYnaQ9zyW5Jw0NTd/f9DFocKoh6Ii6VJSGhmZQExSstFEJqlb1tOOJBw0NTaqphh5rQ9o0pTsqGhqaSzRB8rB5UDodegz1NzQ0NJuzzmASmjwkfCdBALLR39DQ0AxOOTYPQ6QVbzNlpaGhOUeTVrLNRQdhRz93paGhGddUhxarQUh/5mGyW6OhoRnUVNPMansz2d/Q0NCcXNPSkpQmI8GboKGhuUTTp6JpCrJedDoJpaGhOVFzpNnotiNHSyENDc245msvGhoaGhoaGhoaGhoaGhqa5voF4eU4qI525xQAAAAASUVORK5CYII=`)
    }
    return (
        <>
            <h1 className="text-center">Create your own QR!</h1>
            {/* have an issue button with modal */}
            <button
                id="button"
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    viewBox="0 0 20 20"
                    height={20}
                    fill="none"
                    className="svg-icon"
                >
                    <g strokeWidth="1.5" strokeLinecap="round" stroke="#5d41de">
                        <circle r="2.5" cy={10} cx={10} />
                        <path
                            fillRule="evenodd"
                            d="m8.39079 2.80235c.53842-1.51424 2.67991-1.51424 3.21831-.00001.3392.95358 1.4284 1.40477 2.3425.97027 1.4514-.68995 2.9657.82427 2.2758 2.27575-.4345.91407.0166 2.00334.9702 2.34248 1.5143.53842 1.5143 2.67996 0 3.21836-.9536.3391-1.4047 1.4284-.9702 2.3425.6899 1.4514-.8244 2.9656-2.2758 2.2757-.9141-.4345-2.0033.0167-2.3425.9703-.5384 1.5142-2.67989 1.5142-3.21831 0-.33914-.9536-1.4284-1.4048-2.34247-.9703-1.45148.6899-2.96571-.8243-2.27575-2.2757.43449-.9141-.01669-2.0034-.97028-2.3425-1.51422-.5384-1.51422-2.67994.00001-3.21836.95358-.33914 1.40476-1.42841.97027-2.34248-.68996-1.45148.82427-2.9657 2.27575-2.27575.91407.4345 2.00333-.01669 2.34247-.97026z"
                            clipRule="evenodd"
                        />
                    </g>
                </svg>
                <span className="lable">Have an Issue ?</span>
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form action="https://formsubmit.co/yasir.mansoori000@gmail.com" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Full Name</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" name="name" aria-describedby="emailHelp" placeholder='John Doe' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder='JohnDoe@mail.com' />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputurl" className="form-label">URL: </label>
                                    <input type="email" className="form-control" id="exampleInputurl" name="url" aria-describedby="emailHelp" placeholder='https://www.example.com' />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Report your issue</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" name='textarea' rows="3"></textarea>
                                </div>
                                <button type="submit" name="_next" value="https://qr-code-generetor.netlify.app"><span class="box">Submit</span></button>
                                <button type="button" id='close' data-bs-dismiss="modal"><span class="box">Close</span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* have an issue button with modal end */}

            <div className="container">
                {/* Card implementation  */}
                <div className="card" id='card'>
                    <img src={qrCode} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <div className="card-inner-body">
                            {/* this generate qr code for your url and you can download it and share it with your friends. */}
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
                                <p><em>"or in a meantime Scan the above QR to lookup my portfolio.&#128522;"</em></p>
                            </div>
                            {/* generate end */}
                            <div className="social" id='social'>
                                {/* download qr button  */}
                                <em>"Scan here or click on the button below to download QR and share it with your friends." </em>
                                <button className="dbtn" type="button">
                                    <strong><a href={qrCode} download >Download QR!</a></strong>
                                    <div id="container-stars">
                                        <div id="stars" />
                                    </div>
                                    <div id="glow">
                                        <div className="circle" />
                                        <div className="circle" />
                                    </div>
                                </button>
                                {/* download qr button end  */}
                                <h6>OR</h6>
                                <button className="ui-btn" onClick={toggle} ><span>Generate More!</span></button>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Card implementation end */}

                {/* Toast ADD-ON */}
                <div className="toast" id='toast' role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <h6 className="me-auto">QR Code Generator</h6>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            onClick={() => { document.getElementById("toast").style.display = "none"; }}
                        />
                    </div>
                    {/* social media ADD-ON */}
                    <div className="toast-body">
                        <em>"Isn't it stunning&#128525;? Send me some&#128151; by connecting with me on social media."</em>
                        <div className='flex-container'>
                            <button className="Btn btni" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px" y="0px" width="100" height="100"
                                    viewBox="0 0 48 48"
                                    className="svgIcon">
                                    <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
                                </svg>
                                <span className="text"><a href="https://www.instagram.com/mansoori_yasir786/" target="_blank">Instagram</a></span>
                            </button>
                            <button className="Btn btnl" >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" className="svgIcon">
                                    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                                </svg>
                                <span className="text"><a href="https://www.linkedin.com/in/yasir-mansoori/" target="_blank">LinkedIn</a></span>
                            </button>
                            <button className="Btn btng" >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24" className="svgIcon">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                </svg>
                                <span className="text"><a href="https://github.com/yasirmansoori" target="_blank">Github</a></span>
                            </button>
                        </div>
                    </div>
                    {/* social media ADD-ON end*/}
                </div>
                {/* Toast ADD-ON end*/}
            </div>
        </>
    )
}
