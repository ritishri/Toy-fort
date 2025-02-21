import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faFolder } from "@fortawesome/free-solid-svg-icons";


function Contact(){
    return (
        <div className="contact ml-4">
            <nav className="navbar" aria-label="breadcrumb">
            <ol class="flex space-x-2 text-[13px] pb-5 text-gray-600">
                <li class="breadcrumb-item"><a href="/" className="hover:text-red-600">Home</a></li>
                <li class="breadcrumb-item text-gray-800">/  Our Contact Info</li>
            </ol>
            </nav>
            <h1 className="text-[26px] leading-[26px] mb-[30px] mt-0 block font-semibold text-[#222222]"> Our Contact Info</h1>
            <div className="text- font-normal text-[#222] overflow-x-hidden leading-6  pr-4 pl-4">
                <p> <FontAwesomeIcon icon={faPhone}/> PHONE: 8744055175</p>
                <p> <FontAwesomeIcon icon={faEnvelope}/> EMAIL: piyush@toyfort.in </p>
                <p> <FontAwesomeIcon icon={faMapMarkerAlt}/> ADDRESS: 99-E Kamla Nagar, Delhi-110007 </p>
            </div>
        </div> 
    );
}
export default Contact;
