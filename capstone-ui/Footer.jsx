import './index.css'

export default function Footer() {
    return (
        <div className="flex bg-slate-200 px-56 flex-col mb-5">
            <div className="flex">
                <div>
                    <div className="text-2xl mb-3 mt-5">Contact us</div>
                    <div className="font-bold">Email: nomadiahelp@gmail.com</div>
                    <div className="font-bold">Phone: 212-938-2934</div>
                    <div className="font-bold mb-5">Hours: Monday - Friday: 9:00 AM to 6:00 PM (GMT)
                    | Saturday: 10:00 AM to 3:00 PM (GMT) |
                    Sunday: Closed</div>
                </div>
                <div className="ml-7 mt-16">We value your feedback, inquiries, and interactions. 
                    Our dedicated team is here to assist you in every way possible. 
                    Whether you have a question, need assistance with our products 
                    or services, or simply want to share your thoughts, 
                    we're just a message away.
                </div>
            </div>
        </div>
    )
}