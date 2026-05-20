import React from 'react'
import { openingHours, socials } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Contact = () => {

    useGSAP(() => {
        const titleSplit = new SplitText('#contact h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut',
        })

        timeline
            .from(titleSplit.words, {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .from('#contact h3, #contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .to('#f-right-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            }).to('#f-left-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            }, '<')
    })

return (
    <footer id='contact'>
        <img src='/images/footer-left-leaf.png' alt='left-leaf' id='f-left-leaf' />
        <img src='/images/footer-right-leaf.png' alt='right-leaf' id='f-right-leaf' />

        <div className='content'>
            <h2>Where to Find us</h2>

            <div>
                <h3>Vist Our Bar</h3>
                <p>454 bedian Road Lahore , pakistan</p>
            </div>

            <div>
                <h3>Contact us</h3>
                <p>Phone: +92 328 7089485</p>
                <p>Email: Shehrazali360@gmail.com</p>
            </div>

            <div>
                <h3>Open Every Day</h3>
                {openingHours.map(({ day, time }) => (
                    <p key={day}>{day} : {time}</p>
                ))}
            </div>

            <div>
                <h3>Socails</h3>

                <div className='flex-center gap-5'>
                    {socials.map(({ name, icon, url }) => (
                        <a href={url} target='_blank' rel='noopener noreferrer' key={name} aria-label={name}>
                            <img src={icon} alt={name} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
)
}

export default Contact